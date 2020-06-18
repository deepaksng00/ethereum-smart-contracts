import React, { Component } from "react";
import { Form, Button, Message, Checkbox, Input } from "semantic-ui-react";
import Campaign from "../../../ethereum/campaign";
import web3 from "../../../ethereum/web3";
import { Link, Router } from "../../../routes";
import Layout from "../../../components/layout";

class RequestNew extends Component {
    state = {
        value: "",
        description: "",
        recipient: "",
        errorMessage: "",
        loading: false
    }

    static async getInitialProps(props) {
        const { address } = props.query;

        return { address };
    }

    onSubmit = async event => {
        event.preventDefault();

        const campaign = Campaign(this.props.address);
        const { description, value, recipient } = this.state;

        this.setState({ loading: true, errorMessage: "" });
        try {
            const accounts = await web3.eth.getAccounts(); 
            await campaign.methods
                .createRequest(description, web3.utils.toWei(value, "ether"), recipient)
                .send({
                    from: accounts[0]
                });
            
            this.setState({ loading: false });
            Router.pushRoute(`/campaigns/${ this.props.address }/requests`)
        } catch (err) {
            this.setState({ errorMessage: err.message, loading: false });
        }
    }

    render() {
        return (
            <Layout>
                <Link route = { `/campaigns/${ this.props.address }/requests` }>
                    <a>
                        <Button primary>Back</Button>
                    </a>
                </Link>
                <h3>Create a request</h3>
                <Form onSubmit = { this.onSubmit } error = { !!this.state.errorMessage }>
                    <Form.Field>
                        <label>Description</label>
                        <Input
                            value = { this.state.description }
                            onChange = { event => this.setState({ description: event.target.value })}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Value (ETH)</label>
                        <Input
                            value = { this.state.value }
                            onChange = { event => this.setState({ value: event.target.value })} 
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Recipient</label>
                        <Input 
                            value = { this.state.recipient}
                            onChange = { event => this.setState({ recipient: event.target.value })}        
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label = "I agree to the Terms and Conditions" />
                    </Form.Field>
                    <Message
                        error
                        header = "Error!"
                        content = { this.state.errorMessage }
                        icon = "attention"
                    />
                    <Button loading = { this.state.loading } primary type = "submit" >Create</Button>
                </Form>
            </Layout>
        );
    }
}

export default RequestNew;
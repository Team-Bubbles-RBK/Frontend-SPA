import React from "react";
import NotAuth from "../../layouts/notAuth";
import {} from "reactstrap";
// import "./login.css";
import Link from "next/link";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            validated: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        this.setState({
            validated: true
        })
    };

    render() {
        return (
            <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                <Form.Row>
                    {/*<Form.Group as={Col} md="4" controlId="validationCustom01">*/}
                    {/*    <Form.Label>First name</Form.Label>*/}
                    {/*    <Form.Control*/}
                    {/*        required*/}
                    {/*        type="text"*/}
                    {/*        placeholder="First name"*/}
                    {/*        defaultValue="Mark"*/}
                    {/*    />*/}
                    {/*    /!*<Form.Control.Feedback>Looks good!</Form.Control.Feedback>*!/*/}
                    {/*</Form.Group>*/}
                </Form.Row>
            </Form>
        );
    }
}

export default Login;

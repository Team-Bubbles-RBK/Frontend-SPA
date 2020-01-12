import React, {Component} from 'react';
import NotAuth from "../../layouts/notAuth";
import {Form, Col, Row, Button} from "react-bootstrap";
import {HttpRequest} from "../../helpers/http.helper";
import Router from "next/router";
import Head from "next/head";
import AlertDismissibleExample from "../../components/ui/Alert";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validated: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const form = event.currentTarget;

        event.stopPropagation();
        event.preventDefault();

        if (form.checkValidity() === true) {
            // Create object from Form Data
            const data = Object.fromEntries(new FormData(form));

            // Make HTTP request
            HttpRequest('POST', '/users/sign-in', data)
                .then(({data}) => {
                    // Set the token for the user
                    if (typeof window !== 'undefined') {
                        localStorage.setItem('token', data);
                    }

                    let message = 'Welcome back';
                    let type = 'info';
                    let heading = 'Success';

                    if (!data) {
                        message = 'Invalid username/password.';
                        type = 'warning';
                        heading = 'Something is not right';
                    }
                    // Show alert component
                    this.setState({
                        showAlert: true,
                        messageAlert: message,
                        typeAlert: type,
                        headerAlert: heading,
                    });

                    setTimeout(() => {
                        this.setState({
                            showAlert: false
                        });
                        // Router.push('/user/login');
                    }, 5999);
                    // End of alert
                })
                .catch(err => {
                    this.setState({
                        showAlert: true,
                        messageAlert: 'An error occurred. Try again later.',
                        typeAlert: 'danger',
                        headerAlert: 'Error'
                    });

                    setTimeout(() => {
                        this.setState({
                            showAlert: false
                        });
                    }, 5999);
                });
        }

        this.setState({
            validated: true
        });
    };

    render() {
        return (
            <NotAuth>
                <Head>
                    <title>Bubbles | Sign in</title>
                </Head>
                {this.state.showAlert ?
                    <AlertDismissibleExample heading={this.state.headerAlert} msg={this.state.messageAlert}
                                             type={this.state.typeAlert}/> : ''}
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className="display-3 text-center">
                                Login
                            </h1>
                        </div>
                    </div>
                    <div className="row my-5 ">
                        <div className="col-10 mx-auto">
                            <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control
                                            required
                                            type="email"
                                            name={"username"}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a valid username.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            required
                                            type="password"
                                            minLength={8}
                                            name={"password"}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a valid password.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Form.Row>
                                <Button type="submit" variant={"info"} block>Login</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </NotAuth>
        );
    }
}

export default Login;
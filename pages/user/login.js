import React, {Component} from 'react';
import NotAuth from "../../layouts/notAuth";
import {Form, Col, Row, Button} from "react-bootstrap";

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
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        this.setState({
            validated: true
        });
    };

    render() {
        return (
            <NotAuth>
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
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            required
                                            type="password"
                                            minLength={8}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                </Form.Row>
                                <Button type="submit">Submit form</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </NotAuth>
        );
    }
}

export default Login;
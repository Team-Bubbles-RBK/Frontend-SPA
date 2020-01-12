import React from "react";
import Head from "next/head";
import NotAuth from "../../layouts/notAuth";
import {Form, Col, Row, Button} from "react-bootstrap";
import {HttpRequest} from '../../helpers/http.helper';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: null,
            last_name: null,
            username: null,
            hash: null,
            gender: null,
            dob: null,
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
            console.log({data});
            // Make HTTP request
            HttpRequest('POST', '/users/sign-up', data)
                .then(({data}) => {
                    console.log(data);
                })
                .catch(err => {
                    console.log(err)
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
                    <title>Bubbles | Sign Up</title>
                </Head>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className="display-3 text-center">
                                Sign Up
                            </h1>
                        </div>
                    </div>
                    <div className="row my-5 ">
                        <div className="col-10 mx-auto">
                            <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            name={"first_name"}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            name={"last_name"}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control
                                            required
                                            type="email"
                                            name={"username"}
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
                                            name={"hash"}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Date of Birth</Form.Label>
                                        <Form.Control
                                            required
                                            type="date"
                                            name={"dob"}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Row}>
                                        <Col>
                                            <Form.Check
                                                type="radio"
                                                label="Male"
                                                name="gender"
                                                value={"Male"}
                                                required
                                            />
                                        </Col>
                                        <Col>
                                            <Form.Check
                                                type="radio"
                                                label="Female"
                                                name="gender"
                                                value={"Female"}
                                                required
                                            />
                                        </Col>
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

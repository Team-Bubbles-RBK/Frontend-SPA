import React from "react";
import NotAuth from "../../layouts/notAuth";
import {Form, Col, Row, Button} from "react-bootstrap";

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
                                Sign Up
                            </h1>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-6 mx-auto">
                            <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
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
                                            min={"8"}
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
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Row}>
                                        <Col>
                                            <Form.Label>Gender</Form.Label>
                                        </Col>
                                        <Col>
                                            <Form.Check
                                                type="radio"
                                                label="Male"
                                                name="gender"
                                                required
                                            />
                                        </Col>
                                        <Col>
                                            <Form.Check
                                                type="radio"
                                                label="Female"
                                                name="gender"
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

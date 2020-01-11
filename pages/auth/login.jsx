import React from "react";
import Nav from "../../components/nav";
import NotAuth from "../../layouts/notAuth";
import $ from "jquery";

import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import "./login.css";
import Link from "next/link";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      bool: false
    };
    this.submit = this.submit.bind(this);
  }

  handleChange(e) {
    console.log("handleChange");

    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submit() {
    var email = this.state.email;
    var password = this.state.password;

    if (
      email === "" ||
      password === "" ||
      !email.includes("@") ||
      password.length < 6
    ) {
      alert("Inputs must be filled out correctly");
    } else {
      return (this.state.bool = true);
    }

    console.log("submit");
    const form = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(form);
  }
  render() {
    return (
      <div>
        <NotAuth>
          <Container>
            <Row className="justify-content-md-center login">
              <Col md="4" className="App my-auto ">
                <h2>Sign In</h2>
                <Form className="form">
                  <FormGroup>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="myemail@email.com"
                      value={this.state.email}
                      onChange={e => this.handleChange(e)}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="********"
                      value={this.state.password}
                      onChange={e => this.handleChange(e)}
                      required
                    />
                  </FormGroup>
                  {this.state.bool === true ? (
                    <Link href="../bubbleCard">
                      <Button
                        id="submit"
                        type="button"
                        className="btn btn-outline-info   btn-block"
                        onClick={this.submit}
                      >
                        Submit
                      </Button>
                    </Link>
                  ) : (
                    <Link href="">
                      <Button
                        id="submit"
                        type="button"
                        className="btn btn-outline-info   btn-block"
                        onClick={this.submit}
                      >
                        Submit
                      </Button>
                    </Link>
                  )}
                </Form>
                <Link href="/auth/register">
                  <a>
                    <small>sign Up</small>
                  </a>
                </Link>
                <Link href="/auth/resetPass">
                  <a className="text-left text-sm-left ml-2">
                    <small>reset password</small>
                  </a>
                </Link>
              </Col>
            </Row>
          </Container>
        </NotAuth>
      </div>
    );
  }
}

export default Login;

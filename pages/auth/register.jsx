import React from "react";
import Nav from "../../components/nav";
import NotAuth from "../../layouts/notAuth";
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
      firstName: "",
      lastName: "",
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
    var firstName = this.state.firstName;
    var lastName = this.state.lastName;
    var email = this.state.email;
    var password = this.state.password;

    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === "" ||
      !email.includes("@") ||
      password.length < 6
    ) {
      alert("Inputs must be filled out coorectly");
    } else {
      return (this.state.bool = true);
    }

    console.log("submit");
    const form = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
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
              <Col md="8" className="App my-auto ">
                <h2>Sign UP</h2>
                <Form className="form">
                  <FormGroup>
                    <Label for="examplePassword">first Name</Label>
                    <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      onChange={e => this.handleChange(e)}
                      placeholder="firstName"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="examplePassword">last Name</Label>
                    <Input
                      type="text"
                      name="lastName"
                      id="lastName"
                      onChange={e => this.handleChange(e)}
                      placeholder="last name"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="exampleEmail">E-Mail</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      onChange={e => this.handleChange(e)}
                      placeholder="user@gmail.com"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="examplePassword"
                      onChange={e => this.handleChange(e)}
                      placeholder="********"
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
                <Link href="/auth/login">
                  <a>
                    <small>sign In</small>
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

import React from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Row,
  Col,
  Card,
  Container,
  Label,
  Table,
  Input,
  Button,
  Form
} from "reactstrap";
import Footer from "../components/footer";
import Data from "../dummyData.js";
import Link from "next/link";
import Auth from "../layouts/Auth";
import Axios from "axios";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
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
      !email.includes("@")
    ) {
      alert("Inputs must be filled out coorectly");
    } else {
      // Axios.post("/profile", (method = "POST"));

      console.log("submit");
      const form = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        gender: this.state.gender,
        password: this.state.password
      };
      console.log(form);
    }
  }
  render() {
    return (
      <Auth>
        <div
          style={{
            // backgroundColor: "red",
            borderRadius: "10%",
            width: "50%",
            textAlign: "center",
            marginLeft: "25%"
          }}
        >
          {Data.map((elem, i) => {
            console.log(elem.user.id);

            if (elem.user.id === "2") {
              return (
                <Form
                  style={{
                    padding: "30px",
                    width: "50%",
                    marginLeft: "25%",
                    textAlign: "center",
                    color: "white"
                  }}
                  key={i}
                >
                  <Table style={{ textAlign: "center" }}>
                    <tbody>
                      <tr>
                        <td>First Name:</td>
                        <td>
                          <Input
                            type="text"
                            name="firstName"
                            id="firstName"
                            onChange={e => this.handleChange(e)}
                            placeholder={elem.user.firstName}
                          ></Input>
                          <br />
                        </td>
                      </tr>
                      <tr>
                        <td>Last Name:</td>
                        <td>
                          <Input
                            type="text"
                            name="lastName"
                            id="lastName"
                            onChange={e => this.handleChange(e)}
                            placeholder={elem.user.lastName}
                          ></Input>
                          <br />
                        </td>
                      </tr>
                      <tr>
                        <td>E-mail:</td>
                        <td>
                          <Input
                            type="email"
                            name="email"
                            id="email"
                            onChange={e => this.handleChange(e)}
                            placeholder={elem.user.email}
                          ></Input>
                          <br />
                        </td>
                      </tr>
                      <tr>
                        <td>Gender:</td>
                        <td>
                          <Input
                            type="text"
                            name="gender"
                            id="gender"
                            onChange={e => this.handleChange(e)}
                            placeholder={elem.user.gender}
                          ></Input>
                          <br />
                        </td>
                      </tr>
                      <tr>
                        <td>Date of Birth:</td>
                        <td>
                          <Input
                            type="text"
                            name="dob"
                            id="dob"
                            onChange={e => this.handleChange(e)}
                            placeholder={elem.user.dateOfBirth}
                          ></Input>
                          <br />
                        </td>
                      </tr>
                      <tr>
                        <td>Bubbles:</td>
                        <td>
                          <Input
                            type="text"
                            name="bubbles"
                            id="bubbles"
                            onChange={e => this.handleChange(e)}
                            placeholder={elem.user.bubbles.map((b, i) => {
                              return b.bubbleName;
                            })}
                          ></Input>
                          <br />
                        </td>
                      </tr>
                      <tr>
                        <td>Password:</td>
                        <td>
                          <Input
                            type="password"
                            name="password"
                            id="examplePassword"
                            onChange={e => this.handleChange(e)}
                            placeholder="write your new password"
                          ></Input>
                          <br />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <Button
                    id="submit"
                    type="button"
                    className="btn btn-outline-info   btn-block"
                    onClick={this.submit}
                  >
                    save changes
                  </Button>
                </Form>
              );
            }
          })}
        </div>
      </Auth>
    );
  }
}

export default Profile;

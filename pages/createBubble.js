import React from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import {  Button, Form } from "react-bootstrap";
import Link from "next/link";
import Auth from "../layouts/Auth";
import Axios from "axios";

class CreateBubble extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bubbleName: ""
    };
    this.submit = this.submit.bind(this);
  }

  handleChange(e) {
    console.log(e.value);

    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submit() {
    var bubbleName = this.state.bubbleName;

    if (bubbleName === "") {
      console.log(bubbleName);
      alert("You Need to Choose a Name");
    } else {
      // Axios.post(" ", (method = "POST"));

      console.log("submit");
      const form = {
        bubbleName: this.state.bubbleName
      };
      console.log(form);
    }
  }

  render() {
    return (
      <Auth>
        <div
          id="bubblesCreation"
          style={{
            marginLeft: "25%",
            width: "50%",
            borderRadius: "40%",
            paddingBottom: "15%",
            paddingTop: "5%",
            textAlign: "center",
            backgroundColor: "#4d4957",
            color: "white"
          }}
        >
          Create Your Own Bubble
          <Form
            style={{
              textAlign: "center",
              marginTop: "20%"
            }}
          >
            <label>Bubble's Name:</label>
            <input
              style={{ width: "50%", marginLeft: "25%" }}
              type="text"
              name="bubble'sName"
              id="bubbleName"
              onChange={e => this.handleChange(e)}
            />
            <br />
            <label>Add Members:</label>
            <Button
              style={{ width: "50%", marginLeft: "25%" }}
              id="submit"
              type="button"
              className="btn btn-outline-info   btn-block"
              onClick={this.submit}
            >
              generate link
            </Button>
          </Form>
        </div>
      </Auth>
    );
  }
}
export default CreateBubble;

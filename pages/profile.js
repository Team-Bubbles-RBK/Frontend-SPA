import React from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card, Container, Label } from "react-bootstrap";
import Footer from "../components/footer";
import Data from "../dummyData.js";
import Link from "next/link";
import Auth from "../layouts/Auth";

const Profile = () => (
  <Auth>
    <div
      style={{
        backgroundColor: "red",
        borderRadius: "10%",
        width: "50%",
        textAlign: "center",
        marginLeft: "25%"
      }}
    >
      {Data.map((elem, i) => {
        console.log(elem.user.id);

        if (elem.user.id === "1") {
          return (
            <div
              style={{
                // backgroundColor: "green",
                padding: "30px",
                width: "30%",
                marginLeft: "35%",
                textAlign: "center",
                color: "white"
              }}
              key={i}
            >
              <div>{elem.user.firstName}</div>
              <br />

              <div>{elem.user.lastName}</div>
              <br />

              <div>{elem.user.gender}</div>
              <br />

              <div>{elem.user.dateOfBirth}</div>
            </div>
          );
        }
      })}
    </div>
  </Auth>
);

export default Profile;

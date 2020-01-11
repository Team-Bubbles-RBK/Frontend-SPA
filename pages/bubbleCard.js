import React from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card, Container, Label } from "react-bootstrap";
import Nav from "../components/navForUser";
import Footer from "../components/footer";
import Data from "../dummyData.js";
import Axios from "axios";
import Link from "next/link";

const BubbleCard = () => (
  <div>
    <Head>
      <title>bubbles Card</title>
    </Head>
    <Nav />
    <h2
      style={{
        textAlign: "center"
      }}
    >
      bubble card page
    </h2>
    <Container > 
      <Row>
        {Data.map((elem, i) => {
          console.log(elem.user.id);
          if (elem.user.id === "2") {
            if (elem.user.bubbles.length > 1) {
              return (
                <Col lg="8" key={i}>
                  <div
                    style={{
                      margin: "20px"
                    }}
                  >
                    {elem.user.bubbles.map((bubble, i) => {
                      return (
                        <Link href="/chat" key={i}>
                          <Card
                            className="bubbleCard"
                            style={{
                              cursor: "pointer",
                              border: "solid",
                              borderRadius: "40%",
                              marginBottom: "10%",
                              paddingBottom: "70%",
                              textAlign: "center",
                              backgroundImage:
                                "url(http://getwallpapers.com/wallpaper/full/0/e/7/476297.jpg)",
                              color: "white",
                              marginLeft: "30%"
                            }}
                          >
                            {bubble.bubbleName}
                          </Card>
                        </Link>
                      );
                    })}
                  </div>
                </Col>
              );
            } else {
              return (
                <div
                  id="bubblesCreation"
                  style={{
                    width: "70%",
                    borderRadius: "40%",
                    paddingBottom: "30%",
                    textAlign: "center",
                    backgroundColor: "red",
                    color: "white"
                  }}
                >
                  Create Your Own Bubble
                  <form
                    style={{
                      textAlign: "center",
                      marginTop: "30%",
                      backgroundColor: "green"
                    }}
                  >
                    <label>Bubble's Name:</label>
                    <input></input>
                    <br />
                    <label>Add Members:</label>
                    <button>generate link</button>
                  </form>
                </div>
              );
            }
          }
        })}
      </Row>
    </Container>
    <Footer />
  </div>
);

// BubbleCard.getInitialProps = async function() {
//   var res = await axios.get("/bubbleCard");
//   const datum = res.data;

//   // props.userId sent from auth
//   const result = datum.filter(dat => dat.id === props.userId);

//   return {
//     data: result
//   };
// };

export default BubbleCard;

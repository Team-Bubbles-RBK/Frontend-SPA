import React from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card, Container } from "react-bootstrap";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Data from "../dummyData.js";
import Axios from "axios";

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
    <Container>
      <Row>
        {Data.map((elem, i) => {
          if (elem.user.id === "1")
            return (
              <Col lg="4">
                <div
                  key={i}
                  style={{
                    margin: "20px"
                  }}
                >
                  {elem.user.bubbles.map((bubble, i) => {
                    return (
                      <a href="">
                        <Card
                          className="bubbleCard"
                          key={i}
                          style={{
                            border: "solid",
                            borderRadius: "40%",
                            marginBottom: "30%",
                            paddingBottom: "70%",
                            textAlign: "center",
                            backgroundImage:
                              "url(http://getwallpapers.com/wallpaper/full/0/e/7/476297.jpg)",
                            color: "white"
                          }}
                        >
                          {bubble.bubbleName}
                        </Card>
                      </a>
                    );
                  })}
                </div>
              </Col>
            );
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

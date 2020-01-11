import React from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card, Container, Label } from "react-bootstrap";
import Nav from "../components/navForUser";
import Footer from "../components/footer";
import Data from "../dummyData.js";
import Axios from "axios";
import Link from "next/link";
import CreateBubbleIcon from "../components/createBubbleIcon";
import CreateBubble from "./createBubble";

const BubbleCard = () => (
  <div>
    <Head>
      <title>bubbles Card</title>
    </Head>
    <Nav />
    {/* <Link href="/createBubble"> */}
    <h2
      style={{
        textAlign: "center"
      }}
    >
      bubble card page
    </h2>
    {Data.map((elem, i) => {
      console.log(elem.user.id);
      if (elem.user.id === "2") {
        if (elem.user.bubbles.length > 1) {
          return (
            <div
              style={{
                padding: "3%",
                display: "flex",
                textAlign: "center",
                backgroundColor: "#4d4957",
                width: "90%",
                height: "100%",
                borderRadius: "30%",
                marginLeft: "5%"
              }}
            >
              <CreateBubbleIcon />
              {elem.user.bubbles.map((bubble, i) => {
                return (
                  <Link href="/chat" key={i}>
                    <Card
                      className="bubbleCard"
                      style={{
                        padding: "5%",
                        textAlign: "center",
                        width: "50%",
                        cursor: "pointer",
                        border: "solid",
                        borderRadius: "40%",
                        marginTop: "10%",
                        marginBottom: "10%",
                        marginLeft: "3%",
                        marginRight: "3%",
                        paddingBottom: "20%",
                        backgroundImage:
                          "url(http://getwallpapers.com/wallpaper/full/0/e/7/476297.jpg)",
                        color: "white"
                        // marginLeft: "35%"
                      }}
                    >
                      {bubble.bubbleName}
                    </Card>
                  </Link>
                );
              })}
            </div>
          );
        } else {
          return <CreateBubble />;
        }
      }
    })}
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

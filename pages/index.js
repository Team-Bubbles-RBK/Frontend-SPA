import React from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/footer";
import Link from "next/link";

const Home = () => (
    <div>
        <Head>
            <title>BUBBLES</title>
        </Head>

        <div className="hero">
            <h1 className="title">Welcome to BUBBLES</h1>
            <p className="description">
                <Link href="auth/login">
                    <code style={{cursor: "pointer"}}>login</code>
                </Link>
                or
                <Link href="auth/register">
                    <code style={{cursor: "pointer"}}>signUp</code>
                </Link>
                to create your own Bubbles
            </p>
            <Link href="bubbleCard">
                <code style={{cursor: "pointer"}}>bc</code>
            </Link>
        </div>
        <Footer/>

        <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
    `}
        </style>
    </div>
);

export default Home;
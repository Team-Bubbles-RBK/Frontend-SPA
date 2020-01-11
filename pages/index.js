import React from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/footer";
import Link from "next/link";
import Auth from "../layouts/Auth"

const Home = () => (
  <Auth>
  <div>
    <Head>
      <title>BUBBLES</title>
    </Head>
    <div className="hero">
      <h1 className="title">Welcome to BUBBLES</h1>
      <p className="description">
        <Link href="auth/login">
          <code style={{ cursor: "pointer" }}>login</code>
        </Link>
        or
        <Link href="auth/register">
          <code style={{ cursor: "pointer" }}>signUp</code>
        </Link>
        to create your own Bubbles
      </p>
    </div>
    <div id="aboutD">
      <h1> About </h1>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
    </div>
    <br />
    <br />
    <Footer />
    <style jsx>
      {`
        #mainD {
          background-image: url("https://data.whicdn.com/images/277013600/original.gif");
          background-repeat: no-repeat;
          width: 100%;
          background-position: center;
          background-size: cover;
          height: 700px;
        }
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 100px;
          line-height: 1.15;
          font-size: 48px;
          color: white;
        }
        .title,
        .description {
          text-align: center;
          color: white;
        }
        #aboutD {
          text-align: center;
          color: black;
          margin-top: 600px;
          margin-left: 10%;
          margin-right: 10%;
        }
      `}
    </style>
  </div>
  </Auth>
);

export default Home;

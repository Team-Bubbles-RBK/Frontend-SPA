import React from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/footer";
import Link from "next/link";
import Layout from "../layouts/notAuth";
import {Jumbotron, Button, Badge} from 'react-bootstrap';
import '../public/style.css';

const Home = () => (
    <Layout>
        <div>
            <Head>
                <title>Bubbles | Safe chatting environment</title>
            </Head>
            {/*<Jumbotron>*/}
            {/*    <h1 className={'display-4'}>Welcome to Bubbles</h1>*/}
            {/*    <p>*/}
            {/*        This is a simple hero unit, a simple jumbotron-style component for calling*/}
            {/*        extra attention to featured content or information.*/}
            {/*    </p>*/}
            {/*    <p>*/}
            {/*        <Link href="auth/login">*/}
            {/*            <Badge variant={"primary"} style={{cursor: "pointer"}}>Login </Badge>*/}
            {/*        </Link>*/}
            {/*        <span> or </span>*/}
            {/*        <Link href="auth/register">*/}
            {/*            <Badge variant="warning" style={{cursor: "pointer"}}>Sign Up </Badge>*/}
            {/*        </Link>*/}
            {/*        <span> to create your own <span className={"text-danger"}>Bubble</span>.</span>*/}
            {/*    </p>*/}
            {/*</Jumbotron>*/}
            <div className="container-fluid home-main">
                <h2 className={"display-3"}>Welcome to Bubbles <span className="blinker">॰°ₒ৹๐</span></h2>
                <Link href="auth/register">
                    <button type="button" className="btn btn-default">Sign Up</button>
                </Link>
                <Link href="auth/register">
                    <button type="button" className="btn btn-outline-warning">Login</button>
                </Link>
                <div className="text-center mt-3">
                    <p className={"text-white display-4"}>Create your own <span className={"text-info"}>Bubble</span>.
                    </p>
                </div>
            </div>
            <div className="container-fluid home-content1">
                <div className="row">
                    <div className="col-md-6 content1-left">
                        <h3>Why to use Bubbles <span className="blinker">?</span></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ex inventore iure magni
                            maxime necessitatibus possimus quibusdam quis repellendus sed tempore, vitae voluptas
                            voluptatem. Aliquam autem earum expedita laboriosam nesciunt.</p>
                    </div>
                    <div className="col-md-6 content1-right">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci est impedit iure molestiae
                            non placeat quam saepe ut veniam voluptatum. Alias cumque iure modi mollitia nostrum sint
                            tempora, voluptas voluptate.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid home-content2">
                <p><span>News</span> and <span>announcements</span> for all things <span>Bootstrap</span>, including
                    new <span>releases</span> and <span>Bootstrap Themes</span>.</p>
            </div>
            <style jsx>
                {`
      
      `}
            </style>
        </div>
        < /Layout>
            );

            export default Home;

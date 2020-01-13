import React, {Component} from 'react';
import {Button, Card, Jumbotron, Container} from "react-bootstrap";
import CreateBubble from "../../components/createBubble";
import Bubble from "../../components/bubble";
import Head from "next/head";
import Auth from "../../layouts/Auth";
import {HttpRequest} from "../../helpers/http.helper";

//get request for data
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            bubbles: []
        };
    }

    componentDidMount() {
        // Validate if user have a valid token
        let token = typeof window === 'undefined' ? '' : localStorage.getItem('token');
        HttpRequest('POST', '/users/check', {token})
            .then(({data}) => {
                // User is authenticated and there are no problems
            })
            .catch(err => {
                Router.push('/user/login');
            });

        HttpRequest('GET', '/users/profile', {token})
            .then(({data}) => {
                console.log(data);
                this.setState({
                    username: (data.first_name + ' ' + data.last_name),
                    bubbles: data.bubbles
                });
            })
            .catch(err => {
                console.log(err);
            })

    }

    render() {
        let bubbleArray = this.state.bubbles.map((bubble, i) => {
            return (
                <div className="col-lg-4 my-4" key={i}>
                    <Bubble name={bubble.name} bubbleId={bubble.perm_link} createdAt={bubble.createdAt}/>
                </div>
            )
        });

        return (
            <div>
                <Auth>
                    <Head>
                        <title>Bubbles | Home</title>
                        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                              rel="stylesheet"/>
                    </Head>
                    <Jumbotron fluid className={"mb-0"}>
                        <h1 className="display-4 text-center">
                            {this.state.username}
                        </h1>
                        <Container>
                            <CreateBubble/>
                            <div className="row">
                                {bubbleArray}
                            </div>
                        </Container>
                    </Jumbotron>
                </Auth>
            </div>
        );
    }
}

export default Index;


///all bubble....bubble name...created_at....button with link

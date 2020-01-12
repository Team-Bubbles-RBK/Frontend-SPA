import Link from "next/link";
import React from "react";
import {HttpRequest} from "../helpers/http.helper";
import Router from "next/router";

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
        this.logOut = this.logOut.bind(this);
    }

    componentDidMount() {
        // Validate if user have a valid token
        let token = typeof window === 'undefined' ? '' : localStorage.getItem('token');
        HttpRequest('POST', '/users/check', {token})
            .then(({data}) => {
                // User is authenticated and there are no problems
                console.log(data)
                this.state.isLoggedIn = true;
            })
            .catch(err => {
                console.log({err});
                this.state.isLoggedIn = false;
                // Router.push('/user/login');
            });
    }

    logOut() {
        localStorage.setItem('token', '');
        Router.push('/');
    }

    render() {
        return (
            <footer className="section footer-classic context-dark bg-image footer">
                <div className="pt-4 container">
                    <div className="row row-30">
                        <div className="col-md-4 col-xl-5">
                            <div className="pr-xl-4">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores at,
                                    beatae cum
                                    debitis error excepturi nostrum, perspiciatis praesentium quae quisquam repellendus,
                                    similique sint veritatis voluptatibus! Debitis dolores inventore nesciunt?
                                </p>
                                <p className="rights">
                                    © 2020
                                    Bubbles. <br/>All Rights Reserved.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h5>Contacts</h5>
                            <div className="contact-list">
                                <dt>Address:</dt>
                                <dd>798 South Park Avenue, Jaipur, Raj</dd>
                            </div>
                            <div className="contact-list">
                                <dt>email:</dt>
                                <dd><a href="mailto:#">info@bubble.it</a></dd>
                            </div>
                        </div>
                        <div className="col-md-4 col-xl-3">
                            <h5>Links</h5>
                            <ul className="nav-list">
                                <li><Link href="/"><a>Home</a></Link></li>
                                {!this.state.isLoggedIn && <li><Link href="/user/login"><a>Login</a></Link></li>}
                                {!this.state.isLoggedIn && <li><Link href="/user/register"><a>Sign Up</a></Link></li>}
                                {this.state.isLoggedIn &&
                                <li><Link href={"/chat"}><a style={{'cursor': 'pointer'}}>Chat</a></Link></li>}
                                {this.state.isLoggedIn &&
                                <li><a style={{'cursor': 'pointer'}} onClick={this.logOut}>Logout</a></li>}
                            </ul>
                        </div>
                    </div>
                </div>
                <style jsx>
                    {`
             .context-dark,
             .bg-gray-dark, 
             .bg-primary {
                color: rgba(255, 255, 255, 0.8);
               }

                .footer-classic a, .footer-classic a:focus, .footer-classic a:active {
                    color: #ffffff;
                }
                .nav-list li {
                    padding-top: 5px;
                    padding-bottom: 5px;
                }
                
                .nav-list li a:hover:before {
                    margin-left: 0;
                    opacity: 1;
                    visibility: visible;
                }
                
                ul, ol {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                
                .nav-list li a:before {
                    content: ">";
                    font: 400 21px/1 "Material Design Icons";
                    color: #4d6de6;
                    display: inline-block;
                    vertical-align: baseline;
                    margin-left: -28px;
                    margin-right: 7px;
                    opacity: 0;
                    visibility: hidden;
                    transition: .22s ease;
                }`
                    }
                </style>
            </footer>
        )
    }
}

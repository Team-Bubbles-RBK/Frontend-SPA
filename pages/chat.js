import React from 'react';
import '../public/chat.style.css';
import Auth from "../layouts/Auth";
import Head from "next/head";
import {HttpRequest} from "../helpers/http.helper";
import Router from "next/router";
import io from 'socket.io-client';
import {BubbleRight} from '../components/chat/bubble.right';
import {BubbleLeft} from '../components/chat/bubble.left';
class Chat extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Auth>
                    <Head>
                        <title>Bubbles | {/*this.props.bubble.name*/}</title>
                        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                              rel="stylesheet"/>
                    </Head>
                    <div className="container-chat">
                        <div className="row no-gutters">
                            <div className="col-md-4 border-right">
                                <div className="settings-tray">
                                    <img className="profile-image"
                                         src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/filip.jpg"
                                         alt="Profile img"/>
                                    <span className="settings-tray--right">
			<i className="material-icons">cached</i>
			<i className="material-icons">message</i>
			<i className="material-icons">menu</i>
		  </span>
                                </div>
                                <div className="search-box">
                                    <div className="input-wrapper">
                                        <i className="material-icons">search</i>
                                        <input placeholder="Search here" type="text"/>
                                    </div>
                                </div>
                                <div className="friend-drawer friend-drawer--onhover">
                                    <img className="profile-image"
                                         src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/robocop.jpg"
                                         alt=""/>
                                    <div className="text">
                                        <h6>Robo Cop</h6>
                                        <p className="text-muted">Hey, you're arrested!</p>
                                    </div>
                                    <span className="time text-muted small">13:21</span>
                                </div>
                                <hr/>
                                <div className="friend-drawer friend-drawer--onhover">
                                    <img className="profile-image"
                                         src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/optimus-prime.jpeg"
                                         alt=""/>
                                    <div className="text">
                                        <h6>Optimus</h6>
                                        <p className="text-muted">Wanna grab a beer?</p>
                                    </div>
                                    <span className="time text-muted small">00:32</span>
                                </div>
                                <hr/>
                                <div className="friend-drawer friend-drawer--onhover ">
                                    <img className="profile-image"
                                         src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/real-terminator.png"
                                         alt=""/>
                                    <div className="text">
                                        <h6>Skynet</h6>
                                        <p className="text-muted">Seen that canned piece of s?</p>
                                    </div>
                                    <span className="time text-muted small">13:21</span>
                                </div>
                                <hr/>
                                <div className="friend-drawer friend-drawer--onhover">
                                    <img className="profile-image"
                                         src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/termy.jpg"
                                         alt=""/>
                                    <div className="text">
                                        <h6>Termy</h6>
                                        <p className="text-muted">Im studying spanish...</p>
                                    </div>
                                    <span className="time text-muted small">13:21</span>
                                </div>
                                <hr/>
                                <div className="friend-drawer friend-drawer--onhover">
                                    <img className="profile-image"
                                         src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/rick.jpg"
                                         alt=""/>
                                    <div className="text">
                                        <h6>Richard</h6>
                                        <p className="text-muted">I'm not sure...</p>
                                    </div>
                                    <span className="time text-muted small">13:21</span>
                                </div>
                                <hr/>
                                <div className="friend-drawer friend-drawer--onhover">
                                    <img className="profile-image"
                                         src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/rachel.jpeg"
                                         alt=""/>
                                    <div className="text">
                                        <h6>XXXXX</h6>
                                        <p className="text-muted">Hi, wanna see something?</p>
                                    </div>
                                    <span className="time text-muted small">13:21</span>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="settings-tray">
                                    <div className="friend-drawer no-gutters friend-drawer--grey">
                                        <img className="profile-image"
                                             src="https://clarity-enhanced.net/wp-content/themes/clarity-enhanced/assets/img/bootstrap-chat-app-assets/robocop.jpg"
                                             alt=""/>
                                        <div className="text">
                                            <h6>Robo Cop</h6>
                                            <p className="text-muted">Layin' down the law since like before
                                                Christ...</p>
                                        </div>
                                        <span className="settings-tray--right">
			  <i className="material-icons">cached</i>
			  <i className="material-icons">message</i>
			  <i className="material-icons">menu</i>
			</span>
                                    </div>
                                </div>
                                <div className="chat-panel">
                                    <BubbleRight text={'lorem'}/>
                                    <BubbleLeft text={'lorem'}/>
                                    <div className="row no-gutters chat-box-tray-wrapper">
                                        <div className="col-12">
                                            <div className="chat-box-tray">
                                                <i className="material-icons">sentiment_very_satisfied</i>
                                                <input type="text" placeholder="Type your message here..."/>
                                                <i className="material-icons">mic</i>
                                                <i className="material-icons">send</i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Auth>
                <style jsx>
                    {`
                    body {
                        background-color: #3498db;
                        -webkit-font-smoothing: antialiased;
                        -moz-osx-font-smoothing: grayscale;
                        text-rendering: optimizeLegibility;
                        }`
                    }
                </style>
            </div>
        );
    }
}

export default Chat;
//this layout after the login
import Footer from "../components/footer";
import Nav from "../components/nav";
import React from "react";
import {HttpRequest} from "../helpers/http.helper";
import Router from "next/router";

export default class Auth extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Validate if user have a valid token
        let token = typeof window === 'undefined' ? '' : localStorage.getItem('token');
        HttpRequest('POST', '/users/check', {token})
            .then(({data}) => {
                // User is authenticated and there are no problems
                // console.log(data)
            })
            .catch(err => {
                // console.log({err});
                Router.push('/user/login');
            });
    }

    render() {
        let {children} = this.props;
        return (
            <div>
                <Nav/>
                {children}
                <Footer/>
            </div>
        );
    }
}
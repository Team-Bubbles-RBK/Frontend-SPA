import React from 'react';
import Nav from '../../components/nav';
import  NotAuth from "../../layouts/notAuth"
import {Container, Row, Col, Form,FormGroup, Label, Input,Button,} from 'reactstrap';
import "./login.css"
import Link from 'next/link'



class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    return (
        <div>
            <NotAuth >
                 <Container >
                    <Row className="justify-content-md-center login">
                        <Col md="8" className="App my-auto " >
                        <h2>Sign UP</h2>
                    <Form className="form">
                        
                            <FormGroup>
                            <Label for="examplePassword">first Name</Label>
                            <Input
                                type="text"
                                name="firstName"
                                id="firstName"
                                placeholder="firstName"
                            />
                            </FormGroup>
                        
                            <FormGroup >
                            <Label for="examplePassword">second Name</Label>
                            <Input
                                type="text"
                                name="secondName"
                                id="secondName"
                                placeholder="second name"
                            />
                            </FormGroup>
                                              
                        <FormGroup>
                        <Label for="exampleEmail">E-Mail</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="user@gmail.com"
                        />
                        </FormGroup><FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="examplePassword"
                            placeholder="********"
                        />
                        </FormGroup>
                    <Button className="btn btn-outline-info  btn-block ">Submit</Button>
                    
                    </Form>
                    <Link href="/auth/login">
                        <a> <small>sign In</small></a>
                    </Link>    
                    <Link href="/auth/resetPass">
                         <a className="text-left text-sm-left ml-2"><small>reset password</small></a>
                     </Link> 
                        </Col>
                    </Row>
                </Container>
            </NotAuth>
        


          
        </div>
    )
    }
}

export default Login;
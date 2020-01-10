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
                 <Container  style={{background:"none"}}>
                    <Row className="justify-content-md-center login">
                        <Col md="4" className="App my-auto " >
                        <h2>Sign In</h2>
                    <Form className="form">
                        <FormGroup>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="myemail@email.com"
                        />
                        </FormGroup>
                        <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="examplePassword"
                            placeholder="********"
                        />
                        </FormGroup>
                    <Button  type="button" className="btn btn-outline-info   btn-block">Submit</Button>
                    
                    </Form>
                    <Link href="/auth/register">
                        <a> <small>sign Up</small></a>
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
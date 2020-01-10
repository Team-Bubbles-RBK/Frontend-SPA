import React from 'react';
import Nav from '../../components/nav';
import  NotAuth from "../../layouts/notAuth"
import {Container, Row, Col, Form,FormGroup, Label, Input,Button,} from 'reactstrap';
import "./login.css"
import Link from 'next/link'


class ResetPass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    return (
        <div>
            <NotAuth >
                 <Container  >
                    <Row className="justify-content-md-center login">
                        <Col md="4" className="App my-auto " >
                        <h2>reset password</h2>
                    <Form className="form">
                        <FormGroup>
                        <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="myemail@email.com"
                        />
                        </FormGroup>
                    <Link href="/auth/newPass">    
                    <Button  type="button" className="btn btn-outline-info   btn-block">Submit</Button>
                    </Link>

                    </Form>
                    <Link href="/auth/register">
                        <a> <small>sign Up</small></a>
                    </Link>    
                    <Link href="/auth/login">
                         <a className="text-left text-sm-left ml-2"><small>sign In</small></a>
                     </Link> 
                        </Col>
                    </Row>
                </Container>
            </NotAuth>
        


          
        </div>
    )
    }
}

export default ResetPass;
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
                        <h2>new password</h2>
                    <Form className="form">
                        <FormGroup>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="password"
                        />
                        <Label for="examplePassword">verifie password</Label>
                          <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="password verification"
                        />
                        </FormGroup>
                    <Link href="/auth/login">    
                    <Button  type="button" className="btn btn-outline-info   btn-block">Submit</Button>
                    </Link>

                    </Form>
                        </Col>
                    </Row>
                </Container>
            </NotAuth>
        


          
        </div>
    )
    }
}

export default ResetPass;
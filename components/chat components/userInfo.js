import React from "react"
import {Col} from 'reactstrap';
import "./sideBubbel.css"


let UserInfo =()=>(
    <Col className="mt-2 profilPic"> 
        <img src="https://via.placeholder.com/80%" className="rounded-circle"/>
        <medium className="ml-4">user name</medium >
    </Col>
)
export default UserInfo
//this one for the users bubble
import React from "react"
import {Col} from 'reactstrap';
import "./sideBubbel.css"


let Bubbel =(props)=>(
    <Col className=" bubble mt-2">
        <img src="https://via.placeholder.com/80%" className="rounded-circle mr-3"/>
        <h4>{props.name}</h4>
        
    </Col>
)
export default Bubbel
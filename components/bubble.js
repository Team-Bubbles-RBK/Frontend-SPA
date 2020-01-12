import React from "react";
import { Button, Card } from "react-bootstrap";

class Bubble extends React.Component {
  constructor(props) {
    super(props);
  }
  render (){
    return(
      <Card>
         <Card.Body>
           <Card.Title>{this.props.name}</Card.Title>
           <Card.Text>
             This is a wider card with supporting text below as a natural lead-in to
             additional content. This content is a little bit longer.
           </Card.Text>
         </Card.Body>
         <Card.Footer>
           <small className="text-muted">Created on = {this.props.created_at}</small>
         </Card.Footer>
         <Button variant="primary" size="lg" active  href={'/chat/'+ this.props.bubbleId}>
> Start Bubbling...</Button>
       </Card>

    )
  }
}

export default Bubble;

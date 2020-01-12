import React, {Component} from 'react';
import { Button, Card, Jumbotron, Container  } from "react-bootstrap";
import CreateBubble from "../../components/createBubble";
import Bubble from "../../components/bubble"

//get request for data
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
          bubbles : [{name: "My Clique", bubbleId: "YoungMoneyCa$hMoney"}]
        }
    }
    render(){
      let bubbleArray = this.state.bubbles.map((buble) => {
        return (
          <div class="col-lg-4">
            <Bubble name = {bubble.name} bubbleId = {bubble.bubbleId} created_at = {bubble.created_at}/>
          </div>
        )
      })
      return (
        <Jumbotron fluid>
          <Container>
            <CreateBubble/>
            <div class="row">
              {bubbleArray}
            </div>
          </Container>
        </Jumbotron>

      )
    }
}

export default Index;


///all bubble....bubble name...created_at....button with link

import React from 'react';
import {Jumbotron, Container, ListGroup} from 'react-bootstrap'
import Avatar from 'react-avatar';
import Uploader from '../components/uploadComponent.js'
import PolarAreaChart from '../components/polarAreaChart.js'
import Auth from "../layouts/Auth";



class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'file': null,
      'firstName': 'Ahmed',
      'LastName': 'Wheida',
      'DOB': '15/06/1991',
      'userName' : "Ahmed Wheida"
    }
  }
  render() {

    return (
      <Auth>
      <Jumbotron fluid>
        <div className="row">
          <div className="col-sm-3">
            <Container className="container justify-content-md-center " fluid={true}>
              <Avatar name={this.state.userName} size={100} textSizeRatio={1.75} round={true}/>
            </Container>
            <Container className="container justify-content-md-center " fluid={true}>
              <ListGroup>
                <ListGroup.Item><Uploader/></ListGroup.Item>
                <ListGroup.Item>First name: {this.state.firstName} </ListGroup.Item>
                <ListGroup.Item>Last name: {this.state.LastName} </ListGroup.Item>
                <ListGroup.Item>Date of Birth: {this.state.DOB} </ListGroup.Item>
              </ListGroup>
            </Container>
          </div>
          <div className="col-lg-9">
            <PolarAreaChart/>
          </div>
        </div>
      </Jumbotron>
      </Auth>
    )
  }
}
export default Profile

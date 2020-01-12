import React from 'react';
import {Form, Accordion, Button, Card} from 'react-bootstrap';
import axios from 'axios';


//recieves id from parent component as a props -- not implmented

class FileUploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    }
  }

  nameChanger = (event) => {
    let file = event.target.files[0];
    this.setState({file});
  }

  fileUploader = (event) => {
    event.preventDefault();
    let file = new FormData()
    file.append('file', this.state.file)
    file.append('name', 'gravetar')
    file.append('enctype', 'multipart/form-data');
    axios.post("http://localhost:3000/upload", file, {/*options*/});
  }


  render() {
    return (
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Change Gravatar?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Form id = "myForm">
                <Form.Control type = "file" accept="image/jpeg,image/png,image/jpg" name = "gravetar"/><br></br>
                <Button variant = "primary" type = "submit" active> Submit < /Button>
              </Form >
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    )
  }
}

export default FileUploader

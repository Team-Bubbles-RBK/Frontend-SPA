import React from "react";
import {Button, Form, Card, Accordion} from "react-bootstrap";
import Auth from "../layouts/Auth";
import Axios from "axios";

class CreateBubble extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bubbleName: ""
        };
    }

    handleChange = (e) => {
        this.setState({
            bubbleName: e.target.value
        });
    }

    submit = () => {
        if (this.state.bubbleName === "") {
            alert("You Need to Choose a Name");
        } else {
            // Axios.post(" ", (method = "POST"));

            console.log("submit");
            const form = {
                bubbleName: this.state.bubbleName
            };
            console.log(form);
        }
    }

    render() {
        return (
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Create Bubble
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Card>
                                <Card.Header>Create your own Bubble </Card.Header>
                                <Card.Body>
                                    <Card.Title>Please enter the name of your Bubble to Generate a link.</Card.Title>
                                    <Card.Text>
                                        Bubble Name: <input/>
                                    </Card.Text>
                                    <Button as="input" type="submit"
                                            // value="Generate Link"
                                            size="lg"
                                            onClick={this.submit}/>
                                </Card.Body>
                            </Card>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        );
    }
}

export default CreateBubble;


// <div
//   id="bubblesCreation"
//   style={{
//     marginLeft: "25%",
//     width: "50%",
//     borderRadius: "40%",
//     paddingBottom: "15%",
//     paddingTop: "5%",
//     textAlign: "center",
//     backgroundColor: "#4d4957",
//     color: "white"
//   }}
// >
//   Create Your Own Bubble
//   <Form
//     style={{
//       textAlign: "center",
//       marginTop: "20%"
//     }}
//   >
//     <label>Bubble's Name:</label>
//     <input
//       style={{ width: "50%", marginLeft: "25%" }}
//       type="text"
//       name="bubble'sName"
//       id="bubbleName"
//       onChange={e => this.handleChange(e)}
//     />
//     <br />
//     <label>Add Members:</label>
//     <Button
//       style={{ width: "50%", marginLeft: "25%" }}
//       id="submit"
//       type="button"
//       className="btn btn-outline-info   btn-block"
//       onClick={this.submit}
//     >
//       generate link
//     </Button>
//   </Form>
// </div>


/////////////////
// <Accordion defaultActiveKey="0">
//   <Card>
//     <Accordion.Toggle as={Card.Header} eventKey="0">
//     <Button value="Create Bubble!"/>
//       Create Bubble!
//     </Accordion.Toggle>
//     <Accordion.Collapse eventKey="0">
//       <Card.Body>
//         <Card >
//           <Card.Header>Create your own Bubble </Card.Header>
//           <Card.Body>
//             <Card.Title>Please enter the name of your Bubble to Generate a link.</Card.Title>
//             <Card.Text>
//             Bubble Name: <input/>
//             </Card.Text>
//           <Button as="input" type="submit" value="Generate Link" size="lg"  onClick ={this.submit}/>
//           </Card.Body>
//         </Card>
//       </Card.Body>
//     </Accordion.Collapse>
//   </Card>
// </Accordion>

import Bubble from "../components/chat components/sideBubbel";
import UserInfo from "../components/chat components/userInfo";
import Msg from "../components/msg";
import {Container, Col, Row, Button} from 'react-bootstrap';
import Link from 'next/link';
import "./chat.css";
import Auth from "../layouts/Auth";

/**
 * Socket
 */
import io from 'socket.io-client';

class OldChat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            bubbleId: 2,
            usersArr: [
                {name: "user 1"},
                {name: "user 2"},
                {name: "user 3"},
                {name: "user 4"},
                {name: "user 5"},
                {name: "user 6"},
                {name: "user 7"},
                {name: "user 8"},
            ],
            msgArr: ["hi", "hello", "by", "suck chat", "welcome", "bybyby", "*** you", "hi", "hello", "by", "suck chat", "welcome", "bybyby"],
            myArr: ["hi", "hello", "by", "suck chat", "welcome", "bybyby", "*** you", "hi", "hello", "by", "suck chat", "welcome", "bybyby"]
        };
        this.handleChange = this.handleChange.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.filterList = this.filterList.bind(this)
    }

    componentDidMount() {
        this.socket = io('http://localhost:3000');
        this.socket.emit('join', this.state.bubbleId);
        this.socket.on('message', (message) => {
            alert(JSON.stringify(message));
        });
    }

    render() {

        return (
            <Auth>
                <Container className="container justify-content-md-center " fluid={true}>
                    <Row className="row" id="charRow">
                        {/* this one is for the first one where you have the bubbels and user name */}
                        <Col className="col" sm="4" id="col">

                            <UserInfo/>
                            {/* this one for search */}
                            <Col className="search mt-2">
                                <input onChange={this.filterList} class="form-control input-lg mt-2" type="text"
                                       placeholder="search.... "/>
                                <Button variant="info" className="btn ml-2 mt-2 btn-lm">search</Button>
                            </Col>

                            {/* for the bubble side bar */}
                            <div className='side-bar-bubble mt-5 overflow-auto '>
                                {this.state.usersArr.map(elm => <Bubble name={elm.name}/>)}
                            </div>


                        </Col>
                        {/* this is where the bubbel part end */}
                        {/* for the bubbel on the top of the chat */}

                        {/* for the msgs */}
                        <Col className="col" sm="8">
                            <Bubble name="test bubble"/>
                            <Col className="side-bar-bubble mt-5 overflow-auto">
                                {this.state.msgArr.map(elm => <Msg msg={elm} name={elm}/>)}
                                {this.state.myArr.map(elm => <div
                                    style={{display: "flex", alignItems: "flex-end", flexDirection: "column"}}><Msg
                                    msg={elm}/></div>)}

                            </Col>
                            {/* for the chat  */}
                            <div className="search" id="chatBar">
                                <input className="form-control input-lg mt-2" placeholder={'sssssssssssss'}
                                       type="text"
                                       onChange={this.handleChange}/>
                                <Button variant="info" className="btn ml-2 mt-2 btn-lm"
                                        onClick={() => this.sendMessage()}>Send</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Auth>
        );
    }

    componentWillMount() {
        this.setState({
            seachArr: this.state.usersArr
        });
    }

    filterList(e) {
        let updateList = this.state.usersArr;

        updateList = updateList.filter(item => {
            return item.name.toLowerCase().search(
                e.target.value.toLowerCase()
            ) !== -1;

        });
        this.setState({
            usersArr: updateList
        });
    }

    componentWillUpdate() {
        if (this.state.usersArr.length === 0) {
            this.setState({usersArr: this.state.seachArr})
        }
    }

    handleChange(e) {
        // console.log('msg ' + e.target.value)
        console.log(e.target.value)
        this.setState({
            message: e.target.value
        });
    }

    sendMessage() {
        // create message object
        //send message to api
        let _message = {
            content: this.state.message,
            bubble_id: this.state.bubbleId,
            user_id: 4
        };

        // Send message to route
        axios.post('http://localhost:3000/messages/store', _message)
            .then(result => {
                console.log({result});
            })
            .catch(err => {
                console.error({err});
            });

        // const message = {
        //     id: (new Date()).getTime(),
        //     content: this.state.message,
        // };
        // // send object to WS server
        // this.socket.emit('message', message);
    }
}

export default OldChat

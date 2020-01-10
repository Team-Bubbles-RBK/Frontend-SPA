import Bubble from "../components/chat components/sideBubbel"
import UserInfo from "../components/chat components/userInfo"
import Msg from "../components/msg"
import{Container,Col,Row ,Button}  from 'reactstrap'
import Link from 'next/link'
import React from 'react'
import "./chat.css"
import Auth from "../layouts/Auth"
class Chat extends React.Component{
    constructor(props){
      super(props)
      this.state={
        usersArr : [
          {name:"user 1"},
          {name:"user 2"},
          {name:"user 3"},
          {name:"user 4"},
          {name:"user 5"},
          {name:"user 6"},
          {name:"user 7"},
          {name:"user 8"},
        ],
        msgArr:["hi","hello","by","suck chat","welcome","bybyby","fuck you","hi","hello","by","suck chat","welcome","bybyby"],
        myArr:["hi","hello","by","suck chat","welcome","bybyby","fuck you","hi","hello","by","suck chat","welcome","bybyby"]
        
        
        
      }
        
    }
  
    render(){
     
      return(
        <Auth>
        <Container className="container justify-content-md-center " fluid={true}> 
         <Row className="row" id="charRow">
           {/* this one is for the first one where you have the bubbels and user name */}
            <Col className="col" sm="4" id="col">
              
              <UserInfo/>
  
              <Col className="search mt-2">
              <input class="form-control input-lg mt-2" id="inputlg" type="text" placeholder="search.... "/>
              <Button variant="info"className="btn ml-2 mt-2 btn-lm" >search</Button>
              </Col>
  
          {/* for the bubble side bar */}
              <div className='side-bar-bubble mt-5 overflow-auto '>
                {this.state.usersArr.map(elm=><Bubble name={elm.name}/>)}
              </div>
  
  
            </Col>
          {/* this is where the bubbel part end */}
          {/* for the bubbel on the top of the chat */}
  
          {/* for the msgs */}
            <Col className="col" sm="8">
              <Bubble name="test bubble"/>       
               <Col className="side-bar-bubble mt-5 overflow-auto">
                {this.state.msgArr.map(elm=><Msg msg={elm} name={elm}/>)}
                {this.state.myArr.map(elm=><div style={{display:"flex",alignItems:"flex-end",flexDirection:"column"}}><Msg msg={elm}/></div>)}
               
               </Col>
              {/* for the chat  */}
               <div className="search" id="chatBar">
                 <input class="form-control input-lg mt-2" id="inputlg" type="text" placeholder="search.... "/>
                 <Button variant="info"className="btn ml-2 mt-2 btn-lm" >send</Button>
              </div>
            </Col>   
  
            
      
        </Row>
    
        </Container>
        </Auth>
      )
    }
  }
  export default Chat
  
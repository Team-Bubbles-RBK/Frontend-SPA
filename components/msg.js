import React from "react"
import{}  from 'reactstrap'


let msg = (props) =>{
    let styled = {width:"60%",padding:"5px",borderRadius:"12px",backgroundColor:"#00C6FF ",marginBottom:"8px",fontSize:"18px"}
     return (
     <>
     <small className="ml-2">{props.name}</small>
     <div style={styled}>
         <p>{props.msg}</p>
     </div>
     </>
     )
}
export default msg
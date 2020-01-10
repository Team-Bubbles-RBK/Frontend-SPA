import React from "react";

const footer = () => (
  <footer className="navbar fixed-bottom">
    <small>CopyRight BY Bubbles-Team</small>

    <style jsx>{`
        footer small{
            text-align:center;
            width:100%;
            margin:0 auto;
            positon:absolute;
            bottom:0;
            color:orangered

        }
        footer{
            width:100%;
            height:35px;
            background-color:black;

        }
    
      }
     
    `}</style>
  </footer>
);

export default footer;

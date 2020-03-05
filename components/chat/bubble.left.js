import React from "react";

export const BubbleLeft = ({text}) => (
    <div className="row no-gutters">
        <div className="col-md-3">
            <div className="chat-bubble chat-bubble--left">
                {text}
            </div>
        </div>
    </div>
);
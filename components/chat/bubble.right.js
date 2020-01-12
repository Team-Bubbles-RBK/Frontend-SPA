import React from "react";

export const BubbleRight = ({text}) => (
    <div className="row no-gutters">
        <div className="col-md-3 offset-md-9">
            <div className="chat-bubble chat-bubble--right">
                {text}
            </div>
        </div>
    </div>
);
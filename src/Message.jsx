import React from "react";

function Message(props) {
  return (
    <div>
      <h2>{props.text}</h2>
      <p>From: {props.name}</p>
    </div>
  );
}

export default Message;
import React from "react";

export default function Advantage(props) {
    console.log(props);
  return (
    <div className="advantage">
      <div className="advantage_img">
        <img src={props.advantage.img} alt="advantage" />
      </div>
      <p className="advantage_text">
          {props.advantage.text}
      </p>
    </div>
  );
}

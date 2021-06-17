import React from "react";
import BlockText from "./BlockText/BlockText";

export default function ContentLine(props) {
  return (
    <div className="content_line">
      <div className="container">
        <div className="text_container">
          {props.content.blockText.map((text, key) => (
            <BlockText text={text} key={key} />
          ))}
        </div>
        <p className="text_line">{props.content.textLine}</p>
      </div>
    </div>
  );
}

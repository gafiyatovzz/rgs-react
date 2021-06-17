import React from "react";

export default function Statistics(props) {
  return (
    <div className="statistic">
      <p className="statistic_num">{props.stat.num}</p>
      <p className="statistic_text">{props.stat.text}</p>
    </div>
  );
}

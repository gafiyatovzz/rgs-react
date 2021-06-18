import React from "react";
import { RemoveOutline, AddOutline } from "react-ionicons";

export default function Accordion(props) {
  return (
    <div className="accordion">
      {props.faq.map((q, key) => {
        return (
          <div className="accordion-item" id={key} key={key}>
            <a className="accordion-link" href={'#' + key}>
              <div className="flex">
                <h3>{q.label}</h3>
              </div>
              <AddOutline
                color={"#E3B057"}
                title={"s"}
                height="50px"
                width="50px"
                className="ion-md-arrow-forward"
              />
              <RemoveOutline
                color={"#E3B057"}
                title={"s"}
                height="50px"
                width="50px"
                className="ion-md-arrow-down"
              />
            </a>
            <div className="answer">
              <p>{q.content}</p>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

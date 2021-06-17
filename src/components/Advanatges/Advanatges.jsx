import React from "react";
import ContentTitle from "../Block/ContentTitle/ContentTitle";
import Name from "../Block/Name/Name";
import Advantage from "./Advantage/Advantage";

export default function Advanatges(props) {
  return (
    <div className="advantages">
      <ContentTitle>
        Преимущества компании <Name />
      </ContentTitle>

      <div className="advantage_container">
        {props.advantages.map((adv, key) => (
          <Advantage advantage={adv} key={key} />
        ))}
      </div>
    </div>
  );
}

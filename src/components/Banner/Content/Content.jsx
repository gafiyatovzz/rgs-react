import React from "react";
import Bottom from "./Bottom/Bottom";
import Button from "./Button/Button";
import Description from "./Description/Description";

export default function Content(props) {
  return (
    <div className="banner_content">
      <Description description={props.description} />
      <Button href="#coop-form" />
        <Bottom client={props.client}/>
    </div>
  );
}

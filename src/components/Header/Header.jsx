import React from "react";

import Logo from "./Logo/Logo";
import Navigate from "./Navigate/Navigate";
import Contacts from "./Contacts/Contacts";

import navs from "../../content/navigate.js";
import client from "../../content/client";

export default function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <Logo logo={props.logo} />
        <Navigate navs={navs} />
        <Contacts client={client} />
      </div>
    </header>
  );
}

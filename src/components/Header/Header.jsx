import React, { Component } from "react";

import Logo from "./Logo/Logo";
import Navigate from "./Navigate/Navigate";
import Contacts from "./Contacts/Contacts";

import navs from "../../content/navigate.js";
import client from "../../content/client";
import Burger from "./Burger/Burger";

export default class Header extends Component {
  
  state = {
    menu: false,
  };

  toggleMenuHandler() {
    // console.log(this.state);
    // this.setState({
    //   menu: !this.state.menu,
    // });
    document.querySelector("#menuCollapse").classList.toggle("show");
    document.querySelector("header").classList.toggle("fixed");
  }


  render() {
    return (
      <header className="header">
        <div className="container">
          {window.screen.width <= 993 ? (
            <Burger
              isOpen={this.state.menu}
              onToggle={this.toggleMenuHandler}
            />
          ) : (
            ""
          )}
          <Logo logo={this.props.logo} />
          <Navigate navs={navs} onToggle={this.toggleMenuHandler} />
          <Contacts client={client} />
        </div>
      </header>
    );
  }
}

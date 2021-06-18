import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavigationMobile from "../NavigationMobile/NavigationMobile";

class Navigate extends Component {
 

 
  menuCloseHandler() {
    this.setState({
      menu: false,
    });
  }

  isActive(elem) {
    const cls = ["List_elem"];
    elem.status && cls.push("Active");
    return cls.join(" ");
  }

  render() {
    return (
      <>
        <nav className="navigation">
          <ul className="navigation__list">
            {this.renderNavs(this.props.navs)}
          </ul>
        </nav>
        <NavigationMobile
          onToggle={this.props.onToggle}
          navs={this.props.navs}
        />
      </>
    );
  }

  renderNavs(props) {
    return props.map((el, key) => {
      return (
        <li key={key}>
          <NavLink to={el.link}>{el.name}</NavLink>
        </li>
      );
    });
  }
}
export default Navigate;

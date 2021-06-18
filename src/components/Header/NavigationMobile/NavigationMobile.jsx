import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavigationMobile extends Component {
  renderLevels(levels) {
    return levels.map((level, idx) => {
      return (
        <li key={idx} onClick={this.props.onToggle}>
          <NavLink to={level.link}>{level.name}</NavLink>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="collapseMenu" id="menuCollapse">
          <ul className="collapseMenu__list">
            {this.renderLevels(this.props.navs)}
          </ul>
      </div>
    );
  }
}

export default NavigationMobile;

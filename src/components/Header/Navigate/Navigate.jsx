import React from "react";
import { NavLink } from "react-router-dom";

function Navigate(props) {
  return (
    <nav className="navigation">
      <ul className="navigation__list">{renderNavs(props.navs)}</ul>
    </nav>
  );
}

function renderNavs(props) {
  return props.map((el, key) => {
    return (
      <li key={key}>
        <NavLink to={el.link}>
            {el.name}
        </NavLink>
      </li>
    );
  });
}

export default Navigate
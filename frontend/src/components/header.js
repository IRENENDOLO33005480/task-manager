import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div>
      <NavLink to="/" activeClassName="is-active" exact={true}>
        users
      </NavLink>
      <NavLink to="/createuser" activeClassName="is-active">
        Create User
      </NavLink>
      
    </div>
  );
};

export default Header;
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

function Nav() {
  return (
    <div className="nav">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <ul className="links">
        <NavLink
          to="/"
          className="link"
          style={({ isActive }) =>
            isActive ? { color: "red" } : { color: "#3F781E" }
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/restaurant"
          className="link"
          style={({ isActive }) =>
            isActive ? { color: "red" } : { color: "#3F781E" }
          }
        >
          Restaurant Listings
        </NavLink>
        <NavLink
          to="/didYouKnow"
          className="link"
          style={({ isActive }) =>
            isActive ? { color: "red" } : { color: "#3F781E" }
          }
        >
          Did You Know?
        </NavLink>
        <NavLink
          to="/news"
          className="link"
          style={({ isActive }) =>
            isActive ? { color: "red" } : { color: "#3F781E" }
          }
        >
          News
        </NavLink>
        <NavLink
          to="/about"
          className="link"
          style={({ isActive }) =>
            isActive ? { color: "red" } : { color: "#3F781E" }
          }
        >
          About Us
        </NavLink>
        <NavLink to="/contact" className="link contact-btn">
          Contact Us
        </NavLink>
      </ul>
    </div>
  );
}

export default Nav;

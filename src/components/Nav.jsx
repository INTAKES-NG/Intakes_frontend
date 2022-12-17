import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/newLogo.png";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

function Nav() {
  // states for mobile navigation
  const [mobile, setMobile] = useState(false);
  return (
    <div className="nav">
      <Link to="/" className="logo">
        <img src={Logo} alt="" />
      </Link>
      <ul className={mobile ? "nav-links-mobile" : "links"}>
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
          to="/news"
          className="link"
          style={({ isActive }) =>
            isActive ? { color: "red" } : { color: "#3F781E" }
          }
        >
          News
        </NavLink>
        <NavLink
          to="/articles"
          className="link"
          style={({ isActive }) =>
            isActive ? { color: "red" } : { color: "#3F781E" }
          }
        >
          Article
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
          to="/about"
          className="link"
          style={({ isActive }) =>
            isActive ? { color: "red" } : { color: "#3F781E" }
          }
        >
          About Us
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
        <NavLink to="/contact" className="link contact-btn">
          Contact Us
        </NavLink>
      </ul>
      {/* hamburger */}
      <div className="hamburger" onClick={() => setMobile(!mobile)}>
        {mobile ? (
          <IoClose className="hamburger-icons" />
        ) : (
          <HiOutlineMenuAlt3 className="hamburger-icons" />
        )}
      </div>
    </div>
  );
}

export default Nav;

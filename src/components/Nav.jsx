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
            isActive ? { color: "#234311" } : { color: "#7A876B" }
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/news"
          className="link"
          style={({ isActive }) =>
            isActive ? { color: "#234311" } : { color: "#7A876B" }
          }
        >
          News
        </NavLink>
        <NavLink
          to="/articles"
          className="link"
          style={({ isActive }) =>
            isActive ? { color: "#234311" } : { color: "#7A876B" }
          }
        >
          Article
        </NavLink>
        <NavLink
          to="/didYouKnow"
          className="link"
          style={({ isActive }) =>
            isActive ? { color: "#234311" } : { color: "#7A876B" }
          }
        >
          Did You Know?
        </NavLink>
        <NavLink
          to="/challenge"
          className="link"
          style={({ isActive }) =>
            isActive ? { color: "#234311" } : { color: "#7A876B" }
          }
        >
          Nutritional Challenge
          {/* About Us */}
        </NavLink>
        <NavLink
          to="/restaurant"
          className="link"
          style={({ isActive }) =>
            isActive ? { color: "#234311" } : { color: "#7A876B" }
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

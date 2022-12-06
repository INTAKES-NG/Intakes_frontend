import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

function Nav() {
  // states for mobile navigation
  const [mobile, setMobile] = useState(false);
  return (
    <div className="nav">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
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
      {/* hamburger */}
      <div className="hamburger" onClick={() => setMobile(!mobile)}>
        {/* {mobile? <ImgBars/> : <Imgcross/>} */}
        <span className="hamburger-span-top"></span>
        <span className="hamburger-span-middle"></span>
        <span className="hamburger-span-bottom"></span>
      </div>
    </div>
  );
}

export default Nav;

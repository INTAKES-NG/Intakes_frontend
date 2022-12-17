import React from "react";
import { Footer, Nav, OurValues, StayInTouch } from "../components";
import "../styles/About.css";
import img1 from "../assets/ep_help-filled.png";
import img2 from "../assets/value-img.png";
import img3 from "../assets/Ellipse 38.png";
import img4 from "../assets/Ellipse 39.png";
import img5 from "../assets/Ellipse 40.png";
import img6 from "../assets/Ellipse 41.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-us-page">
      <div className="container">
        <Nav />
        <div className="about-us-wrapper">
          {/* About us */}
          <div className="about-us">
            <h1 className="about-us-head">About Us</h1>
            <p className="about-us-body">
              It sparked with health, both my sister’s and mine, and ignited
              when I saw how nutrition and lifestyle could make loved ones’
              lives better. Today, I provide evidence-based health, nutrition,
              and wellness research and information to help everyone live their
              best lives. In addition, my team and I support children’s
              education worldwide with school supplies, scholarships, and more.
              Each member of our Board of Directors volunteers both time and
              money to this endeavor. SELF Principle is one of the few
              non-profits where every dollar you give goes directly to help a
              child in need. The Board covers the non-profit’s administrative
              expenses out of our own pockets, unlike other 501(c)(3)
              organizations. We’re also “boots on the ground,” supplying
              low-income children in the US and around the world with the
              educational supplies they need to succeed.
            </p>
            <Link to="/contact" className="about-us-button">
              Contact Us
            </Link>
          </div>
        </div>

        {/* value */}
        <OurValues />
        {/* teams */}
        <div className="teams">
          <div className="row sub-row">
            <img src={img1} alt="" />
            <p className="sub-title">Meet the Team</p>
          </div>
          <div className="team-content-2">
            <h1 className="team-body">
              Professional work team in their field.
            </h1>
            <div className="team-content-3">
              <div className="team-stack-content1">
                <div className="team-stack-one">
                  <img src={img3} className="team-img" alt="" srcset="" />
                  <h1>Alex</h1>
                  <h2>CTO</h2>
                  <p>(Chief technical officer)</p>
                </div>
                <div className="team-stack-two">
                  <img src={img5} className="team-img" alt="" srcset="" />
                  <h1>Alex</h1>
                  <h2>CTO</h2>
                  <p>(Chief technical officer)</p>
                </div>
              </div>
              <div className="team-stack-content2">
                <div className="team-stack-three">
                  <img src={img4} className="team-img" alt="" srcset="" />
                  <h1>Alex</h1>
                  <h2>CTO</h2>
                  <p>(Chief technical officer)</p>
                </div>
                <div className="team-stack-four">
                  <img src={img6} className="team-img" alt="" srcset="" />
                  <h1>Alex</h1>
                  <h2>CTO</h2>
                  <p>(Chief technical officer)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <StayInTouch />
      </div>
      <Footer />
    </div>
  );
};

export default About;

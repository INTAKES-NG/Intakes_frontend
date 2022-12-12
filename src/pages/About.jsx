
import React from "react";
import { Footer, Nav, StayInTouch } from "../components";
import './About.css'
import img1 from '../assets/ep_help-filled.png'
import img2 from '../assets/value-img.png'
import img3 from '../assets/Ellipse 38.png'
import img4 from '../assets/Ellipse 39.png'
import img5 from '../assets/Ellipse 40.png'
import img6 from '../assets/Ellipse 41.png'


const About = () => {
  return (
    <div className="container">
      <Nav />
      {/* About us */}
      <div className="about-us">
          <h1 className="about-us-head">About Us</h1>
          <p className="about-us-body">
            It sparked with health, both my sister’s and mine, and ignited when I saw how nutrition and lifestyle could make loved
            ones’ lives better. Today, I provide evidence-based health, nutrition, and wellness research and information to help everyone live their best lives.
            In addition, my team and I support children’s education worldwide with school supplies, scholarships, and more. Each member of our Board of Directors
            volunteers both time and money to this endeavor. SELF Principle is one of the few non-profits where every dollar you give goes directly to help a
            child in need. The Board covers the non-profit’s administrative expenses out of our own pockets, unlike other 501(c)(3) organizations. We’re also
            “boots on the ground,” supplying low-income children in the US and around the world with the educational supplies they need to succeed.
            </p>
            <button className="about-us-button">Contact Us</button>
      </div>

      {/* value */}
      <div className="value">
          <img src={img2} alt="" className="value-img" />
          <div className="value-content">
              <div className="value-content-first">
                    <img src={img1}  alt="" />
                    <h1 className="value-head">Our value to help you</h1>
              </div>
              <div>
                  <h2 className="value-body">We have always want to provide the best value for you and your health</h2>
              </div>
              <div className="value-stack-content1">
                  <div className="value-stack-one">
                      <h1 className="value-stack-one-content">Become Healthier</h1>
                  </div>
                  <div className="value-stack-two">
                      <h1 className="value-stack-two-content">Increase Energy</h1>
                  </div>
              </div>
              <div className="value-stack-content2">
                  <div className="value-stack-three">
                      <h1 className="value-stack-three-content">Controlling weight</h1>
                  </div>
                  <div className="value-stack-four">
                      <h1 className="value-stack-four-content">Become happier</h1>
                  </div>
              </div>
          </div>
      </div>

      {/* teams */}
      <div className="teams">
          <div className="team-content-1">
              <img src={img1} alt="" className="team-png" />
              <h1 className="team-head">Meet the team</h1>
          </div>
          <div className="team-content-2">
              <h1 className="team-body">Professional work team in their field.</h1>
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
      <StayInTouch/>
      <Footer/>
    </div>
  );
};


export default About;
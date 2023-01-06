import React from "react";
import { Footer, Nav, StayInTouch } from "../components";
import "../styles/contact.css";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/Bs";
import { SiGmail } from "react-icons/Si";

const Contact = () => {
  return (
    <div className="contact-body">
      <div className="contact-page-wrapper">
        <div className="container">
          <Nav />
          <div className="contact-form-container">
            <div className="top">
              <h1 className="top-head">CONTACT US</h1>

              <div className="icons">
                <FaFacebookF className="links-1" />
                <RiInstagramFill className="links-1" />
                <SiGmail className="links-1" />
                <FaTwitter className="links-1" />
              </div>
            </div>
            {/* <hr className="contact-us-hr" /> */}
            <div className="bottom">
              <div className="form-wrapper">
                <form>
                  <h1 className="bottom-head">Get In Touch</h1>
                  <input type="text" placeholder="Your Name" />
                  <input type="email" placeholder="Email Address" />
                  <textarea name="" placeholder="Message"></textarea>
                  <button>Send Now</button>
                </form>
              </div>
              <div className="bottom-content">
                <a href="mailto:info@intakes.ng" className="bottom-t">
                  <SiGmail className="b-icon" />
                  info@intakes.ng
                </a>
                <a href="tel:+2348123456789" className="bottom-d">
                  <BsFillTelephoneFill className="b-icon" />
                  08123456789
                </a>
              </div>
            </div>
          </div>

          <StayInTouch />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;

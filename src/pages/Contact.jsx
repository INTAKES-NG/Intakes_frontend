import React from "react";
import { Footer, Nav, StayInTouch } from "../components";
import "../styles/contact.css";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/Bs";
import { BsFillTelephoneFill } from "react-icons/Bs";
import { SiGmail } from "react-icons/Si";
import { AiOutlineTwitter } from "react-icons/Ai";

const Contact = () => {
  return (
    <div className="container">
      <Nav />
      <div className="top">
        <h1 className="top-head">CONTACT US</h1>

        <div className="icons">
          <FaFacebookF className="links-1" />
          <BsInstagram className="links-1" />
          <SiGmail className="links-1" />
          <AiOutlineTwitter className="links-1" />
        </div>
      </div>
      <hr />
      <div className="bottom">
        <form>
          <h1 className="bottom-head">Get In Touch</h1>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <textarea name="" placeholder="Message"></textarea>
          <button>Send Now</button>
        </form>
        <div className="bottom-content">
          <div className="bottom-t">
            <SiGmail className="b-icon" />
            <h2>email@gmail.com</h2>
          </div>
          <div className="bottom-d">
            <BsFillTelephoneFill className="b-icon" />
            <h2>08123456789</h2>
          </div>
        </div>
      </div>
      {/* <StayInTouch /> */}
      <Footer />
    </div>
  );
};

export default Contact;

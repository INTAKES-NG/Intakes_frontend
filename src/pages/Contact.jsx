import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Footer, Nav, StayInTouch } from "../components";
import "../styles/contact.css";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/Bs";
import { SiGmail } from "react-icons/Si";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  // ref for form
  const form = useRef();

  // handle form submit
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_n5136ga",
      "template_83sihel",
      form.current,
      "pqsHV1F0iUxeKXg96"
    );

    e.target.reset();
  };

  // toast
  const notify = () => {
    const nameInput = document.querySelector(".name__input");
    const emailInput = document.querySelector(".email__input");
    if (nameInput.value && emailInput.value) {
      console.log(nameInput.value);
      toast.info("Message Sent!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

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
                <form ref={form} onSubmit={sendEmail}>
                  <h1 className="bottom-head">Get In Touch</h1>
                  <input
                    type="text"
                    name="name"
                    className="name__input"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    className="email__input"
                    placeholder="Email Address"
                    required
                  />
                  <textarea name="message" placeholder="Message"></textarea>
                  <button onClick={notify}>Send Now</button>
                  <ToastContainer
                    position="top-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                  />
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

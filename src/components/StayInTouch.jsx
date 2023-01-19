import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StayInTouch = () => {
  // state
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  // useref for form
  const form = useRef();
  // handle form submit
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_c8hac4d",
      "template_d431vyp",
      form.current,
      "pqsHV1F0iUxeKXg96"
    );

    setSubscribed(true);

    e.target.reset();
  };
  //
  const notify = () => {
    if (document.querySelector(".email__input").value) {
      toast("🦄 Subscribed!", {
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
    <section className="stay_in_touch">
      <div className="container">
        <h3>Stay in touch!</h3>
        <p>
          Join our subscribers list to receive regular updates on nutrition.
        </p>
        {/* form */}
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-row">
            <input
              type="email"
              placeholder="Your Email"
              name="email_address"
              className="email__input"
            />
            <button type="submit" onClick={notify}>
              Subscribe
            </button>
            <ToastContainer
              position="top-right"
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
          </div>
        </form>
        {/* {subscribed ? (
          <div>Subscribed</div>
        ) : (
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-row">
              <input
                type="email"
                placeholder="Your Email"
                name="email_address"
              />
              <button type="submit" onClick={notify}>
                Subscribe
              </button>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
              <ToastContainer />
            </div>
          </form>
        )} */}
      </div>
    </section>
  );
};

export default StayInTouch;

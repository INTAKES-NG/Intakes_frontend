import React, { useState } from "react";

const StayInTouch = () => {
  // state
  const [email, setEmail] = useState("");

  // handle submit

  return (
    <section className="stay_in_touch">
      <div className="container">
        <h3>Stay in touch!</h3>
        <p>
          Join our subscribers list to receive regular updates on nutrition.
        </p>
        {/* form */}
        <form action="">
          <div className="form-row">
            <input type="email" placeholder="Your Email" name="email_address" />
            <button type="submit">Subscribe</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default StayInTouch;

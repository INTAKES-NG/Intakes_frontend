import React from "react";

const StayInTouch = () => {
  return (
    <section className="stay_in_touch">
      <div className="container">
        <h3>Stay in touch!</h3>
        <p>
          Join thousands of subscribers and get our best recipes delivered each
          week!
        </p>
        {/* form */}
        <form action="">
          <div className="form-row">
            <input type="text" placeholder="Your Email" />
            <button type="submit">Subscribe</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default StayInTouch;

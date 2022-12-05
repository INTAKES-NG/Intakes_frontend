import React from "react";

const StayInTouch = () => {
  return (
    <section className="stay_in_touch">
      <div className="container">
        <h3
          style={{
            fontWeight: "500",
            fontSize: "80px",
            lineHeight: "96px",
            color: "rgba(35, 67, 17, 1)",
          }}
        >
          Stay in touch!
        </h3>
        <p
          style={{
            fontWeight: "400",
            fontSize: "32px",
            lineHeight: "38px",
            color: "rgba(48, 48, 48, 1)",
            margin: "20px 0",
          }}
        >
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

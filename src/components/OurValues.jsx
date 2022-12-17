import React from "react";
import circle from "../assets/ep_help-filled.png";
import person from "../assets/value-img.png";

const OurValues = () => {
  return (
    <section className="values-section">
      <div className="container">
        <div className="row">
          <div className="img-col">
            <img src={person} alt="" />
          </div>
          <div className="text-col">
            <div className="row">
              <img src={circle} alt="" />
              <h4>Our value to help you</h4>
            </div>
            <h3>
              We have always want to provide the best value for you and your
              health
            </h3>
            <div className="grid">
              <div className="grid-col grid-col-1">
                <p>Become Healthier</p>
              </div>
              <div className="grid-col">
                <p>Increase Energy</p>
              </div>
              <div className="grid-col">
                <p>Controlling weight</p>
              </div>
              <div className="grid-col">
                <p>Become happier</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;

import React from "react";
import message from "../assets/message-icon.png";
import man from "../assets/man.png";
import { ImCheckmark } from "react-icons/im";
import "../styles/Healthy.css";
import { Link } from "react-router-dom";

const   Healthy = () => {
  return (
    <section className="challenge-help">
      <div className="container">
        <div className="help-row">
          <div className="col-1">
            <div className="row sub-row">
              <img src={message} alt="" />
              <p className="sub-title">Healthy Challenge</p>
            </div>
            <h3>You can do it. Intakes Challenge can help.</h3>
            <p>
              The <span> Intake Challenge</span> gets you on the road of
              achieving your diet goals.{" "}
              <span>
                What is motivating you to start better eating habits?.
              </span>
            </p>
            <div className="box">
              <h3>IN ADDITION TO REDUCING MY CANCER RISK, I WANT TO:</h3>
              {/*  */}
              <div className="inner-diet-row">
                <div className="mark-icon">
                  <ImCheckmark className="icon" />
                </div>
                <div className="txt">
                  <p>Build a Healthy Weight</p>
                </div>
              </div>
              {/*  */}
              <div className="inner-diet-row">
                <div className="mark-icon">
                  <ImCheckmark className="icon" />
                </div>
                <div className="txt">
                  <p>Eat a larger variety of healthy foods</p>
                </div>
              </div>
              {/*  */}
              <div className="inner-diet-row">
                <div className="mark-icon">
                  <ImCheckmark className="icon" />
                </div>
                <div className="txt">
                  <p>Add in more movement and exercise.</p>
                </div>
              </div>
              {/*  */}
              <div className="inner-diet-row">
                <div className="mark-icon">
                  <ImCheckmark className="icon" />
                </div>
                <div className="txt">
                  <p>Learn healthy new recipe</p>
                </div>
              </div>
              {/*  */}
              <div className="inner-diet-row">
                <div className="mark-icon">
                  <ImCheckmark className="icon" />
                </div>
                <div className="txt">
                  <p>Get my whole family eating healthier</p>
                </div>
              </div>
              <Link to='/challenge' className="accept-btn">Accept the challenge</Link>
            </div>
          </div>
          <div className="col-2">
            <img src={man} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Healthy;

import React, { useState } from "react";
import "../styles/Diet.css";
import { Footer, Nav, StayInTouch, challengeData } from "../components";
import { Link, useLocation } from "react-router-dom";

const DietPageSingle = () => {
  // state
  const location = useLocation();
  const restaurant = location.state;
  console.log(restaurant);

  return (
    <div className="challenge-wrapper single">
      <div className="diet-hero-wrapper">
        <div className="container">
          <Nav />
          <section className="challenge-header">
            <div className="hero-section">
              <h1>
                Intakes.ng <span>Challenge</span>
              </h1>
              <p>{restaurant.challengeTitle}</p>
            </div>
          </section>
        </div>
      </div>
      {/*  */}
      <section className="challenge-cards">
        <div className="container">
          <p>
            I accept the Intakes Challenge 0{restaurant.number} (
            {restaurant.challengeTitle}) for the duration of 30days, Please send
            details and weekly motivation to
          </p>
          <form action="" className="single-form">
            <input type="email" placeholder="Email Adress" />
            <button type="submit">I ACCEPT! Let’s Start</button>
          </form>
        </div>
      </section>
      {/*  */}
      <StayInTouch />
      <Footer />
    </div>
  );
};

export default DietPageSingle;

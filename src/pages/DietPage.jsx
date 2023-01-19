import React, { useState } from "react";
import "../styles/Diet.css";
import hero from "../assets/diet-img.png";

import calender from "../assets/calender.png";
import {
  Footer,
  Healthy,
  Nav,
  StayInTouch,
  challengeData,
} from "../components";
import { Link } from "react-router-dom";

import { HiStar } from "react-icons/hi";

const DietPage = () => {
  // state
  const [isShown, setIsShown] = useState(false);
  const [challenge, setChallenge] = useState(challengeData);
  // handle toggle
  const handleClick = (event) => {
    event.preventDefault();
    setIsShown((current) => !current);
  };
  return (
    <div className="challenge-wrapper">
      <div className="diet-hero-wrapper">
        <div className="container">
          <Nav />
          <section className="challenge-header">
            <div className="hero-text-section">
              <h1>
                <span>Intakes.ng</span> Challenge
              </h1>
              <p>
                Intakes.ng interactive program will help you build healthy
                habits to eat smarter.
              </p>

              <a href="#form-col" className="btn">
                ACCEPT THE CHALLENGE
              </a>
            </div>
            <div className="hero-img-section">
              <img src={hero} alt="" />
            </div>
          </section>
        </div>
      </div>
      {/*  */}
      <section className="challenge-cards" id="form-col">
        <div className="container">
          {/*  */}
          <div className="card-container">
            <div className="upper upper-show">
              <div>
                <h3 className="challenge-no">{`CHALLENGE 0${challenge[0]?.number}`}</h3>
                <p className="challenge-title">
                  {challenge[0]?.challengeTitle}
                </p>
                <p className="challenge-desc">{challenge[0]?.description}</p>
              </div>
            </div>
            <div className="lower">
              <Link
                className="lower-btn"
                state={challenge[0]}
                to={`/challenge/${challenge[0]?.challengeTitle}`}
              >
                Accept challenge
              </Link>
            </div>
          </div>
          {/*  */}
          <div className="card-container">
            <div className="upper upper-show">
              <div>
                <h3 className="challenge-no">{`CHALLENGE 0${challenge[1]?.number}`}</h3>
                <p className="challenge-title">
                  {challenge[1]?.challengeTitle}
                </p>
                <p className="challenge-desc">{challenge[1]?.description}</p>
              </div>
            </div>
            <div className="lower">
              <Link
                className="lower-btn"
                state={challenge[1]}
                to={`/challenge/${challenge[1]?.challengeTitle}`}
              >
                Accept challenge
              </Link>
            </div>
          </div>
          {/*  */}
          <div className="card-container">
            <div className="upper upper-show">
              <div>
                <h3 className="challenge-no">{`CHALLENGE 0${challenge[2]?.number}`}</h3>
                <p className="challenge-title">
                  {challenge[2]?.challengeTitle}
                </p>
                <p className="challenge-desc">{challenge[2]?.description}</p>
              </div>
            </div>
            <div className="lower">
              <Link
                className="lower-btn"
                state={challenge[2]}
                to={`/challenge/${challenge[2]?.challengeTitle}`}
              >
                Accept challenge
              </Link>
            </div>
          </div>
          {/*  */}
          <div className="card-container">
            <div className="upper upper-show">
              <div>
                <h3 className="challenge-no">{`CHALLENGE 0${challenge[3]?.number}`}</h3>
                <p className="challenge-title">
                  {challenge[3]?.challengeTitle}
                </p>
                <p className="challenge-desc">{challenge[3]?.description}</p>
              </div>
            </div>
            <div className="lower">
              <Link
                className="lower-btn"
                state={challenge[3]}
                to={`/challenge/${challenge[3]?.challengeTitle}`}
              >
                Accept challenge
              </Link>
            </div>
          </div>
          {/*  */}
          <div className="card-container">
            <div className="upper upper-show">
              <div>
                <h3 className="challenge-no">{`CHALLENGE 0${challenge[4]?.number}`}</h3>
                <p className="challenge-title">
                  {challenge[4]?.challengeTitle}
                </p>
                <p className="challenge-desc">{challenge[4]?.description}</p>
              </div>
            </div>
            <div className="lower">
              <Link
                className="lower-btn"
                state={challenge[4]}
                to={`/challenge/${challenge[4]?.challengeTitle}`}
              >
                Accept challenge
              </Link>
            </div>
          </div>
          {/*  */}
          <div className="card-container">
            <div className="upper upper-show">
              <div>
                <h3 className="challenge-no">{`CHALLENGE 0${challenge[0]?.number}`}</h3>
                <p className="challenge-title">
                  {challenge[0]?.challengeTitle}
                </p>
                <p className="challenge-desc">{challenge[0]?.description}</p>
              </div>
            </div>
            <div className="lower">
              <Link
                className="lower-btn"
                state={challenge[0]}
                to={`/challenge/${challenge[0]?.challengeTitle}`}
              >
                Accept challenge
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      {/* <Healthy /> */}
      {/*  */}
      <div className="testimonial-rating">
        <div className="container">
          <div className="rating">
            <HiStar className="star-icon" />
            <HiStar className="star-icon" />
            <HiStar className="star-icon" />
            <HiStar className="star-icon" />
            <HiStar className="star-icon" />
          </div>
          <h2>
            The challenge hasn’t just helped me alone, but also my family.
          </h2>
          <p className="name">
            CHALLENGE ACCEPTED: <span> BOLU, IBADAN</span>
          </p>
        </div>
      </div>
      {/*  */}
      <section className="challenge-calender">
        <div className="container">
          <div className="row">
            <div className="img-col">
              <img src={calender} alt="calender" />
            </div>
            <div className="form-col" id="form-col">
              <div className="form-inner-container">
                <h3>
                  Accept the intakes.ng challenge and get started today. It’s
                  free.
                </h3>
                <form className="form challenge">
                  <select name="challenge" id="challenge">
                    <option value="choose challenge">Choose challenge</option>
                    <option value="challenge">Challenge 1</option>
                    <option value="challenge">Challenge 2</option>
                    <option value="challenge">Challenge 3</option>
                  </select>
                  <input
                    type="email"
                    placeholder="Email address"
                    name="email_address"
                  />
                  <button
                    className="accept_btn"
                    onClick={(e) => e.preventDefault()}
                  >
                    I ACCEPT! Lets Start
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <StayInTouch />
      <Footer />
    </div>
  );
};

export default DietPage;

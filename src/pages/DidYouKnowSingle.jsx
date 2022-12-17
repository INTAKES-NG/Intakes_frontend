import React from "react";
import { useLocation } from "react-router-dom";
import { Footer, Nav, StayInTouch } from "../components";

const DidYouKnowSingle = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div className="did-you-know-wrapper">
      <div className="container">
        <Nav />
        <StayInTouch />
      </div>
      <Footer />
    </div>
  );
};

export default DidYouKnowSingle;

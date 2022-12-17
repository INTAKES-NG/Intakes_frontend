import React from "react";
import { Footer, Nav, StayInTouch } from "../components";

import logo from "../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Restaurant = () => {
  // state

  const data = [
    {
      id: 1,
      title: "first title",
      description: "description",
      author: "author",
      image: logo,
      pubDate: "12-12-2022",
    },
    {
      id: 2,
      title: "second title",
      description: "description",
      author: "author",
      image: logo,
      pubDate: "12-12-2022",
    },
    {
      id: 3,
      title: "third title",
      description: "description",
      author: "author",
      image: logo,
      pubDate: "12-12-2022",
    },
    {
      id: 4,
      title: "fourth title",
      description: "description",
      author: "author",
      image: logo,
      pubDate: "12-12-2022",
    },
  ];
  const [dummyData, setDummyData] = useState(data);
  console.log(dummyData);

  // mapped data
  const mappedData = data.map((item) => {
    return (
      <Link
        to={`/resN/${item.title}`}
        state={item}
        key={item.id}
        className="wrapper"
        style={{
          border: "2px solid red",
          margin: "20px",
        }}
      >
        <img
          src={item.image}
          alt=""
          style={{ width: "100px", height: "50px" }}
        />
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p>{item.pubDate}</p>
      </Link>
    );
  });
  //
  return (
    <div>
      <div className="container">
        <Nav />
        {mappedData}
        <StayInTouch />
      </div>
      <Footer />
    </div>
  );
};

export default Restaurant;

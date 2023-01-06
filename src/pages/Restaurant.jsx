import React from "react";
import "../styles/Restaurant.css";
import { Footer, Nav, StayInTouch } from "../components";

import map from "../assets/map.png";

import { HiStar } from "react-icons/hi";

import sofresh from "../assets/sofresh.png";
import smothie from "../assets/smoothie.png";
import ndali from "../assets/ndali.png";
import lomeedar from "../assets/lomeedar.png";
import salad from "../assets/salad.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Restaurant = () => {
  // state
  const [range, setRange] = useState(0);
  // restaurants data
  const data = [
    {
      name: "Lomeedar fresh",
      address: "9a church street off hospital road, Gbagada, Lagos.",
      instagram_Link: "https://instagram.com/lomeedarfresh",
      instagram: "@lomeedarfresh",
      image: lomeedar,
      website: "https://www.lomeedarfresh.com",
      website_name: "lomeedarfresh.com",
      link: "",
    },
    {
      name: "Ndali Nigeria",
      address: "No 3, nicole balogun street, lekki, Lagos.",
      instagram_Link: "https://instagram.com/ndali_nigeria",
      instagram: "@ndali_nigeria",
      image: ndali,
      website: "https://www.Linktree.com",
      website_name: "Linktree.com",
      link: "",
    },
    {
      name: "Smoothie Express",
      address: "7B wole ariyo, Lekki, Lagos.",
      instagram_Link: "https://instagram.com/smoothieexpressng",
      instagram: "@smoothieexpressng",
      image: smothie,
      website: "https://wa.me/+2349099319266",
      website_name: "+2349099319266",
      link: "",
    },
    {
      name: "nutjustsalad.ng",
      address: "Edge superstores, Lekki Lagos",
      instagram: "@nutjustsalad.ng",
      instagram_Link: "https://instagram.com/nutjustsalad.ng",
      image: salad,
      website: "https://wa.me/+2349124108929",
      website_name: "+2349124108929",
      link: "",
    },
    {
      name: "So fresh",
      address: "Edge superstores, Lekki Lagos",
      instagram_Link: "https://instagram.com/sofreshng",
      instagram: "@sofresh",
      image: sofresh,
      website: "https://www.sofreshng.com",
      website_name: "sofreshng.com",
      link: "",
    },
  ];

  // range seek fn
  const seekRange = () => {
    let seek_slider = document.querySelector(".seek-slider").value;
    setRange(seek_slider);
  };

  // const [restaurant, setRestaurant] = useState(data);
  // console.log(restaurant);

  // mapped data
  const mappedData = data.map(
    ({
      name,
      image,
      website,
      website_name,
      address,
      instagram,
      instagram_Link,
    }) => {
      return (
        <div key={name} className="restaurant">
          <div className="image">
            <img src={image} />
          </div>
          <div className="listing-content">
            <h2>{name}</h2>
            <div className="rating">
              <HiStar className="icon" />
              <HiStar className="icon" />
              <HiStar className="icon" />
              <HiStar className="icon" />
              <HiStar className="icon" />
            </div>
            <p>
              <span>Address: </span>
              {address}
            </p>
            <a className="links" href={instagram_Link}>
              <span>Instagram: </span>
              {instagram}
            </a>
            <a className="links" href={website}>
              <span>Website: </span>
              {website_name}
            </a>
            <a
              href={`http://maps.google.com/?q=${address}`}
              target="_blank"
              rel="noopener noreferrer"
              className="google-map-btn"
            >
              Check Map
            </a>
          </div>
        </div>
      );
    }
  );
  //
  return (
    <div className="restaurant-wrapper">
      <div className="container">
        <Nav />
        <div className="restaurant-hero">
          <div className="restaurant-selections">
            <article className="restaurant-selection">
              <h4>Enter Keyword</h4>
              <input type="text" placeholder="Enter Keyword" />
            </article>
            <article className="restaurant-selection">
              <h4>Listing Type</h4>
              <select name="" id="">
                <option value="Fast-food Restaurants">
                  Fast-food Restaurants
                </option>
              </select>
            </article>
            <article className="restaurant-selection">
              <h4>Enter Address</h4>
              <input type="text" placeholder="Enter Keyword" />
            </article>
          </div>
          {/* km range selection */}
          <div className="range-container">
            <h5>Choose km radius: {range} km</h5>
            <input
              type="range"
              className="seek-slider"
              name="range"
              id=""
              min="0"
              value={range}
              max="100"
              onChange={seekRange}
            />
          </div>
          {/* hero filter section */}
          <section className="filter-row">
            <articles className="filter-option">
              <h3>Filter by Amenities</h3>
              <div className="filter-options">
                <label htmlFor="open">
                  <input
                    type="radio"
                    name="amenities"
                    id="open"
                    value="OPEN 24/7"
                  />
                  OPEN 24/7
                </label>
                <label htmlFor="card">
                  <input type="radio" name="amenities" id="card" value="CARD" />
                  CARD
                </label>
                <label htmlFor="vegetarian">
                  <input
                    type="radio"
                    name="amenities"
                    id="vegetarian"
                    value="VEGETARIAN MENU"
                  />
                  VEGETARIAN MENU
                </label>
                <label htmlFor="garden">
                  <input
                    type="radio"
                    name="amenities"
                    id="garden"
                    value="GARDEN"
                  />
                  GARDEN
                </label>
                <label htmlFor="reservations">
                  <input
                    type="radio"
                    name="amenities"
                    id="reservations"
                    value="RESERVATIONS"
                  />
                  RESERVATIONS
                </label>
                <label htmlFor="pet">
                  <input
                    type="radio"
                    name="amenities"
                    id="pet"
                    value="PET FRIENDLY"
                  />
                  PET FRIENDLY
                </label>
              </div>
            </articles>
            <articles className="map">
              <img src={map} alt="" />
            </articles>
          </section>
          <button className="filter-btn">Filter Results</button>
        </div>
        <div className="restaurant-listing-wrapper">{mappedData}</div>
        <StayInTouch />
      </div>
      <Footer />
    </div>
  );
};

export default Restaurant;

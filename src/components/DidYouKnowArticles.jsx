import React from "react";

import Logo from "../assets/newLogo.png";
import person from "../assets/person.png";
import apple from "../assets/apple.png";
import fruitJuice from "../assets/fruit-juice-img.png";
import egg from "../assets/egg-img.png";
import seaFood from "../assets/seafood-img.png";
import strawberry from "../assets/strawberry.png";

import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css";
import { useState } from "react";

const DidYouKnowArticles = () => {
  // style
  const articles = [
    {
      title: "There is more sugar in lemon than in strawberries",
      image: person,
      link: "/didYouKnow",
    },
    {
      title: "Avocado has the highest protein content of any fruit.",
      image: apple,
      link: "/didYouKnow",
    },
    {
      title: "Low-fat usually means “sugar added” and should be avoided.",
      image: person,
      link: "/didYouKnow",
    },
    {
      title: "Fruit juice has as much sugar as Soda",
      image: fruitJuice,
    },
    {
      title: "There is more sugar in lemon than in strawberries",
      image: egg,
    },
    {
      title: "All part of an egg are good for you and packed with nutrition",
      image: seaFood,
    },
    {
      title:
        "Broccoli contains twice the amount of Vitamin C in an orange, it contains as much calcium as whole milk.",
      image: strawberry,
    },
  ];

  const mappedArticles = articles.map(({ title, image, link }) => {
    return (
      <SwiperSlide key={title}>
        <div
          style={{
            height: "200px",
            borderRadius: "8px",
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            className="relative-img"
            style={{ width: "100%", height: "100%" }}
          >
            <img src={image} alt="" style={{ width: "100%", height: "100%" }} />
          </div>
          <div className="absolute-contents">
            <div className="flex-item">
              <img
                src={Logo}
                alt="logo"
                style={{
                  position: "absolute",
                  top: "3%",
                  left: "5%",
                  width: "60px",
                  height: "50px",
                }}
              />
              <h3
                className="title"
                style={{
                  fontWeight: "400",
                  fontSize: "30px",
                  lineHeight: "33px",
                  color: "white",
                  textAlign: "left",
                }}
              >
                {title}
              </h3>
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  });
  return (
    <div className="did__you__know__section">
      <Swiper
        spaceBetween={30}
        slidesPerView={1.5}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        style={{ paddingBottom: "4rem" }}
      >
        {mappedArticles}
      </Swiper>
      {/* mobile */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiperMobile"
        style={{ paddingBottom: "4rem" }}
      >
        {mappedArticles}
      </Swiper>
    </div>
  );
};

export default DidYouKnowArticles;

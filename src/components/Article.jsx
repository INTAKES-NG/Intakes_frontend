import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css";

const Article = () => {
  const articles = [
    {
      title: "Unprocessed Food Is Healthiest",
      description:
        "Processed food is generally not as healthy as whole food. As the food system has become more industrialized, the health of the population has deteriorated. During food processing, many of the beneficial nutrients in the food are removed.....",
      link: "/",
    },
    {
      title: "Supplements Can Never Fully Replace Real Foods",
      description:
        "“Nutritionism” is the idea that foods are nothing more than the sum of their individual nutrients. But it’s also a trap that many nutrition enthusiasts tend to fall into. Nuts, for example, aren’t just shells loaded with polyunsaturated fat.......",
      link: "/",
    },
    {
      title: "Unprocessed Food Is Healthiest",
      description:
        "Processed food is generally not as healthy as whole food. As the food system has become more industrialized, the health of the population has deteriorated. During food processing, many of the beneficial nutrients in the food are removed.....",
      link: "/",
    },
    {
      title: "Supplements Can Never Fully Replace Real Foods",
      description:
        "“Nutritionism” is the idea that foods are nothing more than the sum of their individual nutrients. But it’s also a trap that many nutrition enthusiasts tend to fall into. Nuts, for example, aren’t just shells loaded with polyunsaturated fat.......",
      link: "/",
    },
    {
      title: "Unprocessed Food Is Healthiest",
      description:
        "Processed food is generally not as healthy as whole food. As the food system has become more industrialized, the health of the population has deteriorated. During food processing, many of the beneficial nutrients in the food are removed.....",
      link: "/",
    },
  ];

  const mappedArticles = articles.map((article) => {
    return (
      <SwiperSlide>
        <article className="article-wrapper">
          <h3 className="title">{article.title}</h3>
          <p className="description">{article.description}</p>
          <Link to={article.link} className="read-more-btn">
            Read more
          </Link>
        </article>
      </SwiperSlide>
    );
  });

  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1.8}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {mappedArticles}
      </Swiper>
    </div>
  );
};

export default Article;

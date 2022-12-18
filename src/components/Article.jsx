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
      title: "Eat these carbs to live longer",
      description:
        "White bread may spare several years of your life. But studies show that whole-wheat bread may be a life extender.It's all thanks to fibre. Fibre has long been known to improve both heart and digestive health. And now a new study reveals that fibre from whole grains may extend your lifespan.",
      link: "/articles-Eat-these-carbs-to-live-longer",
    },
    {
      title: "3 Foods To Avoid For A Healthier Lifestyle",
      description:
        "Eating healthy is a continious lifestyle, it helps protect you against lots of life threatening desises such as diabetes, heart dieses and cancer. ",
      link: "/article-3-food-to-avoid-for-a-healthier-lifestyle",
    },
    {
      title: "6 Tips to control food sizes",
      description:
        "Measuring out every meal can become a daunting task. Yet it is an important ritual that helps you control the amount of food you eat. There are simple things we can do to help eat the right serving size. ",
      link: "/article-6-Tips-to-control-food-sizes",
    },
    {
      title: "An Excess of Salty Food Seasons the Body With Stress, Study Says",
      description:
        "“Nutritionism” is the idea that foods are nothing more than the sum of their individual nutrients. But it’s also a trap that many nutrition enthusiasts tend to fall into. Nuts, for example, aren’t just shells loaded with polyunsaturated fat.......",
      link: "/articles",
    },
    // {
    //   title: "Unprocessed Food Is Healthiest",
    //   description:
    //     "Processed food is generally not as healthy as whole food. As the food system has become more industrialized, the health of the population has deteriorated. During food processing, many of the beneficial nutrients in the food are removed.....",
    //   link: "/articles",
    // },
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

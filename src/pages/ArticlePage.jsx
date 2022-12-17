import React from "react";
import { Footer, Nav, StayInTouch } from "../components";

import plate from "../assets/plate.png";
import newsImg from "../assets/news-img-1.png";

const NewNews = () => {
  return (
    <div className="article-page-wrapper">
      <div className="container">
        <Nav />
        <div
          className="latest-news-header-section"
          style={{ margin: "40px 0 20px" }}
        >
          <h3
            style={{
              width: "100%",
              background: "rgba(129, 178, 154, 1)",
              color: "rgba(243, 240, 221, 1)",
              textTransform: "uppercase",
              padding: "10px 20px",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "22px",
              fontFamily: "Lato",
            }}
          >
            Latest Headlines
          </h3>
        </div>
        <div className="news-section">
          <div className="row">
            <div
              className="news-image-section"
              style={{
                flexBasis: "65%",
                height: "360px",
                backgroundImage: `url(${plate})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "8px",
              }}
            ></div>
            <div
              className="news-article-section"
              style={{
                flexBasis: "33%",
                border: "2px solid red",
                height: "360px",
              }}
            ></div>
          </div>
          <div className="news-content-section">
            <h3 className="news-title">
              An Excess of Salty Food Seasons the Body With Stress, Study Says
            </h3>
            <p className="news-content">
              Scientists found in studies of mice that a high-salt diet
              increased the levels of a stress hormone by 75 per cent. Experts
              hope the findings will encourage a review of public health policy
              around salt consumption, with a view to manufacturers reducing the
              amount of salt in processed food. The recommended salt intake for
              adults is less than six grams a day but most people regularly eat
              about nine grams. This can contribute to higher blood pressure,
              which increases the risks of heart attacks, strokes and vascular
              dementia. While effects on the heart and circulatory system have
              been well established, little was known about the impact of a
              high-salt diet on a person's behaviour. To study this, experts
              from the University of Edinburgh used mice, who ordinarily have a
              low-salt diet, and gave them high-salt food to reflect the typical
              intake of humans. They found that not only did resting stress
              hormone levels increase, but the mice's hormone response to
              environmental stress was double that of mice that had a normal
              diet. Salt intake increased the activity of genes that produce the
              proteins in the brain which control how the body responds to
              stress.
            </p>
            <p className="news-content">
              Experts say further studies are already underway to understand if
              a high-salt intake leads to other behavioural changes such as
              anxiety and aggression. The study is published in Cardiovascular
              Research. It was funded by the British Heart Foundation and Kidney
              Research UK. Matthew Bailey, Professor of Renal Physiology at the
              University of Edinburgh's Centre for Cardiovascular Science, said:
              "We are what we eat and understanding how high-salt food changes
              our mental health is an important step to improving wellbeing. We
              know that eating too much salt damages our heart, blood vessels
              and kidneys. This study now tells us that high salt in our food
              also changes the way our brain handles stress."
            </p>
          </div>
          <div className="top-pick-footer-section">
            <div className="row"></div>
          </div>
        </div>
        <StayInTouch />
      </div>
      <Footer />
    </div>
  );
};

export default NewNews;

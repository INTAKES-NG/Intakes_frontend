import React from "react";
import { useLocation } from "react-router-dom";
import { FacebookEmbed } from "react-social-media-embed";

const ResN = () => {
  const location = useLocation();
  const dData = location?.state;
  console.log(dData);
  return (
    <div>
      <h2>{dData.title}</h2>
      <p>{dData.description}</p>
      <img src={dData.image} alt="" />
      <div
        className="social-media"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <FacebookEmbed
          url="https://www.facebook.com/andrewismusic/posts/451971596293956"
          width={550}
        />
      </div>
    </div>
  );
};

export default ResN;

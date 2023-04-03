import React from "react";
import "../../styles/Slideshow.css";

function SlideUI({ slide }) {
  let isOdd = true;

  if (slide.id === 1) {
    isOdd = false;
  }

  return (
    <div className="each-slide-effect">
      <div
        className="image__slider"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div className={`image__info image__info--${slide.id} ${isOdd === true ? "odd" : "even"}`}>
          <h1 className={`image__quote image__quote--${slide.id}`}>{`"${slide.quote}"`}</h1>
          <h3 className={`image__person image__person--${slide.id}`}>{slide.person}</h3>
        </div>
      </div>
    </div>
  );
}

export default SlideUI;

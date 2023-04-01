import React from "react";
import "../../styles/Slideshow.css";

function SlideUI({ slide }) {
  let isOdd = true;
  let odd = "odd";
  let even = even;

  if (slide.id == 1) {
    isOdd = false;
  }

  return (
    <div className="each-slide-effect">
      <div
        className="image__slider"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div className={`image__info ${isOdd === true ? "odd" : "even"}`}>
          <h1 className="image__quote">{`"${slide.quote}"`}</h1>
          <h3 className="image__person">{slide.person}</h3>
        </div>
      </div>
    </div>
  );
}

export default SlideUI;

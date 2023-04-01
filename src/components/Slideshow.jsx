import React, { useEffect } from "react";
import "../styles/Slideshow.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import Image1 from "../assets/Header_1.jpg";
import Image2 from "../assets/Header_2.jpg";
import Image3 from "../assets/Header_3.jpg";
import Image4 from "../assets/Header_4.jpg";
import Image5 from "../assets/Header_5.jpg";
import SlideUI from "./ui/SlideUI";

function Slideshow({ slideshows }) {
  const slideShowData = [
    {
      id: 1,
      quote: "The dizzying sound of Hitchcock and James Bond",
      person: "- Mads Kornum",
      image: Image1,
    },
    {
      id: 2,
      quote: "A terrific soundtrack – just without a movie",
      person: "- Side 33",
      image: Image2,
    },
    {
      id: 3,
      quote: "Melodic and sensual indie-film-noir expression",
      person: "- Mads Kornum",
      image: Image3,
    },
    {
      id: 4,
      quote: "Indefinable captivating Nordic melancholy",
      person: "- Side 33",
      image: Image4,
    },
    {
      id: 5,
      quote: "With an international footprint",
      person: "- Mads Kornum",
      image: Image5,
    },
  ];

  function checkScreenWidth() {
    if (document.querySelector(".slideshow--container")) {
      if (document.body.clientWidth < 700) {
        document.querySelector("main").querySelector("div").style.display =
          "none";
        document.querySelector(".mobile__image").style.display = "block";
      } else {
        document.querySelector("main").querySelector("div").style.display =
          "block";
        document.querySelector(".mobile__image").style.display = "none";
      }
    }
  }

  window.addEventListener("resize", checkScreenWidth);

  let randomQuote = null;

  function getRandomQuote() {
    randomQuote =
      slideShowData[Math.floor(Math.random() * slideShowData.length)];
    return randomQuote;
  }

  getRandomQuote();

  useEffect(() => {
    checkScreenWidth();
  }, []);

  return (
    <>
      <Slide id="slider">
        {slideShowData.map((slide) => (
          <SlideUI slide={slide} key={slide.id} />
        ))}
      </Slide>
      <div
        className="mobile__image"
        style={{
          backgroundImage: `url(${Image4})`,
        }}
      >
        <div className="mobile-image__info">
          <h1 className="mobile-image__quote">"{randomQuote.quote}"</h1>
          <h3 className="mobile-image__person">{randomQuote.person}</h3>
        </div>
      </div>
    </>
  );
}

export default Slideshow;

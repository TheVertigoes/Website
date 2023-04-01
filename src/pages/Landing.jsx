import React from "react";
import Slideshow from "../components/Slideshow.jsx";
import Videos from "../components/Videos.jsx";
import { slideShowData } from "../SlideShowData.js"

function Landing() {
  return (
    <main className="slideshow--container">
      <Slideshow slideshows={slideShowData} />
      <Videos />
    </main>
  );
}

export default Landing;

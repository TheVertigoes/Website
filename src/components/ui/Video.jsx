import React from "react";

function Video({ title, img, date, link, id }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="video">
      <figure className="video__img--wrapper">
        <img src={img} alt="" className="video__img" />
      </figure>
      <div className="video__info">
        <div className="video__info-top">
          <h1 className="video__title">{title}</h1>
          <h2 className="video__creator">The Vertigoes</h2>
        </div>
        <h2 className="video__date">{date}</h2>
      </div>
    </a>
  );
}

export default Video;

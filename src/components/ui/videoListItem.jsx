import React, { useEffect, useRef, useState } from "react";

function videoListItem({ video, selectVideo }) {
  const [img, setImg] = useState();

  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = video.image;
    image.onload = () => {
      setTimeout(() => {
        if (mountedRef.current) {
          setImg(image);
        }
      }, 300);
    };
    return () => {
      mountedRef.current = false;
    };
  }, [video.image]);

  function goTop(id, videoId) {
    selectVideo(id, videoId);
    setTimeout(() => {
      window.scrollTo({ top: 180, behavior: "smooth" });
    }, 200);
  }

  return (
    <button
      onClick={() => goTop(video.id, video.videoId)}
      id={video.id}
      className="video__item"
    >
      {!img ? (
        <>
          <figure className="video__item__img--wrapper">
            <div className="video__item__img video__item__img--loading"></div>
          </figure>
          <div className="video__item__info">
            <div className="video__item__info-top">
              <div className="video__item__title video__item__title--loading"></div>
              <div className="video__item__creator--loading video__item__creator"></div>
            </div>
            <div className="video__item__date video__item__date--loading"></div>
          </div>
        </>
      ) : (
        <>
          <figure className="video__item__img--wrapper">
            <img src={video.image} alt="" className="video__item__img" />
          </figure>
          <div className="video__item__info">
            <div className="video__item__info-top">
              <h1 className="video__item__title">{video.title}</h1>
              <h2 className="video__item__creator">The Vertigoes</h2>
            </div>
            <h2 className="video__item__date">{video.date}</h2>
          </div>
        </>
      )}
    </button>
  );
}

export default videoListItem;

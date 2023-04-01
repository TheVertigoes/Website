import React, { useState } from "react";
import VideosList from "../components/VideosList";
import YTvideo from "../components/YTvideo";
import { videosList } from "../data/Videos.js";

function Videos() {
  const [videoId, setVideoId] = useState(videosList[0].videoId)

  function selectVideo(Id, videoId) {
    console.log(Id, videoId);
    setVideoId(videoId)
    let elements = document.getElementsByClassName("video__item");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor="#0e0e0e";
    }

    document.getElementById(Id).style.backgroundColor = "#303030"
  }

  return (
    <main>
      <YTvideo videoId={videoId} />
      <VideosList selectVideo={selectVideo} />
    </main>
  );
}

export default Videos;

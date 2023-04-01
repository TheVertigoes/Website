import React from "react";
import { videosList } from "../data/Videos";
import VideoListItem from "./ui/videoListItem";
import "../styles/VideosList.css";

function VideosList({ selectVideo }) {
  return (
    <>
      <div className="videos__list--container">
        {videosList.map((video) => (
          <VideoListItem
            video={video}
            selectVideo={selectVideo}
            key={video.id}
          />
        ))}
      </div>
    </>
  );
}

export default VideosList;

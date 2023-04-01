import React from "react";
import YouTube from 'react-youtube';

function YTvideo({ videoId }) {
  return <YouTube videoId={videoId} />
}

export default YTvideo;

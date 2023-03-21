import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { statistics, snippet } = info;
  const { title, channelTitle, thumbnails } = snippet;

  return (
    <div className="w-96 border p-2 rounded-lg shadow-md">
      <img src={thumbnails?.maxres?.url} alt="thumbnail" />
      <h2>{title}</h2>
      <h2 className="font-medium">{channelTitle} ✔</h2>
      <h2>{statistics?.viewCount}</h2>
    </div>
  );
};

export default VideoCard;

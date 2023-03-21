import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoDisplay = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const request = await fetch(YOUTUBE_VIDEOS_API);
    const json = await request.json();
    setVideos(json?.items);
    // console.log(json.items);
  };

  return (
    <div className="flex flex-wrap gap-3 pt-3">
      {videos.map((item) => {
        return (
          <Link to={"/watch?v=" + item.id} key={item.id}>
            <VideoCard key={item.id} info={item} />
          </Link>
        );
      })}
      {/* <VideoCard info={videos[0]} /> */}
    </div>
  );
};

export default VideoDisplay;

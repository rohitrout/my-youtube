import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import { YOUTUBE_VIDEO_ID } from "./../utils/constants";
import ReactPlayer from "react-player";
import RecommendedVideoCard from "./RecommendedVideoCard";

const WatchPage = () => {
  const [details, setDetails] = useState([]);
  const [recommendedVideos, setRecommendedVideos] = useState([]);
  // console.log(recommendedVideos[0]);
  const [params] = useSearchParams();
  // const id = params.get("v");

  // console.log(params.get("v"));

  useEffect(() => {
    getVideoDetailsById();
    getRecommendedVideos();
  }, []);

  const getVideoDetailsById = async () => {
    const response = await fetch(
      // "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=+${id}&key=AIzaSyCgrOPV8diC4KeOtoBWJi_44VA7vN5aU_E"
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
        params.get("v") +
        "&key=AIzaSyCgrOPV8diC4KeOtoBWJi_44VA7vN5aU_E"

      // "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=YLt73w6criQ&key=AIzaSyCgrOPV8diC4KeOtoBWJi_44VA7vN5aU_E"
    );
    const json = await response.json();
    setDetails(json.items);
    // console.log(json);
  };

  const getRecommendedVideos = async () => {
    const response = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&relatedToVideoId=" +
        params.get("v") +
        "&type=video&key=AIzaSyCgrOPV8diC4KeOtoBWJi_44VA7vN5aU_E"
    );
    const json = await response.json();
    setRecommendedVideos(json.items);
  };

  return (
    <>
      <div className="p-3 mt-2 w-[1350px]">
        <ReactPlayer
          controls
          width="1300px"
          height="750px"
          url={"https://www.youtube.com/embed/" + params.get("v")}
        />

        <div className="">
          <h2 className="font-medium text-lg pt-3 pb-3">
            {details[0]?.snippet?.title}
          </h2>
          <h2 className="font-medium text-base">
            Views: {details[0]?.statistics?.viewCount}
          </h2>
          <h2 className="font-extrabold text-xl p-4 border w-64 rounded-full bg-gray-200 m-2">
            {details[0]?.snippet?.channelTitle} ✔
          </h2>
          <h2 className="bg-gray-100 p-3 rounded-lg">
            Description: {details[0]?.snippet?.description}
          </h2>
        </div>
      </div>

      <div>
        Recommended Videos
        {recommendedVideos.map((item) => (
          <Link to={"/watch?v=" + item?.id?.videoId} key={item?.id?.videoId}>
            <RecommendedVideoCard info={item} />
          </Link>
        ))}
        {/* <RecommendedVideoCard info={recommendedVideos[0]} /> */}
      </div>
    </>
  );
};

export default WatchPage;

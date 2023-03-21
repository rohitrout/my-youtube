import React from "react";

const RecommendedVideoCard = (props) => {
  //   console.log(snippet);
  //   const { channelTitle, title } = snippet;
  return (
    <div className="flex gap-4 pt-3 m-2">
      <img
        className="w-52 rounded-lg"
        src={props?.info?.snippet?.thumbnails?.maxres?.url}
        alt="image"
      />
      <div className="">
        <h1 className="text-xl font-semibold">{props?.info?.snippet?.title}</h1>
        <h1 className="text-sm text-gray-500">
          {props?.info?.snippet?.channelTitle} ✔
        </h1>
      </div>
    </div>
  );
};

export default RecommendedVideoCard;

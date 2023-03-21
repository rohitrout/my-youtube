import React from "react";

const ResultsCard = (props) => {
  return (
    <div className="p-4 pt-8 pl-10 flex gap-3">
      <img
        className="w-72"
        src={props?.info?.snippet?.thumbnails?.high?.url}
        alt="imageResult"
      />
      <div className="pt-16">
        <h2 className="text-xl">{props?.info?.snippet?.title}</h2>
        <h2 className="text-gray-400">
          {props?.info?.snippet?.channelTitle} ✔
        </h2>
      </div>
    </div>
  );
};

export default ResultsCard;

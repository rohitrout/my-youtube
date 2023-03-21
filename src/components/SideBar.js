import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const bar = useSelector((store) => store.side.slideView);
  // console.log(bar);

  if (!bar) return null;
  return (
    <div className="flex flex-col gap-3 p-8 pr-20 border-r-2 shadow-lg">
      <ul>
        <li className="font-medium">Subscriptions</li>
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Live</li>
      </ul>
      <ul>
        <li className="font-medium">Subscriptions</li>
        <li>Gaming</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Sports</li>
      </ul>
      <ul>
        <li className="font-medium">Subscriptions</li>
        <li>Gaming</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Sports</li>
      </ul>
    </div>
  );
};

export default SideBar;

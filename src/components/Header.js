import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggle } from "../utils/sideSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [search, setSearch] = useState([]);
  const [seeSearchBox, setSeeSearchBox] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      getYoutubeSearch();
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getYoutubeSearch = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await response.json();
    setSearch(json[1]);
    // console.log(json[1]);
  };

  const handleChange = () => {
    dispatch(toggle());
  };

  return (
    <div className="flex h-20 w-auto px-10 py-6 border shadow-lg  content-center justify-between">
      <div className="flex gap-2 items-center">
        {/* <button onClick={handleChange()} className="cursor-pointer"> */}
        <img
          onClick={() => handleChange()}
          className="w-8 h-8"
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
          }
          alt="ham"
        />

        <img
          className="w-16 h-14 "
          src={
            "https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg?w=2000"
          }
          alt="logo"
        />
        {/* <h1>Youtube</h1> */}
      </div>
      <div>
        <div className="flex items-center">
          <input
            className="border w-96 h-10 rounded-l-full pl-4"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setSeeSearchBox(true)}
            onBlur={() => setSeeSearchBox(false)}
          />

          <Link to={"/results?s=" + searchQuery}>
            <button className="border rounded-r-full h-10 px-4 bg-gray-200">
              Search
            </button>
          </Link>
        </div>
        {seeSearchBox && (
          <div className="bg-white fixed p-3 w-96 rounded-lg border">
            <ul>
              {search.map((item) => (
                <li
                  className="hover:bg-gray-200 p-1 rounded"
                  key={item}
                  onClick={() => console.log("clicked through list")}
                >
                  🔍 {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <img
        className="w-8 h-8"
        src={"https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"}
        alt="user"
      />
    </div>
  );
};

export default Header;

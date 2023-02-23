import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Genres = () => {
  const [isBrowse, setIsBrowse] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setIsBrowse(false);
  }, [pathname]);
  return (
    <div className="w-screen ">
      <div className="flex lg-genre-container text-sm gap-4">
        <Link to="/">
          <button>Home</button>
        </Link>
        <button>TV Shows</button>
        <button>Movies</button>
        <button>New & Popular</button>
        <Link to="/myList">
          <button>My List</button>
        </Link>
        <button>Browse by Languages</button>
      </div>

      <div className=" md-genre-container text-sm relative">
        <div className="cursor-pointer">
          <button onClick={() => setIsBrowse(!isBrowse)}>Browse</button>
          <ArrowDropDownIcon
            onClick={() => setIsBrowse(!isBrowse)}
            className="cursor-pointer profile-arrow"
          />
        </div>

        {isBrowse && (
          <div className="bg-black bg-opacity-90 absolute top-11 -left-24 flex-row w-full border-t-2">
            <Link to="/">
              <button className="block m-auto p-4">Home</button>
            </Link>

            <button className="block m-auto p-4">Movies</button>
            <button className="block m-auto p-4">New & Popular</button>
            <button className="block m-auto p-4">TV Shows</button>
            <Link to="/myList">
              <button className="block m-auto p-4">My List</button>
            </Link>

            <button className="block m-auto p-4">Browse by Language</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Genres;

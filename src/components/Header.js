import React from "react";
import { Link } from "react-router-dom";
import Genres from "./Genres";
import NotificationList from "./NotificationList";
import ProfileList from "./ProfileList";
import Search from "./Search";
const Header = () => {
  return (
    <section className="flex items-center py-3 px-12 fixed top-0 w-full header">
      <Link to="/">
        <div className="netflix text-3xl font-bold text-red-600 mr-12">
          NETFLIX
        </div>
      </Link>
      <Genres />
      <Search />
      <div className="mr-4">
        <button>Children</button>
      </div>
      <NotificationList />
      <ProfileList />
    </section>
  );
};

export default Header;

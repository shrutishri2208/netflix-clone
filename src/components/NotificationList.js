import React, { useState, useEffect } from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { notifications } from "../utils/notifications";
import Notification from "./Notification";
import { useLocation } from "react-router-dom";

const NotificationList = () => {
  const [isNotification, setIsNotification] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsNotification(false);
  }, [pathname]);
  return (
    <div className="relative mr-4">
      <div>
        <NotificationsNoneIcon
          className="cursor-pointer"
          onClick={() => setIsNotification(!isNotification)}
        />
        <p className=" absolute top-0 -right-1 bg-red-700  text-center rounded-full px-1 text-xs">
          2
        </p>
      </div>
      {isNotification && (
        <div className="absolute w-96 top-12 right-0 bg-black border-t-2">
          {notifications.map((notification) => {
            return <Notification {...notification} />;
          })}
        </div>
      )}
    </div>
  );
};

export default NotificationList;

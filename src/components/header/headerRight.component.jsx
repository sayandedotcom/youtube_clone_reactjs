import React, { useState } from "react";
import "./header.component.scss";
import { Tooltip } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import Image from "../../assests/CircleImage.png";

const Headerright = () => {
  const [addVideo, setAddVideo] = useState(false);
  const [notification, setNotification] = useState(false);
  return (
    <div className="header__right">
      <Tooltip title="Create" placement="bottom">
        <div
          className="header__right__addvideo"
          onClick={() => setAddVideo(!addVideo)}
        >
          {addVideo ? (
            <VideoCallIcon style={{ fontSize: 27 }} />
          ) : (
            <VideoCallOutlinedIcon style={{ fontSize: 27 }} />
          )}
        </div>
      </Tooltip>

      <Tooltip title="Notifications" placement="bottom">
        <div
          className="header__right__notification"
          onClick={() => setNotification(!notification)}
        >
          {notification ? (
            <NotificationsIcon style={{ fontSize: 27 }} />
          ) : (
            <NotificationsOutlinedIcon style={{ fontSize: 27 }} />
          )}
        </div>
      </Tooltip>

      <div className="header__right__user_dp">
        <img src={Image} alt="" className="image" />
      </div>
    </div>
  );
};

export default Headerright;

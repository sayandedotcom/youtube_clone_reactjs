import React, { useState } from "react";
import "./header.component.scss";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { ReactComponent as Logo } from "../../assests/YouTube_Logo_2017.svg";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceRoundedIcon from "@mui/icons-material/KeyboardVoiceRounded";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import Image from "../../assests/CircleImage.png";

const Header = ({ open, setOpen }) => {
  const [addVideo, setAddVideo] = useState(false);
  const [notification, setNotification] = useState(false);

  return (
    <header className="header">
      <div className="header__left">
        <div className="header__left__menu" onClick={() => setOpen(!open)}>
          <MenuRoundedIcon style={{ fontSize: 27 }} />
        </div>
        <Link to="/">
          <Logo className="header__left__yticon" />
        </Link>
      </div>
      <div className="header__center">
        <form className="header__center__search_box">
          <input placeholder="Search" className="search_bar" />
          <button type="submit" className="search_btn">
            <SearchIcon style={{ fontSize: 27 }} className="search__icon" />
          </button>
        </form>
        <div className="header__center__voice">
          <KeyboardVoiceRoundedIcon />
        </div>
      </div>
      <div className="header__right">
        {/* {categories.map(({ icons, activeIcons, name }, i) => (
          <div
            key={i}
            className="header__right__addvideo"
            onClick={() => handleClick(i)}
          >
            {activeElement === i ? activeIcons : icons}
          </div>
        ))} */}
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
        <div className="header__right__user_dp">
          <img src={Image} alt="" className="image" />
        </div>
      </div>
    </header>
  );
};

export default Header;

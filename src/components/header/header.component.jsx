import React, { useState } from "react";
import "./header.component.scss";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { ReactComponent as Logo } from "../../assests/YouTube_Logo_2017.svg";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceRoundedIcon from "@mui/icons-material/KeyboardVoiceRounded";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Image from "../../assests/CircleImage.png";
import { Tooltip } from "@mui/material";

const Header = ({ open, setOpen }) => {
  const [addVideo, setAddVideo] = useState(false);
  const [notification, setNotification] = useState(false);
  const [input, setInput] = useState("");
  const location = useLocation();

  const refresh = () => {
    if (location.pathname === "/") {
      window.location.reload(true);
    }
  };
  let navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
  };

  return (
    <header className="header">
      <div className="header__left">
        <div className="header__left__menu" onClick={() => setOpen(!open)}>
          <MenuRoundedIcon style={{ fontSize: 27 }} />
        </div>
        <Tooltip title="YouTube Home" placement="bottom-end">
          <Link to="/">
            <Logo className="header__left__yticon" onClick={refresh} />
          </Link>
        </Tooltip>
      </div>

      <div className="header__center">
        <form onSubmit={handleChange} className="header__center__search_box">
          <input
            type="text"
            placeholder="Search"
            className="search_bar"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <div
            className={
              input.length === 0
                ? "search_close"
                : "search_close search_close--hidden"
            }
            onClick={() => setInput("")}
          >
            <CloseRoundedIcon />
          </div>
          <Tooltip title="Search" placement="bottom">
            <button type="submit" className="search_btn">
              <SearchIcon style={{ fontSize: 27 }} className="search__icon" />
            </button>
          </Tooltip>
        </form>
        <Tooltip title="Search with your voice" placement="bottom">
          <div className="header__center__voice">
            <KeyboardVoiceRoundedIcon />
          </div>
        </Tooltip>
      </div>

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
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import "./header.component.scss";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceRoundedIcon from "@mui/icons-material/KeyboardVoiceRounded";
import { Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Headercenter = ({ progress, setProgress }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
  };
  const loader = () => {
    setProgress(progress + 100);
  };
  return (
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
          <CloseRoundedIcon style={{ fontSize: 30 }} />
        </div>
        <Tooltip title="Search" placement="bottom">
          <button type="submit" className="search_btn" onClick={loader}>
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
  );
};

export default Headercenter;

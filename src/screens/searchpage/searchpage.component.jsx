import { Divider, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SearchVideo from "../../components/searchvideo/searchvideo.component";
import TuneIcon from "@mui/icons-material/Tune";
import { getSearchedVideos } from "../../redux/searchSlice";

import "./searchpage.component.scss";
const SearchPage = () => {
  const { input } = useParams();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    dispatch(getSearchedVideos(input));
  }, [input, dispatch]);
  const { videos } = useSelector((state) => state.searchVideos);
  return (
    <div className="search__videos">
      <Tooltip title="Filters" placement="bottom">
        <span className="search__filters" onClick={() => setVisible(!visible)}>
          <TuneIcon />
          Filters
        </span>
      </Tooltip>
      <div
        className={
          !visible ? "search__options" : "search__options search__options--show"
        }
      >
        <div className="filter__options">UPLOAD DATE</div>
        <div className="filter__options">TYPE</div>
        <div className="filter__options">DURATION</div>
        <div className="filter__options">FEATURES</div>
        <div className="filter__options">SORT BY</div>
      </div>
      <Divider style={{ borderTop: "1px solid grey" }} />

      {videos.map((video) => (
        <SearchVideo video={video} key={video.id.videoId} />
      ))}
    </div>
  );
};

export default SearchPage;

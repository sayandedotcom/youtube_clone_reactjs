import { Divider, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SearchVideo from "../../components/searchvideo/searchvideo.component";
import TuneIcon from "@mui/icons-material/Tune";
import { getSearchedVideos } from "../../redux/searchSlice";
import "./searchpage.component.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../../components/spinner/spinner.component";

const SearchPage = () => {
  const { input } = useParams();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch(getSearchedVideos(input));
  }, [input, dispatch]);

  const { videos } = useSelector((state) => state.searchVideos);

  const fetchSearchData = () => {
    dispatch(getSearchedVideos(input));
  };

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

      <InfiniteScroll
        dataLength={videos.length}
        next={fetchSearchData}
        hasMore={true}
        loader={<Spinner />}
        className="searchinfinite"
      >
        {videos.map((video, i) => (
          <SearchVideo video={video} key={i} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default SearchPage;

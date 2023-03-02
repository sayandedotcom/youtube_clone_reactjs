import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SearchVideo from "../../components/searchvideo/searchvideo.component";
import { getSearchedVideos } from "../../redux/searchSlice";

import "./searchpage.component.scss";
const SearchPage = () => {
  const { input } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSearchedVideos(input));
  }, [input, dispatch]);
  const { videos } = useSelector((state) => state.searchVideos);
  return (
    <div className="search__videos">
      <hr />
      {videos.map((video) => (
        <SearchVideo video={video} key={video.id.videoId} />
      ))}
    </div>
  );
};

export default SearchPage;

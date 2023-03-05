import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Category from "../../components/category/category.component";
import Video from "../../components/video/video.component";
import Videoskeleton from "../../components/videoskeleton/videoskeleton.component";
import Spinner from "../../components/spinner/spinner.component";
import { getPopularVideos, getCategoryVideos } from "../../redux/popularSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import "./homepage.component.scss";

const HomePage = ({ progress, setProgress }) => {
  useEffect(() => {
    setProgress(100);
  }, []);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos, activeCategory, isLoading } = useSelector(
    (state) => state.homeVideos
  );

  const fetchData = () => {
    if (activeCategory === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getCategoryVideos(activeCategory));
    }
  };

  return (
    <>
      <Category />
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        loader={<Spinner />}
        className="infinite"
      >
        {!isLoading
          ? videos.map((video) => (
              <Video video={video} key={video.id.videoId} />
            ))
          : [...new Array(20)].map((_, i) => <Videoskeleton key={i} />)}
      </InfiniteScroll>
    </>
  );
};
export default HomePage;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Category from "../../components/category/category.component";
import Video from "../../components/video/video.component";
import Videoskeleton from "../../components/videoskeleton/videoskeleton.component";
import { getPopularVideos } from "../../redux/popularSlice";
import "./homepage.component.scss";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos, isLoading } = useSelector((state) => state.homeVideos);

  return (
    <>
      <Category />
      <div className="home__videos">
        {videos.map((video) => (
          <Video video={video} key={video.id.videoId} />
        ))}
      </div>
    </>
  );
};
export default HomePage;

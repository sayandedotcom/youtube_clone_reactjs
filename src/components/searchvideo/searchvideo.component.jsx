import React from "react";
import Thumbnail from "../../assests/thumbnail.jpg";
import Channel from "../../assests/channel.jpg";
import "./searchvideo.component.scss";
const SearchVideo = () => {
  return (
    <div className="searchvideo">
      <img className="searchvideo__image" src={Thumbnail} alt="" />
      <div className="searchvideo__bottom">
        <div className="searchvideo__info">
          <p className="searchvideo__title">
            This is a demo template of the Vidoe of Css and I am going to Use
            this
          </p>
          <span className="searchvideo__views">1k Views • </span>
          <span className="searchvideo__time">10 Days ago</span>
          <div className="searchvideo__side">
            <img className="searchvideo__thumbnail" src={Channel} alt="" />
            <p className="searchvideo__channel">Channel Name</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchVideo;

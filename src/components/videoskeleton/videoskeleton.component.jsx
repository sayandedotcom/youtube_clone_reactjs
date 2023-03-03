import React from "react";
import "./videoskeleton.component.scss";
const Videoskeleton = () => {
  return (
    <div className="videosk">
      <div className="videosk__image" />
      <div className="videosk__bottom">
        <div className="videosk__thumbnail" />
        <div>
          <div className="videosk__title"></div>
          <div className="videosk__channel"></div>
        </div>
      </div>
    </div>
  );
};

export default Videoskeleton;
{
  /* <div className="video">
<img className="video__image" src={Skeleton} alt="" />
<div className="video__bottom">
  <img className="video__thumbnail" src={Skeleton} alt="" />
  <div className="video__info">
    <div className="video__title"></div>
    <div className="video__channel"></div>
  </div>
</div>
</div> */
}

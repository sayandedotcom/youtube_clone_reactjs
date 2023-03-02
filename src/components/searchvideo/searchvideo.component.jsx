import React, { useEffect, useState } from "react";
import Thumbnail from "../../assests/thumbnail.jpg";
import Channel from "../../assests/channel.jpg";
import "./searchvideo.component.scss";
import request from "../../api";
import moment from "moment/moment";
import numeral from "numeral";
const SearchVideo = ({ video }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      thumbnails: { medium },
    },
    contentDetails,
  } = video;
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const _videoId = id?.videoId || contentDetails?.videoId || id;

  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: _videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    get_video_details();
  }, [_videoId]);

  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    get_channel_icon();
  }, [channelId]);

  return (
    <div className="searchvideo">
      <img className="searchvideo__image" src={medium.url} alt="" />
      <div className="searchvideo__bottom">
        <div className="searchvideo__info">
          <p className="searchvideo__title">{title}</p>
          <span className="searchvideo__views">
            {numeral(views).format("0.a")} •{" "}
          </span>
          <span className="searchvideo__time">
            {moment(publishedAt).fromNow()}
          </span>
          <div className="searchvideo__side">
            <img
              className="searchvideo__thumbnail"
              src={channelIcon?.url}
              alt=""
            />
            <p className="searchvideo__channel">{channelTitle}</p>
          </div>
          <p className="searchvideo__description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchVideo;

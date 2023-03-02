import React, { useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import "./sidebarclose.component.scss";
const categories = [
  {
    icons: <HomeOutlinedIcon style={{ fontSize: 27 }} />,
    activeIcons: <HomeIcon style={{ fontSize: 27 }} />,
    name: "Home",
  },
  {
    icons: <ExploreOutlinedIcon style={{ fontSize: 27 }} />,
    activeIcons: <ExploreIcon style={{ fontSize: 27 }} />,
    name: "Explore",
  },
  {
    icons: <SubscriptionsOutlinedIcon style={{ fontSize: 27 }} />,
    activeIcons: <SubscriptionsIcon style={{ fontSize: 27 }} />,
    name: "Subscriptions",
  },
  {
    icons: <VideoLibraryOutlinedIcon style={{ fontSize: 27 }} />,
    activeIcons: <VideoLibraryIcon style={{ fontSize: 27 }} />,
    name: "Library",
  },
];
const SidebarClose = () => {
  const [activeElement, setActiveElement] = useState(0);
  const handleClick = (i) => setActiveElement(i);

  return (
    <div className="sidebarclose">
      {categories.map(({ icons, activeIcons, name }, i) => (
        <div
          key={i}
          className="sidebarclose__items"
          onClick={() => handleClick(i)}
        >
          {activeElement === i ? activeIcons : icons}
          <span className="sidebarclose__text">{name}</span>
        </div>
      ))}
    </div>
  );
};

export default SidebarClose;

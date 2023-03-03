import { Tooltip } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPopularVideos } from "../../redux/popularSlice";
import { getCategoryVideos } from "../../redux/popularSlice";
import "./category.component.scss";
const categories = [
  "All",
  "Movies",
  "Podcasts",
  "React",
  "India",
  "Messi",
  "Ronaldo",
  "Neymar",
  "IPL",
  "Politics",
  "Science",
  "USA",
  "UK",
  "Pakistan",
  "China",
  "Brazil",
  "Argentina",
  "Dubai",
  "Songs",
];
const Category = () => {
  const dispatch = useDispatch();
  const [activeElement, setActiveElement] = useState("All");
  const handleClick = (value) => {
    setActiveElement(value);
    if (value === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getCategoryVideos(value));
    }
  };
  return (
    <div className="categories">
      {categories.map((value, i) => (
        <Tooltip title={value} placement="bottom-end" key={i}>
          <div
            className={activeElement === value ? "tags tags--active" : "tags"}
            key={i}
            onClick={() => handleClick(value)}
          >
            {value}
          </div>
        </Tooltip>
      ))}
    </div>
  );
};

export default Category;

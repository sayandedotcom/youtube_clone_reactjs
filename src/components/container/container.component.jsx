import React from "react";
import "./container.scss";
const Container = ({ open, children }) => {
  return (
    <div className={open ? "container" : "container container--close"}>
      {children}
    </div>
  );
};

export default Container;

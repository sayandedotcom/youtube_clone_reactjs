import React from "react";
import SidebarClose from "../sidebarclose/sidebarclose.component";
import SidebarOpen from "../sidebaropen/sidebar.component";
import "./container.scss";
const Container = ({ open, children }) => {
  return (
    <>
      {open ? <SidebarOpen /> : <SidebarClose />}
      <div className={open ? "container" : "container container--close"}>
        {children}
      </div>
    </>
  );
};

export default Container;

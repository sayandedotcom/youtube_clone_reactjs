import React, { useState } from "react";
import categories from "./sidebaropenCategories";
import "./sidebar.component.scss";
import { Divider } from "@mui/material";

const SidebarOpen = () => {
  const [activeElement, setActiveElement] = useState(0);
  const handleClick = (i) => setActiveElement(i);

  return (
    <div className="sidebar">
      {categories.map(
        ({ icons, activeIcons, name }, i) =>
          i < 3 && (
            <div
              key={i}
              className={
                activeElement === i
                  ? "sidebar__items sidebar__items--active"
                  : "sidebar__items"
              }
              onClick={() => handleClick(i)}
            >
              {activeElement === i ? activeIcons : icons}
              <span className="sidebar__text">{name}</span>
            </div>
          )
      )}
      <Divider style={{ borderTop: "1px solid grey", margin: "14px 0px" }} />
      {categories.map(
        ({ icons, activeIcons, name }, i) =>
          i >= 3 &&
          i < 8 && (
            <div
              key={i}
              className={
                activeElement === i
                  ? "sidebar__items sidebar__items--active"
                  : "sidebar__items"
              }
              onClick={() => handleClick(i)}
            >
              {activeElement === i ? activeIcons : icons}
              <span className="sidebar__text">{name}</span>
            </div>
          )
      )}
      <Divider style={{ borderTop: "1px solid grey", margin: "14px 0px" }} />
      <p>Explore</p>
      {categories.map(
        ({ icons, name }, i) =>
          i >= 8 &&
          i <= 16 && (
            <div key={i} className={"sidebar__items"}>
              {icons}
              <span className="sidebar__text">{name}</span>
            </div>
          )
      )}
      <Divider style={{ borderTop: "1px solid grey", margin: "14px 0px" }} />
      <p>More From Youtube</p>
      {categories.map(
        ({ icons, name }, i) =>
          i > 16 &&
          i <= 21 && (
            <div key={i} className={"sidebar__items"}>
              <img src={icons} alt="yt" className="sidebar__icon" />
              <span className="sidebar__text">{name}</span>
            </div>
          )
      )}
      <Divider style={{ borderTop: "1px solid grey", margin: "14px 0px" }} />
      {categories.map(
        ({ icons, name }, i) =>
          i > 21 && (
            <div key={i} className={"sidebar__items"}>
              {icons}
              <span className="sidebar__text">{name}</span>
            </div>
          )
      )}
      <Divider style={{ borderTop: "1px solid grey", margin: "14px 0px" }} />
      <p>
        About Press Copyright Contact us <br /> <br />© 2023 Google LLC
      </p>
    </div>
  );
};

export default SidebarOpen;

import React, { useState } from "react";
import categories from "./sidebaropenCategories";
import "./sidebar.component.scss";

const SidebarOpen = () => {
  const [activeElement, setActiveElement] = useState(0);
  const handleClick = (i) => setActiveElement(i);

  return (
    <div className="sidebar">
      {categories.map(({ icons, activeIcons, name }, i) => (
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
      ))}
    </div>
  );
};

export default SidebarOpen;

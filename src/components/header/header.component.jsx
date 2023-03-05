import React from "react";
import "./header.component.scss";
import Headerright from "./headerRight.component";
import Headercenter from "./headerCenter.component";
import Headerleft from "./headerLeft.component";

const Header = ({ progress, setProgress, open, setOpen }) => {
  return (
    <header className="header">
      <Headerleft
        open={open}
        setOpen={setOpen}
        progress={progress}
        setProgress={setProgress}
      />
      <Headercenter
        open={open}
        setOpen={setOpen}
        progress={progress}
        setProgress={setProgress}
      />
      <Headerright />
    </header>
  );
};

export default Header;

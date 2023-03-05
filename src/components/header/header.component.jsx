import React from "react";
import "./header.component.scss";
import Headerright from "./headerRight.component";
import Headercenter from "./headerCenter.component";
import Headerleft from "./headerLeft.component";

const Header = ({ open, setOpen }) => {
  return (
    <header className="header">
      <Headerleft open={open} setOpen={setOpen} />
      <Headercenter open={open} setOpen={setOpen} />
      <Headerright />
    </header>
  );
};

export default Header;

import React from "react";
import "./header.component.scss";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/YouTube_Logo_2017.svg";
import { Tooltip } from "@mui/material";

const Headerleft = ({ open, setOpen, progress, setProgress }) => {
  const location = useLocation();

  const refresh = () => {
    if (location.pathname === "/") {
      window.location.reload(true);
      setProgress(progress + 100);
    }
  };

  const loader = () => {
    setProgress(progress + 100);
  };

  return (
    <div className="header__left">
      <div className="header__left__menu" onClick={() => setOpen(!open)}>
        <MenuRoundedIcon style={{ fontSize: 27 }} />
      </div>
      <Tooltip title="YouTube Home" placement="bottom-end">
        <Link to="/" onClick={loader}>
          <Logo className="header__left__yticon" onClick={refresh} />
        </Link>
      </Tooltip>
    </div>
  );
};

export default Headerleft;

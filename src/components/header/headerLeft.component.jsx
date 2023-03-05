import React from "react";
import "./header.component.scss";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/YouTube_Logo_2017.svg";
import { Tooltip } from "@mui/material";
import { fullProgress } from "../../redux/loaderSlice";
import { useDispatch } from "react-redux";

const Headerleft = ({ open, setOpen }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const refresh = () => {
    if (location.pathname === "/") {
      window.location.reload(true);
    }
  };

  const loader = () => {
    dispatch(fullProgress());
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

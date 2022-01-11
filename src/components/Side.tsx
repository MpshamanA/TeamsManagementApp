import React from "react";
import "../css/side.css";
import logo from "../logo.png";
import { NavLink } from "react-router-dom";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import AutoAwesomeMotionRoundedIcon from "@mui/icons-material/AutoAwesomeMotionRounded";
import CalendarViewMonthRoundedIcon from "@mui/icons-material/CalendarViewMonthRounded";
import RestaurantIcon from "@mui/icons-material/Restaurant";

//選択されてるタグを取得し色を変える
const current = {
  color: "blue",
  textDecoration: "none",
  background: "#ccc",
  width: "100%",
  display: "inline-block",
};

export const Side = () => {
  return (
    <div className="order-1">
      <nav>
        <img className="img-logo" src={logo} alt="LOGO" />
        <ul className="side-ul">
          <NavLink
            exact
            to={"/"}
            className="link-bar-none"
            activeStyle={current}
          >
            <li className="side-menu">
              <ListItemButton sx={{ pt: 1.5, pb: 1.5 }}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="HOME" />
              </ListItemButton>
            </li>
          </NavLink>
          <NavLink
            exact
            to={"/form"}
            className="link-bar-none"
            activeStyle={current}
          >
            <li className="side-menu">
              <ListItemButton sx={{ pt: 1.5, pb: 1.5 }}>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Teams" />
              </ListItemButton>
            </li>
          </NavLink>
          <NavLink
            exact
            to={"/test"}
            className="link-bar-none"
            activeStyle={current}
          >
            <li className="side-menu">
              <ListItemButton sx={{ pt: 1.5, pb: 1.5 }}>
                <ListItemIcon>
                  <AutoAwesomeMotionRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="福利厚生" />
              </ListItemButton>
            </li>
          </NavLink>
          <NavLink
            exact
            to={"/calendar"}
            className="link-bar-none"
            activeStyle={current}
          >
            <li className="side-menu">
              <ListItemButton sx={{ pt: 1.5, pb: 1.5 }}>
                <ListItemIcon>
                  <CalendarViewMonthRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Calendar" />
              </ListItemButton>
            </li>
          </NavLink>
          <NavLink
            exact
            to={"/availableStores"}
            className="link-bar-none"
            activeStyle={current}
          >
            <li className="side-menu">
              <ListItemButton sx={{ pt: 1.5, pb: 1.5 }}>
                <ListItemIcon>
                  <RestaurantIcon />
                </ListItemIcon>
                <ListItemText primary="チケットレストラン" />
              </ListItemButton>
            </li>
          </NavLink>
          <NavLink
            exact
            to={"/qa"}
            className="link-bar-none"
            activeStyle={current}
          >
            <li className="side-menu">
              <ListItemButton sx={{ pt: 1.5, pb: 1.5 }}>
                <ListItemIcon>
                  <QuestionMarkIcon />
                </ListItemIcon>
                <ListItemText primary="よくある質問" />
              </ListItemButton>
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

import React, { useContext, useState } from "react";
import "../css/side.css";

import { NavLink } from "react-router-dom";

import AutoAwesomeMotionOutlinedIcon from "@mui/icons-material/AutoAwesomeMotionOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import Box from "@mui/material/Box";
import DinnerDiningOutlinedIcon from "@mui/icons-material/DinnerDiningOutlined";
import FaceOutlinedIcon from "@mui/icons-material/FaceOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

import logo from "../images/logo.png";
import icon from "../images/icon.png";

import { manuContext, benefitsContext } from "../Store";

//選択されてるタグを取得し色を変える
const current = {
  textDecoration: "none",
  background: "rgba(76, 165, 158, 0.2)",
  width: "100%",
  display: "inline-block",
  borderRadius: "13px",
};

export const Side = () => {
  const state = useContext(manuContext);
  const benefitsState = useContext(benefitsContext);

  const handleShowBenefitsToggle = () => {
    benefitsState.setIsOpenBenefits(!benefitsState.openBenefits);
  };
  return (
    <div className="order-1">
      {!state.sideToggle ? (
        <nav>
          <img className="img-logo" src={logo} alt="LOGO" />
          <ul className="side-ul">
            <Box sx={{ mr: 1, ml: 1 }}>
              <Box sx={{ mt: 1, mb: 1 }}>
                <NavLink
                  exact
                  to={"/"}
                  className="link-bar-none"
                  activeStyle={current}
                >
                  <li className="side-menu">
                    <ListItemButton
                      sx={{
                        pt: 1.2,
                        pb: 1.2,
                        borderRadius: "13px",
                      }}
                    >
                      <ListItemIcon>
                        <HomeOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="HOME"
                        primaryTypographyProps={{
                          fontSize: 14,
                        }}
                      />
                    </ListItemButton>
                  </li>
                </NavLink>
              </Box>
              <Box sx={{ mt: 1, mb: 1 }}>
                <NavLink
                  exact
                  to={"/teams"}
                  className="link-bar-none"
                  activeStyle={current}
                >
                  <li className="side-menu">
                    <ListItemButton
                      sx={{ pt: 1.2, pb: 1.2, borderRadius: "13px" }}
                    >
                      <ListItemIcon>
                        <GroupsOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Teams"
                        primaryTypographyProps={{
                          fontSize: 14,
                        }}
                      />
                    </ListItemButton>
                  </li>
                </NavLink>
              </Box>
              <Box sx={{ mt: 1, mb: 1 }}>
                <Box onClick={handleShowBenefitsToggle}>
                  <li className="side-menu">
                    <ListItemButton
                      sx={{ pt: 1.2, pb: 1.2, borderRadius: "13px" }}
                    >
                      <ListItemIcon>
                        <AutoAwesomeMotionOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="福利厚生"
                        primaryTypographyProps={{
                          fontSize: 14,
                        }}
                      />
                      {!benefitsState.openBenefits ? (
                        <ArrowDropDownOutlinedIcon />
                      ) : (
                        <ArrowDropUpOutlinedIcon />
                      )}
                    </ListItemButton>
                  </li>
                </Box>
              </Box>
              {benefitsState.openBenefits && (
                <div className="border">
                  <Box sx={{ mt: 1, mb: 1, ml: 2 }}>
                    <NavLink
                      exact
                      to={"/referral"}
                      className="link-bar-none"
                      activeStyle={current}
                    >
                      <li className="side-menu">
                        <ListItemButton
                          sx={{ pt: 1.2, pb: 1.2, borderRadius: "13px" }}
                        >
                          <ListItemIcon>
                            <FaceOutlinedIcon />
                          </ListItemIcon>
                          <ListItemText
                            primary="リファラル採用"
                            primaryTypographyProps={{
                              fontSize: 14,
                            }}
                          />
                        </ListItemButton>
                      </li>
                    </NavLink>
                  </Box>
                  <Box sx={{ mt: 1, mb: 1, ml: 2 }}>
                    <NavLink
                      exact
                      to={"/ticketRestarant"}
                      className="link-bar-none"
                      activeStyle={current}
                    >
                      <li className="side-menu">
                        <ListItemButton
                          sx={{ pt: 1.4, pb: 1.4, borderRadius: "13px" }}
                        >
                          <ListItemIcon>
                            <DinnerDiningOutlinedIcon />
                          </ListItemIcon>
                          <ListItemText
                            primary="チケットレストラン"
                            primaryTypographyProps={{
                              fontSize: 12,
                            }}
                          />
                        </ListItemButton>
                      </li>
                    </NavLink>
                  </Box>
                </div>
              )}

              <Box sx={{ mt: 1, mb: 1 }}>
                <NavLink
                  exact
                  to={"/qa"}
                  className="link-bar-none"
                  activeStyle={current}
                >
                  <li className="side-menu">
                    <ListItemButton
                      sx={{ pt: 1.2, pb: 1.2, borderRadius: "13px" }}
                    >
                      <ListItemIcon>
                        <QuestionMarkIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="よくある質問"
                        primaryTypographyProps={{
                          fontSize: 14,
                        }}
                      />
                    </ListItemButton>
                  </li>
                </NavLink>
              </Box>
            </Box>
          </ul>
        </nav>
      ) : (
        <nav>
          <img className="img-icon" src={icon} alt="LOGO" />
          <ul className="side-ul">
            <Box sx={{ mr: 1, ml: 1 }}>
              <Box sx={{ mt: 1, mb: 1 }}>
                <NavLink
                  exact
                  to={"/"}
                  className="link-bar-none"
                  activeStyle={current}
                >
                  <li className="side-menu">
                    <ListItemButton
                      sx={{
                        pt: 1.5,
                        pb: 1.5,
                        borderRadius: "13px",
                      }}
                    >
                      <ListItemIcon>
                        <HomeOutlinedIcon />
                      </ListItemIcon>
                    </ListItemButton>
                  </li>
                </NavLink>
              </Box>
              <Box sx={{ mt: 1, mb: 1 }}>
                <NavLink
                  exact
                  to={"/teams"}
                  className="link-bar-none"
                  activeStyle={current}
                >
                  <li className="side-menu">
                    <ListItemButton
                      sx={{ pt: 1.5, pb: 1.5, borderRadius: "13px" }}
                    >
                      <ListItemIcon>
                        <GroupsOutlinedIcon />
                      </ListItemIcon>
                    </ListItemButton>
                  </li>
                </NavLink>
              </Box>
              <Box sx={{ mt: 1, mb: 1 }}>
                <Box onClick={handleShowBenefitsToggle}>
                  <li className="side-menu">
                    <ListItemButton
                      sx={{ pt: 1.5, pb: 1.5, borderRadius: "13px" }}
                    >
                      <ListItemIcon>
                        <AutoAwesomeMotionOutlinedIcon />
                      </ListItemIcon>
                    </ListItemButton>
                  </li>
                </Box>
              </Box>
              {benefitsState.openBenefits && (
                <div>
                  <Box sx={{ mt: 1, mb: 1 }}>
                    <NavLink
                      exact
                      to={"/referral"}
                      className="link-bar-none"
                      activeStyle={current}
                    >
                      <li className="side-menu">
                        <ListItemButton
                          sx={{ pt: 1.5, pb: 1.5, borderRadius: "13px" }}
                        >
                          <ListItemIcon>
                            <FaceOutlinedIcon />
                          </ListItemIcon>
                        </ListItemButton>
                      </li>
                    </NavLink>
                  </Box>
                  <Box sx={{ mt: 1, mb: 1 }}>
                    <NavLink
                      exact
                      to={"/availableStores"}
                      className="link-bar-none"
                      activeStyle={current}
                    >
                      <li className="side-menu">
                        <ListItemButton
                          sx={{ pt: 1.5, pb: 1.5, borderRadius: "13px" }}
                        >
                          <ListItemIcon>
                            <DinnerDiningOutlinedIcon />
                          </ListItemIcon>
                        </ListItemButton>
                      </li>
                    </NavLink>
                  </Box>
                </div>
              )}

              <Box sx={{ mt: 1, mb: 1 }}>
                <NavLink
                  exact
                  to={"/qa"}
                  className="link-bar-none"
                  activeStyle={current}
                >
                  <li className="side-menu">
                    <ListItemButton
                      sx={{ pt: 1.5, pb: 1.5, borderRadius: "13px" }}
                    >
                      <ListItemIcon>
                        <QuestionMarkIcon />
                      </ListItemIcon>
                    </ListItemButton>
                  </li>
                </NavLink>
              </Box>
            </Box>
          </ul>
        </nav>
      )}
    </div>
  );
};

import React, { useEffect, useState, useContext } from "react";

import { NavLink } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { onAuthStateChanged, Auth, getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";
import { manuContext, authContext } from "../Store";

import style from "../css/common.module.scss";

import * as H from "history";
import { StayCurrentLandscape } from "@mui/icons-material";

type PropType = {
  history: H.History;
};

export const Header: React.FC<PropType> = ({ history }) => {
  const ctx = useContext(manuContext);
  const handleClick = () => {
    ctx.setIsSideToggle(!ctx.sideToggle); // ハンバーガーiconをクリックすることでtoggleの反転させサイドバーを変化させる
  };

  const authDataContext = useContext(authContext);
  const auth: Auth = getAuth();

  //ユーザー情報を保持する;
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      authDataContext.setIsAuthData(user);
    });
  }, []);

  const handoleSignOut = async () => {
    try {
      await signOut(auth);
      history.push("/signUp");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "white" }}>
      <AppBar position="static" sx={{ backgroundColor: "#fff", boxShadow: 0 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2, color: "#000" }}
            onClick={handleClick}
            className={style.hidden}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          {authDataContext.authData && (
            <Typography
              component="h1"
              variant="h5"
              pr={3}
              sx={{ color: "#000" }}
            >
              {authDataContext.authData?.email}
            </Typography>
          )}
          {/* 後プロフィール編集実装 */}
          {/* <NavLink exact to={"/editProfile"} className="link-bar-none">
            <Button
              variant="contained"
              size="small"
              color="primary"
              sx={{ marginRight: 3 }}
            >
              Edit Profile
            </Button>
          </NavLink> */}
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={handoleSignOut}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

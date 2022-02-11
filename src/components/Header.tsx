import React, { useEffect, useState, createContext } from "react";

import { NavLink } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";

import { auth } from "../firebase";

import * as H from "history";

type PropType = {
  history: H.History;
};
export const sideManu = createContext(
  {} as {
    toggle: boolean;
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  }
);
export const Header: React.FC<PropType> = ({ history }) => {
  //サイドメニューの切り替え
  const [toggle, setToggle] = useState(true);
  const hundleSidemanuChange = () => {};
  const [user, setUser] = useState(Object);
  // ユーザー情報を保持する
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  //uidは下記で取れる

  const handoleSignOut = async () => {
    try {
      await signOut(auth);
      history.push("signUp");
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
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Typography component="h1" variant="h5" pr={3} sx={{ color: "#000" }}>
            {user.email}
          </Typography>
          <NavLink exact to={"/editProfile"} className="link-bar-none">
            <Button
              variant="contained"
              size="small"
              color="primary"
              sx={{ marginRight: 3 }}
            >
              Edit Profile
            </Button>
          </NavLink>
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

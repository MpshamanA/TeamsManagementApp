import { useState, createContext, useContext } from "react";
import "./css/App.css";
import style from "./css/common.module.scss";

import { useLayoutEffect } from "react";

import { RouteComponentProps } from "react-router-dom";

import { onAuthStateChanged, Auth, getAuth } from "firebase/auth";

import { Header } from "./components/Header";
import icon from "./images/icon.png";
import { Side } from "./components/Side";
import { branchs } from "./config/branchs";
import { manuContext } from "./Store";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const App: React.FC<RouteComponentProps> = (props) => {
  const auth: Auth = getAuth();
  const state = useContext(manuContext);

  //ユーザー判定 ユーザー情報を保持していない場合新規登録画面へ
  useLayoutEffect(() => {
    //メモリリーク回避：非同期処理が完了する前にコンポーネントがアンマウントされると、ステートは更新されない
    let unmounted: boolean = false;

    onAuthStateChanged(auth, (user) => {
      if (!unmounted) {
        !user && props.history.push("signUp");
      }
      return () => {
        unmounted = true;
      };
    });
  }, []);

  return (
    <div className={!state.sideToggle ? style.grid : style.gridSideMin}>
      <div className={style.side}>
        <Side />
      </div>
      <div className={style.header}>
        <Header history={props.history} />
      </div>
      <div className={style.mainTeams}>
        <Card
          sx={{
            mb: "10px",
            padding: "20px",
            color: "rgb(25, 80, 117)",
            boxShadow: "0 0 10px #aaa",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={icon} className="App-logo" alt="icon" />
          <Typography
            gutterBottom
            sx={{ fontWeight: "bold", fontSize: "3rem" }}
          >
            フューチャー・スクウェア株式会社
          </Typography>
          <Typography gutterBottom variant="h4" component="div">
            Future SQUARE,Inc.
          </Typography>
          <Typography gutterBottom variant="h4" component="div">
            代表取締役 岩本 雄太
          </Typography>
        </Card>

        <Box
          sx={{
            mt: "30px",
            display: "flex",
            flexWrap: "wrap",
            gap: "20px 20px",
            justifyContent: "center",
          }}
        >
          {branchs.map((branch) => (
            <Box key={branch.id}>
              <Card
                className="card-color"
                sx={{
                  padding: "20px",
                  color: "rgb(25, 80, 117)",
                  boxShadow: "0 0 10px #aaa",
                  width: "450px",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <img src={branch.imgUrl} className="townImage" alt="icon" />
                  <Box
                    component="div"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ ml: "10px" }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ fontWeight: "bold" }}
                      >
                        {branch.branch}
                      </Typography>
                      <Typography gutterBottom variant="h6" component="div">
                        {branch.zipcode}
                      </Typography>
                      <Typography gutterBottom variant="h6" component="div">
                        {branch.address}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Box>
          ))}
        </Box>
      </div>
    </div>
  );
};

export default App;

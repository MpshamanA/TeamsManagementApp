import { useState, createContext, useContext } from "react";
import "./css/App.css";
import style from "./css/common.module.scss";

import { useLayoutEffect } from "react";

import { RouteComponentProps } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import { Header } from "./components/Header";
import icon from "./images/icon.png";
import { Side } from "./components/Side";
import { branchs } from "./config/branchs";
import { useSideToggle, manuContext } from "./Store";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const App: React.FC<RouteComponentProps> = (props) => {
  const ctx = useSideToggle();
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
        <Grid sx={{ textAlign: "center" }}>
          <Card
            sx={{
              mb: "10px",
              padding: "20px",
              minWidth: "1200px",
              justify: "center",
              textAlign: "center",
              color: "rgb(25, 80, 117)",
            }}
          >
            <img src={icon} className="App-logo" alt="icon" />
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              sx={{ fontWeight: "bold" }}
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

          <Box sx={{ mt: "30px" }}>
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              // justifyContent="center"
            >
              {branchs.map((branch) => (
                <Grid item xs={6} key={branch.id}>
                  <Card
                    className="card-color"
                    sx={{
                      padding: "20px",
                      justify: "center",
                      textAlign: "center",
                      color: "rgb(25, 80, 117)",
                    }}
                  >
                    <Grid sx={{ display: "flex" }}>
                      <img
                        src={branch.imgUrl}
                        className="townImage"
                        alt="icon"
                      />
                      <Box
                        component="div"
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Box>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{ fontWeight: "bold" }}
                          >
                            {branch.branch}
                          </Typography>
                          <Typography gutterBottom variant="h6" component="div">
                            {branch.address}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </div>
    </div>
  );
};

export default App;

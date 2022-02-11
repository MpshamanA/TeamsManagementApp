import { useState } from "react";
import "./css/App.css";
import style from "./css/common.module.scss";

import { useLayoutEffect } from "react";

import { RouteComponentProps } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";

import { auth } from "./firebase";
import { Branch } from "./Type";
import { Header } from "./components/Header";
import icon from "./images/icon.png";
import { Side } from "./components/Side";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const App: React.FC<RouteComponentProps> = (props) => {
  const [toggle, setToggle] = useState<boolean>(true);
  //支店
  const branchs: Branch[] = [
    {
      id: 1,
      branch: "東京本社",
      address: "〒170-0013 東京都豊島区東池袋1-18-1 Hareza Tower20階",
    },
    {
      id: 2,
      branch: "名古屋支店",
      address: "〒460-0008 愛知県名古屋市中区栄3-15-27 いちご栄ビル9階",
    },
    {
      id: 3,
      branch: "大阪支店",
      address: "〒550-0005 大阪市西区西本町1-4-1 オリックス本町ビル4階",
    },
    {
      id: 4,
      branch: "福岡支店",
      address: "〒812-0011 福岡県福岡市博多区博多駅前二丁目1番1号",
    },
  ];

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
    <div className={toggle ? style.grid : style.gridSideMin}>
      <div className={style.side}>
        <Side />
      </div>
      <div className={style.header}>
        <Header history={props.history} />
      </div>
      <div className={style.mainTeams}>
        <Grid sx={{ display: "flex" }}>
          <Card
            sx={{
              mb: "10px",
              padding: "20px",
              height: "263px",
              minWidth: "430px",
              justify: "center",
              textAlign: "center",
              color: "rgb(25, 80, 117)",
            }}
          >
            <img src={icon} className="App-logo" alt="icon" />
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              フューチャー・スクウェア株式会社
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Future SQUARE,Inc.
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              代表取締役 岩本 雄太
            </Typography>
          </Card>
          <Box sx={{ width: "100%", ml: "20px" }}>
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {branchs.map((branch) => (
                <Grid item xs={6} key={branch.id}>
                  <Card
                    className="card-color"
                    sx={{
                      padding: "20px",
                      width: "400px",
                      justify: "center",
                      textAlign: "center",
                      height: "100px",
                      color: "rgb(25, 80, 117)",
                    }}
                  >
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

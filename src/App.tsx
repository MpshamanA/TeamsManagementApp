import "./css/App.css";
import style from "./css/common.module.scss";

import { useLayoutEffect } from "react";

import { RouteComponentProps } from "react-router-dom";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Header } from "./components/Header";
import { Side } from "./components/Side";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const App: React.FC<RouteComponentProps> = (props) => {
  const auth = getAuth();
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
    <div className={style.grid}>
      <div className={style.side}>
        <Side />
      </div>
      <div className={style.header}>
        <Header history={props.history} />
      </div>
      <div className={style.mainTeams}>
        <Grid>
          <Card
            sx={{
              mb: "10px",
              padding: "20px",
              width: "430px",
              height: "170px",
              justify: "center",
              textAlign: "center",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              フューチャー・スクウェア株式会社
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Future SQUARE,Inc.
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              代表取締役 岩本 雄太
            </Typography>
          </Card>
          <Card
            sx={{
              mb: "10px",
              padding: "20px",
              width: "430px",
              height: "170px",
              justify: "center",
              textAlign: "center",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              フューチャー・スクウェア株式会社
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Future SQUARE,Inc.
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              代表取締役 岩本 雄太
            </Typography>
          </Card>
          <Card
            sx={{
              mb: "10px",
              padding: "20px",
              width: "430px",
              height: "170px",
              justify: "center",
              textAlign: "center",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              フューチャー・スクウェア株式会社
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Future SQUARE,Inc.
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              代表取締役 岩本 雄太 test
            </Typography>
          </Card>
        </Grid>
      </div>
    </div>
  );
};

export default App;

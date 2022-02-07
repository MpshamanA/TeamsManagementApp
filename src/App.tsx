import { useLayoutEffect, useState } from "react";
import "./css/App.css";
import { Side } from "./components/Side";
import { Main } from "./pages/Main";
import { RouteComponentProps } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import style from "./css/common.module.scss";
import { Header } from "./components/Header";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

const App: React.FC<RouteComponentProps> = (props) => {
  const auth = getAuth();
  // ユーザー情報を保持する
  const user = auth.currentUser;
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
        <Grid container justifyContent="center" sx={{ mt: "20px" }}>
          <Card
            sx={{
              minWidth: "430px",
              maxWidth: "430px",
              maxHeight: "150px",
            }}
          >
            <Grid container sx={{ m: 2 }}>
              <Typography gutterBottom variant="h5" component="div">
                フューチャー・スクウェア株式会社
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                （Future SQUARE,Inc.）
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                代表取締役 岩本 雄太
              </Typography>
            </Grid>
          </Card>
        </Grid>
      </div>
    </div>
  );
};

export default App;

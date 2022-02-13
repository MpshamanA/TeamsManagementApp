import { useState, createContext } from "react";
import "./css/App.css";
import style from "./css/common.module.scss";

import { useLayoutEffect } from "react";

import { RouteComponentProps } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";

import { auth } from "./firebase";
import { Branch } from "./Type";
import { Header } from "./components/Header";
import icon from "./images/icon.png";
import NoImage from "./images/noImage.png";
import Tokyo from "./images/Tokyo.jpg";
import Nagoya from "./images/Nagoya.jpg";
import Osaka from "./images/Osaka.jpg";
import Fukuoka from "./images/Fukuoka.jpg";
import { Side } from "./components/Side";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import GridItem from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const sideManuContext = createContext(
  {} as {
    toggle: boolean;
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  }
);
const App: React.FC<RouteComponentProps> = (props) => {
  const [toggle, setToggle] = useState<boolean>(true);
  const hundleSidemanuChange = (): void => {
    setToggle(!toggle);
    console.log(toggle);
  };
  //支店
  const branchs: Branch[] = [
    {
      id: 1,
      branch: "東京本社",
      address: "〒170-0013 東京都豊島区東池袋1-18-1 Hareza Tower20階",
      imgUrl: Tokyo,
    },
    {
      id: 2,
      branch: "名古屋支店",
      address: "〒460-0008 愛知県名古屋市中区栄3-15-27 いちご栄ビル9階",
      imgUrl: Nagoya,
    },
    {
      id: 3,
      branch: "大阪支店",
      address: "〒550-0005 大阪市西区西本町1-4-1 オリックス本町ビル4階",
      imgUrl: Osaka,
    },
    {
      id: 4,
      branch: "福岡支店",
      address: "〒812-0011 福岡県福岡市博多区博多駅前二丁目1番1号",
      imgUrl: Fukuoka,
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
        <sideManuContext.Provider value={{ toggle, setToggle }}>
          <Side />
        </sideManuContext.Provider>
      </div>
      <div className={style.header}>
        <Header
          history={props.history}
          hundleSidemanuChange={hundleSidemanuChange}
          isToggle={toggle}
        />
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

          <Box>
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
                      <img src={branch.imgUrl} className="test" alt="icon" />
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

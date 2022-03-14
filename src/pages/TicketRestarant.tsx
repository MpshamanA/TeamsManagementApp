import React, { useContext } from "react";

import "../css/TicketRestarant.css";
import style from "../css/common.module.scss";

import { RouteComponentProps } from "react-router-dom";

import { Header } from "../components/Header";
import { Side } from "../components/Side";
import { Copyright } from "@mui/icons-material";

import { manuContext } from "../Store";

import QuestionManImg from "../images/TicketRestarant/Question.png";
import PizzaImg from "../images/TicketRestarant/pizza.jpg";
import Shop1Img from "../images/TicketRestarant/shop1.png";
import Shop2Img from "../images/TicketRestarant/shop2.png";
import TokyoMap from "../images/TicketRestarant/tokyoMap.png";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const TicketRestarant: React.FC<RouteComponentProps> = (props) => {
  const state = useContext(manuContext);

  return (
    <>
      <div className={!state.sideToggle ? style.grid : style.gridSideMin}>
        <div className={style.side}>
          <Side />
        </div>
        <div className={style.header}>
          <Header history={props.history} />
        </div>
        <div className={style.mainTicketRestarant}>
          <img src={PizzaImg} alt="pizza" className="pizza-img" />
          <Box sx={{ ml: 3, mt: 2, mb: 10 }}>
            <Typography
              gutterBottom
              variant="h2"
              component="div"
              sx={{ fontWeight: "bold", color: "#d52b1e", mt: 2, mb: 0 }}
            >
              Ticket Restaurant
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 2,
                mb: 2,
              }}
            >
              <img
                src={QuestionManImg}
                className="question-man-img"
                alt="QuestionMan"
              />
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontWeight: "bold",
                }}
              >
                チケットレストランとは？
              </Typography>
            </Box>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              全国66,000店以上の飲食店やコンビニで
              <br />
              毎日利用できる福利厚生の食事補助サービス。
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Box
              className="shop-list-title"
              sx={{
                color: "#fff",
              }}
            >
              <Box
                sx={{
                  background: "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.6))",
                  pt: 4,
                  pb: 4,
                  mb: 4,
                }}
              >
                <Typography
                  gutterBottom
                  variant="h3"
                  component="div"
                  sx={{
                    mt: 5,
                    mb: 0,
                    fontWeight: "bold",
                  }}
                >
                  加盟店一覧
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    mt: 0,
                  }}
                >
                  チケットレストランが使える店舗一例
                </Typography>
              </Box>
            </Box>
            <img src={Shop1Img} alt="" className="shop1-img" />
            <img src={Shop2Img} alt="" className="shop2-img" />
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ mb: 3 }}
            >
              ↓↓↓ 近くで使えるお店を検索 ↓↓↓
            </Typography>
            <a
              href="http://search.edenred.jp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={TokyoMap} alt="map" className="tokyoMap-img" />
            </a>
          </Box>
        </div>
      </div>
    </>
  );
};

export default TicketRestarant;

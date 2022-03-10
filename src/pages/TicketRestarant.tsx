import React, { useContext } from "react";

import "../css/AvailableStores.css";
import style from "../css/common.module.scss";

import { RouteComponentProps } from "react-router-dom";

import { Header } from "../components/Header";
import { Side } from "../components/Side";
import { manuContext } from "../Store";

import QuestionMan from "../images/TicketRestarant/Question.png";

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
          <Typography
            gutterBottom
            variant="h2"
            component="div"
            sx={{ fontWeight: "bold", color: "#d52b1e" }}
          >
            Ticket Restaurant
          </Typography>
          <img src={QuestionMan} className="" alt="QuestionMan" />
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            チケットレストランとは？
          </Typography>
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
        </div>
      </div>
    </>
  );
};

export default TicketRestarant;

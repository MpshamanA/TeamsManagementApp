import React, { useState, useContext } from "react";
import style from "../css/common.module.scss";
import "../css/referral.css";

import { RouteComponentProps } from "react-router-dom";

import { Header } from "../components/Header";
import { Side } from "../components/Side";
import { manuContext } from "../Store";
import { explanations } from "../config/Refarral/explanation";
import referralImg from "../images/Referral/referral.jpg";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Referral: React.FC<RouteComponentProps> = (prop) => {
  const state = useContext(manuContext);

  return (
    <div className={!state.sideToggle ? style.grid : style.gridSideMin}>
      <div className={style.side}>
        <Side />
      </div>
      <div className={style.header}>
        <Header history={prop.history} />
      </div>
      <div className={style.mainBenefits}>
        <Box className="refarral-title">
          <Typography
            gutterBottom
            variant="h2"
            component="div"
            sx={{
              fontWeight: "bold",
              color: "#fff",
              textAlign: "center",
              background: "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.6))",
              pt: 30,
              pb: 30,
            }}
          >
            Future SQUAREのリファラル採用
          </Typography>
        </Box>
        <Typography gutterBottom variant="h4" component="div" sx={{}}>
          ご紹介にて1名入社毎に特典として、
          <span style={{ color: "red", fontWeight: "bold" }}>総額50万円</span>
          を支給させて頂きます!
        </Typography>
        <Typography gutterBottom variant="h5" component="div" sx={{}}>
          お友達・知り合いなど転職を希望している方や、
          悩んでいる方などおられましたら是非ご紹介ください!!
        </Typography>
        <Typography gutterBottom variant="h5" component="div" sx={{}}>
          紹介人数に制限はありません!
        </Typography>
        {explanations.map((explanation) => (
          <>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              {explanation.title}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ textAlign: "center" }}
            >
              {explanation.explanation}
            </Typography>
          </>
        ))}
        <img src={referralImg} alt="リファラル採用" className="refarral-img" />
      </div>
    </div>
  );
};

export default Referral;

import React, { useState, useContext } from "react";
import style from "../css/common.module.scss";
import "../css/referral.css";

import { RouteComponentProps } from "react-router-dom";

import { Header } from "../components/Header";
import { Side } from "../components/Side";
import { manuContext } from "../Store";
import { explanations } from "../config/Refarral/explanation";
import referralImg from "../images/Referral/referral.jpg";
import meetingImg from "../images/Referral/meeting.png";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

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
        <div className={style.referral}>
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
          <Box
            sx={{
              mt: 5,
              mb: 5,
              borderRadius: 3,
              border: 1,
              borderColor: "#eee",
              display: "flex",
              alignItems: "center",
              p: 5,
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.76);",
              textAlign: "left",
            }}
          >
            <img src={meetingImg} alt="" className="meeting-img" />
            <Box sx={{}}>
              <Typography gutterBottom variant="h5" component="div" sx={{}}>
                ご紹介にて1名入社毎に特典として、
                <span style={{ color: "red", fontWeight: "bold" }}>
                  総額50万円
                </span>
                を支給させて頂きます!
              </Typography>
              <Typography gutterBottom variant="h5" component="div" sx={{}}>
                お友達・知り合いなど転職を希望している方や、
                悩んでいる方などおられましたら是非ご紹介ください!!
              </Typography>
              <Typography gutterBottom variant="h5" component="div" sx={{}}>
                紹介人数に制限はありません!
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "inline-block",
            }}
          >
            {explanations.map((explanation) => (
              <Box key={explanation.title} sx={{ mt: 5, textAlign: "center" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    borderBottom: 1,
                    display: "inline-block",
                  }}
                >
                  {explanation.title}
                </Typography>
                <Typography
                  gutterBottom
                  variant="body1"
                  component="div"
                  sx={{}}
                >
                  {explanation.explanation}
                </Typography>
              </Box>
            ))}
          </Box>
          <img
            src={referralImg}
            alt="リファラル採用"
            className="refarral-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Referral;

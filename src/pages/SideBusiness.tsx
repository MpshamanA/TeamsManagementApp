import React, { useContext, useEffect } from "react";

import { RouteComponentProps } from "react-router-dom";

import { Header } from "../components/Header";
import { manuContext } from "../Store";
import { Side } from "../components/Side";
import { explanations } from "../config/SideBusiness/explanation";
import SideBusinessImg from "../images/SideBusiness/laptop.jpg";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import style from "../css/common.module.scss";
import "../css/sideBusiness.css";

const SideBusiness: React.FC<RouteComponentProps> = (props) => {
  const state = useContext(manuContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className={!state.sideToggle ? style.grid : style.gridSideMin}>
        <div className={style.side}>
          <Side />
        </div>
        <div className={style.header}>
          <Header history={props.history} />
        </div>
        <div className={style.mainBenefits}>
          <div className={style.sideBusiness}>
            <Box className="side-business-title">
              <img src={SideBusinessImg} alt="" className="side-business-img" />
              <Typography
                gutterBottom
                variant="h1"
                component="div"
                sx={{
                  fontWeight: "bold",
                  color: "#fff",
                }}
                className="side-business-title-text"
              >
                SideBusiness
              </Typography>
            </Box>
            {explanations.map((explanation) => (
              <Box key={explanation.title} sx={{ mt: 5 }}>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBusiness;

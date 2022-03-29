import React, { useContext } from "react";
import { RouteComponentProps } from "react-router-dom";

import { explanations } from "../config/LibraryConfig/explanation";
import { Header } from "../components/Header";
import { Side } from "../components/Side";
import { manuContext } from "../Store";
import "../css/library.css";

import books from "../images/LibraryImg/books.jpg";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import style from "../css/common.module.scss";

const Library: React.FC<RouteComponentProps> = (props) => {
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
        <div className={style.mainBenefits}>
          <div className={style.library}>
            <Box className="library-title">
              <img src={books} alt="" className="books-img" />
              <Typography
                gutterBottom
                variant="h2"
                component="div"
                sx={{
                  fontWeight: "bold",
                }}
                className={
                  state.sideToggle
                    ? "library-title-text-wide"
                    : "library-title-text"
                }
              >
                図書購入_貸出制度
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

export default Library;

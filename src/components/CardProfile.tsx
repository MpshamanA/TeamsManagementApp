import React, { useState, useEffect } from "react";

import "../css/CardProfile.css";

import { NavLink } from "react-router-dom";

import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

import AbcOutlinedIcon from "@mui/icons-material/AbcOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import DirectionsRunOutlinedIcon from "@mui/icons-material/DirectionsRunOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";

import NoImage from "../images/noImage.png";
import { ProgrammingLanguages } from "../Type";

type Props = {
  userName: string;
  userPositon: string;
  yearsExperience: string;
  favoritePhase: string;
  careerPlan: string;
  programmingLanguages: ProgrammingLanguages[];
};

export const CardProfile: React.FC<Props> = ({
  userName,
  userPositon,
  yearsExperience,
  careerPlan,
  favoritePhase,
  programmingLanguages,
}) => {
  return (
    <div>
      <Box
        sx={{
          width: "600px",
          textAlign: "center",
          backgroundColor: "#fff",
          borderRadius: 3,
          boxShadow: 10,
        }}
      >
        <Card
          sx={{
            background:
              "linear-gradient(225deg,rgb(66, 255, 230), rgb(155, 255, 213),rgb(66, 255, 183))",
            pt: 7,
            pb: 7,
            boxShadow: 3,
            // m: 1,
          }}
        >
          <img src={NoImage} alt="" />
        </Card>
        <CardContent sx={{ pb: 0 }}>
          <Grid>
            <Card
              sx={{
                pt: 2,
                pb: 2,
                color: "#000",
                boxShadow: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mr: 3,
                  mb: 1,
                }}
              >
                <Box sx={{ mr: 1, color: "rgb(56, 95, 90)" }}>
                  <BadgeOutlinedIcon fontSize="large" />
                </Box>
                <div>
                  <Typography
                    gutterBottom
                    variant="body1"
                    component="div"
                    sx={{ m: 0 }}
                  >
                    名前
                  </Typography>
                  <Typography variant="h5" component="div">
                    {userName}
                  </Typography>
                </div>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mr: 3,
                  }}
                >
                  <Box sx={{ mr: 1, color: "rgb(56, 95, 90)" }}>
                    <ApartmentOutlinedIcon fontSize="large" />
                  </Box>
                  <div>
                    <Typography
                      gutterBottom
                      variant="body1"
                      component="div"
                      sx={{ m: 0 }}
                    >
                      支店
                    </Typography>
                    <Typography variant="h5" component="div">
                      {userPositon}
                    </Typography>
                  </div>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ mr: 1, color: "rgb(56, 95, 90)" }}>
                    <DirectionsRunOutlinedIcon fontSize="large" />
                  </Box>
                  <div>
                    <Typography
                      gutterBottom
                      variant="body1"
                      component="div"
                      sx={{ m: 0 }}
                    >
                      経験年数
                    </Typography>
                    <Typography variant="h5" component="div">
                      {yearsExperience}
                    </Typography>
                  </div>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "canter",
              mt: 1,
              pt: 2,
              pb: 2,
              color: "#000",
              boxShadow: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mr: 3,
              }}
            >
              <Box sx={{ mr: 1, color: "rgb(56, 95, 90)" }}>
                <ThumbUpOutlinedIcon fontSize="large" />
              </Box>
              <Box sx={{ mt: 1, mb: 1 }}>
                <Typography
                  gutterBottom
                  variant="body1"
                  component="div"
                  sx={{ m: 0 }}
                >
                  得意なフェーズ
                </Typography>
                <Typography variant="h5" component="div">
                  {favoritePhase}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box sx={{ mr: 1, color: "rgb(56, 95, 90)" }}>
                <AbcOutlinedIcon fontSize="large" />
              </Box>
              <Box sx={{ mt: 1, mb: 1 }}>
                <Typography
                  gutterBottom
                  variant="body1"
                  component="div"
                  sx={{ m: 0 }}
                >
                  好きな言語
                </Typography>
                {programmingLanguages.length > 0 ? (
                  programmingLanguages.map((e: ProgrammingLanguages) => (
                    <Chip
                      key={e.id}
                      label={e.programmingLanguage}
                      sx={{
                        mr: 1,
                        backgroundColor: "#3399FF",
                        color: "#fff",
                      }}
                    />
                  ))
                ) : (
                  <Typography
                    variant="h5"
                    component="div"
                    color="text.secondary"
                  >
                    NoData
                  </Typography>
                )}
              </Box>
            </Box>
          </Card>
          <Box sx={{ mt: 1, mb: 1 }}>
            <Typography gutterBottom variant="h5" component="div" sx={{ m: 0 }}>
              趣味
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {careerPlan}
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <NavLink exact to={"/teams"}>
            戻る
          </NavLink>
        </CardActions>
      </Box>
    </div>
  );
};

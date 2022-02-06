import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import NoImage from "../images/noImage.png";
import { NavLink } from "react-router-dom";
import { ProgrammingLanguages } from "../Type";
import Box from "@mui/material/Box";

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
      <Card sx={{ minWidth: 650, maxWidth: 700 }}>
        <CardMedia
          component="img"
          height="250"
          image={NoImage}
          alt="no image"
        />
        <CardContent sx={{ pb: 0 }}>
          <Typography gutterBottom variant="h5" component="div">
            {userPositon}
          </Typography>
          <Typography gutterBottom variant="h4" component="div">
            {userName}
          </Typography>
          <Box sx={{ mt: 1, mb: 1 }}>
            <Typography gutterBottom variant="h5" component="div" sx={{ m: 0 }}>
              経験年数
            </Typography>
            <Typography variant="body1" component="div" color="text.secondary">
              {yearsExperience}
            </Typography>
          </Box>
          <Box sx={{ mt: 1, mb: 1 }}>
            <Typography gutterBottom variant="h5" component="div" sx={{ m: 0 }}>
              1番好きなフェーズ(要件定義～基本設計など)
            </Typography>
            <Typography variant="body1" component="div" color="text.secondary">
              {favoritePhase}
            </Typography>
          </Box>
          <Box sx={{ mt: 1, mb: 1 }}>
            <Typography gutterBottom variant="h5" component="div" sx={{ m: 0 }}>
              経験してきた言語/DB/OS/ツール
            </Typography>
            {programmingLanguages.length > 0 ? (
              programmingLanguages.map((e: ProgrammingLanguages) => (
                <Chip
                  key={e.id}
                  label={e.programmingLanguage}
                  sx={{ mr: "10px", backgroundColor: "#3399FF", color: "#fff" }}
                />
              ))
            ) : (
              <Typography
                variant="body1"
                component="div"
                color="text.secondary"
              >
                NoData
              </Typography>
            )}
          </Box>
          <Box sx={{ mt: 1, mb: 1 }}>
            <Typography gutterBottom variant="h5" component="div" sx={{ m: 0 }}>
              キャリアプラン
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
      </Card>
    </div>
  );
};

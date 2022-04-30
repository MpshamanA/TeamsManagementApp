import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import Icon from "../images/icon.png";

type Props = {
  userName: string;
  position: string;
};
export const CardItem: React.FC<Props> = ({ userName, position }) => {
  return (
    <Card
      sx={{
        color: "rgb(25, 80, 117)",
        m: "10px",
        width: "400px",
        boxShadow: "0 0 10px #aaa",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          padding: "24px",
          alignItems: "center",
        }}
      >
        <CardContent sx={{ p: "24px" }}>
          <CardMedia
            component="img"
            height="150"
            width="150"
            image={Icon}
            alt="no image"
          />
        </CardContent>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {position}
          </Typography>
          <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
            {userName}
          </Typography>
        </CardContent>
      </CardContent>
    </Card>
  );
};

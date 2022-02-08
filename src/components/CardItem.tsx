import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import NoImage from "../images/noImage.png";

type Props = {
  userName: string;
  position: string;
};
export const CardItem: React.FC<Props> = ({ userName, position }) => {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    ></Box>
  );
  return (
    <Card
      sx={{
        minWidth: 300,
        maxWidth: 500,
        m: 1,
        minHeight: 150,
      }}
    >
      <CardContent sx={{ display: "flex", padding: "24px" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {position}
          </Typography>
          <Typography variant="h5" component="div">
            {userName}
          </Typography>
        </CardContent>
        <CardContent sx={{ p: "24px" }}>
          <CardMedia
            component="img"
            height="150"
            width="150"
            image={NoImage}
            alt="no image"
          />
        </CardContent>
      </CardContent>
    </Card>
  );
};

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import { User } from "../Type";

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
    <Card sx={{ minWidth: 275, maxWidth: 300, m: 1 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {position}
        </Typography>
        <Typography variant="h5" component="div">
          {userName}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

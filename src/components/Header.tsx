import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { getAuth, signOut } from "firebase/auth";
import * as H from "history";

type PropType = {
  history: H.History;
  signUpUserName: string;
};
export const Header: React.FC<PropType> = ({ history, signUpUserName }) => {
  const auth = getAuth();
  const handoleSignOut = async () => {
    try {
      await signOut(auth);
      history.push("signUp");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="w-100 h-100 min-calc">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Typography component="h1" variant="h5" pr={3}>
              {signUpUserName}
            </Typography>
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={handoleSignOut}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

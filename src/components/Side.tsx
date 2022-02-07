import "../css/side.css";
import logo from "../logo.png";
import { NavLink } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import AutoAwesomeMotionOutlinedIcon from "@mui/icons-material/AutoAwesomeMotionOutlined";
import CalendarViewMonthRoundedIcon from "@mui/icons-material/CalendarViewMonthRounded";
import DinnerDiningOutlinedIcon from "@mui/icons-material/DinnerDiningOutlined";
import Box from "@mui/material/Box";

//選択されてるタグを取得し色を変える
const current = {
  textDecoration: "none",
  background: "rgba(76, 165, 158, 0.2)",
  width: "100%",
  display: "inline-block",
  borderRadius: "13px",
};

export const Side = () => {
  return (
    <div className="order-1">
      <nav>
        <img className="img-logo" src={logo} alt="LOGO" />
        <ul className="side-ul">
          <Box sx={{ mr: 1, ml: 1 }}>
            <Box sx={{ mt: 1, mb: 1 }}>
              <NavLink
                exact
                to={"/"}
                className="link-bar-none"
                activeStyle={current}
              >
                <li className="side-menu">
                  <ListItemButton
                    sx={{
                      pt: 1.2,
                      pb: 1.2,
                      borderRadius: "13px",
                    }}
                  >
                    <ListItemIcon>
                      <HomeOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="HOME"
                      primaryTypographyProps={{
                        fontSize: 14,
                      }}
                    />
                  </ListItemButton>
                </li>
              </NavLink>
            </Box>
            <Box sx={{ mt: 1, mb: 1 }}>
              <NavLink
                exact
                to={"/teams"}
                className="link-bar-none"
                activeStyle={current}
              >
                <li className="side-menu">
                  <ListItemButton
                    sx={{ pt: 1.2, pb: 1.2, borderRadius: "13px" }}
                  >
                    <ListItemIcon>
                      <GroupsOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Teams"
                      primaryTypographyProps={{
                        fontSize: 14,
                      }}
                    />
                  </ListItemButton>
                </li>
              </NavLink>
            </Box>
            <Box sx={{ mt: 1, mb: 1 }}>
              <NavLink
                exact
                to={"/benefits"}
                className="link-bar-none"
                activeStyle={current}
              >
                <li className="side-menu">
                  <ListItemButton
                    sx={{ pt: 1.2, pb: 1.2, borderRadius: "13px" }}
                  >
                    <ListItemIcon>
                      <AutoAwesomeMotionOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="福利厚生"
                      primaryTypographyProps={{
                        fontSize: 14,
                      }}
                    />
                  </ListItemButton>
                </li>
              </NavLink>
            </Box>
            <Box sx={{ mt: 1, mb: 1 }}>
              <NavLink
                exact
                to={"/availableStores"}
                className="link-bar-none"
                activeStyle={current}
              >
                <li className="side-menu">
                  <ListItemButton
                    sx={{ pt: 1.2, pb: 1.2, borderRadius: "13px" }}
                  >
                    <ListItemIcon>
                      <DinnerDiningOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="チケットレストラン"
                      primaryTypographyProps={{
                        fontSize: 14,
                      }}
                    />
                  </ListItemButton>
                </li>
              </NavLink>
            </Box>
            <Box sx={{ mt: 1, mb: 1 }}>
              <NavLink
                exact
                to={"/qa"}
                className="link-bar-none"
                activeStyle={current}
              >
                <li className="side-menu">
                  <ListItemButton
                    sx={{ pt: 1.2, pb: 1.2, borderRadius: "13px" }}
                  >
                    <ListItemIcon>
                      <QuestionMarkIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="よくある質問"
                      primaryTypographyProps={{
                        fontSize: 14,
                      }}
                    />
                  </ListItemButton>
                </li>
              </NavLink>
            </Box>
          </Box>
        </ul>
      </nav>
    </div>
  );
};

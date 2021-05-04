import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../store/session";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import LogoutButton from "../auth/LogoutButton";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import PermIdentityTwoToneIcon from "@material-ui/icons/PermIdentityTwoTone";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: "#ff5d00",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
      textAlign: "center"
    },
  },
}))(MenuItem);

export default function CustomizedMenus({ setAuthenticated }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    await dispatch(logoutUser());
    setAuthenticated(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="profile-dropdown"
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        <AccountCircleTwoToneIcon />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link  to={`/profile/${user.user.id}`}>
          <StyledMenuItem>
            <ListItemIcon>
              <PermIdentityTwoToneIcon fontSize="medium" />
            </ListItemIcon>
            <ListItemText primary="My Profile" />
          </StyledMenuItem>
        </Link>
        <StyledMenuItem onClick={onLogout}>
          <ListItemIcon>
            {/* <LogoutButton setAuthenticated={setAuthenticated} /> */}
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}

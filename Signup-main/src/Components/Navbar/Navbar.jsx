import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navItem: {
    textDecoration: "none",
    textTransform: "uppercase",
    color: "white",
    marginRight: "10px",
  },
}));

const logoutUser = () => {
  console.log("Testing");
  localStorage.removeItem("jwtToken");
  window.location = "/";
};

function ButtonAppBar() {
  const classes = useStyles();
  // creating view for authenticated user
  const authLinks = (
    <>
      <Link className={classes.navItem} to="/" onClick={logoutUser}>
        Logout
      </Link>
    </>
  );

  // creating view for guest user
  const guestLinks = (
    <>
      <Link className={classes.navItem} to="/">
        Sign In
      </Link>
      <Link className={classes.navItem} to="/register">
        Register
      </Link>
    </>
  );
  console.log("JWT", localStorage.getItem("jwtToken"));
  const JWT = localStorage.getItem("jwtToken");
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            TODO App
          </Typography>
          {JWT ? authLinks : guestLinks}
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default ButtonAppBar;

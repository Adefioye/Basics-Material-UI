import React from "react";
import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Avatar,
  alpha,
} from "@material-ui/core";
import { Search, Mail, Notifications } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  toolBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  searchButton: {
    marginRight: theme.spacing(2),
  },
  input: {
    color: "white",
  },
  icons: {
    display: "flex",
    alignItems: "center",
  },
  badge: {
    marginRight: theme.spacing(2),
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar className={classes.toolBar}>
        <Typography className={classes.logoLg}>Koko Dev</Typography>
        <Typography className={classes.logoSm}>KOKO</Typography>
        <div className={classes.search}>
          <Search className={classes.searchButton} />
          <InputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            className={classes.input}
          />
        </div>
        <div className={classes.icons}>
          <Search className={classes.searchButton} />
          <Badge badgeContent={3} color="primary" className={classes.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="secondary" className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar
            alt="image avatar"
            src="https://media.istockphoto.com/photos/blue-male-avatar-blank-shape-in-white-hole-3d-illustration-picture-id1283675387?b=1&k=20&m=1283675387&s=170667a&w=0&h=k-LHpDan16ZZZMjhKDRYJX9oKPSfTLoptB25Ebi_9EA="
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

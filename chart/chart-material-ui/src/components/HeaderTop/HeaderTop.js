import React from "react";
import UserPosition from "./UserPosition";
import UserAvatar from "./UserAvatar";
import UserName from "./UserName";
import { Grid, Box, makeStyles } from "@material-ui/core";
import menu from "./assets/menu.png";
import "./style.css";

const useStyles = makeStyles({
  mainGrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid lightgrey",
    fontFamily: "DM Sans, sans-serif",
    padding: "0.4rem 1.5rem",
  },
  gridItem: {
    display: "flex",
    alignItems: "center",
  },
  box: {
    backgroundColor: "#d5deff",
    padding: "0.5rem 0.7rem",
  },
});

function HeaderTop() {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.mainGrid}>
        <Grid item className={classes.gridItem}>
          <Box className={classes.box}>
            <img src={menu} alt="menu" />
          </Box>
          <UserPosition />
        </Grid>
        <Grid item className={classes.gridItem}>
          <UserAvatar />
          <UserName />
        </Grid>
      </Grid>
    </>
  );
}

export default HeaderTop;

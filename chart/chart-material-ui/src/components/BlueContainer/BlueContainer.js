import React from "react";
import Menu from "./Menu/Menu";
import Logo from "./Logo/Logo";
import { Box, Paper } from "@material-ui/core";
import "./style.css";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  paper: {
    backgroundColor: "#2e5bff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1vw 0",
    borderRadius: 0,
  },
});

function BlueContainer() {
  const classes = useStyles();

  return (
    <Box>
      <Paper className={classes.paper}>
        <Menu />
        <Logo />
      </Paper>
    </Box>
  );
}

export default BlueContainer;

import AvatarGuest from "./AvatarGuest";
import React from "react";
import Hiring from "./Hiring";
import Birth from "./Birth";
import { Grid, Box, Paper, makeStyles } from "@material-ui/core";
import progIcon from "./assets/prog.png";
import delintIcon from "./assets/HQ.png";
import situatIcon from "./assets/situat.png";
import trashIcon from "./assets/trash.png";
import "./style.css";

const useStyles = makeStyles({
  mainGrid: {
    display: "flex",
    flexDirection: "column",
    padding: "1.3rem 1rem",
  },
  gridItemName: {
    display: "flex",
    alignItems: "center",
  },
  paperName: {
    fontSize: "1rem",
    fontWeight: 700,
    margin: "0 1.3rem",
  },
  gridItemPos: {
    display: "flex",
    alignItems: "center",
    margin: "0.6rem 0 1.3rem",
    paddingLeft: "0.3rem",
  },
  paperPos: {
    marginLeft: "0.6rem",
    fontSize: "0.8rem",
    fontWeight: 400,
    color: "lightgrey",
  },
  trash: {
    backgroundColor: "#feeee8",
    padding: "0.2rem 0.5rem",
  },
  boxSit: {
    display: "flex",
    alignItems: "center",
  },
  paperHiring: {
    fontSize: "0.9rem",
    fontWeight: 400,
    color: "lightgrey",
    marginBottom: 0,
  },
  paperWork: {
    fontSize: "1rem",
    fontWeight: 400,
    margin: "0.6rem 0 0 2.2rem",
  },
});

function Guest() {
  const classes = useStyles();
  return (
    <Grid className={classes.mainGrid}>
      <Grid item className={classes.gridItemName}>
        <AvatarGuest />
        <Paper className={classes.paperName}>Sofia O'Sullivan</Paper>
        <Box className={classes.trash}>
          <img src={trashIcon} alt="trash" />
        </Box>
      </Grid>
      <Grid item className={classes.gridItemPos}>
        <img src={progIcon} alt="programmer" />
        <Paper className={classes.paperPos}>Programmer</Paper>
        <Paper style={{ margin: "0 1rem", color: "lightgrey" }}>|</Paper>
        <img src={delintIcon} alt="del" />
        <Paper className={classes.paperPos}>Delinternet HQ</Paper>
      </Grid>
      <Hiring />
      <Box style={{ margin: "1rem 0" }}>
        <Birth style={{ margin: "1rem 0" }} />
      </Box>
      <Grid item>
        <Box className={classes.boxSit}>
          <img
            style={{ margin: " 0 0.8rem 0 0.3rem" }}
            src={situatIcon}
            alt="situation"
          />
          <Paper className={classes.paperHiring}>Current situation</Paper>
        </Box>
        <Paper className={classes.paperWork}>Work in progress</Paper>
      </Grid>
    </Grid>
  );
}

export default Guest;

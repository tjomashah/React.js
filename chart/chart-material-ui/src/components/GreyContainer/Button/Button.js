import React from "react";
import btn from "./assets/button.png";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Box, Typography } from "@material-ui/core";
import "./style.css";

const useStyles = makeStyles({
  grid: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.9rem 1.5rem 1.9rem 1.4rem",
  },
  box: {
    fontSize: "1.5rem",
    fontWeight: 600,
    fontFamily: 'DM Sans", sans-serif',
  },
  button: {
    backgroundColor: "#2E5BFF",
    color: "white",
    borderRadius: 0,
    textTransform: "none",
  },
});

function HeadButton() {
  const classes = useStyles();

  return (
    <Grid className={classes.grid}>
      <Typography className={classes.box}>Time Records</Typography>
      <Button className={classes.button} variant="contained">
        <img style={{ marginRight: "0.7rem" }} src={btn} alt="btn" />
        Add New
      </Button>
    </Grid>
  );
}

export default HeadButton;

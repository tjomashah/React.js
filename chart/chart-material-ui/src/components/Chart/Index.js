import React from "react";
import ChartHeader from "./ChartContent/ChartHeader";
import ChartBody from "./ChartContent/ChartBody";
import Guest from "./Guest/Guest";
import { Grid, makeStyles } from "@material-ui/core";
import "./style.css";

const useStyles = makeStyles({
  mainGrid: {
    padding: "1.2rem 1.4rem",
    backgroundColor: "#f8f9fa",
  },
  gridItem: {
    backgroundColor: "#fff",
    paddingBottom: "1rem",
  },
});

function Index() {
  const classes = useStyles();
  return (
    <Grid container className={classes.mainGrid}>
      <Grid item xs={3} className={classes.gridItem}>
        <Guest />
      </Grid>
      <Grid item xs={9} className={classes.gridItem}>
        <ChartHeader />

        <ChartBody />
      </Grid>
    </Grid>
  );
}

export default Index;

import { Typography, Box, makeStyles } from "@material-ui/core";
import React from "react";
import Countdown from "./countdown";

const useStyles = makeStyles({
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#fff",
    padding: "10rem 0 5rem",
  },
  descr: {
    fontSize: "4rem",
    fontFamily: "Monserrat",
    fontWeight: 800,
    margin: "0 38rem",
    display: "flex",
    alignItems: "center",
  },
  subtitle: {
    fontSize: "1.5rem",
    fontFamily: "Monserrat",
    fontWeight: 700,
  },
});

const Content = (props) => {
  const { dataLaunch } = props;
  const { header } = dataLaunch;
  const { subtitle, descr } = header;
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      {descr.map((el) => (
        <Typography className={classes.descr}>{el}</Typography>
      ))}
      <Typography className={classes.subtitle}>{subtitle}</Typography>
      <Countdown />
    </Box>
  );
};

export default Content;

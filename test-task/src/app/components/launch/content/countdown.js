import React from "react";
import Count from "react-countdown";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  count: {
    fontSize: "3rem",
    fontFamily: "Monserrat",
    fontWeight: 700,
    backgroundColor: "#4A00E0",
    padding: "2rem 3rem",
    marginTop: "2rem",
  },
});

const GetStarted = () => (
  <Typography
    style={{
      fontSize: "2.5rem",
      fontFamily: "Monserrat",
      fontWeight: 700,
      backgroundColor: "#4A00E0",
      padding: "2rem 2rem",
      marginTop: "2rem",
    }}
  >
    The Launch is started!!!
  </Typography>
);

const Countdown = (props) => {
  const classes = useStyles();
  return (
    <>
      <Count className={classes.count} date={Date.now() + 5000}>
        {GetStarted()}
      </Count>
    </>
  );
};

export default Countdown;

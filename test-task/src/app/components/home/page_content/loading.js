import React from "react";
import { Box, CardMedia, Typography, makeStyles } from "@material-ui/core";
import load from "./assets/loading.png";

const useStyles = makeStyles({
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "3rem",
    paddingBottom: "6rem",
  },
  typography: {
    fontSize: "1.1rem",
    fontStyle: "italic",
    color: "#fff",
    marginTop: "1rem",
  },
});

const Loading = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <img src={load} />
      <Typography className={classes.typography}>Load More</Typography>
    </Box>
  );
};

export default Loading;

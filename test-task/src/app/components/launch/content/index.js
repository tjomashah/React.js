import { Typography, Box, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#fff",
    padding: "10rem 0 5rem",
    fontSize: "4rem",
    fontFamily: "Monserrat",
    fontWeight: 800,
  },
});

const Content = (props) => {
  const { dataLaunch } = props;
  const { header } = dataLaunch;
  const { title_1, title_2, subtitle, descr } = header;
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      {/* <Typography>{title_1}</Typography>
      <Typography>{title_2}</Typography>
      <Typography>{subtitle}</Typography> */}
      {descr.map((el) => (
        <Typography>{el.title_1}</Typography>
      ))}
    </Box>
  );
};

export default Content;

import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import logo from "./assets/footerLogo.svg";

const useStyles = makeStyles({
  box: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "4rem 0",
    margin: "0 8rem",
  },
  typography: {
    color: "#C0C0C0",
  },
});

const Footer = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <img src={logo} alt="logo" />
      <Typography className={classes.typography}>© 2021 Copyright</Typography>
    </Box>
  );
};

export default Footer;

import React from "react";
import { Avatar, Box, Card, makeStyles } from "@material-ui/core";
import logo from "./assets/Logo.svg";

const useStyles = makeStyles({
  card: {
    // background:
    //   "linear-gradient(180deg, #302B63 21.88%, rgba(24, 27, 72, 0.71) 90.1%)",
    display: "flex",
    justifyContent: "center",
    paddingTop: "1rem",
  },
});

const Header = (props) => {
  const { data } = props;
  const classes = useStyles();
  return (
    <Box className={classes.card}>
      <img src={logo} />
    </Box>
  );
};

export default Header;

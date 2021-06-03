import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import img from "./assets/3.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function AvatarGuest() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Cindy Baker" src={img} />
    </div>
  );
}
export default AvatarGuest;

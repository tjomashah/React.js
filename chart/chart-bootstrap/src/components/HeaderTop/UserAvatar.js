import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import not from "./assets/notification.png";
import avatar from "./assets/2.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function UserAvatar() {
  const classes = useStyles();
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div className="notification">
        <img src={not} alt="notification" />
      </div>
      <div className={classes.root}>
        <Avatar alt="Travis Howard" src={avatar} />
      </div>
    </div>
  );
}

export default UserAvatar;

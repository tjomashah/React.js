import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Box, Paper } from "@material-ui/core";
import not from "./assets/notification.png";
import avatar from "./assets/2.jpg";

const useStyles = makeStyles({
  paper: {
    display: "flex",
    alignItems: "center",
  },
});

function UserAvatar() {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Box className="notification">
        <img src={not} alt="notification" />
      </Box>
      <Box>
        <Avatar alt="Albert Holmes" src={avatar} />
      </Box>
    </Paper>
  );
}

export default UserAvatar;

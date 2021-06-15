import React from "react";
import { makeStyles, Typography, Card, Button } from "@material-ui/core";
import "./style.less";

const useStyles = makeStyles({
  content: {},
  button: {
    backgroundColor: "#8E2DE2",
    borderRadius: "50px",
    color: "#fff",
  },
});

const Content = (props) => {
  const { data } = props;
  const { home } = data;
  const { title, subtitle, button_name } = home;
  console.log(data);

  const classes = useStyles();
  return (
    <Card>
      <Typography>{title}</Typography>
      <Typography>{subtitle}</Typography>
      <Button className={classes.button} variant="outlined">
        {button_name}
      </Button>
    </Card>
  );
};

export default Content;

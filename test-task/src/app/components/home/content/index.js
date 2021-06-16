import React from "react";
import { makeStyles, Typography, Box, Card, Button } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    fontFamily: "Montserrat",
    fontWeight: 800,
    fontSize: "4.5rem",
    color: "#fff",
    marginBottom: "-2rem",
  },
  subtitle: {
    color: "#C0C0C0",
    margin: "4rem 0 2rem",
  },
  button: {
    background: "linear-gradient(93.72deg, #8E2DE2 9.41%, #4A00E0 86.1%)",
    borderRadius: "3rem",
    color: "#fff",
    padding: "1rem 3.5rem",
    fontFamily: "Montserrat",
    fontWeight: 800,
    fontSize: "1.2rem",
  },
  card: {
    padding: "7rem 0 7rem 7rem",
  },
});

const Content = (props) => {
  const { data } = props;
  const { home } = data;
  const { title, title_2, subtitle, button_name } = home;
  console.log(data);

  const classes = useStyles();
  return (
    <Box className={classes.card}>
      <Typography className={classes.title}>{title}</Typography>'
      <Typography className={classes.title}>{title_2}</Typography>
      <Typography className={classes.subtitle} variant="body1">
        {subtitle}
      </Typography>
      <Button className={classes.button} variant="outlined">
        {button_name}
      </Button>
    </Box>
  );
};

export default Content;

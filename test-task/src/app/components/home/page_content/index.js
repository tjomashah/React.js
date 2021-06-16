import React from "react";
import Loading from "./loading";
import {
  Box,
  makeStyles,
  Typography,
  CardMedia,
  Grid,
  TextField,
} from "@material-ui/core";
import arrowBack from "./assets/arrowBack.png";
import arrowFoward from "./assets/arrowFoward.png";

const useStyles = makeStyles({
  container: {
    background: "#252458",
    padding: "5rem 4rem 0",
  },
  title: {
    color: "#fff",
    fontFamily: "Montserrat",
    fontWeight: 800,
    fontSize: "2.7rem",
  },
  info: {
    color: "#fff",
    fontFamily: "Montserrat",
    fontWeight: 700,
    fontSize: "1.2rem",
  },
  launchesInfo: {
    color: "#fff",
    fontFamily: "Montserrat",
    fontWeight: 700,
    fontSize: "1.2rem",
    marginBottom: "2rem",
  },
  date: {
    background: "#4A00E0",
    borderRadius: "3.5rem",
    padding: "0.8rem 3rem",
    fontFamily: "Montserrat",
    fontWeight: 500,
    fontSize: "1rem",
    width: "12rem",
    height: "1rem",
    fontStyle: "italic",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "1rem 0",
  },
  launchesDate: {
    background: "linear-gradient(94.97deg, #8E2DE2 3.92%, #4A00E0 52.92%)",
    borderRadius: "3.5rem",
    padding: "0.8rem 3rem",
    fontFamily: "Montserrat",
    fontWeight: 500,
    fontSize: "1rem",
    width: "12rem",
    height: "1rem",
    fontStyle: "italic",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "-1.1rem 0 1rem",
  },
  box: {
    display: "grid",
    grid: "auto/ auto auto auto",
    justifyContent: "space-evenly",
  },
  boxContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  subtitle: {
    display: "flex",
    justifyContent: "center",
    fontSize: "3rem",
    fontFamily: "Montserrat",
    fontWeight: 800,
    color: "#fff",
    margin: "4.5rem 0 2rem",
  },
  headerCont: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0 1.2rem 2rem",
  },
});

const Page_content = (props) => {
  const { data } = props;
  const { home } = data;
  const { content } = home;

  const classes = useStyles();
  return (
    <>
      <Box className={classes.container}>
        {content.map((el, index) => {
          const { title, block, subtitle, launches } = el;
          return (
            <Box>
              <Box className={classes.headerCont}>
                <Typography className={classes.title}>{title}</Typography>
                <div>
                  <img style={{ marginRight: "2.5rem" }} src={arrowBack} />
                  <img src={arrowFoward} />
                </div>
              </Box>
              <Box key={index} className={classes.box}>
                {block.map((el, index) => (
                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                      <CardMedia
                        image={el.src}
                        style={{ width: "25rem", height: "17rem" }}
                        alt="spacex"
                        key={index}
                      />

                      <TextField
                        id="datetime-local"
                        type="datetime-local"
                        defaultValue="2020-06-12T06:17"
                        className={classes.date}
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                      <Typography className={classes.info}>
                        {el.info}
                      </Typography>
                      <Typography className={classes.info}>
                        {el.subinfo}
                      </Typography>
                    </Grid>
                  </Grid>
                ))}
              </Box>

              <Box>
                <Typography className={classes.subtitle}>{subtitle}</Typography>
                <Box style={{ display: "grid", grid: "auto/ auto auto" }}>
                  {launches.map((el, index) => (
                    <Grid className={classes.boxContent} container key={index}>
                      <CardMedia
                        style={{ width: "35rem", height: "20rem" }}
                        image={el.img}
                        alt="spacex"
                      />

                      <TextField
                        id="datetime-local"
                        type="datetime-local"
                        defaultValue="2020-06-12T06:17"
                        className={classes.launchesDate}
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                      <Typography className={classes.launchesInfo}>
                        {el.info}
                      </Typography>
                    </Grid>
                  ))}
                </Box>
              </Box>
            </Box>
          );
        })}
        <Loading />
      </Box>
    </>
  );
};

export default Page_content;

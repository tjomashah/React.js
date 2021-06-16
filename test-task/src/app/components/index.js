import { Card, Container, Box, makeStyles } from "@material-ui/core";
import React from "react";
import { data } from "./dataForHome";
import { dataLaunch } from "./dataForLaunch";
import Header from "./home/header";
import HeaderLaunch from "./launch/header";
import Content from "./home/content";
import ContentLaunch from "./launch/content";
import Page_content from "./home/page_content";
import Footer from "./home/footer/index";
import homeBg from "../assets/homeBg.png";
import launchBg from "../assets/launchBg.png";
import "./style.less";

const useStyles = makeStyles({
  home: {
    padding: "0 15rem",
  },
  container: {
    width: "100%",
  },
  launchBg: {
    backgroundImage: `url(${launchBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
});

const Index = (props) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.home}>
        <Box className={classes.container}>
          <Box style={{ backgroundImage: `url(${homeBg})` }}>
            <Header data={data} />
            <Content data={data} />
          </Box>
          <Page_content data={data} />
          <Footer />
        </Box>
      </Box>
      <Box style={{ backgroundImage: `url(${launchBg})` }}>
        <HeaderLaunch dataLaunch={dataLaunch} />
        <ContentLaunch dataLaunch={dataLaunch} />
      </Box>
    </>
  );
};

export default Index;

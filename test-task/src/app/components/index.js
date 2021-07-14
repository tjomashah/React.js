import { Button, Box, makeStyles } from "@material-ui/core";
import Modal from "@material-ui/core/Modal"
import React, { useState } from "react";
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
  homeContainer: {
    width: "100%",
  },
  homeButton: {
    background: "linear-gradient(93.72deg, #8E2DE2 9.41%, #4A00E0 86.1%)",
    borderRadius: "3rem",
    color: "#fff",
    margin: "-6.5rem 0 5rem 7rem",
    padding: "1rem 3.5rem",
    fontFamily: "Montserrat",
    fontWeight: 800,
    fontSize: "1.2rem",
  },
  launch: {
    height: '100%',
    backgroundImage: `url(${launchBg})`,
    zIndex: -1,
    position: 'relative'
  },
  box: {
    background: 'linear - gradient(1.22deg, #181B48 3.9 %, rgba(24, 27, 72, 0) 98.66 %)',
    position: 'absolute',

  }
});

const Index = (props) => {
  const { button_name } = data.home
  const classes = useStyles();
  const [isShow, setIsShow] = useState(false)

  const Open = () => {
    setIsShow(true)
  }


  return (
    <>
      <Box className={classes.home}>
        <Box className={classes.homeContainer}>
          <Box style={{ backgroundImage: `url(${homeBg})` }}>
            <Header data={data} />
            <Content data={data} />
            <Button className={classes.homeButton} variant="outlined" onClick={Open}>
              {button_name}
            </Button>
          </Box>

          <Page_content data={data} />
          <Footer />
        </Box>
      </Box>
      <Modal open={isShow}>
        <Box className={classes.launch}>
          <Box className={classes.box}>
            <HeaderLaunch dataLaunch={dataLaunch} />
            <ContentLaunch dataLaunch={dataLaunch} />
          </Box>
        </Box>
      </Modal>

    </>
  );
};

export default Index;

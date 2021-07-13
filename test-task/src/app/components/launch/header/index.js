import React from "react";
import Content from "../../home/content";
import { Box, Button, Typography, makeStyles } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import logo from "./assets/Logo.svg";



const useStyles = makeStyles({
  box: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const Header = (props) => {
  const { dataLaunch } = props;
  const { header } = dataLaunch;
  const { back } = header;
  const classes = useStyles();

  const [isOpen, setIsOpen] = React.useState(false)

  const Open = () => {
    setIsOpen(true)
  }


  return (
    <>
      <Box className={classes.box}>
        <Button onClick={Open}>
          <KeyboardBackspaceIcon />
          {back}
        </Button>

        <img src={logo} />
      </Box>
      <Modal open={isOpen}>
        <Content />
      </Modal>
    </>
  );
};

export default Header;

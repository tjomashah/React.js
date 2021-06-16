import React from "react";
import { Box, Typography, CardMedia } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import logo from "./assets/Logo.svg";

const Header = (props) => {
  const { dataLaunch } = props;
  const { header } = dataLaunch;
  const { back } = header;
  console.log(dataLaunch);
  return (
    <>
      <Box>
        <Typography>
          <KeyboardBackspaceIcon />
          {back}
        </Typography>
      </Box>
      <img src={logo} />
    </>
  );
};

export default Header;

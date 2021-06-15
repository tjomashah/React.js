import React from "react";
import { Avatar } from "@material-ui/core";
//import logo from "./assets/Logo.svg";

const header = (props) => {
  const { data } = props;
  const { home } = data;
  const { logo } = home;
  console.log(logo);
  return (
    <div>
      <Avatar src={logo} />
    </div>
  );
};

export default header;

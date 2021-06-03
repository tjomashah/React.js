import React from "react";
import Menu from "./Menu/Menu";
import Logo from "./Logo/Logo";
import "./style.css";

function BlueContainer() {
  return (
    <div className="blue-container">
      <div className="content">
        <Menu />
        <Logo />
      </div>
    </div>
  );
}

export default BlueContainer;

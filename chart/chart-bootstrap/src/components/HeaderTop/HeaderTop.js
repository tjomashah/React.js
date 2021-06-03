import React from "react";
import Position from "./UserPosition";
import UserAvatar from "./UserAvatar";
import "./style.css";
import menu from "./assets/menu.png";
import UserName from "./UserName";

function HeaderTop() {
  return (
    <div className="header">
      <div className="content">
        <div className="menu">
          <img src={menu} alt="menu" />
        </div>
        <div>
          <Position />
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <UserAvatar />
        <UserName />
      </div>
    </div>
  );
}

export default HeaderTop;

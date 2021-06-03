import AvatarGuest from "./AvatarGuest";
import React from "react";
import Hiring from "./Hiring";
import Birth from "./Birth";
import progIcon from "./assets/prog.png";
import delintIcon from "./assets/HQ.png";
import situatIcon from "./assets/situat.png";
import trashIcon from "./assets/trash.png";
import "./style.css";

function Guest() {
  return (
    <div className="guest-container">
      <div className="guest-content">
        <AvatarGuest />
        <p className="guest-name">Sofia O'Sullivan</p>
        <div className="trash">
          <img src={trashIcon} alt="trash" />
        </div>
      </div>
      <div className="guest-pos">
        <img src={progIcon} alt="programmer" />
        <span className="pos">Programmer</span>
        <span className="mx-3">|</span>
        <img src={delintIcon} alt="del" />
        <span className="pos">Delinternet HQ</span>
      </div>
      <div>
        <Hiring />
      </div>
      <div className="my-3">
        <Birth />
      </div>
      <div>
        <div className="d-flex align-items-center">
          <img className="ms-1 me-3" src={situatIcon} alt="situation" />
          <p className="hiring mb-0">Current situation</p>
        </div>
        <p className="work">Work in progress</p>
      </div>
    </div>
  );
}

export default Guest;

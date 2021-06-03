import React from "react";
import BlueContainer from "./BlueContainer/BlueContainer";
import HeaderTop from "./HeaderTop/HeaderTop";
import GreyContainer from "./GreyContainer/MainContainer";
import Tabs from "./VerticalTabs/Tabs";
import Guest from "./Chart/Index";
import Table from "./TableContainer/Table";
import "../index.css";

function Indexes() {
  return (
    <div className="row">
      <div className="col-2">
        <BlueContainer />
        <Tabs />
      </div>
      <div className="col-10">
        <HeaderTop />
        <div>
          <GreyContainer />
        </div>
        <div>
          <Guest />
        </div>
        <div className="table">
          <Table />
        </div>
      </div>
    </div>
  );
}

export default Indexes;

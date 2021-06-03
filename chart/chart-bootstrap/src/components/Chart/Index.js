import React from "react";
import ChartHeader from "./ChartContent/ChartHeader";
import ChartBody from "./ChartContent/ChartBody";
import Guest from "./Guest/Guest";
import "./style.css";

function Index() {
  return (
    <div className="row mod-row">
      <div className="col-3 mod-col">
        <Guest />
      </div>
      <div className="col-9 mod-col mod-col_nine">
        <div>
          <ChartHeader />
        </div>
        <div>
          <ChartBody />
        </div>
      </div>
    </div>
  );
}

export default Index;

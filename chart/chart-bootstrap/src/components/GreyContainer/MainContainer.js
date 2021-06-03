import React from "react";
import Button from "./Button/Button";
import HorizontalTabs from "./HorizontalTabs/HorizontalTabs";

function MainContainer() {
  return (
    <div style={{ backgroundColor: "rgba(245, 245, 245, 0.959)" }}>
      <div style={{ backgroundColor: "#F1F3FB" }}>
        <Button />
        <HorizontalTabs />
      </div>
    </div>
  );
}

export default MainContainer;

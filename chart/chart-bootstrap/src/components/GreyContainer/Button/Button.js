import React from "react";
import btn from "./assets/button.png";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

function HeadButton() {
  return (
    <div className="button">
      <p className="button-header">Time Records</p>
      <div>
        <div>
          <Button
            style={{
              backgroundColor: "#2E5BFF",
              color: "white",
              borderRadius: 0,
              textTransform: "none",
            }}
            variant="contained"
          >
            <img style={{ marginRight: 10 }} src={btn} alt="btn" />
            Add New
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeadButton;

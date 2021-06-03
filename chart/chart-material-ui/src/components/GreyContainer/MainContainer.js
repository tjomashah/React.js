import React from "react";
import Button from "./Button/Button";
import HorizontalTabs from "./HorizontalTabs/HorizontalTabs";
import { Box, Paper } from "@material-ui/core";

function MainContainer() {
  return (
    <Box style={{ backgroundColor: "rgba(245, 245, 245, 0.959)" }}>
      <Paper style={{ backgroundColor: "#F1F3FB" }}>
        <Button />
        <HorizontalTabs />
      </Paper>
    </Box>
  );
}

export default MainContainer;

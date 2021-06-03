import React from "react";
import BlueContainer from "./BlueContainer/BlueContainer";
import HeaderTop from "./HeaderTop/HeaderTop";
import GreyContainer from "./GreyContainer/MainContainer";
import Tabs from "./VerticalTabs/Tabs";
import Guest from "./Chart/Index";
import Table from "./TableContainer/Table";
import { Grid, Box } from "@material-ui/core";
import "../index.css";

function Indexes() {
  return (
    <>
      <Grid container>
        <Grid item xs={2}>
          <BlueContainer />
          <Tabs />
        </Grid>
        <Grid item xs={10}>
          <HeaderTop />

          <GreyContainer />

          <Guest />
          <Box className="table">
            <Table />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Indexes;

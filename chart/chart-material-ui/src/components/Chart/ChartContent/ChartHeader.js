import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  Select,
  MenuItem,
  Typography,
  Grid,
  Box,
} from "@material-ui/core";
import blueSquare from "./assets/blueSquare.png";
import greenSquare from "./assets/greenSquare.png";
import orangeSquare from "./assets/orangeSquare.png";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function ChartHeader() {
  const classes = useStyles();
  const [type, setType] = React.useState("Mensual");

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <Grid className="chart-header">
      <Grid item className="chart-header-content">
        <Typography>Working hour</Typography>
        <Box>
          <FormControl className={classes.formControl}>
            <Select
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: "#959EB1",
                backgroundColor: "#ECEFF8",
                textAlign: "center",
                borderBottom: "none",
                marginLeft: 10,
                padding: 3,
              }}
              value={type}
              onChange={handleChange}
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value={"HR Manager"}>Mensual</MenuItem>
              <MenuItem value={"Junior"}>Day</MenuItem>
              <MenuItem value={"Middle"}>Night</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>
      <Grid className="chart-work-type">
        <Box style={{ display: "flex", alignItems: "center" }}>
          <img src={blueSquare} alt="blueSquare" />
          <Typography style={{ margin: "0 0.7rem 0 0.5rem" }}>
            Normal
          </Typography>
        </Box>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <img src={greenSquare} alt="greenSquare" />
          <Typography style={{ margin: "0 0.7rem 0 0.5rem" }}>More</Typography>
        </Box>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <img src={orangeSquare} alt="orangeSquare" />
          <Typography style={{ margin: "0 0 0 0.5rem" }}>Under</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
export default ChartHeader;

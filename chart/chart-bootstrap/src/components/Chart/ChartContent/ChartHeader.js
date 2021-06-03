import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, Select, MenuItem } from "@material-ui/core";
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
  const [position, setPosition] = React.useState("");

  const handleChange = (event) => {
    setPosition(event.target.value);
  };

  return (
    <div className="chart-header">
      <div className="chart-header-content">
        <span>Working hour</span>
        <div>
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
              value={position}
              onChange={handleChange}
              displayEmpty
              className={classes.selectEmpty}
            >
              <MenuItem value={"HR Manager"}>Mensual</MenuItem>
              <MenuItem value={"Junior"}>Day</MenuItem>
              <MenuItem value={"Middle"}>Night</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="chart-work-type">
        <div>
          <img src={blueSquare} alt="blueSquare" />
          <span className="ms-2 me-3">Normal</span>
        </div>
        <div>
          <img src={greenSquare} alt="greenSquare" />
          <span className="ms-2 me-3">More</span>
        </div>
        <div>
          <img src={orangeSquare} alt="orangeSquare" />
          <span className="ms-2">Under</span>
        </div>
      </div>
    </div>
  );
}
export default ChartHeader;

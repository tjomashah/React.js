import "date-fns";
import React from "react";
import { Grid, Box, Paper, makeStyles } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import hiringIcon from "./assets/hiring.png";
import "./style.css";

const useStyles = makeStyles({
  boxDate: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "2.1rem",
  },
});

export default function MaterialUIPickers() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2018-05-24")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <Box style={{ display: "flex", alignItems: "center" }}>
        <img
          style={{ margin: " 0 0.8rem 0 0.3rem" }}
          src={hiringIcon}
          alt="hiring"
        />
        <Paper className="hiring mb-0">Hiring date</Paper>
      </Box>
      <Box className={classes.boxDate}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid>
            <KeyboardDatePicker
              format="yyyy/MM/dd"
              margin="normal"
              id="date-picker-inline"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </Box>
    </>
  );
}

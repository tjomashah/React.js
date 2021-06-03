import "date-fns";
import React from "react";
import { Grid, Box, Paper, makeStyles } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import birthIcon from "./assets/birth.png";
import "./style.css";

const useStyles = makeStyles({
  boxDate: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "2.1rem",
  },
  boxYears: {
    margin: "0.2rem 0 0.1rem",
    padding: "0.1rem",
    color: "#2e5bff",
    fontSize: "0.9rem",
    borderRadius: "0.25rem",
    backgroundColor: "rgba(191, 191, 197, 0.3)",
  },
});

export default function MaterialUIPickers() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("1990-10-22")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <Box style={{ display: "flex", alignItems: "center" }}>
        <img
          style={{ margin: " 0 0.8rem 0 0.3rem" }}
          src={birthIcon}
          alt="birth"
        />
        <Paper className="hiring mb-0">Date of birth</Paper>
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
        <Box className={classes.boxYears}>31 years</Box>
      </Box>
    </>
  );
}

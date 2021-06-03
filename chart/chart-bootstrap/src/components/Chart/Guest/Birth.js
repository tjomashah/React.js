import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import birthIcon from "./assets/birth.png";
import "./style.css";

export default function MaterialUIPickers() {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("1990-10-22")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <div className="d-flex align-items-center">
        <img className="ms-1 me-3" src={birthIcon} alt="birth" />
        <p className="hiring mb-0">Date of birth</p>
      </div>
      <div className="date">
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
        <div className="years">31 years</div>
      </div>
    </>
  );
}

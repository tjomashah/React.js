import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import hiringIcon from "./assets/hiring.png";
import "./style.css";

export default function MaterialUIPickers() {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2018-05-24")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <div className="d-flex align-items-center">
        <img className="ms-1 me-3" src={hiringIcon} alt="hiring" />
        <p className="hiring mb-0">Hiring date</p>
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
      </div>
    </>
  );
}

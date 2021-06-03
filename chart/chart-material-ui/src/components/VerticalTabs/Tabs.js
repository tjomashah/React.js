import { BrowserRouter, Link, Route, Switch, NavLink } from "react-router-dom";
import { Grid, Box, Paper } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import AccessAlarmOutlinedIcon from "@material-ui/icons/AccessAlarmOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import ReportOutlinedIcon from "@material-ui/icons/ReportOutlined";
import PermContactCalendarOutlinedIcon from "@material-ui/icons/PermContactCalendarOutlined";
import EventNoteOutlinedIcon from "@material-ui/icons/EventNoteOutlined";
import MemoryOutlinedIcon from "@material-ui/icons/MemoryOutlined";
import FingerprintOutlinedIcon from "@material-ui/icons/FingerprintOutlined";
import loc from "./assets/location.png";
import records from "./assets/clock.png";
import leave from "./assets/leave.png";
import calendar from "./assets/calendar.png";
import report from "./assets/report.png";
import user from "./assets/user.png";
import manage from "./assets/manage.png";
import device from "./assets/device.png";
import finger from "./assets/fingerPrint.png";
// import Location from "./Tabs/Location";
// import Records from "./Tabs/Records";
// import Leave from "./Tabs/Leave";
// import Calendar from "./Tabs/Calendar";
// import Report from "./Tabs/Report";
import "./style.css";

function Tabs() {
  return (
    <Grid className="vertical-tabs mt-4">
      <BrowserRouter>
        <Grid item className="navi">
          <Box className="nav">
            <Paper className="nav-item">
              <LocationOnOutlinedIcon style={{ color: "lightgrey" }} />
              <NavLink exact className="nav-link" to="/location">
                Real Time Location
              </NavLink>
            </Paper>
            <Paper className="nav-item">
              <AccessAlarmOutlinedIcon style={{ color: "lightgrey" }} />
              <NavLink exact className="nav-link" to="/records">
                Time Records
              </NavLink>
            </Paper>
            <Paper className="nav-item">
              <ExitToAppOutlinedIcon style={{ color: "lightgrey" }} />
              <NavLink exact className="nav-link" to="/leave">
                Leave
              </NavLink>
            </Paper>
            <Paper className="nav-item">
              <CalendarTodayOutlinedIcon style={{ color: "lightgrey" }} />
              <NavLink exact className="nav-link" to="/calendar">
                Calendar
              </NavLink>
            </Paper>
            <Paper className="nav-item">
              <ReportOutlinedIcon style={{ color: "lightgrey" }} />
              <NavLink exact className="nav-link" to="/report">
                Report
              </NavLink>
            </Paper>
            <Paper className="nav-item">
              <PermContactCalendarOutlinedIcon style={{ color: "lightgrey" }} />
              <NavLink exact className="nav-link" to="/report">
                User Management
              </NavLink>
            </Paper>
            <Paper className="nav-item">
              <EventNoteOutlinedIcon style={{ color: "lightgrey" }} />
              <NavLink exact className="nav-link" to="/report">
                Closest Management
              </NavLink>
            </Paper>
            <Paper className="nav-item">
              <MemoryOutlinedIcon style={{ color: "lightgrey" }} />
              <NavLink exact className="nav-link" to="/report">
                Device
              </NavLink>
            </Paper>
            <Paper className="nav-item">
              <FingerprintOutlinedIcon style={{ color: "lightgrey" }} />
              <NavLink exact className="nav-link" to="/report">
                Finger Print
              </NavLink>
            </Paper>
          </Box>
        </Grid>

        <Switch>
          <Route path="/location">{/* <Location /> */}</Route>
          <Route path="/records">{/* <Records /> */}</Route>
          <Route path="/leave">{/* <Leave /> */}</Route>
          <Route path="/calendar">{/* <Calendar /> */}</Route>
          <Route path="/report">{/* <Report /> */}</Route>
        </Switch>
      </BrowserRouter>
    </Grid>
  );
}

export default Tabs;

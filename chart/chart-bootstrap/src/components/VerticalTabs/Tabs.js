import { BrowserRouter, Link, Route, Switch, NavLink } from "react-router-dom";
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
    <div className="vertical-tabs mt-4">
      <BrowserRouter>
        <nav className="navi">
          <ul className="nav">
            <li className="nav-item">
              <img src={loc} alt="location" />
              <NavLink exact className="nav-link" to="/location">
                Real Time Location
              </NavLink>
            </li>
            <li className="nav-item">
              <img src={records} alt="records" />
              <NavLink exact className="nav-link" to="/records">
                Time Records
              </NavLink>
            </li>
            <li className="nav-item">
              <img src={leave} alt="leave" />
              <NavLink exact className="nav-link" to="/leave">
                Leave
              </NavLink>
            </li>
            <li className="nav-item">
              <img src={calendar} alt="calendar" />
              <NavLink exact className="nav-link" to="/calendar">
                Calendar
              </NavLink>
            </li>
            <li className="nav-item">
              <img src={report} alt="report" />
              <NavLink exact className="nav-link" to="/report">
                Report
              </NavLink>
            </li>
            <li className="nav-item">
              <img src={user} alt="user" />
              <NavLink exact className="nav-link" to="/report">
                User Management
              </NavLink>
            </li>
            <li className="nav-item">
              <img src={manage} alt="manage" />
              <NavLink exact className="nav-link" to="/report">
                Closest Management
              </NavLink>
            </li>
            <li className="nav-item">
              <img src={device} alt="device" />
              <NavLink exact className="nav-link" to="/report">
                Device
              </NavLink>
            </li>
            <li className="nav-item">
              <img src={finger} alt="fingerPrint" />
              <NavLink exact className="nav-link" to="/report">
                Finger Print
              </NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/location">{/* <Location /> */}</Route>
          <Route path="/records">{/* <Records /> */}</Route>
          <Route path="/leave">{/* <Leave /> */}</Route>
          <Route path="/calendar">{/* <Calendar /> */}</Route>
          <Route path="/report">{/* <Report /> */}</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Tabs;

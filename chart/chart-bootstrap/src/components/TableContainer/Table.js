import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import img from "./assets/delBlue.png";
import img1 from "./assets/delGrey.png";
import sortIcon from "./assets/sort.png";
import "./style.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(device, status, arrive, exit, action) {
  return { device, status, arrive, exit, action };
}

const rows = [
  createData(
    <>
      <span className="table-span me-3">Sort</span>
      <img src={sortIcon} alt="sort" />
    </>,
    <>
      <span className="table-span me-3">Status</span>
      <img src={sortIcon} alt="sort" />
    </>,
    <>
      <span className="table-span me-3">Arrival time</span>
      <img src={sortIcon} alt="sort" />
    </>,
    <>
      <span className="table-span me-3">Exit time</span>
      <img src={sortIcon} alt="sort" />
    </>,
    <>
      <span className="table-span me-3">Action</span>
      <img src={sortIcon} alt="sort" />
    </>
  ),
  createData(
    <span className="table-p">Delinternet-office</span>,
    <div className="d-flex align-items-center">
      <i className="fas fa-plus-circle "></i>
      <p className="ms-2 mb-0">Enter</p>
    </div>,
    <span className="table-p">Tue Mar 30 2021 11:23:58</span>,
    <span className="table-p">Tue Mar 30 2021 18:55:12</span>,
    <img src={img} alt="img" />
  ),
  createData(
    <span className="table-p">Delinternet-office</span>,
    <div className="d-flex align-items-center">
      <i className="fas fa-plus-circle mod"></i>
      <p className="ms-2 mb-0">Enter</p>
    </div>,
    <span className="table-p">Tue Mar 30 2021 11:23:58</span>,
    <span className="table-p">Tue Mar 30 2021 18:55:12</span>,
    <img src={img1} alt="img1" />
  ),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Device</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Arrival&nbsp;time</TableCell>
            <TableCell align="left">Exit&nbsp;time</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.device}>
              <TableCell component="th" scope="row">
                {row.device}
              </TableCell>
              <TableCell align="left">{row.status}</TableCell>
              <TableCell align="left">{row.arrive}</TableCell>
              <TableCell align="left">{row.exit}</TableCell>
              <TableCell align="left">{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Icon,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import ImportExportIcon from "@material-ui/icons/ImportExport";
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
    <Box style={{ display: "flex" }}>
      <Paper className="table-span">Sort</Paper>
      <ImportExportIcon style={{ color: "lightgrey" }} />
    </Box>,
    <Box style={{ display: "flex" }}>
      <Paper className="table-span">Status</Paper>
      <ImportExportIcon style={{ color: "lightgrey" }} />
    </Box>,
    <Box style={{ display: "flex" }}>
      <Paper className="table-span">Arrival time</Paper>
      <ImportExportIcon style={{ color: "lightgrey" }} />
    </Box>,
    <Box style={{ display: "flex" }}>
      <Paper className="table-span">Exit time</Paper>
      <ImportExportIcon style={{ color: "lightgrey" }} />
    </Box>,
    <Box style={{ display: "flex" }}>
      <Paper className="table-span">Action</Paper>
      <ImportExportIcon style={{ color: "lightgrey" }} />
    </Box>
  ),
  createData(
    <Paper className="table-p">Delinternet-office</Paper>,
    <Paper className="d-flex align-items-center">
      <Icon style={{ color: green[500], fontSize: "1.1rem" }}>add_circle</Icon>
      <Paper className="ms-2 mb-0">Enter</Paper>
    </Paper>,
    <Paper className="table-p">Tue Mar 30 2021 11:23:58</Paper>,
    <Paper className="table-p">Tue Mar 30 2021 18:55:12</Paper>,
    <img src={img} alt="img" />
  ),
  createData(
    <Paper className="table-p">Delinternet-office</Paper>,
    <Paper className="d-flex align-items-center">
      <Icon style={{ fontSize: "1.1rem" }} color="secondary">
        add_circle
      </Icon>
      <Paper className="ms-2 mb-0">Enter</Paper>
    </Paper>,
    <Paper className="table-p">Tue Mar 30 2021 11:23:58</Paper>,
    <Paper className="table-p">Tue Mar 30 2021 18:55:12</Paper>,
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

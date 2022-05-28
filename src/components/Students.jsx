import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { store } from "./Detail";

export default function Students() {
  const [rows] = useContext(store);

  const Id = new Date().getTime().toString();

  return (
    <div>
      <div className="mains">
      <h1 className="one">Student Details</h1>
        <button className="btn btn-success">
          <Link to={`/students/add/${Id}`}>Add New Student</Link>
        </button>
      </div>

      <div className="table">
        <TableContainer component={Paper}>
          <Table sx={{ minWIdth: 500 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell><b>Name</b></TableCell>
                <TableCell align="right"><b>Age</b></TableCell>
                <TableCell align="right"><b>Course</b></TableCell>
                <TableCell align="right"><b>Batch</b></TableCell>
                <TableCell align="right"><b>Change</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.Id}>
                  <TableCell component="th" scope="row">
                    {row.Name}
                  </TableCell>
                  <TableCell align="right">{row.Age}</TableCell>
                  <TableCell align="right">{row.Course}</TableCell>
                  <TableCell align="right">{row.Batch}</TableCell>
                  <TableCell align="right">
                    <Link to={`/students/add/${row.Id}`}><button className="btn btn-warning">Edit</button> </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
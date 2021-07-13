import { Box, Button, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { userService } from "../services";

function List({ match }) {
  const { path } = match;
  const [users, setUsers] = useState(null);

  useEffect(() => {
    userService.getAll().then((x) => setUsers(x));
  }, []);

  function deleteUser(id) {
    setUsers(
      users.map((x) => {
        if (x.id === id) {
          x.isDeleting = true;
        }
        return x;
      })
    );
    userService.delete(id).then(() => {
      setUsers((users) => users.filter((x) => x.id !== id));
    });
  }

  return (
    <Box>
      <Typography variant="h3">OLTS</Typography>
      <Link to={`${path}/add`} className="btn btn-sm btn-success mb-2">
        Add OLT
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th style={{ width: "23%" }}>Owner Name</th>
            <th style={{ width: "22%" }}>Owner Email</th>
            <th style={{ width: "23%" }}>Label</th>
            <th style={{ width: "22%" }}>Serial Number</th>

            <th style={{ width: "10%" }}></th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user.id}>
                <td>
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.email}</td>
                <td>{user.label}</td>
                <td>{user.serialNumber}</td>

                <td style={{ whiteSpace: "nowrap" }}>
                  <Link to={`${path}/edit/${user.id}`}>
                    <Button variant="contained" color="primary">
                      Edit
                    </Button>
                  </Link>

                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => deleteUser(user.id)}
                    className="btn btn-sm btn-danger btn-delete-user"
                    disabled={user.isDeleting}
                  >
                    {user.isDeleting ? (
                      <span className="spinner-border spinner-border-sm"></span>
                    ) : (
                      <span>Delete</span>
                    )}
                  </Button>
                </td>
              </tr>
            ))}
          {!users && (
            <tr>
              <td colSpan="4" className="text-center">
                <Box className="spinner-border spinner-border-lg align-center"></Box>
              </td>
            </tr>
          )}
          {users && !users.length && (
            <tr>
              <td colSpan="4" className="text-center">
                <Box className="p-2">No OLTS To Display</Box>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </Box>
  );
}

export { List };

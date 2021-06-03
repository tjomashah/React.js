import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, Select, MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Position() {
  const classes = useStyles();
  const [position, setPosition] = React.useState("");

  const handleChange = (event) => {
    setPosition(event.target.value);
  };
  return (
    <div style={{ paddingTop: 4 }}>
      <FormControl className={classes.formControl}>
        <Select
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: "#2E5BFF",
            textAlign: "center",
            borderBottom: "none",
            marginLeft: 10,
          }}
          value={position}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value={"HR Manager"}>HR Manager</MenuItem>
          <MenuItem value={"Junior"}>Junior</MenuItem>
          <MenuItem value={"Middle"}>Middle</MenuItem>
          <MenuItem value={"Senior"}>Senior</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Position;

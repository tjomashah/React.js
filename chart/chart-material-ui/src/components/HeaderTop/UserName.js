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

function UserName() {
  const classes = useStyles();
  const [name, setName] = React.useState("Albert Holmes");

  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div style={{ paddingTop: 8 }}>
      <FormControl className={classes.formControl}>
        <Select
          style={{
            fontSize: 15,
            fontWeight: 500,
            color: "#37424A",
            textAlign: "center",
            marginLeft: 5,
          }}
          value={name}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value={"Albert Holmes"}>Albert Holmes</MenuItem>
          <MenuItem value={"Mickel Jordan"}>Mickel Jordan</MenuItem>
          <MenuItem value={"Lionel Messi"}>Lionel Messi</MenuItem>
          <MenuItem value={"Michael Schumacher"}>Michael Schumacher</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default UserName;

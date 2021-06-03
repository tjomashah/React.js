import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import "./style.css";

const AntTabs = withStyles({
  indicator: {
    backgroundColor: "blue",
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    fontFamily: 'DM Sans", sans-serif',
    color: "grey",
    textTransform: "none",
    minWidth: 72,
    fontSize: 17,
    fontWeight: 600,

    "&$selected": {
      fontFamily: 'DM Sans", sans-serif',
      color: "blue",
      fontSize: 17,
      fontWeight: "bold",
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 60,
      width: "100%",
      backgroundColor: "#635ee7",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

function HorizontalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ padding: "0 15px 0 12px" }}>
      <div>
        <AntTabs value={value} onChange={handleChange}>
          <AntTab label="Employees" />
          <AntTab label="Skills" />
          <AntTab label="Education" />
          <AntTab label="Certifications" />
          <AntTab label="Languages" />
          <AntTab label="Dependents" />
          <AntTab label="Contacts" />
          <AntTab label="Deactivated" />
        </AntTabs>
      </div>
      <div>
        <StyledTabs value={value} onChange={handleChange}>
          {/* <StyledTab label="Workflows" />
          <StyledTab label="Datasets" />
          <StyledTab label="Connections" /> */}
        </StyledTabs>
      </div>
    </div>
  );
}
export default HorizontalTabs;

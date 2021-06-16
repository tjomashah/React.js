import React from "react";
import { makeStyles } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./app/components/index";
import Launch from "./app/components/launch/index";
import "./index.css";

const useStyles = makeStyles({
  div: {
    width: "100%",
    background:
      "linear-gradient(180deg, #302B63 21.88%, rgba(24, 27, 72, 0.71) 90.1%)",
  },
});

const Routers = (props) => {
  const [change, setChange] = React.useState();
  return (
    <>
      <BrowserRouter>
        <Router>
          <Link to="/launch"></Link>

          <Switch>
            <Route path="/" component={Home} />
            <Route path="/launch">
              <Launch />
            </Route>
          </Switch>
        </Router>
      </BrowserRouter>
    </>
  );
};

const App = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.div}>
      <Home />
    </div>
  );
};

export default App;

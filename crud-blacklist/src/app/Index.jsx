import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { Box } from "@material-ui/core";
import { Nav, Alert } from "../components";
import { Home } from "../home/Index";
import { OLTS } from "../olts/Index";
import { Blacklist } from "../blacklist/Index";

function App() {
  const { pathname } = useLocation();

  return (
    <Box className="app-container bg-light">
      <Nav />
      <Alert />
      <Box className="container pt-4 pb-4">
        <Switch>
          <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
          <Route exact path="/" component={Home} />
          <Route path="/users" component={OLTS} />
          <Route path="/blacklist" component={Blacklist} />
          <Redirect from="*" to="/" />
        </Switch>
      </Box>
    </Box>
  );
}

export { App };

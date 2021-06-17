import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CrystalBallApp from "./crystal-ball-app/CrystalBallApp";
import Landing from "./landing/Landing";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/app">
          <CrystalBallApp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

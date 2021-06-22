import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import CrystalBallApp from "./crystal-ball-app/CrystalBallApp";
import Landing from "./landing/Landing";
import { store } from "./app/store";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/app">
          <Provider store={store}>
            <CrystalBallApp />
          </Provider>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

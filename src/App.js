import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Muatan from "./Muatan";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/muatan">
          <Muatan />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

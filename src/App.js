import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListMovie from "./pages/ListMovie";
import SearchMovie from "./pages/Search Movie";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={ListMovie} />
          <Route path="/search" component={SearchMovie} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </div>
    </Router>
  );
}

import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import Setup from "./pages/Setup";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/setup" component={Setup}/>
          <Route exact path="/calendar" component={Calendar}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

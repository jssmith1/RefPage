import React from "react";
import "./App.css";
import TypeNotFound from "./TypeNotFound.jsx";
import VariableNotFound from "./VariableNotFound.jsx";
import HomePage from "./HomePage.jsx"
import HomeButton from "./assets/home.svg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <div className="Home">
          <Link to="/">
            <img
              src={HomeButton}
              alt="home-button"
              width="30"
              height="30"
            ></img>
          </Link>
        </div>
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/typenotfound">
            <TypeNotFound />
          </Route>
          <Route path="/variablenotfound">
            <VariableNotFound />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}





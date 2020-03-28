import React from "react";
import "./App.css";
import { Link, useLocation, Router, Route } from "react-router-dom";
import TypeNotFound from "./TypeNotFound.jsx";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.useQuery = this.useQuery.bind(this);
  }

  useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  render() {
    return (
      <div className="App">
        <div className="AppContent">
          <h2>List of Errors</h2>
          <Router>
          <div className="Indent-1">
            <Link to="/typenotfound?varname=Thing">Type Not Found</Link>{" "}
          </div>
          <div className="Indent-1">
            <Link to="/variablenotfound">Variable Not Found</Link>{" "}
          </div>
          <Route exact path="/typenotfound?varname=Thing">
            <TypeNotFound varName={this.useQuery().get("varname")}/>
          </Route>
          </Router>
        </div>
      </div>
    );
  }
}

export default HomePage;

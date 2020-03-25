import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="AppContent">
          <h2>List of Errors</h2>
          <div className="Indent-1">
            <Link to="/typenotfound">Type Not Found</Link>{" "}
          </div>
          <div className="Indent-1">
            <Link to="/variablenotfound">Variable Not Found</Link>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;

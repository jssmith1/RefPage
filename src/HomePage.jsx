import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Route,
  useLocation
} from "react-router-dom";
import TypeNotFound from "./TypeNotFound";
import VariableNotFound from "./VariableNotFound";
import TypeMismatch from "./TypeMismatch";
import HomeButton from "./assets/home.svg";

export default function HomePage() {
  return (
    <Router>
      <HomePageContent />
    </Router>
  );
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function HomePageContent() {
  let query = useQuery();

  return (
    <div>
      <div className="Home">
        <Link to="/homepage">
          <img src={HomeButton} alt="home-button" width="30" height="30"></img>
        </Link>
      </div>

      <Route exact path="/homepage">
        <div className="AppContent">
          <div className="Indent-1">
            <Link to="/typenotfound?classname=Thing">Type Not Found</Link>
          </div>
          <div className="Indent-1">
            <Link to="/typemismatch?varname=thing">Type Mismatch</Link>
          </div>
          <div className="Indent-1">
            <Link to="/variablenotfound?varname=thing&classname=Thing&classparam=()">
              Variable Not Found
            </Link>
          </div>
        </div>
      </Route>

      <Route exact path="/typenotfound">
        <TypeNotFound className={query.get("classname") || "Thing"} />
      </Route>

      <Route exact path="/typemismatch">
        <TypeMismatch varName={query.get("varname") || "thing"} />
      </Route>

      <Route exact path="/variablenotfound">
        <VariableNotFound
          varName={query.get("varname") || "thing"}
          className={query.get("classname") || "Thing"}
          classParam={query.get("classparam") || "()"}
        />
      </Route>
    </div>
  );
}

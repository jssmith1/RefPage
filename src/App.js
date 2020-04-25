import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Route,
  useLocation,
} from "react-router-dom";
import ReturnMissing from "./ReturnMissing";
import TypeNotFound from "./TypeNotFound";
import VariableNotFound from "./VariableNotFound";
import TypeMismatch from "./TypeMismatch";
import VariableNotInit from "./VariableNotInit";
import ParameterMismatch from "./ParameterMismatch";
import Home from "./Home";
import HomeButton from "./assets/home.svg";

export default function App() {
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
        <Link to="/">
          <img src={HomeButton} alt="home-button" width="30" height="30"></img>
        </Link>
      </div>
      <Route exact path="/">
        <Home id={query.get("id") || "01"} />
      </Route>
      <Route exact path="/parametermismatch0">
        <ParameterMismatch
          className={query.get("classname") || "doSomething"}
        />
      </Route>

      <Route exact path="/parametermismatch1">
        <ParameterMismatch className={query.get("classname") || "segment"} />
      </Route>

      <Route exact path="/parametermismatch2">
        <ParameterMismatch className={query.get("classname") || "overRect"} />
      </Route>

      <Route exact path="/returnmissing">
        <ReturnMissing
          className={query.get("classname") || "func"}
          returnType={query.get("classparam") || "int"}
        />
      </Route>

      <Route exact path="/typenotfound">
        <TypeNotFound
          className={query.get("classname") || "Thing"}
          correctName={query.get("correctname") || "CorrectName"}
          varName={query.get("varname") || "thing"}
        />
      </Route>

      <Route exact path="/typemismatch">
        <TypeMismatch varName={query.get("varname") || "thing"} />
      </Route>

      <Route exact path="/variablenotfound0">
        <VariableNotFound
          varName={query.get("varname") || "thing"}
          className={query.get("classname") || "Thing"}
          classparam={query.get("classparam") || "()"}
        />
      </Route>

      <Route exact path="/variablenotfound1">
        <VariableNotFound
          varName={query.get("varname") || "gravity"}
          className={query.get("classname") || "PVector"}
          classparam={query.get("classparam") || "(0,0.2)"}
        />
      </Route>

      <Route exact path="/variablenotfound2">
        <VariableNotFound
          varName={query.get("varname") || "xCoordirnate"}
          className={query.get("classname") || "float[num]"}
          classparam={query.get("classparam") || ""}
        />
      </Route>

      <Route exact path="/variablenotinit">
        <VariableNotInit varName={query.get("varname") || "thing"} />
      </Route>
    </div>
  );
}

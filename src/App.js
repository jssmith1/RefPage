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
import MethodNotFound from "./MethodNotFound";
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
        <div className="AppContent">
          <div className="Indent-1">
            <Link to="/methodnotfound">Method Not Found</Link>
          </div>
          <div className="Indent-1">
            <Link to="/parametermismatch0">Parameter Mismatch</Link>
          </div>
          <div className="Indent-1">
            <Link to="/returnmissing?classname=func&returntype=int">
              Return Statement Missing
            </Link>
          </div>
          <div className="Indent-1">
            <Link to="/typemismatch?varname=thing">Type Mismatch</Link>
          </div>
          <div className="Indent-1">
            <Link to="/typenotfound">Type Not Found</Link>
          </div>
          <div className="Indent-1">
            <Link to="/variablenotfound">Variable Not Found </Link>
          </div>
          <div className="Indent-1">
            <Link to="/variablenotinit?varname=thing">
              Variable Not Initialized
            </Link>
          </div>
        </div>
      </Route>

      <Route exact path="/methodnotfound">
        <MethodNotFound
          varName={query.get("varname") || "method"}
          className={query.get("classname") || "thing"}
          classparam={query.get("classparam") || "()"}
        />
      </Route>

      <Route exact path="/parametermismatch0">
        <ParameterMismatch
          className={query.get("classname") || "doSomething"}
        />
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

      <Route exact path="/variablenotfound">
        <VariableNotFound
          varName={query.get("varname") || "thing"}
          className={query.get("classname") || "Thing"}
          classparam={query.get("classparam") || "()"}
        />
      </Route>

      <Route exact path="/variablenotinit">
        <VariableNotInit varName={query.get("varname") || "thing"} />
      </Route>
    </div>
  );
}

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
        <Link to="/refpage">
          <img src={HomeButton} alt="home-button" width="30" height="30"></img>
        </Link>
      </div>

      <Route exact path="/refpage">
        <div className="AppContent">
          <h4>Lists of compiler errors:</h4>
          <div className="Indent-1">
            <Link to="/parametermismatch0">Parameter Mismatch 0</Link>
          </div>
          <div className="Indent-1">
            <Link to="/parametermismatch1">Parameter Mismatch 1</Link>
          </div>
          <div className="Indent-1">
            <Link to="/parametermismatch2">Parameter Mismatch 2</Link>
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
            <Link to="/variablenotfound0">Variable Not Found </Link>
          </div>
          <div className="Indent-1">
            <Link to="/variablenotfound1">Variable Not Found 1</Link>
          </div>
          <div className="Indent-1">
            <Link to="/variablenotfound2">Variable Not Found 2</Link>
          </div>
          <div className="Indent-1">
            <Link to="/variablenotinit?varname=thing">
              Variable Not Initialized
            </Link>
          </div>
        </div>
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

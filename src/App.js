import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Route,
  useLocation
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
        <Link to="/">
          <img src={HomeButton} alt="home-button" width="30" height="30"></img>
        </Link>
      </div>

      <Route exact path="/">
        <div className="AppContent">
          <h4>Lists of compiler errors:</h4>
          <div className="Indent-1">
            <Link to="/parametermismatch?classname=charAt&classparam=(int)">Parameter Mismatch</Link>
          </div>
          <div className="Indent-1">
            <Link to="/returnmissing?classname=func&returntype=int">Return Statement Missing</Link>
          </div>
          <div className="Indent-1">
            <Link to="/typemismatch?varname=thing">Type Mismatch</Link>
          </div>
          <div className="Indent-1">
            <Link to="/typenotfound?classname=Thing">Type Not Found</Link>
          </div>
          <div className="Indent-1">
            <Link to="/variablenotfound?varname=gravity&classname=PVector&classparam=(0,0.2)">
              Variable Not Found 1
            </Link>
          </div>
          <div className="Indent-1">
            <Link to="/variablenotfound">
              Variable Not Found 2
            </Link>
          </div>
          <div className="Indent-1">
            <Link to="/variablenotinit?varname=thing">
              Variable Not Initialized
            </Link>
          </div>
        </div>
      </Route>

      <Route exact path="/parametermismatch">
        <ParameterMismatch 
            className={query.get("classname") || "charAt"}
            classParam={query.get("classparam") || "(int)"}
         />
      </Route>

      <Route exact path="/returnmissing">
        <ReturnMissing 
            className={query.get("classname") || "func"}
            returnType={query.get("classparam") || "int"}
         />
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
          classparam={query.get("classparam") || "()"}
        />
      </Route>

      <Route exact path="/variablenotinit">
        <VariableNotInit varName={query.get("varname") || "thing"} />
      </Route>
    </div>
  );
}

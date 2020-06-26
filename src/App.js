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
import MethodCallOnWrongType from "./MethodCallOnWrongType";
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
            <Link to="/methodcallonwrongtype?classname=Thing&methodname=doSomething&typeonename=primitive&typetwoname=int">Method Call On Wrong Type</Link>
          </div>
          <div className="Indent-1">
            <Link to="/methodnotfound?classname=Thing&methodname=doSomething&correctmethodname=correctName&typename=int&varname=thing">Method Not Found</Link>
          </div>
          <div className="Indent-1">
            <Link to="/parametermismatch?methodname=doSomething&typeonename=String&typetwoname=int">Parameter Mismatch</Link>
          </div>
          <div className="Indent-1">
            <Link to="/returnmissing?methodname=doSomething&typename=int">Return Statement Missing</Link>
          </div>
          <div className="Indent-1">
            <Link to="/typemismatch?typeonename=float&typetwoname=int&varname=thing">Type Mismatch</Link>
          </div>
          <div className="Indent-1">
            <Link to="/typenotfound?classname=Thing&correctclassname=CorrectName&varname=thing">Type Not Found</Link>
          </div>
          <div className="Indent-1">
            <Link to="/variablenotfound?classname=Thing&varname=thing">Variable Not Found </Link>
          </div>
          <div className="Indent-1">
            <Link to="/variablenotinit?varname=thing">Variable Not Initialized</Link>
          </div>
        </div>
      </Route>

      <Route exact path="/methodcallonwrongtype">
        <MethodCallOnWrongType
          methodName={query.get("methodname") || "doSomething"}
          className={query.get("classname") || "Thing"}
          varName={query.get("varname") || "thing"}
          typeOneName={query.get("typeonename") || "primitive"}
          typeTwoName={query.get("typetwoname") || "int"}
        />
      </Route>

      <Route exact path="/methodnotfound">
        <MethodNotFound
          methodName={query.get("methodname") || "doSomething"}
          correctMethodName={query.get("correctmethodname") || "correctName"}
          className={query.get("classname") || "Thing"}
          varName={query.get("varname") || "thing"}
          typeName={query.get("typename") || "int"}
        />
      </Route>

      <Route exact path="/parametermismatch">
        <ParameterMismatch
          methodName={query.get("methodname") || "doSomething"}
          typeOneName={query.get("typeonename") || "String"}
          typeTwoName={query.get("typetwoname") || "int"}
        />
      </Route>

      <Route exact path="/returnmissing">
        <ReturnMissing
          methodName={query.get("methodname") || "doSomething"}
          typeName={query.get("typename") || "int"}
        />
      </Route>

      <Route exact path="/typenotfound">
        <TypeNotFound
          className={query.get("classname") || "Thing"}
          correctClassName={query.get("correctclassname") || "CorrectName"}
          varName={query.get("varname") || "thing"}
        />
      </Route>

      <Route exact path="/typemismatch">
        <TypeMismatch
          varName={query.get("varname") || "thing"}
          typeOneName={query.get("typeonename") || "float"}
          typeTwoName={query.get("typetwoname") || "int"}
        />
      </Route>

      <Route exact path="/variablenotfound">
        <VariableNotFound
          varName={query.get("varname") || "thing"}
          className={query.get("classname") || "Thing"}
        />
      </Route>

      <Route exact path="/variablenotinit">
        <VariableNotInit
          varName={query.get("varname") || "thing"}
        />
      </Route>
    </div>
  );
}

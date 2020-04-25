import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Route,
} from "react-router-dom";


class Home extends React.Component {
    constructor(props) {
      super(props);

      this.state = {

      };
    }
  

    render() {


  return (
    <div>
      <Route exact path="/">
        <div className="AppContent">
          <h4>Lists of tasks:</h4>
          {this.props.id === '01' && (
              <div>
              <div className="Indent-1">
              <Link to="/variablenotfound0">Drawing</Link>
            </div>
            <div className="Indent-1">
              <Link to="/variablenotfound1">Movement</Link>
            </div>
              <div className="Indent-1">
              <Link to="/parametermismatch0">Rectangle</Link>
            </div>
              <div className="Indent-1">
              <Link to="/parametermismatch2">Ball</Link>
            </div>
            </div>
          )}
          {this.props.id === '02' && (
              <div>
                  <div className="Indent-1">
            <Link to="/variablenotfound0">Movement</Link>
          </div>
          <div className="Indent-1">
            <Link to="/variablenotfound2">Drawing</Link>
          </div>
          <div className="Indent-1">
            <Link to="/parametermismatch0">Rectangle</Link>
          </div>
          <div className="Indent-1">
            <Link to="/parametermismatch1">Ball</Link>
          </div>
            </div>
          )}
          {this.props.id === '03' && (
              <div>
                   <div className="Indent-1">
            <Link to="/variablenotfound0">Drawing </Link>
          </div>
          <div className="Indent-1">
            <Link to="/variablenotfound1">Movement</Link>
          </div>
          <div className="Indent-1">
            <Link to="/parametermismatch0">Rectangle</Link>
          </div>
          <div className="Indent-1">
            <Link to="/parametermismatch1">Ball</Link>
          </div>
                  </div>
          )}
          {this.props.id === '04' && (
              <div>
<div className="Indent-1">
            <Link to="/variablenotfound0">Movement </Link>
          </div>

          <div className="Indent-1">
            <Link to="/variablenotfound2">Drawing</Link>
          </div>
          <div className="Indent-1">
            <Link to="/parametermismatch0">Ball</Link>
          </div>
          <div className="Indent-1">
            <Link to="/parametermismatch2">Rectangle</Link>
          </div>
                  </div>
          )}
          {/* <div className="Indent-1">
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
          </div> */}
        </div>
      </Route>

      
    </div>
  );
    }
}

export default Home;
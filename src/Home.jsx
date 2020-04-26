import React from "react";
import "./App.css";
import {
  Link,
  Route
} from "react-router-dom";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

const BlueCheckbox = withStyles({
  root: {
    color: blue[400],
    "&$checked": {
      color: blue[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);


class Home extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        checked1: false,
        checked2: false,
        checked3: false,
        checked4: false
      };
    }
    changeChecked(i) {
        switch (i) {
          case 1:
            this.setState({ checked1: true, checked2: false, checked3: false, checked4: false });
            break;
          case 2:
            this.setState({ checked1: false, checked2: true, checked3: false, checked4: false });
            break;
          case 3:
            this.setState({ checked1: false, checked2: false, checked3: true, checked4: false });
            break;
          case 4:
            this.setState({ checked1: false, checked2: false, checked3: false, checked4: true });
            break;
          default:
            break;
        }
      }

    render() {


  return (
    <div>
      <Route exact path="/">
        <div className="AppContent">
            {/* <h4>Check your ID:</h4>
            <div className="StrategyMessage">
                <BlueCheckbox
                    value="box1"
                    checked = {this.state.checked1}
                    onChange={() => this.changeChecked(1)}
                /> <p>01</p>
            </div>
            <div className="StrategyMessage">
                <BlueCheckbox
                    value="box1"
                    checked = {this.state.checked2}
                    onChange={() => this.changeChecked(2)}
                /> <p>02</p>
            </div>
            <div className="StrategyMessage">
                <BlueCheckbox
                    value="box1"
                    checked = {this.state.checked3}
                    onChange={() => this.changeChecked(3)}
                /> <p>03</p>
            </div>
            <div className="StrategyMessage">
                <BlueCheckbox
                    value="box1"
                    checked = {this.state.checked4}
                    onChange={() => this.changeChecked(4)}
                /> <p>04</p>
            </div> */}
            <h4>Lists of tasks:</h4>
            {/* {this.state.checked1 && ( */}
              <div>
                <div className="Indent-1">
                    <Link to="/variablenotfound1">Movement</Link>
                </div>
                <div className="Indent-1">
                    <Link to="/variablenotfound0">Drawing</Link>
                </div>
                <div className="Indent-1">
                    <Link to="/parametermismatch2">Rectangle</Link>
                </div>
                <div className="Indent-1">
                    <Link to="/parametermismatch0">Ball</Link>
                </div>
            </div>
          {/* )}
          {this.state.checked2 && (
              <div>
                  <div className="Indent-1">
                        <Link to="/variablenotfound0">Movement</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/variablenotfound2">Drawing</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/parametermismatch1">Ball</Link>
                    </div>
                    <div className="Indent-1">
                        <Link to="/parametermismatch0">Rectangle</Link>
                    </div>
                </div>
          )}
          {this.state.checked3 && (
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
          {this.state.checked4 && (
              <div>
                <div className="Indent-1">
                    <Link to="/variablenotfound2">Drawing</Link>
                </div>
                <div className="Indent-1">
                    <Link to="/variablenotfound0">Movement </Link>
                 </div>
                <div className="Indent-1">
                    <Link to="/parametermismatch0">Ball</Link>
                </div>
                <div className="Indent-1">
                    <Link to="/parametermismatch2">Rectangle</Link>
                </div>
            </div>
          )} */}
        </div>
      </Route>

      
    </div>
         
      
  );
    }
}

export default Home;
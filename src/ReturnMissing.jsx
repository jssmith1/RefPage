import React from "react";
import MinusButton from "./assets/minus.svg";
import PlusButton from "./assets/plus.svg";
import "./App.css";
import ResourceFooter from "./ResourceFooter.jsx";

import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

const BlueCheckbox = withStyles({
  root: {
    color: blue[400],
    "&$checked": {
      color: blue[600]
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

const LEFT_CURLY = "{";
const RIGHT_CURLY = "}";

class ReturnMissing extends React.Component {
  constructor(props) {
    super(props);
    this.openStrategyTile = this.openStrategyTile.bind(this);
    this.openCodeExample = this.openCodeExample.bind(this);
    this.changeChecked = this.changeChecked.bind(this);
    this.state = {
      openStrategy1: false,
      openStrategy2: false,
      openCode11: false,
      openCode21: false,
      checked11: false,
      checked21: false,
    };
  }

  openStrategyTile(i) {
    switch (i) {
      case 1:
        this.setState({ openStrategy1: !this.state.openStrategy1 });
        this.setState({ openCode11: false });
        break;
      case 2:
        this.setState({ openStrategy2: !this.state.openStrategy2 });
        this.setState({ openCode21: false });
        break;
      default:
        break;
    }
  }

  openCodeExample(i) {
    switch (i) {
      case 11:
        this.setState({ openCode11: !this.state.openCode11 });
        break;
      case 21:
        this.setState({ openCode21: !this.state.openCode21 });
        break;
      default:
        break;
    }
  }

  changeChecked(i) {
    switch (i) {
      case 11:
        this.setState({ checked11: !this.state.checked11 });
        break;
      case 21:
        this.setState({ checked21: !this.state.checked21 });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <div className="AppContent">
          <div className="Title">
            <h2>
            This method must return a result of type <div className="InputValue">{this.props.returnType}</div>
            </h2>
          </div>

          <h4>
            <i>
              Translation: You did not return a value of type <div className="InputValue">{this.props.returnType}</div>{" "}
              like the definition of method <div className="InputValue">{this.props.className}</div>.
            </i>
          </h4>

          <div className="Tile">
            <div className="ErrorTile" onClick={() => this.openStrategyTile(1)}>
              <div className="ErrorMessage">
                <h4>
                  1: You may have forgotten the return statement for the method <p className="InputValue">{this.props.className}</p> 
                </h4>
                <div>
                  Hint: Do you have the return statement at the end of the method <p className="InputValue">{this.props.className}</p>?
                  </div>
              </div>
              {!this.state.openStrategy1 && (
                <div className="ButtonHolder">
                  <img
                    onClick={() => this.openStrategyTile(1)}
                    src={PlusButton}
                    alt="down-button"
                    width="20"
                    height="20"
                  ></img>
                </div>
              )}
              {this.state.openStrategy1 && (
                <div className="ButtonHolder">
                  <img
                    onClick={() => this.openStrategyTile(1)}
                    src={MinusButton}
                    alt="up-button"
                    width="20"
                    height="20"
                  ></img>
                </div>
              )}
            </div>

            {this.state.openStrategy1 && (
              <div className="StrategyContainer">
                <p>
                  {" "}
                  <i>Tick the box once you have tried the suggestion</i>
                </p>
                <div
                  className="StrategyTile"
                  onClick={() => this.openCodeExample(11)}
                >
                  <div className="StrategyInstruction">
                    <div className="StrategyMessage">
                      <BlueCheckbox
                        value="box1"
                        checked={this.state.checked11}
                        onChange={() => this.changeChecked(11)}
                      />
                      <div className="Suggestion">
                        Suggestion 1: Add a return statement of type{" "}
                        <p className="InputValue">{this.props.returnType}</p> at the end of the method <p className="InputValue">{this.props.className}</p> 
                      </div>
                    </div>
                    {!this.state.openCode11 && (
                      <div className="ButtonHolder">
                        <img
                          onClick={() => this.openCodeExample(11)}
                          src={PlusButton}
                          alt="down-button"
                          width="20"
                          height="20"
                        ></img>
                      </div>
                    )}
                    {this.state.openCode11 && (
                      <div className="ButtonHolder">
                        <img
                          onClick={() => this.openCodeExample(11)}
                          src={MinusButton}
                          alt="up-button"
                          width="20"
                          height="20"
                        ></img>
                      </div>
                    )}
                  </div>
                  {this.state.openCode11 && (
                    <div className="CodeExample">
                      <div className="CodeContainer">
                        <div className="RedCode">
                        <div className="Indent-0">public int <p className="InputValue">{this.props.className}</p>() {LEFT_CURLY}
                          </div>
                          <div className="Indent-1"> int zero = 0;
                          </div>
                          <div className="Indent-0"> {RIGHT_CURLY}
                          </div>
                        </div>
                      </div>
                      <div className="CodeContainer">
                        <div className="GreenCode">
                        <div className="Indent-0">public int <p className="InputValue">{this.props.className}</p>() {LEFT_CURLY}
                          </div>
                          <div className="Indent-1"> int zero = 0;
                          </div>
                          <div className="Indent-1"> return x;
                          </div>
                          <div className="Indent-0"> {RIGHT_CURLY}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
            
              </div>
            )}
          </div>

          <div className="Tile">
            <div className="ErrorTile" onClick={() => this.openStrategyTile(2)}>
              <div className="ErrorMessage">
                <h4>
                  2: You may have missed the return statement in some branches of the method <p className="InputValue">{this.props.className}</p>
                </h4>
                <div>
                  Hint: Does your method <p className="InputValue">{this.props.className}</p> return a value of type <p className="InputValue">{this.props.returnType}</p> in all cases?
                </div>
              </div>
              {!this.state.openStrategy2 && (
                <div className="ButtonHolder">
                  <img
                    onClick={() => this.openStrategyTile(2)}
                    src={PlusButton}
                    alt="down-button"
                    width="20"
                    height="20"
                  ></img>
                </div>
              )}
              {this.state.openStrategy2 && (
                <div className="ButtonHolder">
                  <img
                    onClick={() => this.openStrategyTile(2)}
                    src={MinusButton}
                    alt="up-button"
                    width="20"
                    height="20"
                  ></img>
                </div>
              )}
            </div>
            {this.state.openStrategy2 && (
              <div className="StrategyContainer">
                <p>
                  <i>Tick the box once you have tried the suggestion</i>
                </p>
                <div
                  className="StrategyTile"
                  onClick={() => this.openCodeExample(21)}
                >
                  <div className="StrategyInstruction">
                    <div className="StrategyMessage">
                      <BlueCheckbox
                        value="box1"
                        checked={this.state.checked21}
                        onChange={() => this.changeChecked(21)}
                      />
                      <div className="Suggestion">
                        Suggestion 1: Make sure all branches of conditionals in method{" "}
                        <p className="InputValue">{this.props.className}</p> return value of type <p className="InputValue">{this.props.returnType}</p>
                      </div>
                    </div>
                    {!this.state.openCode21 && (
                      <div className="ButtonHolder">
                        <img
                          onClick={() => this.openCodeExample(21)}
                          src={PlusButton}
                          alt="down-button"
                          width="20"
                          height="20"
                        ></img>
                      </div>
                    )}
                    {this.state.openCode21 && (
                      <div className="ButtonHolder">
                        <img
                          onClick={() => this.openCodeExample(21)}
                          src={MinusButton}
                          alt="up-button"
                          width="20"
                          height="20"
                        ></img>
                      </div>
                    )}
                  </div>
                  {this.state.openCode21 && (
                    <div className="CodeExample">
                    <div className="CodeContainer">
                      <div className="RedCode">
                      <div className="Indent-0">public int <p className="InputValue">{this.props.className}</p>() {LEFT_CURLY}
                          </div>
                          <div className="Indent-1"> int a = 0;
                          </div>
                          <div className="Indent-1"> int b = 1;
                          </div>
                          <div className="Indent-1"> if (a > b) return a;
                          </div>
                          <div className="Indent-0"> {RIGHT_CURLY}
                          </div>
                      </div>
                    </div>
                    <div className="CodeContainer">
                      <div className="GreenCode">
                      <div className="Indent-0">public int <p className="InputValue">{this.props.className}</p>() {LEFT_CURLY}
                          </div>
                          <div className="Indent-1"> int a = 0;
                          </div>
                          <div className="Indent-1"> int b = 1;
                          </div>
                          <div className="Indent-1"> if (a > b) return a;
                          </div>
                          <div className="Indent-1"> return b;
                          </div>
                          <div className="Indent-0"> {RIGHT_CURLY}
                          </div>
                      </div>
                    
                      <div className="GreenCode">
                      <div className="Indent-0">public int <p className="InputValue">{this.props.className}</p>() {LEFT_CURLY}
                          </div>
                          <div className="Indent-1"> int a = 0;
                          </div>
                          <div className="Indent-1"> int b = 1;
                          </div>
                          <div className="Indent-1"> if (a > b) {LEFT_CURLY} 
                          </div>
                          <div className="Indent-2"> return a; 
                          </div>
                          <div className="Indent-1"> {RIGHT_CURLY} else {LEFT_CURLY} 
                          </div>
                          <div className="Indent-2"> return b;
                          </div>
                          <div className="Indent-1"> {RIGHT_CURLY} 
                          </div>
                          <div className="Indent-0"> {RIGHT_CURLY}
                          </div>
                      </div>
                    
                    </div>
                  </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <ResourceFooter />
        </div>
      </div>
    );
  }
}

export default ReturnMissing;

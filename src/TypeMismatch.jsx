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

class TypeMismatch extends React.Component {
  constructor(props) {
    super(props);
    this.openStrategyTile = this.openStrategyTile.bind(this);
    this.openCodeExample = this.openCodeExample.bind(this);
    this.changeChecked = this.changeChecked.bind(this);
    this.state = {
      openStrategy1: false,
      openStrategy2: false,
      openStrategy3: false,
      openCode11: false,
      openCode12: false,
      openCode21: false,
      openCode31: false,
      checked11: false,
      checked12: false,
      checked21: false,
      checked31: false
    };
  }

  openStrategyTile(i) {
    switch (i) {
      case 1:
        this.setState({ openStrategy1: !this.state.openStrategy1 });
        this.setState({ openCode11: false });
        this.setState({ openCode12: false });
        break;
      case 2:
        this.setState({ openStrategy2: !this.state.openStrategy2 });
        this.setState({ openCode21: false });
        break;
      case 3:
        this.setState({ openStrategy3: !this.state.openStrategy3 });
        this.setState({ openCode31: false });
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
      case 12:
        this.setState({ openCode12: !this.state.openCode12 });
        break;
      case 21:
        this.setState({ openCode21: !this.state.openCode21 });
        break;
      case 31:
        this.setState({ openCode31: !this.state.openCode31 });
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
      case 12:
        this.setState({ checked12: !this.state.checked12 });
        break;
      case 21:
        this.setState({ checked21: !this.state.checked21 });
        break;
      case 31:
        this.setState({ checked31: !this.state.checked31 });
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
              Cannot convert from float to int
            </h2>
          </div>

          <h4>
            <i>
              Translation: You are trying to use the variable{" "}
              <div className="InputValue">{this.props.varName}</div> of type int but using it as a float-type variable.
            </i>
          </h4>

          <div className="Tile">
            <div className="ErrorTile" onClick={() => this.openStrategyTile(1)}>
              <div className="ErrorMessage">
                <h4>
                  1: You may have assigned a float value to variable{" "}
                  <div className="InputValue">{this.props.varName}</div>{" "}of type int
                </h4>
                <div>
                  Hint: Do you want <p className="InputValue">{this.props.varName}</p> to be a float type or int type?
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
                        Suggestion 1: Change variable declaration of{" "}
                        <p className="InputValue">{this.props.varName}</p> to type float
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
                          <div className="Indent-0"> int{" "}
                            <p className="InputValue">{this.props.varName}</p>{" "}
                            = 3.14;
                          </div>
                        </div>
                      </div>
                      <div className="CodeContainer">
                        <div className="GreenCode">
                        <div className="Indent-0"> float{" "}
                            <p className="InputValue">{this.props.varName}</p>{" "}
                            = 3.14;
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div
                  className="StrategyTile"
                  onClick={() => this.openCodeExample(12)}
                >
                  <div className="StrategyInstruction">
                    <div className="StrategyMessage">
                      <BlueCheckbox
                        value="box1"
                        checked={this.state.checked12}
                        onChange={() => this.changeChecked(12)}
                      />
                      <div className="Suggestion">
                        Suggestion 2: Change value of{" "}
                        <p className="InputValue">{this.props.varName}</p> to an int value
                      </div>
                    </div>
                    {!this.state.openCode12 && (
                      <div className="ButtonHolder">
                        <img
                          onClick={() => this.openCodeExample(12)}
                          src={PlusButton}
                          alt="down-button"
                          width="20"
                          height="20"
                        ></img>
                      </div>
                    )}
                    {this.state.openCode12 && (
                      <div className="ButtonHolder">
                        <img
                          onClick={() => this.openCodeExample(12)}
                          src={MinusButton}
                          alt="up-button"
                          width="20"
                          height="20"
                        ></img>
                      </div>
                    )}
                  </div>
                  {this.state.openCode12 && (
                    <div className="CodeExample">
                      <div className="CodeContainer">
                        <div className="RedCode">
                          <div className="Indent-0"> int{" "}
                            <p className="InputValue">{this.props.varName}</p>{" "}
                            = 3.14;
                          </div>
                        </div>
                      </div>
                      <div className="CodeContainer">
                        <div className="GreenCode">
                        <div className="Indent-0"> int{" "}
                            <p className="InputValue">{this.props.varName}</p>{" "}
                            = 3;
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
                  2: You may have used int-type variable{" "}
                  <div className="InputValue">{this.props.varName}</div>{" "} in an operation involving float type
                </h4>
                <div>
                  Hint: Even if <div className="InputValue">{this.props.varName}</div>{" "}has a int value, you need to declare it of float type
                  to use it in a float operation.
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
                        Suggestion 1: Change variable declatation of{" "}
                        <p className="InputValue">{this.props.varName}</p> to type float
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
                          <div className="Indent-0"> int{" "}
                            <p className="InputValue">{this.props.varName}</p>{" "}
                            = 3;
                          </div>
                          <div className="Indent-0">
                            <p className="InputValue">{this.props.varName}</p>{" "}
                            = <p className="InputValue">{this.props.varName}</p>{" "}* 3.14;
                          </div>
                        </div>
                      </div>
                      <div className="CodeContainer">
                        <div className="GreenCode">
                        <div className="Indent-0"> float{" "}
                            <p className="InputValue">{this.props.varName}</p>{" "}
                            = 3;
                          </div>
                          <div className="Indent-0">
                            <p className="InputValue">{this.props.varName}</p>{" "}
                            = <p className="InputValue">{this.props.varName}</p>{" "}* 3.14;
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
            <div className="ErrorTile" onClick={() => this.openStrategyTile(3)}>
              <div className="ErrorMessage">
                <h4>
                  3: You may have returned a float value in a method that expects to return an int value
                </h4>
                <div>
                  Hint: Did the actual return value match the expected return type?
                </div>
              </div>
              {!this.state.openStrategy3 && (
                <div className="ButtonHolder">
                  <img
                    onClick={() => this.openStrategyTile(3)}
                    src={PlusButton}
                    alt="down-button"
                    width="20"
                    height="20"
                  ></img>
                </div>
              )}
              {this.state.openStrategy3 && (
                <div className="ButtonHolder">
                  <img
                    onClick={() => this.openStrategyTile(3)}
                    src={MinusButton}
                    alt="up-button"
                    width="20"
                    height="20"
                  ></img>
                </div>
              )}
            </div>
            {this.state.openStrategy3 && (
              <div className="StrategyContainer">
                <p>
                  <i>Tick the box once you have tried the suggestion</i>
                </p>
                <div
                  className="StrategyTile"
                  onClick={() => this.openCodeExample(31)}
                >
                  <div className="StrategyInstruction">
                    <div className="StrategyMessage">
                      <BlueCheckbox
                        value="box1"
                        checked={this.state.checked31}
                        onChange={() => this.changeChecked(31)}
                      />
                      <div className="Suggestion">
                        Suggestion 1: Change method expected return type to float type
                      </div>
                    </div>
                    {!this.state.openCode31 && (
                      <div className="ButtonHolder">
                        <img
                          onClick={() => this.openCodeExample(31)}
                          src={PlusButton}
                          alt="down-button"
                          width="20"
                          height="20"
                        ></img>
                      </div>
                    )}
                    {this.state.openCode31 && (
                      <div className="ButtonHolder">
                        <img
                          onClick={() => this.openCodeExample(31)}
                          src={MinusButton}
                          alt="up-button"
                          width="20"
                          height="20"
                        ></img>
                      </div>
                    )}
                  </div>
                  {this.state.openCode31 && (
                    <div className="CodeExample">
                      <div className="CodeContainer">
                        <div className="RedCode">
                            <div className="Indent-0">int pi() {LEFT_CURLY}</div>
                          <div className="Indent-1">float{" "}
                            <p className="InputValue">{this.props.varName}</p>{" "}
                            = 3.14;
                          </div>
                          <div className="Indent-1">return{" "}
                            <p className="InputValue">{this.props.varName}</p>;
                          </div>
                          <div className="Indent-0">{RIGHT_CURLY}</div>
                        </div>
                      </div>
                      <div className="CodeContainer">
                        <div className="GreenCode">
                        <div className="Indent-0">float pi() {LEFT_CURLY}</div>
                          <div className="Indent-1">float{" "}
                            <p className="InputValue">{this.props.varName}</p>{" "}
                            = 3.14;
                          </div>
                          <div className="Indent-1">return{" "}
                            <p className="InputValue">{this.props.varName}</p>;
                          </div>
                          <div className="Indent-0">{RIGHT_CURLY}</div>
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

export default TypeMismatch;

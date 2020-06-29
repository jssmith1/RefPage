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
      color: blue[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const LEFT_CURLY = "{";
const RIGHT_CURLY = "}";
class ParameterMismatch extends React.Component {
  constructor(props) {
    super(props);
    this.openStrategyTile = this.openStrategyTile.bind(this);
    this.openCodeExample = this.openCodeExample.bind(this);
    this.changeChecked = this.changeChecked.bind(this);
    this.state = {
      openStrategy1: false,
      openStrategy2: false,
      openCode11: false,
      openCode12: false,
      openCode21: false,
      openCode22: false,
      checked11: false,
      checked12: false,
      checked21: false,
      checked22: false,
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
        this.setState({ openCode22: false });
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
      case 22:
        this.setState({ openCode22: !this.state.openCode22 });
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
      case 22:
        this.setState({ checked22: !this.state.checked22 });
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
              The method “
              <div className="InputValue">{this.props.methodName}()</div>”
              in the type <div className="InputValue">{this.props.typeOneName}</div> is not applicable for the 
              arguments <div className="InputValue">({this.props.typeTwoName}) </div>
            </h2>
          </div>

          <h4>
            <i>
              Translation: You are trying to use the method “
              <div className="InputValue">{this.props.methodName}()</div>” but
              with the incorrect parameters.
            </i>
          </h4>

          <div className="Tile">
            <div className="ErrorTile" onClick={() => this.openStrategyTile(1)}>
              <div className="ErrorMessage">
                <h4>
                  1: You may have used the wrong type of parameter for
                  the method <div className="InputValue">{this.props.methodName}()</div>
                </h4>
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
                <i>Tick the box once you have tried the suggestion</i>
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
                        Suggestion 1: Change the parameter of{" "}
                        <p className="InputValue">{this.props.methodName}()</p> to
                        the expected type
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
                          <div className="Indent-0">
                            void setup() {LEFT_CURLY}
                          </div>
                          <div className="Indent-1">
                            {this.props.methodName}
                            ("2");
                          </div>
                          <div className="Indent-0">{RIGHT_CURLY}</div>
                          <div className="Indent-0">
                            void {this.props.methodName}(int s){LEFT_CURLY}
                          </div>
                          <div className="Indent-1"> println(s+1);</div>
                          <div className="Indent-0">{RIGHT_CURLY}</div>
                        </div>
                      </div>
                      <div className="CodeContainer">
                        <div className="GreenCode">
                          <div className="Indent-0">
                            void setup() {LEFT_CURLY}
                          </div>
                          <div className="Indent-1">
                            {this.props.methodName}
                            (2);
                          </div>
                          <div className="Indent-0">{RIGHT_CURLY}</div>
                          <div className="Indent-0">
                            void {this.props.methodName}(int s){LEFT_CURLY}
                          </div>
                          <div className="Indent-1"> println(s+1);</div>
                          <div className="Indent-0">{RIGHT_CURLY}</div>
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
                        Suggestion 2: Change the parameter of{" "}
                        <p className="InputValue">{this.props.methodName}()</p> in
                        the method declaration to match with  <p className="InputValue">{this.props.typeTwoName}()</p>
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
                          <div className="Indent-0">
                            void setup() {LEFT_CURLY}
                          </div>
                          <div className="Indent-1">
                            {this.props.methodName}
                            ("2");
                          </div>
                          <div className="Indent-0">{RIGHT_CURLY}</div>
                          <div className="Indent-0">
                            void {this.props.methodName}(int s){LEFT_CURLY}
                          </div>
                          <div className="Indent-1"> println(s+1);</div>
                          <div className="Indent-0">{RIGHT_CURLY}</div>
                        </div>
                      </div>
                      <div className="CodeContainer">
                        <div className="GreenCode">
                          <div className="Indent-0">
                            void setup() {LEFT_CURLY}
                          </div>
                          <div className="Indent-1">
                            {this.props.methodName}
                            ("2");
                          </div>
                          <div className="Indent-0">{RIGHT_CURLY}</div>
                          <div className="Indent-0">
                            void {this.props.methodName}({this.props.typeTwoName} s){LEFT_CURLY}
                          </div>
                          <div className="Indent-1"> println(s+1);</div>
                          <div className="Indent-0">{RIGHT_CURLY}</div>
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
                <h4>2: You may have used the wrong number of parameters for the method{" "}
                <p className="InputValue">{this.props.methodName}()</p>
                </h4>
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
                <i>Tick the box once you have tried the suggestion</i>
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
                        Suggestion 1: Change the number of parameters of{" "}
                        <p className="InputValue">{this.props.methodName}()</p> to
                        the expected amount
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
                          <div className="Indent-0">
                            void setup() {LEFT_CURLY}
                          </div>
                          <div className="Indent-1">
                            {this.props.methodName}
                            ("1", "2" , "3");
                          </div>
                          <div className="Indent-0">{RIGHT_CURLY}</div>
                          <div className="Indent-0">
                            void {this.props.methodName}(int s){LEFT_CURLY}
                          </div>
                          <div className="Indent-1"> println(s+1);</div>
                          <div className="Indent-0">{RIGHT_CURLY}</div>
                        </div>
                      </div>
                      <div className="CodeContainer">
                        <div className="GreenCode">
                          <div className="Indent-0">
                            void setup() {LEFT_CURLY}
                          </div>
                          <div className="Indent-1">
                            {this.props.methodName}
                            (2);
                          </div>
                          <div className="Indent-0">{RIGHT_CURLY}</div>
                          <div className="Indent-0">
                            void {this.props.methodName}(int s){LEFT_CURLY}
                          </div>
                          <div className="Indent-1"> println(s+1);</div>
                          <div className="Indent-0">{RIGHT_CURLY}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className="StrategyTile"
                  onClick={() => this.openCodeExample(22)}
                >
                  <div className="StrategyInstruction">
                    <div className="StrategyMessage">
                      <BlueCheckbox
                        value="box1"
                        checked={this.state.checked22}
                        onChange={() => this.changeChecked(22)}
                      />
                      <div className="Suggestion">
                        Suggestion 2: Change the number of parameters in the {" "}
                        <p className="InputValue">{this.props.methodName}()</p> method
                        declaration
                      </div>
                    </div>
                    {!this.state.openCode22 && (
                      <div className="ButtonHolder">
                        <img
                          onClick={() => this.openCodeExample(22)}
                          src={PlusButton}
                          alt="down-button"
                          width="20"
                          height="20"
                        ></img>
                      </div>
                    )}
                    {this.state.openCode22 && (
                      <div className="ButtonHolder">
                        <img
                          onClick={() => this.openCodeExample(22)}
                          src={MinusButton}
                          alt="up-button"
                          width="20"
                          height="20"
                        ></img>
                      </div>
                    )}
                  </div>
                  {this.state.openCode22 && (
                    <div className="CodeExample">
                      <div className="CodeContainer">
                        <div className="RedCode">
                          <div className="Indent-0">
                            void setup() {LEFT_CURLY}
                          </div>
                          <div className="Indent-1">
                            {this.props.methodName}
                            ("1", "2", "3");
                          </div>
                          <div className="Indent-0">{RIGHT_CURLY}</div>
                          <div className="Indent-0">
                            void {this.props.methodName}(int s){LEFT_CURLY}
                          </div>
                          <div className="Indent-1"> println(s+1);</div>
                          <div className="Indent-0">{RIGHT_CURLY}</div>
                        </div>
                      </div>
                      <div className="CodeContainer">
                        <div className="GreenCode">
                          <div className="Indent-0">
                            void setup() {LEFT_CURLY}
                          </div>
                          <div className="Indent-1">
                            {this.props.methodName}
                            ("1", "2", "3");
                          </div>
                          <div className="Indent-0">{RIGHT_CURLY}</div>
                          <div className="Indent-0">
                            void {this.props.methodName}({this.props.typeTwoName} s1, {this.props.typeTwoName} s2, {this.props.typeTwoName} s3)
                            {LEFT_CURLY}
                          </div>
                          <div className="Indent-1"> println(s1+1);</div>
                          <div className="Indent-1"> println(s2+1);</div>
                          <div className="Indent-1"> println(s3+1);</div>
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

export default ParameterMismatch;

import React from "react";
import MinusButton from "./assets/minus.svg";
import PlusButton from "./assets/plus.svg";
import "./App.css";
import ResourceFooter from "./ResourceFooter.jsx";

import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

import { Link } from "react-router-dom";

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

  renderRecommender() {
    return (
      <div className="Recommender">
        <h4>
          <i>Relating errors</i>
        </h4>
        <div className="Indent-1">
          <Link to="/typemismatch?varname=thing">Type Mismatch</Link>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <div className="AppContent">
          <div className="Title">
            <h2>
              The function “
              <div className="InputValue">{this.props.className}()</div>”
              expects parameters like: "
              <div className="InputValue">
                {this.props.className}
                (int)
              </div>
              ”
            </h2>
          </div>

          <h4>
            <i>
              Translation: You are trying to use the function “
              <div className="InputValue">{this.props.className}</div>” but
              using some incorrect forms of parameters.
            </i>
          </h4>

          <div className="Tile">
            <div className="ErrorTile" onClick={() => this.openStrategyTile(1)}>
              <div className="ErrorMessage">
                <h4>
                  1: You may have used the wrong type of parameters instead of
                  expected type (int)
                </h4>
                <div>
                  Hint: Is the parameter of your function{" "}
                  <p className="InputValue">{this.props.varName}</p> of type{" "}
                  (int)?
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
                        Suggestion 1: Change parameter of{" "}
                        <p className="InputValue">{this.props.className}</p> to
                        type (int)
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
                            {this.props.className}
                            ("2");
                          </div>
                          <div className="Indent-0">{RIGHT_CURLY}</div>
                          <div className="Indent-0">
                            void {this.props.className}(int s){LEFT_CURLY}
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
                            {this.props.className}
                            (2);
                          </div>
                          <div className="Indent-0">{RIGHT_CURLY}</div>
                          <div className="Indent-0">
                            void {this.props.className}(int s){LEFT_CURLY}
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
                        Suggestion 2: Change parameter of{" "}
                        <p className="InputValue">{this.props.className} </p> in
                        function definition to match its usage
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
                            {this.props.className}
                            (2.5);
                          </div>
                          <div className="Indent-0">{RIGHT_CURLY}</div>
                          <div className="Indent-0">
                            void {this.props.className}(int s){LEFT_CURLY}
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
                            {this.props.className}
                            (2.5);
                          </div>
                          <div className="Indent-0">{RIGHT_CURLY}</div>
                          <div className="Indent-0">
                            void {this.props.className}(float s){LEFT_CURLY}
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
                <h4>2: You may have used the wrong number of parameters</h4>
                <div>
                  Hint: Do you use the matching number of parameters required
                  for the function{" "}
                  <p className="InputValue">{this.props.className}</p>?
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
                        Suggestion 1: Change the number of parameters of{" "}
                        <p className="InputValue">{this.props.className}</p> to
                        match the requirement
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
                            {this.props.className}
                            (1,2,3);
                          </div>
                          <div className="Indent-0">{RIGHT_CURLY}</div>
                          <div className="Indent-0">
                            void {this.props.className}(int s){LEFT_CURLY}
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
                            {this.props.className}
                            (2);
                          </div>
                          <div className="Indent-0">{RIGHT_CURLY}</div>
                          <div className="Indent-0">
                            void {this.props.className}(int s){LEFT_CURLY}
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
                        Suggestion 2: Change parameter of{" "}
                        <p className="InputValue">{this.props.className} </p> in
                        function definition to match its usage
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
                            {this.props.className}
                            (1,2,3);
                          </div>
                          <div className="Indent-0">{RIGHT_CURLY}</div>
                          <div className="Indent-0">
                            void {this.props.className}(int s){LEFT_CURLY}
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
                            {this.props.className}
                            (1,2,3);
                          </div>
                          <div className="Indent-0">{RIGHT_CURLY}</div>
                          <div className="Indent-0">
                            void {this.props.className}(int s1, int s2, int s3)
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
          {/* <this.renderRecommender /> */}
        </div>
      </div>
    );
  }
}

export default ParameterMismatch;

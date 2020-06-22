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

class VariableNotFound extends React.Component {
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
      openCode21: false,
      openCode22: false,
      openCode31: false,
      checked11: false,
      checked21: false,
      checked22: false,
      checked31: false,
    };
  }

  openStrategyTile(i) {
    switch (i) {
      case 1:
        this.setState({ openStrategy1: !this.state.openStrategy1 });
        this.setState({ openCode11: false });
        break;
      case 2:
        this.setState({ openStrategy3: !this.state.openStrategy3 });
        this.setState({ openCode31: false });
        break;
      case 3:
        this.setState({ openStrategy4: !this.state.openStrategy4 });
        this.setState({ openCode41: false });
        this.setState({ openCode42: false });
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
      case 31:
        this.setState({ openCode31: !this.state.openCode31 });
        break;
      case 41:
        this.setState({ openCode41: !this.state.openCode41 });
        break;
      case 42:
        this.setState({ openCode42: !this.state.openCode42 });
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
      case 31:
        this.setState({ checked31: !this.state.checked31 });
        break;
      case 41:
        this.setState({ checked41: !this.state.checked41 });
        break;
      case 42:
        this.setState({ checked42: !this.state.checked42 });
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
              <div className="InputValue">{this.props.varName}</div> cannot be
              resolved to a variable
            </h2>
          </div>
          <h4>
            <i>
              Translation: You are trying to use a variable named{" "}
              <div className="InputValue">{this.props.varName}</div> which does not exist yet.
            </i>
          </h4>

          <div className="Tile">
            <div className="ErrorTile" onClick={() => this.openStrategyTile(1)}>
              <div className="ErrorMessage">
                <h4>
                  1: You may have forgotten to declare variable{" "}
                  <div className="InputValue">{this.props.varName}</div>{" "}
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
                        Suggestion 1: Add variable declaration for{" "}
                        <p className="InputValue">{this.props.varName}</p>{" "}
                        before the first occurence of{" "}
                        <p className="InputValue">{this.props.varName}</p> in
                        the code
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
                            print(
                            {this.props.varName});
                          </div>
                        </div>
                      </div>
                      <div className="CodeContainer">
                        <div className="GreenCode">
                          <div className="Indent-0">
                            {this.props.className} {this.props.varName} = new{" "}
                            {this.props.className}
                            {this.props.classparam};
                          </div>
                          <div className="Indent-0">
                            print(
                            {this.props.varName});
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
                  2: You may have mistyped variable name{" "}
                  <div className="InputValue">{this.props.varName}</div>{" "}
                </h4>
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
                  <i>Tick the box once you have tried the suggestion</i>
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
                        Suggestion 1: Change{" "}
                        <p className="InputValue">{this.props.varName}</p> to
                        the variable name that you have defined
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
                    <div>
                      <div className="CodeExample">
                        <div className="CodeContainer">
                          <div className="RedCode">
                            <div className="Indent-0">
                              {this.props.className} correct_name = new{" "}
                              {this.props.className}
                              {this.props.classparam};
                            </div>
                            <div className="Indent-0">...</div>
                            <div className="Indent-0">
                              print(
                              {this.props.varName}
                              );
                            </div>
                          </div>
                        </div>
                        <div className="CodeContainer">
                          <div className="GreenCode">
                            <div className="Indent-0">
                              {this.props.className} correct_name = new{" "}
                              {this.props.className}
                              {this.props.classparam};
                            </div>
                            <div className="Indent-0">...</div>
                            <div className="Indent-0">print(correct_name);</div>
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
                  3: You may have used variable{" "}
                  <div className="InputValue">{this.props.varName}</div> in the
                  incorrect scope
                </h4>
              </div>
              {!this.state.openStrategy4 && (
                <div className="ButtonHolder">
                  <img
                    onClick={() => this.openStrategyTile(4)}
                    src={PlusButton}
                    alt="down-button"
                    width="20"
                    height="20"
                  ></img>
                </div>
              )}
              {this.state.openStrategy4 && (
                <div className="ButtonHolder">
                  <img
                    onClick={() => this.openStrategyTile(4)}
                    src={MinusButton}
                    alt="up-button"
                    width="20"
                    height="20"
                  ></img>
                </div>
              )}
            </div>

            {this.state.openStrategy4 && (
              <div className="StrategyContainer">
                  <i>Tick the box once you have tried the suggestion</i>

                <div
                  className="StrategyTile"
                  onClick={() => this.openCodeExample(41)}
                >
                  <div className="StrategyInstruction">
                    <div className="StrategyMessage">
                      <BlueCheckbox
                        value="box1"
                        checked={this.state.checked41}
                        onChange={() => this.changeChecked(41)}
                      />
                      <div className="Suggestion">
                        Suggestion 1: Move{" "}
                        <p className="InputValue">{this.props.varName}</p> to
                        the same function with its declaration
                      </div>
                    </div>
                    {!this.state.openCode41 && (
                      <div className="ButtonHolder">
                        <img
                          onClick={() => this.openCodeExample(41)}
                          src={PlusButton}
                          alt="down-button"
                          width="20"
                          height="20"
                        ></img>
                      </div>
                    )}
                    {this.state.openCode41 && (
                      <div className="ButtonHolder">
                        <img
                          onClick={() => this.openCodeExample(41)}
                          src={MinusButton}
                          alt="up-button"
                          width="20"
                          height="20"
                        ></img>
                      </div>
                    )}
                  </div>
                  {this.state.openCode41 && (
                    <div className="CodeExample">
                      <div className="CodeContainer">
                        <div className="RedCode">
                          <div className="Indent-0">
                            void setup(){LEFT_CURLY}
                          </div>
                          <div className="Indent-1">
                            {this.props.className} {this.props.varName}= new{" "}
                            {this.props.className}
                            {this.props.classparam};
                          </div>
                          <div className="Indent-1">...</div>
                          <div className="Indent-0">{RIGHT_CURLY}</div>
                          <div className="Indent-0">
                            void draw(){LEFT_CURLY}
                          </div>
                          <div className="Indent-1">
                            println(
                            {this.props.varName});
                          </div>
                          <div className="Indent-0">{RIGHT_CURLY}</div>
                        </div>
                      </div>
                      <div className="CodeContainer">
                        <div className="GreenCode">
                          <div className="Indent-0">
                            void draw(){LEFT_CURLY}
                          </div>
                          <div className="Indent-1">
                            {this.props.className} {this.props.varName} = new{" "}
                            {this.props.className}
                            {this.props.classparam};
                          </div>
                          <div className="Indent-1">...</div>
                          <div className="Indent-1">
                            println(
                            {this.props.varName});
                          </div>
                          <div className="Indent-0">{RIGHT_CURLY}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className="StrategyTile"
                  onClick={() => this.openCodeExample(42)}
                >
                  <div className="StrategyInstruction">
                    <div className="StrategyMessage">
                      <BlueCheckbox
                        value="box1"
                        checked={this.state.checked42}
                        onChange={() => this.changeChecked(42)}
                      />
                      <div className="Suggestion">
                        Suggestion 2: Move{" "}
                        <p className="InputValue">{this.props.varName}</p> to
                        the same or smaller scope than its declaration
                      </div>
                    </div>
                    {!this.state.openCode42 && (
                      <div className="ButtonHolder">
                        <img
                          onClick={() => this.openCodeExample(42)}
                          src={PlusButton}
                          alt="down-button"
                          width="20"
                          height="20"
                        ></img>
                      </div>
                    )}
                    {this.state.openCode42 && (
                      <div className="ButtonHolder">
                        <img
                          onClick={() => this.openCodeExample(42)}
                          src={MinusButton}
                          alt="up-button"
                          width="20"
                          height="20"
                        ></img>
                      </div>
                    )}
                  </div>
                  {this.state.openCode42 && (
                    <div>
                      <div>
                        <div className="CodeExample">
                          <div className="CodeContainer">
                            <div className="RedCode">
                              <div className="Indent-0">
                                (while i != count) {LEFT_CURLY}
                              </div>
                              <div className="Indent-1">
                                {this.props.className} {this.props.varName} =
                                new {this.props.className}
                                {this.props.classparam};
                              </div>
                              <div className="Indent-1">i++;</div>
                              <div className="Indent-0">{RIGHT_CURLY}</div>
                              <div className="Indent-0">
                                println(
                                {this.props.varName}
                                );
                              </div>
                            </div>
                          </div>
                          <div className="CodeContainer">
                            <div className="GreenCode">
                              <div className="Indent-0">
                                (while i != count) {LEFT_CURLY}
                              </div>
                              <div className="Indent-1">
                                {this.props.className} {this.props.varName} =
                                new {this.props.className}
                                {this.props.classparam};
                              </div>
                              <div className="Indent-1">
                                println(
                                {this.props.varName}
                                );
                              </div>
                              <div className="Indent-1">i++;</div>
                              <div className="Indent-0">{RIGHT_CURLY}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="CodeExample">
                          <div className="CodeContainer">
                            <div className="RedCode">
                              <div className="Indent-0">
                                void setup(){LEFT_CURLY}
                              </div>
                              <div className="Indent-1">
                                {this.props.className} {this.props.varName} =
                                new {this.props.className}
                                {this.props.classparam};
                              </div>
                              <div className="Indent-1">...</div>
                              <div className="Indent-0">{RIGHT_CURLY}</div>
                              <div className="Indent-0">
                                void draw(){LEFT_CURLY}
                              </div>
                              <div className="Indent-1">
                                println(
                                {this.props.varName}
                                );
                              </div>
                              <div className="Indent-0">{RIGHT_CURLY}</div>
                            </div>
                          </div>
                          <div className="CodeContainer">
                            <div className="GreenCode">
                              <div className="Indent-0">
                                {this.props.varName};
                              </div>
                              <div className="Indent-0">
                                void setup(){LEFT_CURLY}
                              </div>
                              <div className="Indent-1">
                                {this.props.varName} = new{" "}
                                {this.props.className}
                                {this.props.classparam};
                              </div>
                              <div className="Indent-1">...</div>
                              <div className="Indent-0">{RIGHT_CURLY}</div>
                              <div className="Indent-0">
                                void draw(){LEFT_CURLY}
                              </div>
                              <div className="Indent-1">
                                println(
                                {this.props.varName}
                                );
                              </div>
                              <div className="Indent-0">{RIGHT_CURLY}</div>
                            </div>
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

export default VariableNotFound;

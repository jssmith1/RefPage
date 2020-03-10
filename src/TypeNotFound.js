import React from "react";
import UpArrow from "./assets/up-arrow.svg";
import DownArrow from "./assets/down-arrow.svg";
import "./App.css";
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
class TypeNotFound extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeVarName = this.handleChangeVarName.bind(this);
    this.openStrategyTile = this.openStrategyTile.bind(this);
    this.openCodeExample = this.openCodeExample.bind(this);
    this.state = {
      varName: "Thing",
      openStrategy1: false,
      openStrategy2: false,
      openStrategy3: false,
      openCode11: false,
      openCode21: false,
      openCode22: false,
      openCode31: false,
    };
  }

  handleChangeVarName(event) {
    this.setState({ varName: event.target.value });
  }

  openStrategyTile(i) {
    switch (i) {
      case 1:
        this.setState({ openStrategy1: !this.state.openStrategy1 });
        break;
      case 2:
        this.setState({ openStrategy2: !this.state.openStrategy2 });
        break;
      case 3:
        this.setState({ openStrategy3: !this.state.openStrategy3 });
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
      case 22:
        this.setState({ openCode22: !this.state.openCode22 });
        break;
      case 31:
        this.setState({ openCode31: !this.state.openCode31 });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <div className="AppContent">
          <form className="form-horizontal">
            <p>Input class name</p>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChangeVarName}
            />
          </form>
          <div className="Title">
            <h2>
              Type <div className="VarName">{this.state.varName}</div> was not found
            </h2>
          </div>

          <h4>
            <i>
              Translation: You are trying to declare a variable of type{" "}
              <div className="VarName">{this.state.varName}</div> but I don’t
              know what a <div className="VarName">{this.state.varName}</div>{" "}
              is.
            </i>
          </h4>

          <div className="Tile">
            <div className="ErrorTile">
              <div className="ErrorMessage">
                <h4>
                  1: You may have mistyped class name{" "}
                  <div className="VarName">{this.state.varName}</div>{" "}
                </h4>
                <p>
                  Hint: Is <div className="VarName">{this.state.varName}</div>{" "}
                  the exact class name that you have defined?
                </p>
              </div>
              {!this.state.openStrategy1 && (
                <div className="ButtonHolder">
                  <img
                    onClick={() => this.openStrategyTile(1)}
                    src={DownArrow}
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
                    src={UpArrow}
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
                  <i>Tick the box once you have tried the suggestion</i>
                </p>
                <div className="StrategyTile">
                  <div className="StrategyInstruction">
                    <div className="StrategyMessage">
                      <BlueCheckbox value="box1" />
                      <p>
                        Suggestion 1: Change{" "}
                        <p className="VarName">{this.state.varName}</p> to the
                        class name that you have defined
                      </p>
                    </div>
                    {!this.state.openCode11 && (
                      <div className="ButtonHolder">
                        <img
                          onClick={() => this.openCodeExample(11)}
                          src={DownArrow}
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
                          src={UpArrow}
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
                            <p className="VarName">{this.state.varName}</p>{" "}
                            mything = new{" "}
                            <p className="VarName">{this.state.varName}</p>();
                          </div>
                        </div>
                      </div>
                      <div className="CodeContainer">
                        <div className="GreenCode">
                          <div className="Indent-0">
                            void setup() {LEFT_CURLY}{" "}
                          </div>
                          <div className="Indent-1">
                            <p className="VarName">CorrectName</p> myThing = new{" "}
                            <p className="VarName">CorrectName</p>();{" "}
                          </div>
                          <div className="Indent-0">{RIGHT_CURLY}</div>
                          <div className="Indent-0">
                            class <p className="VarName">CorrectName</p>{" "}
                            {LEFT_CURLY}
                          </div>
                          <div className="Indent-1">
                            <p className="VarName">CorrectName</p>(){" "}
                            {LEFT_CURLY}
                          </div>
                          <div className="Indent-1">{RIGHT_CURLY}</div>
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
            <div className="ErrorTile">
              <div className="ErrorMessage">
                <h4>
                  2: You may have forgotten to create class{" "}
                  <div className="VarName">{this.state.varName}</div>{" "}
                </h4>
                <p>
                  Hint: Is <div className="VarName">{this.state.varName}</div>{" "}
                  the name of the non-builtin class that you forgot to create?
                </p>
              </div>
              {!this.state.openStrategy2 && (
                <div className="ButtonHolder">
                  <img
                    onClick={() => this.openStrategyTile(2)}
                    src={DownArrow}
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
                    src={UpArrow}
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
                <div className="StrategyTile">
                  <div className="StrategyInstruction">
                    <div className="StrategyMessage">
                      <BlueCheckbox value="box1" />
                      <p>
                        Suggestion 1: Add class{" "}
                        <p className="VarName">{this.state.varName}</p> to your
                        current file
                      </p>
                    </div>
                    {!this.state.openCode21 && (
                      <div className="ButtonHolder">
                        <img
                          onClick={() => this.openCodeExample(21)}
                          src={DownArrow}
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
                          src={UpArrow}
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
                            <p className="VarName">{this.state.varName}</p>{" "}
                            mything = new{" "}
                            <p className="VarName">{this.state.varName}</p>();
                          </div>
                        </div>
                      </div>
                      <div className="CodeContainer">
                        <div className="GreenCode">
                          <div className="Indent-0">
                            void setup() {LEFT_CURLY}{" "}
                          </div>
                          <div className="Indent-1">
                            <p className="VarName">{this.state.varName}</p>{" "}
                            myThing = new{" "}
                            <p className="VarName">{this.state.varName}</p>();{" "}
                          </div>
                          <div className="Indent-0">{RIGHT_CURLY}</div>
                          <div className="Indent-0">
                            class{" "}
                            <p className="VarName">{this.state.varName}</p>{" "}
                            {LEFT_CURLY}
                          </div>
                          <div className="Indent-1">
                            <p className="VarName">{this.state.varName}</p>(){" "}
                            {LEFT_CURLY}
                          </div>
                          <div className="Indent-1">{RIGHT_CURLY}</div>
                          <div className="Indent-0">{RIGHT_CURLY}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              
                <div className="StrategyTile">
                  <div className="StrategyInstruction">
                    <div className="StrategyMessage">
                      <BlueCheckbox value="box1" />
                      <p>
                        Suggestion 2: Add class{" "}
                        <p className="VarName">{this.state.varName}</p> to
                        another file in the same project and import it to the
                        current file
                      </p>
                    </div>
                    {!this.state.openCode22 && (
                      <div className="ButtonHolder">
                        <img
                          onClick={() => this.openCodeExample(22)}
                          src={DownArrow}
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
                          src={UpArrow}
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
                        <p>FileA.java</p>
                        <div className="RedCode">
                          <div className="Indent-0">
                            <p className="VarName">{this.state.varName}</p>{" "}
                            mything = new{" "}
                            <p className="VarName">{this.state.varName}</p>();
                          </div>
                        </div>
                      </div>
                      <div className="CodeContainer">
                        <p>FileA.java</p>
                        <div className="GreenCode">
                          <div className="Indent-0">
                            import FileB.
                            <p className="VarName">{this.state.varName}</p>;{" "}
                          </div>
                          <div className="Indent-0">
                            void setup() {LEFT_CURLY}{" "}
                          </div>
                          <div className="Indent-1">
                            <p className="VarName">{this.state.varName}</p>{" "}
                            myThing = new{" "}
                            <p className="VarName">{this.state.varName}</p>();{" "}
                          </div>
                          <div className="Indent-0">{RIGHT_CURLY}</div>
                        </div>
                        <p>FileB.java</p>
                        <div className="GreenCode">
                          <div className="Indent-0">
                            class{" "}
                            <p className="VarName">{this.state.varName}</p>{" "}
                            {LEFT_CURLY}
                          </div>
                          <div className="Indent-1">
                            <p className="VarName">{this.state.varName}</p>(){" "}
                            {LEFT_CURLY}
                          </div>
                          <div className="Indent-1">{RIGHT_CURLY}</div>
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
                  <div className="ErrorTile">
                    <div className="ErrorMessage">
                      <h4>
                        3: You may have forgotten to import class{" "}
                        <div className="VarName">{this.state.varName}</div>{" "}from a built-in library
                      </h4>
                      <p>
                        Hint: Is{" "}
                        <div className="VarName">{this.state.varName}</div> a built-in class?
                      </p>
                    </div>
                    {!this.state.openStrategy3 && (
                      <div className="ButtonHolder">
                        <img
                          onClick={() => this.openStrategyTile(3)}
                          src={DownArrow}
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
                          src={UpArrow}
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
                      <div className="StrategyTile">
                        <div className="StrategyInstruction">
                          <div className="StrategyMessage">
                            <BlueCheckbox value="box1" />
                            <p>
                              Suggestion 1: Import {" "}
                              <p className="VarName">{this.state.varName}</p> to
                              your file
                            </p>
                          </div>
                          {!this.state.openCode31 && (
                            <div className="ButtonHolder">
                              <img
                                onClick={() => this.openCodeExample(31)}
                                src={DownArrow}
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
                                src={UpArrow}
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
                                <div className="Indent-0">
                                  <p className="VarName">
                                    {this.state.varName}
                                  </p>{" "}
                                  mything = new{" "}
                                  <p className="VarName">
                                    {this.state.varName}
                                  </p>
                                  ();
                                </div>
                              </div>
                            </div>
                            <div className="CodeContainer">
                              <div className="GreenCode">
                              <div className="Indent-0">
                                  import path.to.library.
                            <p className="VarName">{this.state.varName}</p>;{" "}
                          </div>
                                <div className="Indent-0">
                                  void setup() {LEFT_CURLY}{" "}
                                </div>
                                <div className="Indent-1">
                                  <p className="VarName">{this.state.varName}</p> myThing
                                  = new <p className="VarName">{this.state.varName}</p>
                                  ();{" "}
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
          <i>
            <h4>
              Still unable to fix this error? More resources
            </h4>
            <div className="Indent-1"><a href="https://stackoverflow.com/">Stack Overflow</a></div>
            <div className="Indent-1"><a href="https://github.com/processing/processing/wiki/Common-Errors">Processing Common Errors</a></div>
          </i>

        </div>
      </div>
    );
  }
}

export default TypeNotFound;

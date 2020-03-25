import React from "react";
import MinusButton from "./assets/minus.svg";
import PlusButton from "./assets/plus.svg";
import "./App.css";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import { blue, green } from "@material-ui/core/colors";

const BlueCheckbox = withStyles({
  root: {
    color: blue[400],
    "&$checked": {
      color: blue[600]
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600]
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

const LEFT_CURLY = "{";
const RIGHT_CURLY = "}";

class VariableNotFound extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeVarName = this.handleChangeVarName.bind(this);
    this.handleChangeClassName = this.handleChangeClassName.bind(this);
    this.handleChangeClassParam = this.handleChangeClassParam.bind(this);
    this.state = {
      varName: "thing",
      className: "Thing",
      classParameter: "()",
      openStrategy1: false,
      openStrategy2: false,
      openStrategy3: false,
      openCode11: false,
      openCode21: false,
      openCode22: false,
      openCode31: false,
      checked11: false,
      checked111: false,
      checked112: false,
      checked21: false,
      checked211: false,
      checked212: false,
      checked221: false,
      checked222: false
    };
  }

  handleChangeVarName(event) {
    this.setState({ varName: event.target.value });
  }

  handleChangeClassName(event) {
    this.setState({ className: event.target.value });
  }

  handleChangeClassParam(event) {
    this.setState({ classParameter: event.target.value });
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
        this.setState({ openCode22: false });
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

  changeChecked(i) {
    switch (i) {
      case 11:
        this.setState({ checked11: !this.state.checked11 });
        break;
      case 111:
        this.setState({ checked111: !this.state.checked111 });
        break;
      case 112:
        this.setState({ checked112: !this.state.checked112 });
        break;
      case 21:
        this.setState({ checked21: !this.state.checked21 });
        break;
      case 211:
        this.setState({ checked211: !this.state.checked211 });
        break;
      case 212:
        this.setState({ checked212: !this.state.checked212 });
        break;
      case 221:
        this.setState({ checked221: !this.state.checked221 });
        break;
      case 222:
        this.setState({ checked222: !this.state.checked222 });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <div className="AppContent">
          <div className="InputContainer">
          <form className="form-horizontal">
            <p>Input variable name</p>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChangeVarName}
            />
          </form>
          <form className="form-horizontal">
            <p>Input class name</p>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChangeClassName}
            />
          </form>
          <form className="form-horizontal">
            <p>Input class parameter with format "(arg1, arg2,...)"</p>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChangeClassParam}
            />
          </form>
          </div>
          <div className="Title">
            <h2>
              <div className="VarName">{this.state.varName}</div> cannot be
              resolved to a variable
            </h2>
          </div>
          <h4>
            <i>
              Translation: You are trying to use a variable named{" "}
              <div className="VarName">{this.state.varName}</div> but I don’t
              know what that variable named{" "}
              <div className="VarName">{this.state.varName}</div> is.
            </i>
          </h4>

          <div className="Tile">
            <div className="ErrorTile" onClick={() => this.openStrategyTile(1)}>
              <div className="ErrorMessage">
                <h4>
                  1: You may have forgotten to declare variable{" "}
                  <div className="VarName">{this.state.varName}</div>{" "}
                </h4>
                <p>
                  Hint: Did you forgot to declare what{" "}
                  <div className="VarName">{this.state.varName}</div> is before
                  using it?
                </p>
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
                <div className="StrategyTile">
                  <div className="StrategyInstruction">
                    <div className="StrategyMessage">
                      <BlueCheckbox
                        value="box1"
                        checked={this.state.checked11}
                        onChange={() => this.changeChecked(11)}
                      />
                      <p>
                        Suggestion 1: Correct the name of class{" "}
                        <p className="VarName">{this.state.varName}</p>{" "}
                        declaration
                      </p>
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
                    <div>
                      <div className="Indent-1">
                        {" "}
                        <i>Tick the box once you have finished a step</i>
                      </div>
                      <div className="StrategySubMessage">
                        <GreenCheckbox
                          value="box1"
                          checked={this.state.checked111}
                          onChange={() => this.changeChecked(111)}
                        />
                        <p>
                          Step 1: Find the occurrence of{" "}
                          <p className="VarName">{this.state.varName}</p> in the
                          code with <b>Ctrl + F</b>
                        </p>
                      </div>
                      <div className="StrategySubMessage">
                        <GreenCheckbox
                          value="box1"
                          checked={this.state.checked112}
                          onChange={() => this.changeChecked(112)}
                        />
                        <p>
                          Step 2: If you cannot see variable declaration for{" "}
                          <p className="VarName">{this.state.varName}</p>, add
                          variable declaration before the first occurence of{" "}
                          <p className="VarName">{this.state.varName}</p> in the
                          code
                        </p>
                      </div>
                      <div
                        className="CodeExample"
                        onClick={() => this.openCodeExample(11)}
                      >
                        <div className="CodeContainer">
                          <div className="RedCode">
                            <div className="Indent-0">
                              System.out.print(
                              <p className="VarName">{this.state.varName}</p>);
                            </div>
                          </div>
                        </div>
                        <div className="CodeContainer">
                          <div className="GreenCode">
                            <div className="Indent-0">
                            <p className="VarName">{this.state.className}</p>{" "}
                              <p className="VarName">{this.state.varName}</p> =
                              new <p className="VarName">{this.state.className}</p><p className="VarName">{this.state.classParameter}</p>;
                            </div>
                            <div className="Indent-0">
                              System.out.print(
                              <p className="VarName">{this.state.varName}</p>);
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

          <div className="Tile">
            <div className="ErrorTile" onClick={() => this.openStrategyTile(2)}>
              <div className="ErrorMessage">
                <h4>
                  2: You may have declared variable{" "}
                  <div className="VarName">{this.state.varName}</div>{" "}incorrectly
                </h4>
                <p>
                  Hint: Have you already declared{" "}
                  <div className="VarName">{this.state.varName}</div> but made some mistakes when declaring it?
                </p>
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
                  {" "}
                  <i>Tick the box once you have tried the suggestion</i>
                </p>
                <div className="StrategyTile">
                  <div className="StrategyInstruction">
                    <div className="StrategyMessage">
                      <BlueCheckbox
                        value="box1"
                        checked={this.state.checked21}
                        onChange={() => this.changeChecked(21)}
                      />
                      <p>
                        Suggestion 1: If the class name in the variable declaration is not what you wanted, correct the class name
                      </p>
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
                    <div>
                      <div className="Indent-1">
                        {" "}
                        <i>Tick the box once you have finished a step</i>
                      </div>
                      <div className="StrategySubMessage">
                        <GreenCheckbox
                          value="box1"
                          checked={this.state.checked211}
                          onChange={() => this.changeChecked(211)}
                        />
                        <p>
                          Step 1: Find variable declaration by searching for the first occurence of{" "}
                          <p className="VarName">{this.state.varName}</p> in the
                          code with <b>Ctrl + F</b>
                        </p>
                      </div>
                      <div className="StrategySubMessage">
                        <GreenCheckbox
                          value="box1"
                          checked={this.state.checked212}
                          onChange={() => this.changeChecked(212)}
                        />
                        <p>
                          Step 2: Change class name{" "}
                          <p className="VarName">{this.state.className}</p> of variable {" "}
                          <p className="VarName">{this.state.varName}</p> in the
                          code
                        </p>
                      </div>
                      <div
                        className="CodeExample"
                        onClick={() => this.openCodeExample(21)}
                      >
                        <div className="CodeContainer">
                          <div className="RedCode">
                          <div className="Indent-0">
                            <p className="VarName">{this.state.className}</p>{" "}
                              <p className="VarName">{this.state.varName}</p> =
                              new <p className="VarName">{this.state.className}</p><p className="VarName">{this.state.classParameter}</p>;
                            </div>
                          </div>
                        </div>
                        <div className="CodeContainer">
                          <div className="GreenCode">
                            <div className="Indent-0">
                            <p className="VarName">CorrectName</p>{" "}
                              <p className="VarName">{this.state.varName}</p> =
                              new <p className="VarName">CorrectName</p><p className="VarName">{this.state.classParameter}</p>;
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="StrategyTile">
                  <div className="StrategyInstruction">
                    <div className="StrategyMessage">
                      <BlueCheckbox
                        value="box1"
                        checked={this.state.checked22}
                        onChange={() => this.changeChecked(22)}
                      />
                      <p>
                        Suggestion 2: If the variable declaration is syntactially incorrect, correct the variable declaration
                      </p>
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
                    <div>
                      <div className="Indent-1">
                        {" "}
                        <i>Tick the box once you have finished a step</i>
                      </div>
                      <div className="StrategySubMessage">
                        <GreenCheckbox
                          value="box1"
                          checked={this.state.checked221}
                          onChange={() => this.changeChecked(221)}
                        />
                        <p>
                          Step 1: Find variable declaration by searching for the first occurence of{" "}
                          <p className="VarName">{this.state.varName}</p> in the
                          code with <b>Ctrl + F</b>
                        </p>
                      </div>
                      <div className="StrategySubMessage">
                        <GreenCheckbox
                          value="box1"
                          checked={this.state.checked222}
                          onChange={() => this.changeChecked(222)}
                        />
                        <p>
                          Step 2: Correct variable declaration of variable {" "}
                          <p className="VarName">{this.state.varName}</p>
                        </p>
                      </div>
                      <div
                        className="CodeExample"
                        onClick={() => this.openCodeExample(22)}
                      >
                        <div className="CodeContainer">
                          <div className="RedCode">
                          <div className="Indent-0">
                            <p className="VarName">{this.state.className}</p>{" "}
                              <p className="VarName">{this.state.varName}</p> = {" "}
                              <p className="VarName">{this.state.className}</p><p className="VarName">{this.state.classParameter}</p>;
                            </div>
                          </div>
                        </div>
                        <div className="CodeContainer">
                          <div className="GreenCode">
                          <div className="Indent-0">
                            <p className="VarName">{this.state.className}</p>{" "}
                              <p className="VarName">{this.state.varName}</p> =
                              new <p className="VarName">{this.state.className}</p><p className="VarName">{this.state.classParameter}</p>;
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


        </div>
      </div>
    );
  }
}

export default VariableNotFound;

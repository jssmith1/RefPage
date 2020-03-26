import React from "react";
import MinusButton from "./assets/minus.svg";
import PlusButton from "./assets/plus.svg";
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
      checked21: false,
      checked22: false,
      checked31: false
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
      case 4:
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
      case 21:
        this.setState({ openCode21: !this.state.openCode21 });
        break;
      case 22:
        this.setState({ openCode22: !this.state.openCode22 });
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
      case 21:
        this.setState({ checked21: !this.state.checked21 });
        break;
      case 22:
        this.setState({ checked22: !this.state.checked22 });
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
                  Hint: Did you forget to declare what{" "}
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
                        Suggestion 1: Add variable declaration for{" "}
                        <p className="VarName">{this.state.varName}</p> before
                        the first occurence of{" "}
                        <p className="VarName">{this.state.varName}</p> in the
                        code
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
                            new{" "}
                            <p className="VarName">{this.state.className}</p>
                            <p className="VarName">
                              {this.state.classParameter}
                            </p>
                            ;
                          </div>
                          <div className="Indent-0">
                            System.out.print(
                            <p className="VarName">{this.state.varName}</p>);
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
                  <div className="VarName">{this.state.varName}</div>{" "}
                  incorrectly
                </h4>
                <p>
                  Hint: Have you already declared{" "}
                  <div className="VarName">{this.state.varName}</div> but made
                  some mistakes when declaring it?
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
                        Suggestion 1: Change the class name if the class name in
                        the variable declaration is not what you wanted
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
                    <div
                      className="CodeExample"
                      onClick={() => this.openCodeExample(21)}
                    >
                      <div className="CodeContainer">
                        <div className="RedCode">
                          <div className="Indent-0">
                            <p className="VarName">{this.state.className}</p>{" "}
                            <p className="VarName">{this.state.varName}</p> =
                            new{" "}
                            <p className="VarName">{this.state.className}</p>
                            <p className="VarName">
                              {this.state.classParameter}
                            </p>
                            ;
                          </div>
                        </div>
                      </div>
                      <div className="CodeContainer">
                        <div className="GreenCode">
                          <div className="Indent-0">
                            <p className="VarName">CorrectName</p>{" "}
                            <p className="VarName">{this.state.varName}</p> =
                            new <p className="VarName">CorrectName</p>
                            <p className="VarName">
                              {this.state.classParameter}
                            </p>
                            ;
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
                        Suggestion 2: Correct the variable declaration if the
                        variable declaration is syntactially incorrect
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
                    <div
                      className="CodeExample"
                      onClick={() => this.openCodeExample(22)}
                    >
                      <div className="CodeContainer">
                        <div className="RedCode">
                          <div className="Indent-0">
                            <p className="VarName">{this.state.className}</p>{" "}
                            <p className="VarName">{this.state.varName}</p> ={" "}
                            <p className="VarName">{this.state.className}</p>
                            <p className="VarName">
                              {this.state.classParameter}
                            </p>
                            ;
                          </div>
                        </div>
                      </div>
                      <div className="CodeContainer">
                        <div className="GreenCode">
                          <div className="Indent-0">
                            <p className="VarName">{this.state.className}</p>{" "}
                            <p className="VarName">{this.state.varName}</p> =
                            new{" "}
                            <p className="VarName">{this.state.className}</p>
                            <p className="VarName">
                              {this.state.classParameter}
                            </p>
                            ;
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
                  3: You may have mistyped variable name{" "}
                  <div className="VarName">{this.state.varName}</div>{" "}
                </h4>
                <p>
                  Hint: Is <div className="VarName">{this.state.varName}</div>{" "}
                  the exact variable name that you have defined?
                </p>
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
                  {" "}
                  <i>Tick the box once you have tried the suggestion</i>
                </p>
                <div className="StrategyTile">
                  <div className="StrategyInstruction">
                    <div className="StrategyMessage">
                      <BlueCheckbox
                        value="box1"
                        checked={this.state.checked31}
                        onChange={() => this.changeChecked(31)}
                      />
                      <p>
                        Suggestion 1: Change{" "}
                        <p className="VarName">{this.state.varName}</p> to the
                        variable name that you have defined
                      </p>
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
                      <div
                        className="CodeExample"
                        onClick={() => this.openCodeExample(31)}
                      >
                        <div className="CodeContainer">
                          <div className="RedCode">
                            <div className="Indent-0">
                              <p className="VarName">{this.state.className}</p>{" "}
                              <p className="VarName">correct_name</p> = new{" "}
                              <p className="VarName">{this.state.className}</p>
                              <p className="VarName">
                                {this.state.classParameter}
                              </p>
                              ;
                            </div>
                            <div className="Indent-0">...</div>
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
                              <p className="VarName">correct_name</p> = new{" "}
                              <p className="VarName">{this.state.className}</p>
                              <p className="VarName">
                                {this.state.classParameter}
                              </p>
                              ;
                            </div>
                            <div className="Indent-0">...</div>
                            <div className="Indent-0">
                              System.out.print(
                              <p className="VarName">correct_name</p>);
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
            <div className="ErrorTile" onClick={() => this.openStrategyTile(4)}>
              <div className="ErrorMessage">
                <h4>
                  4: You may have used variable{" "}
                  <div className="VarName">{this.state.varName}</div>{" "}
                  in the incorrect scope
                </h4>
                <p>
                  Hint: Are the use of variable{" "}
                  <div className="VarName">{this.state.varName}</div> and its declaration in the different scopes?
                </p>
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
                <p>
                  {" "}
                  <i>Tick the box once you have tried the suggestion</i>
                </p>

                <div className="StrategyTile">
                  <div className="StrategyInstruction">
                    <div className="StrategyMessage">
                      <BlueCheckbox
                        value="box1"
                        checked={this.state.checked41}
                        onChange={() => this.changeChecked(41)}
                      />
                      <p>
                        Suggestion 1: Move <p className="VarName">{this.state.varName}</p> to the same function with its declaration
                      </p>
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
                    <div
                      className="CodeExample"
                      onClick={() => this.openCodeExample(41)}
                    >
                      <div className="CodeContainer">
                      <div className="RedCode">
                        <div className="Indent-0">
                          void FuncA(){LEFT_CURLY}
                          </div>
                          <div className="Indent-1">
                            <p className="VarName">{this.state.className}</p>{" "}
                            <p className="VarName">{this.state.varName}</p> =
                            new{" "}
                            <p className="VarName">{this.state.className}</p>
                            <p className="VarName">
                              {this.state.classParameter}
                            </p>
                            ;
                          </div>
                          <div className="Indent-1">
                            ...
                          </div>
                          <div className="Indent-0">
                            {RIGHT_CURLY}
                          </div>
                          <div className="Indent-0">
                          void FuncB(){LEFT_CURLY}
                          </div>
                          <div className="Indent-1">
                            System.out.println(<p className="VarName">{this.state.varName}</p>);
                          </div>
                          <div className="Indent-0">
                            {RIGHT_CURLY}
                          </div>
                        </div>
                      </div>
                      <div className="CodeContainer">
                        <div className="GreenCode">
                        <div className="Indent-0">
                          void FuncA(){LEFT_CURLY}
                          </div>
                          <div className="Indent-1">
                            <p className="VarName">{this.state.className}</p>{" "}
                            <p className="VarName">{this.state.varName}</p> =
                            new{" "}
                            <p className="VarName">{this.state.className}</p>
                            <p className="VarName">
                              {this.state.classParameter}
                            </p>
                            ;
                          </div>
                          <div className="Indent-1">
                            ...
                          </div>
                          <div className="Indent-1">
                            System.out.println(<p className="VarName">{this.state.varName}</p>);
                          </div>
                          <div className="Indent-0">
                            {RIGHT_CURLY}
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
                        checked={this.state.checked42}
                        onChange={() => this.changeChecked(42)}
                      />
                      <p>
                        Suggestion 2: Move <div className="VarName">{this.state.varName}</div> to the same or smaller scope than its declaration
                      </p>
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
                    <div
                      className="CodeExample"
                      onClick={() => this.openCodeExample(42)}
                    >
                      <div className="CodeContainer">
                        <div className="RedCode">
                          <div className="Indent-0">
                          (while i != count) {LEFT_CURLY}
                          </div>
                          <div className="Indent-1">
                            <p className="VarName">{this.state.className}</p>{" "}
                            <p className="VarName">{this.state.varName}</p> =
                            new{" "}
                            <p className="VarName">{this.state.className}</p>
                            <p className="VarName">
                              {this.state.classParameter}
                            </p>
                            ;
                          </div>
                          <div className="Indent-1">
                            i++;
                          </div>
                          <div className="Indent-0">
                            {RIGHT_CURLY}
                          </div>
                          <div className="Indent-0">
                            System.out.println(<p className="VarName">{this.state.varName}</p>);
                          </div>
                        </div>
                      </div>
                      <div className="CodeContainer">
                        <div className="GreenCode">
                        <div className="Indent-0">
                          (while i != count) {LEFT_CURLY}
                          </div>
                          <div className="Indent-1">
                            <p className="VarName">{this.state.className}</p>{" "}
                            <p className="VarName">{this.state.varName}</p> =
                            new{" "}
                            <p className="VarName">{this.state.className}</p>
                            <p className="VarName">
                              {this.state.classParameter}
                            </p>
                            ;
                          </div>
                          <div className="Indent-1">
                            System.out.println(<p className="VarName">{this.state.varName}</p>);
                          </div>
                          <div className="Indent-1">
                            i++;
                          </div>
                          <div className="Indent-0">
                            {RIGHT_CURLY}
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

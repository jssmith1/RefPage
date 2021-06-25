import React from "react";
import MinusButton from "../../assets/minus.svg";
import PlusButton from "../../assets/plus.svg";
import "../../App.css";
import BlueCheckbox from '../resources/blueCheckbox'

const LEFT_CURLY = "{";
const RIGHT_CURLY = "}";

class VariableNotInit extends React.Component {
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
      checked11: false,
      checked12: false,
      checked21: false,
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
      default:
        break;
    }
  }

  openStrategyTileBoxOnly(i) {
    switch (i) {
      case 1:
        if(!this.state.openStrategy1){
          this.setState({ openStrategy1: true });
          this.setState({ openCode11: false });
          this.setState({ openCode12: false });
        }
        break;
      case 2:
        if(!this.state.openStrategy2){
          this.setState({ openStrategy2: true });
          this.setState({ openCode21: false });
        }
        break;
      default:
        break;
    }
  }

  openCodeExampleBoxOnly(i) {
    switch (i) {
      case 11:
        if(!this.state.openCode11){
          this.setState({ openCode11: !this.state.openCode11 });
        }
        break;
      case 12:
        if(!this.state.openCode12){
          this.setState({ openCode12: !this.state.openCode12 });
        }
        break;
      case 21:
        if(!this.state.openCode21){
          this.setState({ openCode21: !this.state.openCode21 });
        }
        break;
      default:
        break;
    }
  }

  changeChecked(i) {
    switch (i) {
      case 11:
        if(this.state.openCode11){
          if(!this.state.checked11){
          this.setState({ checked11: !this.state.checked11 });
          this.setState({ openCode11: false });
          } else {
          this.setState({ checked11: !this.state.checked11 });
          this.setState({ openCode11: true });
          }
        }
        if(!this.state.openCode11){
          this.setState({ checked11: !this.state.checked11 });
          this.setState({ openCode11: false });
        }
        break;
      case 12:
        if(this.state.openCode12){
          if(!this.state.checked12){
          this.setState({ checked12: !this.state.checked12 });
          this.setState({ openCode12: false });
          } else {
          this.setState({ checked12: !this.state.checked12 });
          this.setState({ openCode12: true });
          }
        }
        if(!this.state.openCode12){
          this.setState({ checked12: !this.state.checked12 });
          this.setState({ openCode12: false });
        }
        break;
      case 21:
        if(this.state.openCode21){
          if(!this.state.checked21){
          this.setState({ checked21: !this.state.checked21 });
          this.setState({ openCode21: false });
          } else {
          this.setState({ checked21: !this.state.checked21 });
          this.setState({ openCode21: true });
          }
        }
        if(!this.state.openCode21){
          this.setState({ checked21: !this.state.checked21 });
          this.setState({ openCode21: false });
        }
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
              The local variable{" "}
              <p className="InputValue">{this.props.varName}</p> may not have
              been initialized
            </h2>
          </div>

          <h4>
            <i>
              Translation: You are trying to use the variable{" "}
              <div className="InputValue">{this.props.varName}</div> before
              giving it a value.
            </i>
          </h4>

          <div className="Tile">
            <div className="ErrorTile" onClick={() => this.openStrategyTileBoxOnly(1)}>
              <div className="ErrorMessage">
                <h4>
                  1: You may have declared variable{" "}
                  <div className="InputValue">{this.props.varName}</div> and
                  used it before giving it a value
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
                  onClick={() => this.openCodeExampleBoxOnly(11)}
                >
                  <div className="StrategyInstruction">
                    <div className="StrategyMessage">
                      <BlueCheckbox
                        value="box1"
                        checked={this.state.checked11}
                        onChange={() => this.changeChecked(11)}
                      />
                      <div className="Suggestion">
                        Suggestion 1: Assign a value to{" "}
                        <p className="InputValue">{this.props.varName}</p> at
                        declaration
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
                            {" "}
                            int {this.props.varName};
                          </div>
                          <div className="Indent-0">
                            {this.props.varName} = {this.props.varName} + 1;
                          </div>
                        </div>
                      </div>
                      <div className="CodeContainer">
                        <div className="GreenCode">
                          <div className="Indent-0">
                            {" "}
                            int {this.props.varName} = 3;
                          </div>
                          <div className="Indent-0">
                            {this.props.varName} = {this.props.varName} + 1;
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className="StrategyTile"
                  onClick={() => this.openCodeExampleBoxOnly(12)}
                >
                  <div className="StrategyInstruction">
                    <div className="StrategyMessage">
                      <BlueCheckbox
                        value="box1"
                        checked={this.state.checked12}
                        onChange={() => this.changeChecked(12)}
                      />
                      <div className="Suggestion">
                        Suggestion 2: Assign value to{" "}
                        <p className="InputValue">{this.props.varName}</p>{" "}
                        before using it
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
                            {" "}
                            int {this.props.varName};
                          </div>
                          <div className="Indent-0">
                            {this.props.varName} = {this.props.varName} + 1;
                          </div>
                        </div>
                      </div>
                      <div className="CodeContainer">
                        <div className="GreenCode">
                          <div className="Indent-0">
                            {" "}
                            int {this.props.varName};
                          </div>
                          <div className="Indent-0">
                            {this.props.varName} = 3;
                          </div>
                          <div className="Indent-0">
                            {this.props.varName} = {this.props.varName} + 1;
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
            <div className="ErrorTile" onClick={() => this.openStrategyTileBoxOnly(2)}>
              <div className="ErrorMessage">
                <h4>
                  2: You may have initialized{" "}
                  <div className="InputValue">{this.props.varName}</div> and
                  used it in different scopes
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
                  onClick={() => this.openCodeExampleBoxOnly(21)}
                >
                  <div className="StrategyInstruction">
                    <div className="StrategyMessage">
                      <BlueCheckbox
                        value="box1"
                        checked={this.state.checked21}
                        onChange={() => this.changeChecked(21)}
                      />
                      <div className="Suggestion">
                        Suggestion 1: Have variable assignment and variable
                        usage of{" "}
                        <p className="InputValue">{this.props.varName}</p> in
                        the same scope
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
                            {" "}
                            int {this.props.varName};
                          </div>
                          <div className="Indent-0"> int cond = 0;</div>
                          <div className="Indent-0">
                            {" "}
                            if (cond == 0) {LEFT_CURLY}
                          </div>
                          <div className="Indent-1">
                            {this.props.varName} = 3;
                          </div>
                          <div className="Indent-0">{RIGHT_CURLY}</div>
                          <div className="Indent-0">
                            {this.props.varName} = {this.props.varName} + 1;
                          </div>
                        </div>
                      </div>
                      <div className="CodeContainer">
                        <div className="GreenCode">
                          <div className="Indent-0">
                            {" "}
                            int {this.props.varName};
                          </div>
                          <div className="Indent-0"> int cond = 0;</div>
                          <div className="Indent-0">
                            {" "}
                            if (cond == 0) {LEFT_CURLY}
                          </div>
                          <div className="Indent-1">
                            {this.props.varName} = 3;
                          </div>
                          <div className="Indent-1">
                            {this.props.varName} = {this.props.varName} + 1;
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
        </div>
      </div>
    );
  }
}

export default VariableNotInit;

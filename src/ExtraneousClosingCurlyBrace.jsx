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
      color: blue[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

class ExtraneousClosingCurlyBrace extends React.Component {
  constructor(props) {
    super(props);
    this.openStrategyTile = this.openStrategyTile.bind(this);
    this.openCodeExample = this.openCodeExample.bind(this);
    this.changeChecked = this.changeChecked.bind(this);
    this.state = {
      openStrategy1: false,
      openCode11: false,
      openCode12: false,
      checked11: false,
      checked12: false,
    };
  }

  openStrategyTile(i) {
    switch (i) {
      case 1:
        this.setState({ openStrategy1: !this.state.openStrategy1 });
        this.setState({ openCode11: false });
        this.setState({ openCode12: false });
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
              Expecting EOF, found {"'}'"}
            </h2>
          </div>

          <h4>
            <i>
              Translation: There is an extra closing curly brace {"}"} 
            </i>
          </h4>

          <div className="Tile">
            <div className="ErrorTile" onClick={() => this.openStrategyTile(1)}>
              <div className="ErrorMessage">
                <h4>
                  1: You may have added an extra closing curly brace at the end of your code
                  <div className="Indent-0">
                    (Tip: try using the Auto-Format feature first -{">"} Ctrl + T)
                    </div>
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
                        Suggestion 1: Remove the extra closing curly brace from the end of your method
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
                            void {this.props.methodName}() {"{"}
                            <div className="Indent-1"> if(...) {"{"} </div>
                            <div className="Indent-2"> for(...) {"{"} </div>
                            <div className="Indent-3"> ... </div>
                            <div className="Indent-2"> {"}"} </div>
                            <div className="Indent-1"> {"}"} </div>
                            <div className="Indent-0"> {"}"} </div>
                            <div className="Indent-0"> {"}"} </div>
                          </div>
                        </div>
                      </div>
                      <div className="CodeContainer">
                        <div className="GreenCode">
                        <div className="Indent-0">
                            void {this.props.methodName}() {"{"}
                            <div className="Indent-1"> if(...) {"{"} </div>
                            <div className="Indent-2"> for(...) {"{"} </div>
                            <div className="Indent-3"> ... </div>
                            <div className="Indent-2"> {"}"} </div>
                            <div className="Indent-1"> {"}"} </div>
                            <div className="Indent-0"> {"}"} </div>
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
                        Suggestion 2: Remove the extra closing curly brace from the end of your class
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
                          <div className="Indent-0"> class {this.props.className}{"{"} </div>
                          <div className="Indent-1">  {this.props.className}(){"{"} </div>
                          <div className="Indent-2">  ...; </div>
                          <div className="Indent-1">  {"}"} </div>
                          <div className="Indent-1"> void {this.props.methodName}() {"{"} </div>
                          <div className="Indent-2"> if(...) {"{"} </div>
                          <div className="Indent-3"> for(...) {"{"} </div>
                          <div className="Indent-4"> ...; </div>
                          <div className="Indent-3"> {"}"} </div>
                          <div className="Indent-2"> {"}"} </div>
                          <div className="Indent-1"> {"}"} </div>
                          <div className="Indent-0"> {"}"} </div>
                          <div className="Indent-0"> {"}"} </div>
                        </div>
                      </div>
                      <div className="CodeContainer">
                        <div className="GreenCode">
                        <div className="Indent-0"> class {this.props.className}{"{"} </div>
                          <div className="Indent-1">  {this.props.className}(){"{"} </div>
                          <div className="Indent-2">  ... </div>
                          <div className="Indent-1">  {"}"} </div>
                          <div className="Indent-1"> void {this.props.methodName}() {"{"} </div>
                          <div className="Indent-2"> if(...) {"{"} </div>
                          <div className="Indent-3"> for(...) {"{"} </div>
                          <div className="Indent-4"> ... </div>
                          <div className="Indent-3"> {"}"} </div>
                          <div className="Indent-2"> {"}"} </div>
                          <div className="Indent-1"> {"}"} </div>
                          <div className="Indent-0"> {"}"} </div>
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

export default ExtraneousClosingCurlyBrace;

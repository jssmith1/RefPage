import React from "react";
import MinusButton from "../../assets/minus.svg";
import PlusButton from "../../assets/plus.svg";
import "../../App.css";
import NonStaticFromStaticResourceFooter from "../resourceFooters/NonStaticFromStaticResourceFooter.jsx";
import BlueCheckbox from '../resources/blueCheckbox'

class NonStaticFromStatic extends React.Component {
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

  openStrategyTileBoxOnly(i) {
    switch (i) {
      case 1:
        if(!this.state.openStrategy1){
          this.setState({ openStrategy1: true });
          this.setState({ openCode11: false });
          this.setState({ openCode12: false });
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
              Cannot make a static reference to the non-static method {" "}
              <div className="InputValue">{this.props.methodName}() </div> from the type sketch_200201b
            </h2>
          </div>

          <h4>
            <i>
              Translation: You are calling on a non-static method inside a static method.
            </i>
          </h4>

          <div className="Tile">
            <div className="ErrorTile" onClick={() => this.openStrategyTileBoxOnly(1)}>
              <div className="ErrorMessage">
                <h4>
                  1: You may have called on method <div className="InputValue">{this.props.methodName}() </div> {" "}
                  inside your static method <div className="InputValue">{this.props.staticMethodName}() </div>
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
                        Suggestion 1: Make your static method <div className="InputValue">{this.props.staticMethodName}() </div> {" "}
                        non-static
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
                          <div className="Indent-0"> static void {this.props.staticMethodName}() {"{"} </div>
                          <div className="Indent-1"> {this.props.methodName}(); </div>
                          <div className="Indent-0"> {"}"} </div>
                          <div className="Indent-0"> void {this.props.methodName}() {"{"} </div>
                          <div className="Indent-1"> ... </div>
                          <div className="Indent-0"> {"}"} </div>
                        </div>
                      </div>
                      <div className="CodeContainer">
                        <div className="GreenCode">
                        <div className="Indent-0"> void {this.props.staticMethodName}() {"{"} </div>
                          <div className="Indent-1"> {this.props.methodName}(); </div>
                          <div className="Indent-0"> {"}"} </div>
                          <div className="Indent-0"> void {this.props.methodName}() {"{"} </div>
                          <div className="Indent-1"> ... </div>
                          <div className="Indent-0"> {"}"} </div>
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
                        Suggestion 2:  Make your non-static method <div className="InputValue">{this.props.methodName}() </div> static
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
                          <div className="Indent-0"> static void {this.props.staticMethodName}() {"{"} </div>
                          <div className="Indent-1"> {this.props.methodName}(); </div>
                          <div className="Indent-0"> {"}"} </div>
                          <div className="Indent-0"> void {this.props.methodName}() {"{"} </div>
                          <div className="Indent-1"> ... </div>
                          <div className="Indent-0"> {"}"} </div>
                        </div>
                      </div>
                      <div className="CodeContainer">
                        <div className="GreenCode">
                        <div className="Indent-0"> static void {this.props.staticMethodName}() {"{"} </div>
                          <div className="Indent-1"> {this.props.methodName}(); </div>
                          <div className="Indent-0"> {"}"} </div>
                          <div className="Indent-0"> static void {this.props.methodName}() {"{"} </div>
                          <div className="Indent-1"> ... </div>
                          <div className="Indent-0"> {"}"} </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <NonStaticFromStaticResourceFooter />
        </div>
      </div>
    );
  }
}

export default NonStaticFromStatic;

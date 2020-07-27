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

class IncorrectDimensionExpression1 extends React.Component {
  constructor(props) {
    super(props);
    this.openStrategyTile = this.openStrategyTile.bind(this);
    this.openCodeExample = this.openCodeExample.bind(this);
    this.changeChecked = this.changeChecked.bind(this);
    this.state = {
      openStrategy1: false,
      openCode11: false,
      checked11: false,
    };
  }

  openStrategyTile(i) {
    switch (i) {
      case 1:
        this.setState({ openStrategy1: !this.state.openStrategy1 });
        this.setState({ openCode11: false });
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
        }
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
              Variable must provide either dimension expressions or an array initializer
            </h2>
          </div>

          <h4>
            <i>
              Translation: You have not given the array a certain size.
            </i>
          </h4>

          <div className="Tile">
            <div className="ErrorTile" onClick={() => this.openStrategyTileBoxOnly(1)}>
              <div className="ErrorMessage">
                <h4>
                  1: You may have forgotten to type the size of the array inside the brackets
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
                        Suggestion 1: Specify the size of the array
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
                  { this.props.typeName === 'String' || this.props.typeName === 'char' || this.props.typeName === 'boolean' || this.props.typeName === 'short' || this.props.typeName === 'byte' ||
                    this.props.typeName === 'long' || this.props.typeName === 'int' || this.props.typeName === 'float' || this.props.typeName === 'double'      //Box 1 Ex 1 cases for all existing data types
                      ? this.state.openCode11 && (
                          <div className="CodeExample">
                            <div className="CodeContainer">
                              <div className="RedCode">
                                <div className="Indent-0">
                                {this.props.typeName}[] s = new {this.props.typeName}[]; </div>
                              </div>
                            </div>
                            <div className="CodeContainer">
                              <div className="GreenCode">
                              <div className="Indent-0">
                                {this.props.typeName}[] s = new {this.props.typeName}[5]; </div>
                              </div>
                            </div>
                          </div>
                        )
                      : this.state.openCode11 && (          //Box 1 Ext 1 for user-made objects
                        <div className="CodeExample">
                          <div className="CodeContainer">
                            <div className="RedCode">
                            <div className="Indent-0"> class {this.props.typeName.slice(0,1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)} {"{"}  </div>
                            <div className="Indent-1"> {this.props.typeName.slice(0,1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}() {"{"} </div>
                            <div className="Indent-2"> ...; </div>
                            <div className="Indent-1"> {"}"} </div>
                            <div className="Indent-0"> {"}"} </div>
                            <div className="Indent-0">
                            {this.props.typeName.slice(0,1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}[] s = new {" "}
                            {this.props.typeName.slice(0,1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}[]; </div>
                            </div>
                          </div>
                          <div className="CodeContainer">
                            <div className="GreenCode">
                            <div className="Indent-0"> class {this.props.typeName.slice(0,1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)} {"{"}  </div>
                            <div className="Indent-1"> {this.props.typeName.slice(0,1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}() {"{"} </div>
                            <div className="Indent-2"> ...; </div>
                            <div className="Indent-1"> {"}"} </div>
                            <div className="Indent-0"> {"}"} </div>
                            <div className="Indent-0">
                            {this.props.typeName.slice(0,1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}[] s = new {" "}
                            {this.props.typeName.slice(0,1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}[5]; </div>
                            </div>
                          </div>
                        </div>
                      )
                  }
                </div>
              </div>
            )}
          </div>
         </div>
      </div>
    );
  }
}

export default IncorrectDimensionExpression1;

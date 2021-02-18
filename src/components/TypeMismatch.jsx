import React from "react";
import MinusButton from "../assets/minus.svg";
import PlusButton from "../assets/plus.svg";
import "../App.css";

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

class TypeMismatch extends React.Component {
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
      openCode12: false,
      openCode21: false,
      openCode31: false,
      checked11: false,
      checked12: false,
      checked21: false,
      checked31: false
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
      case 12:
        this.setState({ openCode12: !this.state.openCode12 });
        break;
      case 21:
        this.setState({ openCode21: !this.state.openCode21 });
        break;
      case 31:
        this.setState({ openCode31: !this.state.openCode31 });
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
      case 3:
        if(!this.state.openStrategy3){
          this.setState({ openStrategy3: true });
          this.setState({ openCode31: false });
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
      case 31:
        if(!this.state.openCode31){
          this.setState({ openCode31: !this.state.openCode31 });
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
      case 31:
        if(this.state.openCode31){
          if(!this.state.checked31){
          this.setState({ checked31: !this.state.checked31 });
          this.setState({ openCode31: false });
          } else {
          this.setState({ checked31: !this.state.checked31 });
          this.setState({ openCode31: true });
          }
        }
        if(!this.state.openCode31){
          this.setState({ checked31: !this.state.checked31 });
          this.setState({ openCode31: false });
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
            { this.props.typeOneName === 'String' || this.props.typeOneName === 'char' ||
              this.props.typeOneName === 'boolean' || this.props.typeOneName === 'int' ||
              this.props.typeOneName === 'byte' || this.props.typeOneName === 'short' ||
              this.props.typeOneName === 'long' || this.props.typeOneName === 'float' ||
              this.props.typeOneName === 'double'
              ? this.props.typeTwoName === 'int' || this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte' ||
                this.props.typeTwoName === 'long' || this.props.typeTwoName === 'float' || this.props.typeTwoName === 'double' ||
                this.props.typeTwoName === 'boolean' || this.props.typeTwoName === 'String' || this.props.typeTwoName === 'char'
                ?
                <h2>
                  Cannot convert from <div className="InputValue">{this.props.typeOneName}</div>{" "}
                  to <div className="InputValue">{this.props.typeTwoName}</div>
                </h2>
                :
                <h2>
                  Cannot convert from <div className="InputValue">{this.props.typeOneName}</div>{" "}
                  to <div className="InputValue">{this.props.className}{this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}</div>
                </h2>

              : this.props.typeTwoName === 'int' || this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte' ||
                this.props.typeTwoName === 'long' || this.props.typeTwoName === 'float' || this.props.typeTwoName === 'double' ||
                this.props.typeTwoName === 'boolean' || this.props.typeTwoName === 'String' || this.props.typeTwoName === 'char'
                ?
                <h2>
                  Cannot convert from <div className="InputValue">{this.props.typeOneName.slice(0,1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}</div>{" "}
                  to <div className="InputValue">{this.props.typeTwoName}</div>
                </h2>
                :
                <h2>
                  Cannot convert from <div className="InputValue">{this.props.typeOneName.slice(0,1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}</div>{" "}
                  to <div className="InputValue">{this.props.className}{this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}</div>
                </h2>
            }
          </div>

          <h4>
          {   this.props.typeOneName === 'String' || this.props.typeOneName === 'char' ||
              this.props.typeOneName === 'boolean' || this.props.typeOneName === 'int' ||
              this.props.typeOneName === 'byte' || this.props.typeOneName === 'short' ||
              this.props.typeOneName === 'long' || this.props.typeOneName === 'float' ||
              this.props.typeOneName === 'double'
              ? this.props.typeTwoName === 'int' || this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte' ||
                this.props.typeTwoName === 'long' || this.props.typeTwoName === 'float' || this.props.typeTwoName === 'double' ||
                this.props.typeTwoName === 'boolean' || this.props.typeTwoName === 'String' || this.props.typeTwoName === 'char'
                ?
                  <i>
                    Translation: You are trying to use the variable{" "}
                    <div className="InputValue">{this.props.varName}</div> of type{" "}
                    <div className="InputValue">{this.props.typeTwoName}</div> as a{" "}
                    <div className="InputValue">{this.props.typeOneName}</div>-type variable.
                  </i>
                :
                  <i>
                    Translation: You are trying to use a{" "}
                    <div className="InputValue">{this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}</div>{" "}
                    object <div className="InputValue">{this.props.varName}</div> as a{" "}
                    <div className="InputValue">{this.props.typeOneName}</div>-type variable.
                  </i>

              : this.props.typeTwoName === 'int' || this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte' ||
                this.props.typeTwoName === 'long' || this.props.typeTwoName === 'float' || this.props.typeTwoName === 'double' ||
                this.props.typeTwoName === 'boolean' || this.props.typeTwoName === 'String' || this.props.typeTwoName === 'char'
                ?
                <i>
                  Translation: You are trying to use the variable{" "}
                  <div className="InputValue">{this.props.varName}</div> of type{" "}
                  <div className="InputValue">{this.props.typeTwoName}</div> as a{" "}
                  <div className="InputValue">{this.props.typeOneName.slice(0,1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}</div> object.
                </i>
                :
                <i>
                  Translation: You are trying to use a{" "}
                  <div className="InputValue">{this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}</div>{" "}
                  object <div className="InputValue">{this.props.varName}</div> as a{" "}
                  <div className="InputValue">{this.props.typeOneName.slice(0,1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}</div> object.
                </i>
            }
          </h4>

          <div className="Tile">
            <div className="ErrorTile" onClick={() => this.openStrategyTileBoxOnly(1)}>
              <div className="ErrorMessage">
              {   this.props.typeOneName === 'String' || this.props.typeOneName === 'char' ||
                  this.props.typeOneName === 'boolean' || this.props.typeOneName === 'int' ||
                  this.props.typeOneName === 'byte' || this.props.typeOneName === 'short' ||
                  this.props.typeOneName === 'long' || this.props.typeOneName === 'float' ||
                  this.props.typeOneName === 'double'
                  ? this.props.typeTwoName === 'int' || this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte' ||
                    this.props.typeTwoName === 'long' || this.props.typeTwoName === 'float' || this.props.typeTwoName === 'double' ||
                    this.props.typeTwoName === 'boolean' || this.props.typeTwoName === 'String' || this.props.typeTwoName === 'char'
                    ?
                    <h4>
                      1: You may have assigned a <div className="InputValue">{this.props.typeOneName}</div> value to variable{" "}
                      <div className="InputValue">{this.props.varName}</div> of type <div className="InputValue">{this.props.typeTwoName}</div>
                    </h4>
                    :
                    <h4>
                      1: You may have assigned a <div className="InputValue">{this.props.typeOneName}</div> value to a{" "}
                      <div className="InputValue">{this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}</div> object <div className="InputValue">{this.props.varName}</div>
                    </h4>

                  : this.props.typeTwoName === 'int' || this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte' ||
                    this.props.typeTwoName === 'long' || this.props.typeTwoName === 'float' || this.props.typeTwoName === 'double' ||
                    this.props.typeTwoName === 'boolean' || this.props.typeTwoName === 'String' || this.props.typeTwoName === 'char'
                    ?
                    <h4>
                      1: You may have assigned a <div className="InputValue">{this.props.typeOneName.slice(0,1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}</div> object to variable{" "}
                      <div className="InputValue">{this.props.varName}</div> of type <div className="InputValue">{this.props.typeTwoName}</div>
                    </h4>
                    :
                    <h4>
                      1: You may have assigned a <div className="InputValue">{this.props.typeOneName.slice(0,1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}</div> object to a{" "}
                      <div className="InputValue">{this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}</div> object <div className="InputValue">{this.props.varName}</div>
                    </h4>
                }
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
                      {this.props.typeOneName === 'String' || this.props.typeOneName === 'char' ||
                        this.props.typeOneName === 'short' || this.props.typeOneName === 'byte' ||
                        this.props.typeOneName === 'long' || this.props.typeOneName === 'float' ||
                        this.props.typeOneName === 'double' || this.props.typeOneName === 'boolean'
                        || this.props.typeOneName === 'int'
                        ?
                        <React.Fragment>
                        Suggestion 1: Change variable declaration of{" "}
                        <p className="InputValue">{this.props.varName}</p> to type <div className="InputValue">{this.props.typeOneName}</div>
                        </React.Fragment>
                        :
                        <React.Fragment>
                        Suggestion 1: Change variable declaration of{" "}
                        <p className="InputValue">{this.props.varName}</p> to type <div className="InputValue">{this.props.typeOneName.slice(0,1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}</div>
                        </React.Fragment>
                      }
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
                          { this.props.typeTwoName === 'String' || this.props.typeTwoName === 'char' ||
                            this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte' ||
                            this.props.typeTwoName === 'long' || this.props.typeTwoName === 'float' || this.props.typeOneName === 'double' ||
                            this.props.typeTwoName === 'boolean' || this.props.typeTwoName === 'int'
                            ?
                              this.props.typeOneName === 'String'
                              ?
                              <div className="Indent-0"> {this.props.typeTwoName} {this.props.varName} = "thing";</div>
                              : this.props.typeOneName === 'char'
                                ?
                                <div className="Indent-0"> {this.props.typeTwoName} {this.props.varName} = 's';</div>
                                : this.props.typeOneName === 'boolean'
                                  ?
                                  <div className="Indent-0"> {this.props.typeTwoName} {this.props.varName} = true;</div>
                                  : this.props.typeOneName === 'float' || this.props.typeOneName === 'double'
                                    ?
                                    <div className="Indent-0"> {this.props.typeTwoName} {this.props.varName} = 5.0;</div>
                                    : this.props.typeOneName === 'int' || this.props.typeOneName === 'byte' ||
                                      this.props.typeOneName === 'short' || this.props.typeOneName === 'long'
                                      ?
                                      <div className="Indent-0"> {this.props.typeTwoName} {this.props.varName} = 5;</div>
                                      :
                                      <React.Fragment>
                                      <div className="Indent-0"> class {this.props.typeOneName.slice(0,1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}{"{"}  </div>
                                      <div className="Indent-1"> int a; </div>
                                      <div className="Indent-1"> {this.props.typeOneName.slice(0,1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}(int a){"{"} </div>
                                      <div className="Indent-2"> this.a = a; </div>
                                      <div className="Indent-1"> {"}"} </div>
                                      <div className="Indent-0"> {this.props.typeTwoName} {this.props.varName} = new{" "}
                                      {this.props.typeOneName.slice(0,1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}(5);</div>
                                      </React.Fragment>
                            :
                              this.props.typeOneName === 'String'
                              ?
                              <React.Fragment>
                              <div className="Indent-0"> class {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}{"{"}  </div>
                              <div className="Indent-1"> int a; </div>
                              <div className="Indent-1"> {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(int a){"{"} </div>
                              <div className="Indent-2"> this.a = a; </div>
                              <div className="Indent-1"> {"}"} </div>
                              <div className="Indent-0"> {"}"} </div>
                              <div className="Indent-0"> {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)} {this.props.varName} = "thing";</div>
                              </React.Fragment>
                              : this.props.typeOneName === 'char'
                                ?
                                <React.Fragment>
                                <div className="Indent-0"> class {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}{"{"}  </div>
                                <div className="Indent-1"> int a; </div>
                                <div className="Indent-1"> {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(int a){"{"} </div>
                                <div className="Indent-2"> this.a = a; </div>
                                <div className="Indent-1"> {"}"} </div>
                                <div className="Indent-0"> {"}"} </div>
                                <div className="Indent-0"> {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)} {this.props.varName} = 's';</div>
                                </React.Fragment>
                                : this.props.typeOneName === 'boolean'
                                  ?
                                  <React.Fragment>
                                  <div className="Indent-0"> class {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}{"{"}  </div>
                                  <div className="Indent-1"> int a; </div>
                                  <div className="Indent-1"> {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(int a){"{"} </div>
                                  <div className="Indent-2"> this.a = a; </div>
                                  <div className="Indent-1"> {"}"} </div>
                                  <div className="Indent-0"> {"}"} </div>
                                  <div className="Indent-0"> {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)} {this.props.varName} = true;</div>
                                  </React.Fragment>
                                  : this.props.typeOneName === 'float' || this.props.typeOneName === 'double'
                                    ?
                                    <React.Fragment>
                                    <div className="Indent-0"> class {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}{"{"}  </div>
                                    <div className="Indent-1"> int a; </div>
                                    <div className="Indent-1"> {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(int a){"{"} </div>
                                    <div className="Indent-2"> this.a = a; </div>
                                    <div className="Indent-1"> {"}"} </div>
                                    <div className="Indent-0"> {"}"} </div>
                                    <div className="Indent-0"> {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)} {this.props.varName} = 5.0;</div>
                                    </React.Fragment>
                                    : this.props.typeOneName === 'int' || this.props.typeOneName === 'byte' ||
                                      this.props.typeOneName === 'short' || this.props.typeOneName === 'long'
                                      ?
                                      <React.Fragment>
                                      <div className="Indent-0"> class {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}{"{"}  </div>
                                      <div className="Indent-1"> int a; </div>
                                      <div className="Indent-1"> {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(int a){"{"} </div>
                                      <div className="Indent-2"> this.a = a; </div>
                                      <div className="Indent-1"> {"}"} </div>
                                      <div className="Indent-0"> {"}"} </div>
                                      <div className="Indent-0"> {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)} {this.props.varName} = 5;</div>
                                      </React.Fragment>
                                      :
                                      <React.Fragment>
                                      <div className="Indent-0"> class {this.props.typeOneName.slice(0,1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}{"{"}  </div>
                                      <div className="Indent-1"> int a; </div>
                                      <div className="Indent-1"> {this.props.typeOneName.slice(0,1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}(int a){"{"} </div>
                                      <div className="Indent-2"> this.a = a; </div>
                                      <div className="Indent-1"> {"}"} </div>
                                      <div className="Indent-0"> class {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}{"{"}  </div>
                                      <div className="Indent-1"> int b; </div>
                                      <div className="Indent-1"> {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(int a){"{"} </div>
                                      <div className="Indent-2"> this.b = b; </div>
                                      <div className="Indent-1"> {"}"} </div>
                                      <div className="Indent-0"> {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)} {this.props.varName} = new{" "}
                                      {this.props.typeOneName.slice(0,1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}(5);</div>
                                      </React.Fragment>
                          }
                          </div>
                        </div>
                        <div className="CodeContainer">
                          <div className="GreenCode">
                          { this.props.typeOneName === 'String'
                              ?
                              <div className="Indent-0"> {this.props.typeOneName} {this.props.varName} = "thing";</div>
                              : this.props.typeOneName === 'char'
                                ?
                                <div className="Indent-0"> {this.props.typeOneName} {this.props.varName} = 's';</div>
                                : this.props.typeOneName === 'boolean'
                                  ?
                                  <div className="Indent-0"> {this.props.typeOneName} {this.props.varName} = true;</div>
                                  : this.props.typeOneName === 'float' || this.props.typeOneName === 'double'
                                    ?
                                    <div className="Indent-0"> {this.props.typeOneName} {this.props.varName} = 5.0;</div>
                                    : this.props.typeOneName === 'int' || this.props.typeOneName === 'byte' ||
                                      this.props.typeOneName === 'short' || this.props.typeOneName === 'long'
                                      ?
                                      <div className="Indent-0"> {this.props.typeOneName} {this.props.varName} = 5;</div>
                                      :
                                      <React.Fragment>
                                      <div className="Indent-0"> {this.props.typeOneName.slice(0,1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)} {this.props.varName} = new{" "}
                                      {this.props.typeOneName.slice(0,1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}(5);</div>
                                      </React.Fragment>
                          }
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
                      {this.props.typeTwoName === 'String' || this.props.typeTwoName === 'char' ||
                        this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte' ||
                        this.props.typeTwoName === 'long' || this.props.typeTwoName === 'float' ||
                        this.props.typeTwoName === 'double' || this.props.typeTwoName === 'boolean' || this.props.typeTwoName === 'int'
                        ?
                        <React.Fragment>
                        Suggestion 2: Change value of{" "}
                        <p className="InputValue">{this.props.varName}</p> to a <div className="InputValue">{this.props.typeTwoName}</div> value
                        </React.Fragment>
                        :
                        <React.Fragment>
                        Suggestion 2: Change{" "}
                        <p className="InputValue">{this.props.varName}</p> to a <div className="InputValue">{this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}</div> object
                        </React.Fragment>
                      }
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

                  { this.state.openCode12 && (
                        <div className="CodeExample">
                          <div className="CodeContainer">
                          <div className="RedCode">
                          { this.props.typeTwoName === 'String' || this.props.typeTwoName === 'char' ||
                            this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte' ||
                            this.props.typeTwoName === 'long' || this.props.typeTwoName === 'float' || this.props.typeOneName === 'double' ||
                            this.props.typeTwoName === 'boolean' || this.props.typeTwoName === 'int'
                            ?
                              this.props.typeOneName === 'String'
                              ?
                              <div className="Indent-0"> {this.props.typeTwoName} {this.props.varName} = "thing";</div>
                              : this.props.typeOneName === 'char'
                                ?
                                <div className="Indent-0"> {this.props.typeTwoName} {this.props.varName} = 's';</div>
                                : this.props.typeOneName === 'boolean'
                                  ?
                                  <div className="Indent-0"> {this.props.typeTwoName} {this.props.varName} = true;</div>
                                  : this.props.typeOneName === 'float' || this.props.typeOneName === 'double'
                                    ?
                                    <div className="Indent-0"> {this.props.typeTwoName} {this.props.varName} = 5.0;</div>
                                    : this.props.typeOneName === 'int' || this.props.typeOneName === 'byte' ||
                                      this.props.typeOneName === 'short' || this.props.typeOneName === 'long'
                                      ?
                                      <div className="Indent-0"> {this.props.typeTwoName} {this.props.varName} = 5;</div>
                                      :
                                      <React.Fragment>
                                      <div className="Indent-0"> class {this.props.typeOneName.slice(0,1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}{"{"}  </div>
                                      <div className="Indent-1"> int a; </div>
                                      <div className="Indent-1"> {this.props.typeOneName.slice(0,1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}(int a){"{"} </div>
                                      <div className="Indent-2"> this.a = a; </div>
                                      <div className="Indent-1"> {"}"} </div>
                                      <div className="Indent-0"> {this.props.typeTwoName} {this.props.varName} = new{" "}
                                      {this.props.typeOneName.slice(0,1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}(5);</div>
                                      </React.Fragment>
                            :
                              this.props.typeOneName === 'String'
                              ?
                              <React.Fragment>
                              <div className="Indent-0"> class {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}{"{"}  </div>
                              <div className="Indent-1"> int a; </div>
                              <div className="Indent-1"> {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(int a){"{"} </div>
                              <div className="Indent-2"> this.a = a; </div>
                              <div className="Indent-1"> {"}"} </div>
                              <div className="Indent-0"> {"}"} </div>
                              <div className="Indent-0"> {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)} {this.props.varName} = "thing";</div>
                              </React.Fragment>
                              : this.props.typeOneName === 'char'
                                ?
                                <React.Fragment>
                                <div className="Indent-0"> class {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}{"{"}  </div>
                                <div className="Indent-1"> int a; </div>
                                <div className="Indent-1"> {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(int a){"{"} </div>
                                <div className="Indent-2"> this.a = a; </div>
                                <div className="Indent-1"> {"}"} </div>
                                <div className="Indent-0"> {"}"} </div>
                                <div className="Indent-0"> {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)} {this.props.varName} = 's';</div>
                                </React.Fragment>
                                : this.props.typeOneName === 'boolean'
                                  ?
                                  <React.Fragment>
                                  <div className="Indent-0"> class {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}{"{"}  </div>
                                  <div className="Indent-1"> int a; </div>
                                  <div className="Indent-1"> {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(int a){"{"} </div>
                                  <div className="Indent-2"> this.a = a; </div>
                                  <div className="Indent-1"> {"}"} </div>
                                  <div className="Indent-0"> {"}"} </div>
                                  <div className="Indent-0"> {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)} {this.props.varName} = true;</div>
                                  </React.Fragment>
                                  : this.props.typeOneName === 'float' || this.props.typeOneName === 'double'
                                    ?
                                    <React.Fragment>
                                    <div className="Indent-0"> class {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}{"{"}  </div>
                                    <div className="Indent-1"> int a; </div>
                                    <div className="Indent-1"> {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(int a){"{"} </div>
                                    <div className="Indent-2"> this.a = a; </div>
                                    <div className="Indent-1"> {"}"} </div>
                                    <div className="Indent-0"> {"}"} </div>
                                    <div className="Indent-0"> {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)} {this.props.varName} = 5.0;</div>
                                    </React.Fragment>
                                    : this.props.typeOneName === 'int' || this.props.typeOneName === 'byte' ||
                                      this.props.typeOneName === 'short' || this.props.typeOneName === 'long'
                                      ?
                                      <React.Fragment>
                                      <div className="Indent-0"> class {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}{"{"}  </div>
                                      <div className="Indent-1"> int a; </div>
                                      <div className="Indent-1"> {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(int a){"{"} </div>
                                      <div className="Indent-2"> this.a = a; </div>
                                      <div className="Indent-1"> {"}"} </div>
                                      <div className="Indent-0"> {"}"} </div>
                                      <div className="Indent-0"> {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)} {this.props.varName} = 5;</div>
                                      </React.Fragment>
                                      :
                                      <React.Fragment>
                                      <div className="Indent-0"> class {this.props.typeOneName.slice(0,1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}{"{"}  </div>
                                      <div className="Indent-1"> int a; </div>
                                      <div className="Indent-1"> {this.props.typeOneName.slice(0,1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}(int a){"{"} </div>
                                      <div className="Indent-2"> this.a = a; </div>
                                      <div className="Indent-1"> {"}"} </div>
                                      <div className="Indent-0"> class {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}{"{"}  </div>
                                      <div className="Indent-1"> int b; </div>
                                      <div className="Indent-1"> {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(int a){"{"} </div>
                                      <div className="Indent-2"> this.b = b; </div>
                                      <div className="Indent-1"> {"}"} </div>
                                      <div className="Indent-0"> {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)} {this.props.varName} = new{" "}
                                      {this.props.typeOneName.slice(0,1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}(5);</div>
                                      </React.Fragment>
                          }
                          </div>
                          </div>
                          <div className="CodeContainer">
                            <div className="GreenCode">
                            { this.props.typeTwoName === 'String'
                              ?
                              <div className="Indent-0"> {this.props.typeTwoName} {this.props.varName} = "thing";</div>
                              : this.props.typeTwoName === 'char'
                                ?
                                <div className="Indent-0"> {this.props.typeTwoName} {this.props.varName} = 's';</div>
                                : this.props.typeTwoName === 'boolean'
                                  ?
                                  <div className="Indent-0"> {this.props.typeTwoName} {this.props.varName} = true;</div>
                                  : this.props.typeTwoName === 'float' || this.props.typeTwoName === 'double'
                                    ?
                                    <div className="Indent-0"> {this.props.typeTwoName} {this.props.varName} = 5.0;</div>
                                    : this.props.typeTwoName === 'int' || this.props.typeTwoName === 'byte' ||
                                      this.props.typeTwoName === 'short' || this.props.typeTwoName === 'long'
                                      ?
                                      <div className="Indent-0"> {this.props.typeTwoName} {this.props.varName} = 5;</div>
                                      :
                                      <React.Fragment>
                                      <div className="Indent-0"> {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)} {this.props.varName} = new{" "}
                                      {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(5);</div>
                                      </React.Fragment>
                          }
                            </div>
                          </div>
                        </div>
                      )
                    }
                </div>
              </div>
            )}
          </div>

          <div className="Tile">
            <div className="ErrorTile" onClick={() => this.openStrategyTileBoxOnly(2)}>
              <div className="ErrorMessage">
              {   this.props.typeOneName === 'String' || this.props.typeOneName === 'char' ||
                  this.props.typeOneName === 'boolean' || this.props.typeOneName === 'int' ||
                  this.props.typeOneName === 'byte' || this.props.typeOneName === 'short' ||
                  this.props.typeOneName === 'long' || this.props.typeOneName === 'float' ||
                  this.props.typeOneName === 'double'
                  ? this.props.typeTwoName === 'int' || this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte' ||
                    this.props.typeTwoName === 'long' || this.props.typeTwoName === 'float' || this.props.typeTwoName === 'double' ||
                    this.props.typeTwoName === 'boolean' || this.props.typeTwoName === 'String' || this.props.typeTwoName === 'char'
                    ?
                    <h4>
                      2: You may have returned a <div className="InputValue">{this.props.typeOneName}</div> value in a method that expects to return a <div className="InputValue">{this.props.typeTwoName}</div> value
                    </h4>
                    :
                      <h4>
                        2: You may have returned a <div className="InputValue">{this.props.typeOneName}</div> value in a method that expects to return a <div className="InputValue">{this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}</div> object
                      </h4>

                  : this.props.typeTwoName === 'int' || this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte' ||
                    this.props.typeTwoName === 'long' || this.props.typeTwoName === 'float' || this.props.typeTwoName === 'double' ||
                    this.props.typeTwoName === 'boolean' || this.props.typeTwoName === 'String' || this.props.typeTwoName === 'char'
                    ?
                    <h4>
                      2: You may have returned a <div className="InputValue">{this.props.typeOneName.slice(0,1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}</div> object in a method that expects to return a <div className="InputValue">{this.props.typeTwoName}</div> value
                    </h4>
                    :
                    <h4>
                      2: You may have returned a <div className="InputValue">{this.props.typeOneName.slice(0,1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}</div> object in a method that expects to return a <div className="InputValue">{this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}</div> object
                    </h4>
                }
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
                      { this.props.typeTwoName === 'String' || this.props.typeTwoName === 'char' ||
                        this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte' ||
                        this.props.typeTwoName === 'long' || this.props.typeTwoName === 'float' ||
                        this.props.typeTwoName === 'double' || this.props.typeTwoName === 'boolean' || this.props.typeTwoName === 'int'
                        ?
                        <React.Fragment>
                        Suggestion 1: Change the method's expected return type to <div className="InputValue">{this.props.typeOneName}</div> type
                        </React.Fragment>
                        :
                        <React.Fragment>
                        Suggestion 1: Change the method's expected return type to <div className="InputValue">{this.props.typeOneName.slice(0,1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}</div> object in a method that expects to return a <div className="InputValue">{this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}</div> type
                        </React.Fragment>
                      }
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

                  { this.state.openCode21 && (
                        <div className="CodeExample">
                                <div className="CodeContainer">
                                  <div className="RedCode">
                                    { this.props.typeTwoName === 'String' || this.props.typeTwoName === 'char' ||
                                      this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte' ||
                                      this.props.typeTwoName === 'long' || this.props.typeTwoName === 'float' || this.props.typeOneName === 'double' ||
                                      this.props.typeTwoName === 'boolean' || this.props.typeTwoName === 'int'
                                      ?
                                        this.props.typeOneName === 'String'
                                        ?
                                        <React.Fragment>
                                        <div className="Indent-0">{this.props.typeTwoName} doSomething() {LEFT_CURLY}</div>
                                        <div className="Indent-1">{this.props.typeOneName} {this.props.varName} = "thing";</div>
                                        <div className="Indent-1">return {this.props.varName};</div>
                                        <div className="Indent-0">{RIGHT_CURLY}</div>
                                        </React.Fragment>
                                        : this.props.typeOneName === 'char'
                                          ?
                                          <React.Fragment>
                                          <div className="Indent-0">{this.props.typeTwoName} doSomething() {LEFT_CURLY}</div>
                                          <div className="Indent-1">{this.props.typeOneName} {this.props.varName} = 's';</div>
                                          <div className="Indent-1">return {this.props.varName};</div>
                                          <div className="Indent-0">{RIGHT_CURLY}</div>
                                          </React.Fragment>
                                          : this.props.typeOneName === 'boolean'
                                            ?
                                            <React.Fragment>
                                            <div className="Indent-0">{this.props.typeTwoName} doSomething() {LEFT_CURLY}</div>
                                            <div className="Indent-1">{this.props.typeOneName} {this.props.varName} = true;</div>
                                            <div className="Indent-1">return {this.props.varName};</div>
                                            <div className="Indent-0">{RIGHT_CURLY}</div>
                                            </React.Fragment>
                                            : this.props.typeOneName === 'float' || this.props.typeOneName === 'double'
                                              ?
                                              <React.Fragment>
                                              <div className="Indent-0">{this.props.typeTwoName} doSomething() {LEFT_CURLY}</div>
                                              <div className="Indent-1">{this.props.typeOneName} {this.props.varName} = 5.0;</div>
                                              <div className="Indent-1">return {this.props.varName};</div>
                                              <div className="Indent-0">{RIGHT_CURLY}</div>
                                              </React.Fragment>
                                              : this.props.typeOneName === 'int' || this.props.typeOneName === 'byte' ||
                                                this.props.typeOneName === 'short' || this.props.typeOneName === 'long'
                                                ?
                                                <React.Fragment>
                                                <div className="Indent-0">{this.props.typeTwoName} doSomething() {LEFT_CURLY}</div>
                                                <div className="Indent-1">{this.props.typeOneName} {this.props.varName} = 5;</div>
                                                <div className="Indent-1">return {this.props.varName};</div>
                                                <div className="Indent-0">{RIGHT_CURLY}</div>
                                                </React.Fragment>
                                                :
                                                <React.Fragment>
                                                <div className="Indent-0"> class {this.props.typeOneName.slice(0,1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}{"{"}  </div>
                                                <div className="Indent-1"> int a; </div>
                                                <div className="Indent-1"> {this.props.typeOneName.slice(0,1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}(int a){"{"} </div>
                                                <div className="Indent-2"> this.a = a; </div>
                                                <div className="Indent-1"> {"}"} </div>
                                                <div className="Indent-0"> {"}"} </div>
                                                <div className="Indent-0">{this.props.typeTwoName} doSomething() {LEFT_CURLY}</div>
                                                <div className="Indent-1">{this.props.typeOneName.slice(0,1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)} {this.props.varName} = {" "}
                                                new {this.props.typeOneName.slice(0,1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}(5);</div>
                                                <div className="Indent-1">return {this.props.varName};</div>
                                                <div className="Indent-0">{RIGHT_CURLY}</div>
                                                </React.Fragment>
                                      :
                                        this.props.typeOneName === 'String'
                                        ?
                                        <React.Fragment>
                                        <div className="Indent-0"> class {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}{"{"}  </div>
                                        <div className="Indent-1"> int a; </div>
                                        <div className="Indent-1"> {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(int a){"{"} </div>
                                        <div className="Indent-2"> this.a = a; </div>
                                        <div className="Indent-1"> {"}"} </div>
                                        <div className="Indent-0"> {"}"} </div>
                                        <div className="Indent-0">{this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)} doSomething() {LEFT_CURLY}</div>
                                        <div className="Indent-1">{this.props.typeOneName} {this.props.varName} = "thing";</div>
                                        <div className="Indent-1">return {this.props.varName};</div>
                                        <div className="Indent-0">{RIGHT_CURLY}</div>
                                        </React.Fragment>
                                        : this.props.typeOneName === 'char'
                                          ?
                                          <React.Fragment>
                                          <div className="Indent-0"> class {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}{"{"}  </div>
                                          <div className="Indent-1"> int a; </div>
                                          <div className="Indent-1"> {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(int a){"{"} </div>
                                          <div className="Indent-2"> this.a = a; </div>
                                          <div className="Indent-1"> {"}"} </div>
                                          <div className="Indent-0"> {"}"} </div>
                                          <div className="Indent-0">{this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)} doSomething() {LEFT_CURLY}</div>
                                          <div className="Indent-1">{this.props.typeOneName} {this.props.varName} = 's';</div>
                                          <div className="Indent-1">return {this.props.varName};</div>
                                          <div className="Indent-0">{RIGHT_CURLY}</div>
                                          </React.Fragment>
                                          : this.props.typeOneName === 'boolean'
                                            ?
                                            <React.Fragment>
                                            <div className="Indent-0"> class {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}{"{"}  </div>
                                            <div className="Indent-1"> int a; </div>
                                            <div className="Indent-1"> {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(int a){"{"} </div>
                                            <div className="Indent-2"> this.a = a; </div>
                                            <div className="Indent-1"> {"}"} </div>
                                            <div className="Indent-0"> {"}"} </div>
                                            <div className="Indent-0">{this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)} doSomething() {LEFT_CURLY}</div>
                                            <div className="Indent-1">{this.props.typeOneName} {this.props.varName} = true;</div>
                                            <div className="Indent-1">return {this.props.varName};</div>
                                            <div className="Indent-0">{RIGHT_CURLY}</div>
                                            </React.Fragment>
                                            : this.props.typeOneName === 'float' || this.props.typeOneName === 'double'
                                              ?
                                              <React.Fragment>
                                              <div className="Indent-0"> class {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}{"{"}  </div>
                                              <div className="Indent-1"> int a; </div>
                                              <div className="Indent-1"> {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(int a){"{"} </div>
                                              <div className="Indent-2"> this.a = a; </div>
                                              <div className="Indent-1"> {"}"} </div>
                                              <div className="Indent-0"> {"}"} </div>
                                              <div className="Indent-0">{this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)} doSomething() {LEFT_CURLY}</div>
                                              <div className="Indent-1">{this.props.typeOneName} {this.props.varName} = 5.0;</div>
                                              <div className="Indent-1">return {this.props.varName};</div>
                                              <div className="Indent-0">{RIGHT_CURLY}</div>
                                              </React.Fragment>
                                              : this.props.typeOneName === 'int' || this.props.typeOneName === 'byte' ||
                                                this.props.typeOneName === 'short' || this.props.typeOneName === 'long'
                                                ?
                                                <React.Fragment>
                                                <div className="Indent-0"> class {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}{"{"}  </div>
                                                <div className="Indent-1"> int a; </div>
                                                <div className="Indent-1"> {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(int a){"{"} </div>
                                                <div className="Indent-2"> this.a = a; </div>
                                                <div className="Indent-1"> {"}"} </div>
                                                <div className="Indent-0"> {"}"} </div>
                                                <div className="Indent-0">{this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)} doSomething() {LEFT_CURLY}</div>
                                                <div className="Indent-1">{this.props.typeOneName} {this.props.varName} = 5;</div>
                                                <div className="Indent-1">return {this.props.varName};</div>
                                                <div className="Indent-0">{RIGHT_CURLY}</div>
                                                </React.Fragment>
                                                :
                                                <React.Fragment>
                                                <div className="Indent-0"> class {this.props.typeOneName.slice(0,1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}{"{"}  </div>
                                                <div className="Indent-1"> int a; </div>
                                                <div className="Indent-1"> {this.props.typeOneName.slice(0,1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}(int a){"{"} </div>
                                                <div className="Indent-2"> this.a = a; </div>
                                                <div className="Indent-1"> {"}"} </div>
                                                <div className="Indent-0"> class {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}{"{"}  </div>
                                                <div className="Indent-1"> int b; </div>
                                                <div className="Indent-1"> {this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(int a){"{"} </div>
                                                <div className="Indent-2"> this.b = b; </div>
                                                <div className="Indent-1"> {"}"} </div>
                                                <div className="Indent-0">{this.props.typeTwoName.slice(0,1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)} doSomething() {LEFT_CURLY}</div>
                                                <div className="Indent-1">{this.props.typeOneName.slice(0,1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)} {this.props.varName} = {" "}
                                                new {this.props.typeOneName.slice(0,1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}(5);</div>
                                                <div className="Indent-1">return {this.props.varName};</div>
                                                <div className="Indent-0">{RIGHT_CURLY}</div>
                                                </React.Fragment>
                                    }
                                  </div>
                                </div>
                                <div className="CodeContainer">
                                  <div className="GreenCode">
                                  {   this.props.typeOneName === 'String'
                                        ?
                                        <React.Fragment>
                                        <div className="Indent-0">{this.props.typeOneName} doSomething() {LEFT_CURLY}</div>
                                        <div className="Indent-1">{this.props.typeOneName} {this.props.varName}  = "thing";</div>
                                        <div className="Indent-1">return {this.props.varName}; </div>
                                        <div className="Indent-0">{RIGHT_CURLY}</div>
                                        </React.Fragment>
                                        : this.props.typeOneName === 'char'
                                          ?
                                          <React.Fragment>
                                          <div className="Indent-0">{this.props.typeOneName} doSomething() {LEFT_CURLY}</div>
                                          <div className="Indent-1">{this.props.typeOneName} {this.props.varName}  = 's';</div>
                                          <div className="Indent-1">return {this.props.varName}; </div>
                                          <div className="Indent-0">{RIGHT_CURLY}</div>
                                          </React.Fragment>
                                          : this.props.typeOneName === 'boolean'
                                            ?
                                            <React.Fragment>
                                            <div className="Indent-0">{this.props.typeOneName} doSomething() {LEFT_CURLY}</div>
                                            <div className="Indent-1">{this.props.typeOneName} {this.props.varName}  = true;</div>
                                            <div className="Indent-1">return {this.props.varName}; </div>
                                            <div className="Indent-0">{RIGHT_CURLY}</div>
                                            </React.Fragment>
                                            : this.props.typeOneName === 'float' || this.props.typeOneName === 'double'
                                              ?
                                              <React.Fragment>
                                              <div className="Indent-0">{this.props.typeOneName} doSomething() {LEFT_CURLY}</div>
                                              <div className="Indent-1">{this.props.typeOneName} {this.props.varName}  = 5.0;</div>
                                              <div className="Indent-1">return {this.props.varName}; </div>
                                              <div className="Indent-0">{RIGHT_CURLY}</div>
                                              </React.Fragment>
                                              : this.props.typeOneName === 'int' || this.props.typeOneName === 'byte' ||
                                                this.props.typeOneName === 'short' || this.props.typeOneName === 'long'
                                                ?
                                                <React.Fragment>
                                                <div className="Indent-0">{this.props.typeOneName} doSomething() {LEFT_CURLY}</div>
                                                <div className="Indent-1">{this.props.typeOneName} {this.props.varName}  = "5;</div>
                                                <div className="Indent-1">return {this.props.varName}; </div>
                                                <div className="Indent-0">{RIGHT_CURLY}</div>
                                                </React.Fragment>
                                                :
                                                <React.Fragment>
                                                <div className="Indent-0">{this.props.typeOneName.slice(0,1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)} doSomething() {LEFT_CURLY}</div>
                                                <div className="Indent-1">{this.props.typeOneName.slice(0,1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)} {this.props.varName}  = {" "}
                                                new {this.props.typeOneName.slice(0,1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}(5);</div>
                                                <div className="Indent-1">return {this.props.varName}; </div>
                                                <div className="Indent-0">{RIGHT_CURLY}</div>
                                                </React.Fragment>
                                    }
                                  </div>
                                </div>
                              </div>
                      )
                    }
                </div>
              </div>
            )}
          </div>

          { this.props.typeTwoName === 'int' && (this.props.typeOneName === 'float' || this.props.typeOneName === 'double')
            ?
            <div className="Tile">
            <div className="ErrorTile" onClick={() => this.openStrategyTileBoxOnly(3)}>
              <div className="ErrorMessage">
                <h4>
                  3: You may have used <div className="InputValue">{this.props.typeTwoName}</div>-type variable{" "}
                  <div className="InputValue">{this.props.varName}</div>{" "} in an operation involving <div className="InputValue">{this.props.typeOneName}</div> type
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
                  onClick={() => this.openCodeExampleBoxOnly(31)}
                >
                  <div className="StrategyInstruction">
                    <div className="StrategyMessage">
                      <BlueCheckbox
                        value="box1"
                        checked={this.state.checked31}
                        onChange={() => this.changeChecked(31)}
                      />
                      <div className="Suggestion">
                        Suggestion 1: Change the type of <div className="InputValue">{this.props.varName}</div> {" "}
                        from <div className="InputValue">{this.props.typeTwoName}</div> to <div className="InputValue">{this.props.typeOneName}</div>
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

                  { this.state.openCode31 && (
                              <div className="CodeExample">
                                <div className="CodeContainer">
                                <div className="RedCode">
                                    <div className="Indent-0"> {this.props.typeTwoName} {" "}
                                      {this.props.varName}{" "}
                                      = 3;
                                    </div>
                                    <div className="Indent-0">
                                      {this.props.varName}{" "}
                                      = {this.props.varName}{" "}* 3.14;
                                    </div>
                                  </div>
                                </div>
                                <div className="CodeContainer">
                                  <div className="GreenCode">
                                  <div className="Indent-0"> {this.props.typeOneName}{" "}
                                      {this.props.varName}{" "}
                                      = 3;
                                    </div>
                                    <div className="Indent-0">
                                      {this.props.varName}{" "}
                                      = {this.props.varName}{" "}* 3.14;
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                    }

                </div>
              </div>
            )}
          </div>
          :
          " "
          }
        </div>
      </div>
    );
  }
}

export default TypeMismatch;

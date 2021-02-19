import React from "react";
import MinusButton from "../assets/minus.svg";
import PlusButton from "../assets/plus.svg";
import "../App.css";
import ParameterMismatchResourceFooter from "./resourceFooters/ParameterMismatchResourceFooter.jsx";
import BlueCheckbox from './resources/blueCheckbox'

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

  openStrategyTileBoxOnly(i) {
    switch (i) {
      case 1:
        if (!this.state.openStrategy1) {
          this.setState({ openStrategy1: true });
          this.setState({ openCode11: false });
          this.setState({ openCode12: false });
        }
        break;
      case 2:
        if (!this.state.openStrategy2) {
          this.setState({ openStrategy2: true });
          this.setState({ openCode21: false });
          this.setState({ openCode22: false });
        }
        break;
      default:
        break;
    }
  }

  openCodeExampleBoxOnly(i) {
    switch (i) {
      case 11:
        if (!this.state.openCode11) {
          this.setState({ openCode11: !this.state.openCode11 });
        }
        break;
      case 12:
        if (!this.state.openCode12) {
          this.setState({ openCode12: !this.state.openCode12 });
        }
        break;
      case 21:
        if (!this.state.openCode21) {
          this.setState({ openCode21: !this.state.openCode21 });
        }
        break;
      case 22:
        if (!this.state.openCode22) {
          this.setState({ openCode22: !this.state.openCode22 });
        }
        break;
      default:
        break;
    }
  }

  changeChecked(i) {
    switch (i) {
      case 11:
        if (this.state.openCode11) {
          if (!this.state.checked11) {
            this.setState({ checked11: !this.state.checked11 });
            this.setState({ openCode11: false });
          } else {
            this.setState({ checked11: !this.state.checked11 });
            this.setState({ openCode11: true });
          }
        }
        if (!this.state.openCode11) {
          this.setState({ checked11: !this.state.checked11 });
          this.setState({ openCode11: false });
        }
        break;
      case 12:
        if (this.state.openCode12) {
          if (!this.state.checked12) {
            this.setState({ checked12: !this.state.checked12 });
            this.setState({ openCode12: false });
          } else {
            this.setState({ checked12: !this.state.checked12 });
            this.setState({ openCode12: true });
          }
        }
        if (!this.state.openCode12) {
          this.setState({ checked12: !this.state.checked12 });
          this.setState({ openCode12: false });
        }
        break;
      case 21:
        if (this.state.openCode21) {
          if (!this.state.checked21) {
            this.setState({ checked21: !this.state.checked21 });
            this.setState({ openCode21: false });
          } else {
            this.setState({ checked21: !this.state.checked21 });
            this.setState({ openCode21: true });
          }
        }
        if (!this.state.openCode21) {
          this.setState({ checked21: !this.state.checked21 });
          this.setState({ openCode21: false });
        }
        break;
      case 22:
        if (this.state.openCode22) {
          if (!this.state.checked22) {
            this.setState({ checked22: !this.state.checked22 });
            this.setState({ openCode22: false });
          } else {
            this.setState({ checked22: !this.state.checked22 });
            this.setState({ openCode22: true });
          }
        }
        if (!this.state.openCode22) {
          this.setState({ checked22: !this.state.checked22 });
          this.setState({ openCode22: false });
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
              {this.props.typeOneName === 'String' || this.props.typeOneName === 'char' ||
                this.props.typeOneName === 'boolean' || this.props.typeOneName === 'int' ||
                this.props.typeOneName === 'byte' || this.props.typeOneName === 'short' ||
                this.props.typeOneName === 'long' || this.props.typeOneName === 'float' ||
                this.props.typeOneName === 'double'
                ? this.props.typeTwoName === 'int' || this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte' ||
                  this.props.typeTwoName === 'long' || this.props.typeTwoName === 'float' || this.props.typeTwoName === 'double' ||
                  this.props.typeTwoName === 'boolean' || this.props.typeTwoName === 'String' || this.props.typeTwoName === 'char'
                  ?
                  <React.Fragment>
                    The method “<div className="InputValue">{this.props.methodName}({this.props.typeOneName})</div>”
                  in the type <div className="InputValue">{this.props.className}</div> is not applicable for the
                  arguments <div className="InputValue">({this.props.typeTwoName}) </div>
                  </React.Fragment>
                  :
                  <React.Fragment>
                    The method “<div className="InputValue">{this.props.methodName}({this.props.typeOneName})</div>”
                  in the type <div className="InputValue">{this.props.className}</div> is not applicable for the
                  arguments <div className="InputValue">({this.props.className}.{this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}) </div>
                  </React.Fragment>

                : this.props.typeTwoName === 'String' || this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte' ||
                  this.props.typeTwoName === 'long' || this.props.typeTwoName === 'float' || this.props.typeTwoName === 'double' ||
                  this.props.typeTwoName === 'boolean' || this.props.typeTwoName === 'char' || this.props.typeTwoName === 'int' ||
                  this.props.typeTwoName === 'float'
                  ?
                  <React.Fragment>
                    The method “<div className="InputValue">{this.props.methodName}
                  ({this.props.typeOneName.slice(0, 1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)})</div>”
                  in the type <div className="InputValue">{this.props.className}</div> is not applicable for the
                  arguments <div className="InputValue">({this.props.typeTwoName}) </div>
                  </React.Fragment>
                  :
                  <React.Fragment>
                    The method “<div className="InputValue">{this.props.methodName}
                  (<div className="InputValue">{this.props.className}</div>.{this.props.typeOneName.slice(0, 1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)})</div>”
                  in the type <div className="InputValue">{this.props.className}</div> is not applicable for the
                  arguments <div className="InputValue">(<div className="InputValue">{this.props.className}</div>.{" "}
                      {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}) </div>
                  </React.Fragment>
              }
            </h2>
          </div>

          <h4>
            <i>
              {this.props.typeOneName === 'String' || this.props.typeOneName === 'char' ||
                this.props.typeOneName === 'short' || this.props.typeOneName === 'byte' ||
                this.props.typeOneName === 'long' || this.props.typeOneName === 'float' ||
                this.props.typeOneName === 'double' || this.props.typeOneName === 'boolean'
                || this.props.typeOneName === 'int'
                ?
                <React.Fragment>
                  Translation: You are trying to use the method “
                  <div className="InputValue">{this.props.methodName}({this.props.typeOneName})</div>” but
                  with the incorrect parameters.
                  </React.Fragment>
                :
                <React.Fragment>
                  Translation: You are trying to use the method “
                  <div className="InputValue">{this.props.methodName}
                  ({this.props.typeOneName.slice(0, 1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)})</div>” but
                  with the incorrect parameters.
                  </React.Fragment>
              }
            </i>
          </h4>

          {/** B1 */}
          <div className="Tile">
            <div className="ErrorTile" onClick={() => this.openStrategyTileBoxOnly(1)}>
              <div className="ErrorMessage">
                <h4>
                  {this.props.typeOneName === 'String' || this.props.typeOneName === 'char' ||
                    this.props.typeOneName === 'short' || this.props.typeOneName === 'byte' ||
                    this.props.typeOneName === 'long' || this.props.typeOneName === 'float' ||
                    this.props.typeOneName === 'double' || this.props.typeOneName === 'boolean'
                    || this.props.typeOneName === 'int'
                    ?
                    <React.Fragment>
                      1: You may have used the wrong type of parameter for
                    the method <div className="InputValue">{this.props.methodName}({this.props.typeOneName})</div>
                    </React.Fragment>
                    :
                    <React.Fragment>
                      1: You may have used the wrong type of parameter for
                    the method <div className="InputValue">{this.props.methodName}
                    ({this.props.typeOneName.slice(0, 1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)})</div>
                    </React.Fragment>
                  }
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

              {/** B1S1 */}
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
                          this.props.typeOneName === 'long' || this.props.typeOneName === 'float' || this.props.typeOneName === 'double' ||
                          this.props.typeOneName === 'boolean' || this.props.typeOneName === 'int'
                          ?
                          <React.Fragment>
                            Suggestion 1: Change the parameter of{" "}
                            <p className="InputValue">{this.props.methodName}({this.props.typeOneName})</p> to the expected type
                          </React.Fragment>
                          :
                          <React.Fragment>
                            Suggestion 1: Change the parameter of{" "}
                            <p className="InputValue">{this.props.methodName}
                          ({this.props.typeOneName.slice(0, 1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)})</p> to the expected type
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

                  {/** B1S1R1 */}
                  {this.state.openCode11 && (
                    <div className="CodeExample">
                      <div className="CodeContainer">
                        <div className="RedCode">
                          {this.props.typeOneName === 'String'
                            ?
                            <React.Fragment>
                              <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
                              {this.props.typeTwoName === 'int' || this.props.typeTwoName === 'long' ||
                                this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte'
                                ?
                                <div className="Indent-1"> {this.props.methodName}(2);</div>
                                : this.props.typeTwoName === 'float' || this.props.typeTwoName === 'double'
                                  ?
                                  <div className="Indent-1"> {this.props.methodName}(2.0);</div>
                                  : this.props.typeTwoName === 'boolean'
                                    ?
                                    <div className="Indent-1"> {this.props.methodName}(true);</div>
                                    : this.props.typeTwoName === 'char'
                                      ?
                                      <div className="Indent-1"> {this.props.methodName}('s');</div>
                                      :
                                      <div className="Indent-1"> {this.props.methodName}(new {" "}
                                        {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(5));</div>
                              }
                              <div className="Indent-0"> {RIGHT_CURLY}</div>
                              <div className="Indent-0"> {this.props.methodTypeName} {this.props.methodName}({this.props.typeOneName} s){LEFT_CURLY}</div>
                              <div className="Indent-1"> println(s + "two");</div>
                              <div className="Indent-0"> {RIGHT_CURLY}</div>
                            </React.Fragment>

                            : this.props.typeOneName === 'char'
                              ?
                              <React.Fragment>
                                <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
                                {this.props.typeTwoName === 'int' || this.props.typeTwoName === 'long' ||
                                  this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte'
                                  ?
                                  <div className="Indent-1"> {this.props.methodName}(2);</div>
                                  : this.props.typeTwoName === 'float' || this.props.typeTwoName === 'double'
                                    ?
                                    <div className="Indent-1"> {this.props.methodName}(2.0);</div>
                                    : this.props.typeTwoName === 'boolean'
                                      ?
                                      <div className="Indent-1"> {this.props.methodName}(true);</div>
                                      : this.props.typeTwoName === 'String'
                                        ?
                                        <div className="Indent-1"> {this.props.methodName}("two");</div>
                                        :
                                        <div className="Indent-1"> {this.props.methodName}(new {" "}
                                          {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(5));</div>
                                }
                                <div className="Indent-0"> {RIGHT_CURLY}</div>
                                <div className="Indent-0"> void {this.props.methodName}({this.props.typeOneName} s){LEFT_CURLY}</div>
                                <div className="Indent-1"> println(s + 's');</div>
                                <div className="Indent-0"> {RIGHT_CURLY}</div>
                              </React.Fragment>

                              : this.props.typeOneName === 'boolean'
                                ?
                                <React.Fragment>
                                  <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
                                  {this.props.typeTwoName === 'int' || this.props.typeTwoName === 'long' ||
                                    this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte'
                                    ?
                                    <div className="Indent-1"> {this.props.methodName}(2);</div>
                                    : this.props.typeTwoName === 'float' || this.props.typeTwoName === 'double'
                                      ?
                                      <div className="Indent-1"> {this.props.methodName}(2.0);</div>
                                      : this.props.typeTwoName === 'char'
                                        ?
                                        <div className="Indent-1"> {this.props.methodName}('s');</div>
                                        : this.props.typeTwoName === 'String'
                                          ?
                                          <div className="Indent-1"> {this.props.methodName}("two");</div>
                                          :
                                          <div className="Indent-1"> {this.props.methodName}(new {" "}
                                            {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(5));</div>
                                  }
                                  <div className="Indent-0"> {RIGHT_CURLY}</div>
                                  <div className="Indent-0"> void {this.props.methodName}({this.props.typeOneName} s){LEFT_CURLY}</div>
                                  <div className="Indent-1"> println(!s);</div>
                                  <div className="Indent-0"> {RIGHT_CURLY}</div>
                                </React.Fragment>

                                : this.props.typeOneName === 'float' || this.props.typeOneName === 'double'
                                  ?
                                  <React.Fragment>
                                    <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
                                    {this.props.typeTwoName === 'boolean'
                                      ?
                                      <div className="Indent-1"> {this.props.methodName}(true);</div>
                                      : this.props.typeTwoName === 'char'
                                        ?
                                        <div className="Indent-1"> {this.props.methodName}('s');</div>
                                        : this.props.typeTwoName === 'int' || this.props.typeTwoName === 'long' ||
                                          this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte'
                                          ?
                                          <div className="Indent-1"> {this.props.methodName}(2);</div>
                                          :
                                          <div className="Indent-1"> {this.props.methodName}(new {" "}
                                            {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(5));</div>
                                    }
                                    <div className="Indent-0"> {RIGHT_CURLY}</div>
                                    <div className="Indent-0"> void {this.props.methodName}({this.props.typeOneName} s){LEFT_CURLY}</div>
                                    <div className="Indent-1"> println(s + 1.0);</div>
                                    <div className="Indent-0"> {RIGHT_CURLY}</div>
                                  </React.Fragment>

                                  : this.props.typeOneName === 'long' || this.props.typeOneName === 'short' ||
                                    this.props.typeOneName === 'byte' || this.props.typeOneName === 'int'
                                    ?
                                    <React.Fragment>
                                      <div className="Indent-0"> {this.props.methodTypeName} {this.props.varName}; </div>
                                      <div className="Indent-0"> void setup(){LEFT_CURLY} </div>
                                      <div className="Indent-1"> ... </div>
                                      {this.props.typeTwoName === 'String'
                                        ?
                                        <div className="Indent-1"> {this.props.varName} = {this.props.methodName}("two");</div>
                                        : this.props.typeTwoName === 'char'
                                          ?
                                          <div className="Indent-1"> {this.props.varName} = {this.props.methodName}('s');</div>
                                          : this.props.typeTwoName === 'boolean'
                                            ?
                                            <div className="Indent-1"> {this.props.varName} = {this.props.methodName}(true);</div>
                                            : this.props.typeTwoName === 'float' || this.props.typeTwoName === 'double'
                                              ?
                                              <div className="Indent-1"> {this.props.varName} = {this.props.methodName}(2.0);</div>
                                              :
                                              <div className="Indent-1"> {this.props.varName} = {this.props.methodName}(new {" "}
                                                {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(5));</div>
                                      }
                                      <div className="Indent-0"> {RIGHT_CURLY}</div>
                                      <div className="Indent-0"> {this.props.methodTypeName} {this.props.methodName}({this.props.typeOneName} s){LEFT_CURLY}</div>
                                      <div className="Indent-1">  ... </div>
                                      {this.props.methodTypeName === 'String'
                                        ?
                                        <React.Fragment>
                                          <div className="Indent-1"> {this.props.methodTypeName} str = ...;</div>
                                          <div className="Indent-1"> return str;</div>
                                        </React.Fragment>
                                        : this.props.methodTypeName === 'char'
                                          ?
                                          <React.Fragment>
                                            <div className="Indent-1"> {this.props.methodTypeName} c = ...;</div>
                                            <div className="Indent-1"> return c;</div>
                                          </React.Fragment>
                                          : this.props.methodTypeName === 'boolean'
                                            ?
                                            <div className="Indent-1"> return true;</div>
                                            : this.props.methodTypeName === 'float' || this.props.methodTypeName === 'double'
                                              ?
                                              <React.Fragment>
                                                <div className="Indent-1"> {this.props.methodTypeName} n = ...;</div>
                                                <div className="Indent-1"> return n;</div>
                                              </React.Fragment>
                                              : this.props.methodTypeName === 'int' || this.props.methodTypeName === 'short' ||
                                                this.props.methodTypeName === 'long' || this.props.methodTypeName === 'byte'
                                                ?
                                                <React.Fragment>
                                                  <div className="Indent-1"> {this.props.methodTypeName} n = ...;</div>
                                                  <div className="Indent-1"> return n;</div>
                                                </React.Fragment>
                                                :
                                                <div className="Indent-1"> </div>
                                      }
                                      <div className="Indent-0"> {RIGHT_CURLY}</div>
                                    </React.Fragment>

                                    :
                                    <React.Fragment>
                                      <div className="Indent-0"> class {this.props.typeOneName.slice(0, 1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}{"{"}  </div>
                                      <div className="Indent-1"> int a; </div>
                                      <div className="Indent-1"> {this.props.typeOneName.slice(0, 1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}(int a){"{"} </div>
                                      <div className="Indent-2"> this.a = a; </div>
                                      <div className="Indent-1"> {"}"} </div>
                                      <div className="Indent-0"> {"}"} </div>
                                      <div className="Indent-0"> void setup(){LEFT_CURLY} </div>
                                      {this.props.typeTwoName === 'String'
                                        ?
                                        <div className="Indent-1"> {this.props.methodName}("two");</div>
                                        : this.props.typeTwoName === 'char'
                                          ?
                                          <div className="Indent-1"> {this.props.methodName}('s');</div>
                                          : this.props.typeTwoName === 'boolean'
                                            ?
                                            <div className="Indent-1"> {this.props.methodName}(true);</div>
                                            : this.props.typeTwoName === 'float' || this.props.typeTwoName === 'double'
                                              ?
                                              <div className="Indent-1"> {this.props.methodName}(2.0);</div>
                                              : this.props.typeTwoName === 'int' || this.props.typeTwoName === 'byte' ||
                                                this.props.typeTwoName === 'short' || this.props.typeTwoName === 'long'
                                                ?
                                                <div className="Indent-1"> {this.props.methodName}(2);</div>
                                                :
                                                <div className="Indent-1"> {this.props.methodName}(new {" "}
                                                  {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(5));</div>
                                      }
                                      <div className="Indent-0"> {RIGHT_CURLY}</div>
                                      <div className="Indent-0"> void {this.props.methodName}
                                    ({this.props.typeOneName.slice(0, 1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)} s){LEFT_CURLY}</div>
                                      <div className="Indent-1"> println(s.a);</div>
                                      <div className="Indent-0"> {RIGHT_CURLY}</div>
                                    </React.Fragment>
                          }
                        </div>
                      </div>

                      {/** B1S1C1 */}
                      <div className="CodeContainer">
                        <div className="GreenCode">
                          <div className="Indent-0"> {this.props.methodTypeName} {this.props.varName}; </div>
                          <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
                          <div className="Indent-1"> ... </div>
                          {this.props.typeOneName === 'String'
                            ?
                            <div className="Indent-1"> {this.props.varName} = {this.props.methodName}("two");</div>
                            : this.props.typeOneName === 'char'
                              ?
                              <div className="Indent-1"> {this.props.varName} = {this.props.methodName}('s');</div>
                              : this.props.typeOneName === 'boolean'
                                ?
                                <div className="Indent-1"> {this.props.varName} = {this.props.methodName}(true);</div>
                                : this.props.typeOneName === 'double' || this.props.typeOneName === 'float'
                                  ?
                                  <div className="Indent-1"> {this.props.varName} = {this.props.methodName}(2.0);</div>
                                  : this.props.typeOneName === 'int' || this.props.typeOneName === 'short' ||
                                    this.props.typeOneName === 'long' || this.props.typeOneName === 'byte'
                                    ?
                                    <div className="Indent-1"> {this.props.varName} = {this.props.methodName}(2);</div>
                                    :
                                    <div className="Indent-1"> {this.props.varName} = {this.props.methodName}(new {" "}
                                      {this.props.typeOneName.slice(0, 1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}(5));</div>
                          }
                          <div className="Indent-0"> {RIGHT_CURLY}</div>
                          {this.props.typeOneName === 'String' || this.props.typeOneName === 'char' ||
                            this.props.typeOneName === 'short' || this.props.typeOneName === 'byte' ||
                            this.props.typeOneName === 'long' || this.props.typeOneName === 'float' ||
                            this.props.typeOneName === 'double' || this.props.typeOneName === 'boolean' ||
                            this.props.typeOneName === 'int'
                            ?
                            <div className="Indent-0"> {this.props.methodTypeName} {this.props.methodName}({this.props.typeOneName} s){LEFT_CURLY}</div>
                            :
                            <div className="Indent-0"> {this.props.methodTypeName} {this.props.methodName}(
                              {this.props.typeOneName.slice(0, 1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)} s){LEFT_CURLY}</div>
                          }
                          <div className="Indent-1">  ... </div>
                          {this.props.methodTypeName === 'String'
                            ?
                            <React.Fragment>
                              <div className="Indent-1"> {this.props.methodTypeName} str = ...;</div>
                              <div className="Indent-1"> return str;</div>
                            </React.Fragment>
                            : this.props.methodTypeName === 'char'
                              ?
                              <React.Fragment>
                                <div className="Indent-1"> {this.props.methodTypeName} c = ...;</div>
                                <div className="Indent-1"> return c;</div>
                              </React.Fragment>
                              : this.props.methodTypeName === 'boolean'
                                ?
                                <div className="Indent-1"> return true;</div>
                                : this.props.methodTypeName === 'float' || this.props.methodTypeName === 'double'
                                  ?
                                  <React.Fragment>
                                    <div className="Indent-1"> {this.props.methodTypeName} n = ...;</div>
                                    <div className="Indent-1"> return n;</div>
                                  </React.Fragment>
                                  : this.props.methodTypeName === 'int' || this.props.methodTypeName === 'short' ||
                                    this.props.methodTypeName === 'long' || this.props.methodTypeName === 'byte'
                                    ?
                                    <React.Fragment>
                                      <div className="Indent-1"> {this.props.methodTypeName} n = ...;</div>
                                      <div className="Indent-1"> return n;</div>
                                    </React.Fragment>
                                    :
                                    <div className="Indent-1"> </div>
                          }
                          <div className="Indent-0"> {RIGHT_CURLY}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/** B1S2 */}
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
                        {this.props.typeOneName === 'String' || this.props.typeOneName === 'char' ||
                          this.props.typeOneName === 'boolean' || this.props.typeOneName === 'int' ||
                          this.props.typeOneName === 'byte' || this.props.typeOneName === 'short' ||
                          this.props.typeOneName === 'long' || this.props.typeOneName === 'float' ||
                          this.props.typeOneName === 'double'
                          ? this.props.typeTwoName === 'int' || this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte' ||
                            this.props.typeTwoName === 'long' || this.props.typeTwoName === 'float' || this.props.typeTwoName === 'double' ||
                            this.props.typeTwoName === 'boolean' || this.props.typeTwoName === 'String' || this.props.typeTwoName === 'char'
                            ?
                            <React.Fragment>
                              Suggestion 2: Change the parameter of{" "}
                              <p className="InputValue">{this.props.methodName}({this.props.typeOneName})</p> in
                          the method declaration to match with  <p className="InputValue">{this.props.typeTwoName}</p>
                            </React.Fragment>
                            :
                            <React.Fragment>
                              Suggestion 2: Change the parameter of{" "}
                              <p className="InputValue">{this.props.methodName}({this.props.typeOneName})</p> in
                          the method declaration to match with  <p className="InputValue">
                                {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}
                              </p>
                            </React.Fragment>

                          : this.props.typeTwoName === 'int' || this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte' ||
                            this.props.typeTwoName === 'long' || this.props.typeTwoName === 'double' ||
                            this.props.typeTwoName === 'boolean' || this.props.typeTwoName === 'String' || this.props.typeTwoName === 'char' ||
                            this.props.typeTwoName === 'float'
                            ?
                            <React.Fragment>
                              Suggestion 2: Change the parameter of{" "}
                              <p className="InputValue">{this.props.methodName}(
                          {this.props.typeOneName.slice(0, 1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)})</p>
                          in the method declaration to match with  <p className="InputValue">{this.props.typeTwoName}</p>
                            </React.Fragment>
                            :
                            <React.Fragment>
                              Suggestion 2: Change the parameter of{" "}
                              <p className="InputValue">{this.props.methodName}(
                          {this.props.typeOneName.slice(0, 1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)})</p>
                          in the method declaration to match with  <p className="InputValue">
                                {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}
                              </p>
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

                  {/** B1S2R1 */}
                  {this.state.openCode12 && (
                    <div className="CodeExample">
                      <div className="CodeContainer">
                        <div className="RedCode">
                          {this.props.typeOneName === 'String'
                            ?
                            <React.Fragment>
                              <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
                              {this.props.typeTwoName === 'int' || this.props.typeTwoName === 'long' ||
                                this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte'
                                ?
                                <div className="Indent-1"> {this.props.methodName}(2);</div>
                                : this.props.typeTwoName === 'float' || this.props.typeTwoName === 'double'
                                  ?
                                  <div className="Indent-1"> {this.props.methodName}(2.0);</div>
                                  : this.props.typeTwoName === 'boolean'
                                    ?
                                    <div className="Indent-1"> {this.props.methodName}(true);</div>
                                    : this.props.typeTwoName === 'char'
                                      ?
                                      <div className="Indent-1"> {this.props.methodName}('s');</div>
                                      :
                                      <div className="Indent-1"> {this.props.methodName}(new {" "}
                                        {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(5));</div>
                              }
                              <div className="Indent-0"> {RIGHT_CURLY}</div>
                              <div className="Indent-0"> void {this.props.methodName}({this.props.typeOneName} s){LEFT_CURLY}</div>
                              <div className="Indent-1"> println(s + "two");</div>
                              <div className="Indent-0"> {RIGHT_CURLY}</div>
                            </React.Fragment>

                            : this.props.typeOneName === 'char'
                              ?
                              <React.Fragment>
                                <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
                                {this.props.typeTwoName === 'int' || this.props.typeTwoName === 'long' ||
                                  this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte'
                                  ?
                                  <div className="Indent-1"> {this.props.methodName}(2);</div>
                                  : this.props.typeTwoName === 'float' || this.props.typeTwoName === 'double'
                                    ?
                                    <div className="Indent-1"> {this.props.methodName}(2.0);</div>
                                    : this.props.typeTwoName === 'boolean'
                                      ?
                                      <div className="Indent-1"> {this.props.methodName}(true);</div>
                                      : this.props.typeTwoName === 'String'
                                        ?
                                        <div className="Indent-1"> {this.props.methodName}("two");</div>
                                        :
                                        <div className="Indent-1"> {this.props.methodName}(new {" "}
                                          {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(5));</div>
                                }
                                <div className="Indent-0"> {RIGHT_CURLY}</div>
                                <div className="Indent-0"> void {this.props.methodName}({this.props.typeOneName} s){LEFT_CURLY}</div>
                                <div className="Indent-1"> println(s + 's');</div>
                                <div className="Indent-0"> {RIGHT_CURLY}</div>
                              </React.Fragment>

                              : this.props.typeOneName === 'boolean'
                                ?
                                <React.Fragment>
                                  <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
                                  {this.props.typeTwoName === 'int' || this.props.typeTwoName === 'long' ||
                                    this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte'
                                    ?
                                    <div className="Indent-1"> {this.props.methodName}(2);</div>
                                    : this.props.typeTwoName === 'float' || this.props.typeTwoName === 'double'
                                      ?
                                      <div className="Indent-1"> {this.props.methodName}(2.0);</div>
                                      : this.props.typeTwoName === 'char'
                                        ?
                                        <div className="Indent-1"> {this.props.methodName}('s');</div>
                                        : this.props.typeTwoName === 'String'
                                          ?
                                          <div className="Indent-1"> {this.props.methodName}("two");</div>
                                          :
                                          <div className="Indent-1"> {this.props.methodName}(new {" "}
                                            {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(5));</div>
                                  }
                                  <div className="Indent-0"> {RIGHT_CURLY}</div>
                                  <div className="Indent-0"> void {this.props.methodName}({this.props.typeOneName} s){LEFT_CURLY}</div>
                                  <div className="Indent-1"> println(!s);</div>
                                  <div className="Indent-0"> {RIGHT_CURLY}</div>
                                </React.Fragment>

                                : this.props.typeOneName === 'float' || this.props.typeOneName === 'double'
                                  ?
                                  <React.Fragment>
                                    <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
                                    {this.props.typeTwoName === 'boolean'
                                      ?
                                      <div className="Indent-1"> {this.props.methodName}(true);</div>
                                      : this.props.typeTwoName === 'char'
                                        ?
                                        <div className="Indent-1"> {this.props.methodName}('s');</div>
                                        : this.props.typeTwoName === 'int' || this.props.typeTwoName === 'long' ||
                                          this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte'
                                          ?
                                          <div className="Indent-1"> {this.props.methodName}(2);</div>
                                          :
                                          <div className="Indent-1"> {this.props.methodName}(new {" "}
                                            {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(5));</div>
                                    }
                                    <div className="Indent-0"> {RIGHT_CURLY}</div>
                                    <div className="Indent-0"> void {this.props.methodName}({this.props.typeOneName} s){LEFT_CURLY}</div>
                                    <div className="Indent-1"> println(s + 1.0);</div>
                                    <div className="Indent-0"> {RIGHT_CURLY}</div>
                                  </React.Fragment>

                                  : this.props.typeOneName === 'long' || this.props.typeOneName === 'short' ||
                                    this.props.typeOneName === 'byte' || this.props.typeOneName === 'int'
                                    ?
                                    <React.Fragment>
                                      <div className="Indent-0"> {this.props.methodTypeName} {this.props.varName}; </div>
                                      <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
                                      <div className="Indent-1"> ... </div>
                                      {this.props.typeTwoName === 'String'
                                        ?
                                        <div className="Indent-1"> {this.props.varName} = {this.props.methodName}("two");</div>
                                        : this.props.typeTwoName === 'char'
                                          ?
                                          <div className="Indent-1"> {this.props.varName} = {this.props.methodName}('s');</div>
                                          : this.props.typeTwoName === 'boolean'
                                            ?
                                            <div className="Indent-1"> {this.props.varName} = {this.props.methodName}(true);</div>
                                            : this.props.typeTwoName === 'float' || this.props.typeTwoName === 'double'
                                              ?
                                              <div className="Indent-1"> {this.props.varName} = {this.props.methodName}(2.0);</div>
                                              :
                                              <div className="Indent-1"> {this.props.varName} = {this.props.methodName}(new {" "}
                                                {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(5));</div>
                                      }
                                      <div className="Indent-0"> {RIGHT_CURLY}</div>
                                      <div className="Indent-0"> {this.props.methodTypeName} {this.props.methodName}({this.props.typeOneName} s){LEFT_CURLY}</div>
                                      <div className="Indent-1">  ... </div>
                                      {this.props.methodTypeName === 'String'
                                        ?
                                        <React.Fragment>
                                          <div className="Indent-1"> {this.props.methodTypeName} str = ...;</div>
                                          <div className="Indent-1"> return str;</div>
                                        </React.Fragment>
                                        : this.props.methodTypeName === 'char'
                                          ?
                                          <React.Fragment>
                                            <div className="Indent-1"> {this.props.methodTypeName} c = ...;</div>
                                            <div className="Indent-1"> return c;</div>
                                          </React.Fragment>
                                          : this.props.methodTypeName === 'boolean'
                                            ?
                                            <div className="Indent-1"> return true;</div>
                                            : this.props.methodTypeName === 'float' || this.props.methodTypeName === 'double'
                                              ?
                                              <React.Fragment>
                                                <div className="Indent-1"> {this.props.methodTypeName} n = ...;</div>
                                                <div className="Indent-1"> return n;</div>
                                              </React.Fragment>
                                              : this.props.methodTypeName === 'int' || this.props.methodTypeName === 'short' ||
                                                this.props.methodTypeName === 'long' || this.props.methodTypeName === 'byte'
                                                ?
                                                <React.Fragment>
                                                  <div className="Indent-1"> {this.props.methodTypeName} n = ...;</div>
                                                  <div className="Indent-1"> return n;</div>
                                                </React.Fragment>
                                                :
                                                <div className="Indent-1"> </div>
                                      }
                                      <div className="Indent-0"> {RIGHT_CURLY}</div>
                                    </React.Fragment>

                                    :
                                    <React.Fragment>
                                      <div className="Indent-0"> class {this.props.typeOneName.slice(0, 1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}{"{"}  </div>
                                      <div className="Indent-1"> int a; </div>
                                      <div className="Indent-1"> {this.props.typeOneName.slice(0, 1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}(int a){"{"} </div>
                                      <div className="Indent-2"> this.a = a; </div>
                                      <div className="Indent-1"> {"}"} </div>
                                      <div className="Indent-0"> {"}"} </div>
                                      <div className="Indent-0"> void setup(){LEFT_CURLY} </div>
                                      {this.props.typeTwoName === 'String'
                                        ?
                                        <div className="Indent-1"> {this.props.methodName}("two");</div>
                                        : this.props.typeTwoName === 'char'
                                          ?
                                          <div className="Indent-1"> {this.props.methodName}('s');</div>
                                          : this.props.typeTwoName === 'boolean'
                                            ?
                                            <div className="Indent-1"> {this.props.methodName}(true);</div>
                                            : this.props.typeTwoName === 'float' || this.props.typeTwoName === 'double'
                                              ?
                                              <div className="Indent-1"> {this.props.methodName}(2.0);</div>
                                              : this.props.typeTwoName === 'int' || this.props.typeTwoName === 'byte' ||
                                                this.props.typeTwoName === 'short' || this.props.typeTwoName === 'long'
                                                ?
                                                <div className="Indent-1"> {this.props.methodName}(2);</div>
                                                :
                                                <div className="Indent-1"> {this.props.methodName}(new {" "}
                                                  {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(5));</div>
                                      }
                                      <div className="Indent-0"> {RIGHT_CURLY}</div>
                                      <div className="Indent-0"> void {this.props.methodName}
                                    ({this.props.typeOneName.slice(0, 1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)} s){LEFT_CURLY}</div>
                                      <div className="Indent-1"> println(s.a);</div>
                                      <div className="Indent-0"> {RIGHT_CURLY}</div>
                                    </React.Fragment>
                          }
                        </div>
                      </div>

                      {/** B1S2C1 */}
                      <div className="CodeContainer">
                        <div className="GreenCode">
                          {this.props.typeOneName === 'String' || this.props.typeOneName === 'char' ||
                            this.props.typeOneName === 'short' || this.props.typeOneName === 'byte' ||
                            this.props.typeOneName === 'long' || this.props.typeOneName === 'float' ||
                            this.props.typeOneName === 'double' || this.props.typeOneName === 'boolean' ||
                            this.props.typeOneName === 'int'
                            ? this.props.typeTwoName === 'String' || this.props.typeTwoName === 'char' ||
                              this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte' ||
                              this.props.typeTwoName === 'long' || this.props.typeTwoName === 'float' ||
                              this.props.typeTwoName === 'double' || this.props.typeTwoName === 'boolean' ||
                              this.props.typeTwoName === 'int'
                              ?
                              " "
                              :
                              <React.Fragment>
                                <div className="Indent-0"> class {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}{"{"}  </div>
                                <div className="Indent-1"> int a; </div>
                                <div className="Indent-1"> {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(int a){"{"} </div>
                                <div className="Indent-2"> this.a = a; </div>
                                <div className="Indent-1"> {"}"} </div>
                                <div className="Indent-0"> {"}"} </div>
                              </React.Fragment>

                            : this.props.typeTwoName === 'String' || this.props.typeTwoName === 'char' ||
                              this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte' ||
                              this.props.typeTwoName === 'long' || this.props.typeTwoName === 'float' || this.props.typeTwoName === 'double' ||
                              this.props.typeTwoName === 'boolean' || this.props.typeTwoName === 'int'
                              ?
                              " "
                              :
                              <React.Fragment>
                                <div className="Indent-0"> class {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}{"{"}  </div>
                                <div className="Indent-1"> int b; </div>
                                <div className="Indent-1"> {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(int b){"{"} </div>
                                <div className="Indent-2"> this.b = b; </div>
                                <div className="Indent-1"> {"}"} </div>
                                <div className="Indent-0"> {"}"} </div>
                              </React.Fragment>
                          }

                          <div className="Indent-0">{this.props.methodTypeName} {this.props.varName}; </div>
                          <div className="Indent-0">void setup() {LEFT_CURLY}</div>
                          <div className="Indent-1"> ... </div>
                          {this.props.typeOneName === 'String' || this.props.typeOneName === 'char' ||
                            this.props.typeOneName === 'short' || this.props.typeOneName === 'byte' ||
                            this.props.typeOneName === 'long' || this.props.typeOneName === 'int' || this.props.typeOneName === 'double' ||
                            this.props.typeOneName === 'boolean' || this.props.typeOneName === 'float'
                            ? this.props.typeTwoName === 'String'
                              ?
                              <div className="Indent-1"> {this.props.varName} = {this.props.methodName}("two");</div>
                              : this.props.typeTwoName === 'char'
                                ?
                                <div className="Indent-1"> {this.props.varName} = {this.props.methodName}('s');</div>
                                : this.props.typeTwoName === 'boolean'
                                  ?
                                  <div className="Indent-1"> {this.props.varName} = {this.props.methodName}(true);</div>
                                  : this.props.typeTwoName === 'long' || this.props.typeTwoName === 'int' ||
                                    this.props.typeTwoName === 'byte' || this.props.typeTwoName === 'short'
                                    ?
                                    <div className="Indent-1"> {this.props.varName} = {this.props.methodName}(2);</div>
                                    : this.props.typeTwoName === 'double' || this.props.typeTwoName === 'float'
                                      ?
                                      <div className="Indent-1"> {this.props.varName} = {this.props.methodName}(2.0);</div>
                                      :
                                      <div className="Indent-1"> {this.props.varName} = {this.props.methodName}(new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(5));</div>

                            : this.props.typeTwoName === 'String'
                              ?
                              <div className="Indent-1"> {this.props.varName} = {this.props.methodName}("two");</div>
                              : this.props.typeTwoName === 'char'
                                ?
                                <div className="Indent-1"> {this.props.varName} = {this.props.methodName}('s');</div>
                                : this.props.typeTwoName === 'boolean'
                                  ?
                                  <div className="Indent-1"> {this.props.varName} = {this.props.methodName}(true);</div>
                                  : this.props.typeTwoName === 'long' || this.props.typeTwoName === 'int' ||
                                    this.props.typeTwoName === 'byte' || this.props.typeTwoName === 'short'
                                    ?
                                    <div className="Indent-1"> {this.props.varName} = {this.props.methodName}(2);</div>
                                    : this.props.typeTwoName === 'double' || this.props.typeTwoName === 'float'
                                      ?
                                      <div className="Indent-1"> {this.props.varName} = {this.props.methodName}(2.0);</div>
                                      :
                                      <div className="Indent-1"> {this.props.varName} = {this.props.methodName}(new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(5));</div>
                          }
                          <div className="Indent-0">{RIGHT_CURLY}</div>
                          {this.props.typeOneName === 'String' || this.props.typeOneName === 'char' ||
                            this.props.typeOneName === 'short' || this.props.typeOneName === 'byte' ||
                            this.props.typeOneName === 'long' || this.props.typeOneName === 'int' || this.props.typeOneName === 'double' ||
                            this.props.typeOneName === 'boolean' || this.props.typeOneName === 'float'
                            ? this.props.typeTwoName === 'String' || this.props.typeTwoName === 'char' ||
                              this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte' ||
                              this.props.typeTwoName === 'long' || this.props.typeTwoName === 'int' || this.props.typeTwoName === 'double' ||
                              this.props.typeTwoName === 'boolean' || this.props.typeTwoName === 'float'
                              ?
                              <div className="Indent-0"> {this.props.methodTypeName} {this.props.methodName}({this.props.typeTwoName} s){LEFT_CURLY}</div>
                              :
                              <div className="Indent-0"> {this.props.methodTypeName} {this.props.methodName}({this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)} s){LEFT_CURLY}</div>

                            : this.props.typeTwoName === 'String' || this.props.typeTwoName === 'char' ||
                              this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte' ||
                              this.props.typeTwoName === 'long' || this.props.typeTwoName === 'int' ||
                              this.props.typeTwoName === 'boolean' || this.props.typeTwoName === 'float' ||
                              this.props.typeTwoName === 'double'
                              ?
                              <div className="Indent-0"> {this.props.methodTypeName} {this.props.methodName}({this.props.typeTwoName} s){LEFT_CURLY}</div>
                              :
                              <div className="Indent-0"> {this.props.methodTypeName} {this.props.methodName}({this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)} s){LEFT_CURLY}</div>
                          }

                          <div className="Indent-1">  ... </div>
                          {this.props.methodTypeName === 'String'
                            ?
                            <React.Fragment>
                              <div className="Indent-1"> {this.props.methodTypeName} str = ...;</div>
                              <div className="Indent-1"> return str;</div>
                            </React.Fragment>
                            : this.props.methodTypeName === 'char'
                              ?
                              <React.Fragment>
                                <div className="Indent-1"> {this.props.methodTypeName} c = ...;</div>
                                <div className="Indent-1"> return c;</div>
                              </React.Fragment>
                              : this.props.methodTypeName === 'boolean'
                                ?
                                <div className="Indent-1"> return true;</div>
                                : this.props.methodTypeName === 'float' || this.props.methodTypeName === 'double'
                                  ?
                                  <React.Fragment>
                                    <div className="Indent-1"> {this.props.methodTypeName} n = ...;</div>
                                    <div className="Indent-1"> return n;</div>
                                  </React.Fragment>
                                  : this.props.methodTypeName === 'int' || this.props.methodTypeName === 'short' ||
                                    this.props.methodTypeName === 'long' || this.props.methodTypeName === 'byte'
                                    ?
                                    <React.Fragment>
                                      <div className="Indent-1"> {this.props.methodTypeName} n = ...;</div>
                                      <div className="Indent-1"> return n;</div>
                                    </React.Fragment>
                                    :
                                    <div className="Indent-1"> </div>
                          }
                          <div className="Indent-0">{RIGHT_CURLY}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/** B2 */}
          <div className="Tile">
            <div className="ErrorTile" onClick={() => this.openStrategyTileBoxOnly(2)}>
              <div className="ErrorMessage">
                {this.props.typeOneName === 'String' || this.props.typeOneName === 'char' ||
                  this.props.typeOneName === 'short' || this.props.typeOneName === 'byte' ||
                  this.props.typeOneName === 'long' || this.props.typeOneName === 'float' ||
                  this.props.typeOneName === 'double' || this.props.typeOneName === 'boolean' ||
                  this.props.typeOneName === 'int'
                  ?
                  <React.Fragment>
                    <h4>2: You may have used the wrong number of parameters for the method{" "}
                      <p className="InputValue">{this.props.methodName}({this.props.typeOneName})</p> </h4>
                  </React.Fragment>
                  :
                  <React.Fragment>
                    <h4>2: You may have used the wrong number of parameters for the method{" "}
                      <p className="InputValue">{this.props.methodName}
                    ({this.props.typeOneName.slice(0, 1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)})</p> </h4>
                  </React.Fragment>
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

            {/** B2S1 */}
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
                        {this.props.typeOneName === 'String' || this.props.typeOneName === 'char' ||
                          this.props.typeOneName === 'short' || this.props.typeOneName === 'byte' ||
                          this.props.typeOneName === 'long' || this.props.typeOneName === 'float' ||
                          this.props.typeOneName === 'double' || this.props.typeOneName === 'boolean' ||
                          this.props.typeOneName === 'int'
                          ?
                          <React.Fragment>
                            Suggestion 1: Change the number of parameters to the expected amount when calling{" "}
                            <p className="InputValue">{this.props.methodName}({this.props.typeOneName})</p>
                          </React.Fragment>
                          :
                          <React.Fragment>
                            Suggestion 1: Change the number of parameters to the expected amount when calling{" "}
                            <p className="InputValue">{this.props.methodName}
                          ({this.props.typeOneName.slice(0, 1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)})</p>
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

                  {/** B2S1R1 */}
                  {this.state.openCode21 && (
                    <div className="CodeExample">
                      <div className="CodeContainer">
                        <div className="RedCode">
                          {this.props.typeOneName === 'String'
                            ?
                            <React.Fragment>
                              <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
                              {this.props.typeTwoName === 'int' || this.props.typeTwoName === 'long' ||
                                this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte'
                                ?
                                <div className="Indent-1"> {this.props.methodName}(1, 2, 3);</div>
                                : this.props.typeTwoName === 'float' || this.props.typeTwoName === 'double'
                                  ?
                                  <div className="Indent-1"> {this.props.methodName}(1.0, 2.0, 3.0);</div>
                                  : this.props.typeTwoName === 'boolean'
                                    ?
                                    <div className="Indent-1"> {this.props.methodName}(true, false, true);</div>
                                    : this.props.typeTwoName === 'char'
                                      ?
                                      <div className="Indent-1"> {this.props.methodName}('a', 'b', 'c');</div>
                                      :
                                      <div className="Indent-1"> {this.props.methodName}
                                  (new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(1),{" "}
                                   new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(2),{" "}
                                   new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(3));</div>
                              }
                              <div className="Indent-0"> {RIGHT_CURLY}</div>
                              <div className="Indent-0"> void {this.props.methodName}({this.props.typeOneName} s){LEFT_CURLY}</div>
                              <div className="Indent-1"> println(s + "two");</div>
                              <div className="Indent-0"> {RIGHT_CURLY}</div>
                            </React.Fragment>

                            : this.props.typeOneName === 'char'
                              ?
                              <React.Fragment>
                                <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
                                {this.props.typeTwoName === 'int' || this.props.typeTwoName === 'long' ||
                                  this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte'
                                  ?
                                  <div className="Indent-1"> {this.props.methodName}(1, 2, 3);</div>
                                  : this.props.typeTwoName === 'float' || this.props.typeTwoName === 'double'
                                    ?
                                    <div className="Indent-1"> {this.props.methodName}(1.0, 2.0, 3.0);</div>
                                    : this.props.typeTwoName === 'boolean'
                                      ?
                                      <div className="Indent-1"> {this.props.methodName}(true, false, true);</div>
                                      : this.props.typeTwoName === 'String'
                                        ?
                                        <div className="Indent-1"> {this.props.methodName}("one", "two", "three");</div>
                                        :
                                        <div className="Indent-1"> {this.props.methodName}
                                    (new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(1),{" "}
                                     new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(2),{" "}
                                     new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(3));</div>
                                }
                                <div className="Indent-0"> {RIGHT_CURLY}</div>
                                <div className="Indent-0"> void {this.props.methodName}({this.props.typeOneName} s){LEFT_CURLY}</div>
                                <div className="Indent-1"> println(s + 's');</div>
                                <div className="Indent-0"> {RIGHT_CURLY}</div>
                              </React.Fragment>

                              : this.props.typeOneName === 'boolean'
                                ?
                                <React.Fragment>
                                  <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
                                  {this.props.typeTwoName === 'int' || this.props.typeTwoName === 'long' ||
                                    this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte'
                                    ?
                                    <div className="Indent-1"> {this.props.methodName}(1, 2, 3);</div>
                                    : this.props.typeTwoName === 'float' || this.props.typeTwoName === 'double'
                                      ?
                                      <div className="Indent-1"> {this.props.methodName}(1.0, 2.0, 3.0);</div>
                                      : this.props.typeTwoName === 'char'
                                        ?
                                        <div className="Indent-1"> {this.props.methodName}('a', 'b', 'c');</div>
                                        : this.props.typeTwoName === 'String'
                                          ?
                                          <div className="Indent-1"> {this.props.methodName}("one", "two", "three");</div>
                                          :
                                          <div className="Indent-1"> {this.props.methodName}
                                      (new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(1),{" "}
                                       new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(2),{" "}
                                       new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(3));</div>
                                  }
                                  <div className="Indent-0"> {RIGHT_CURLY}</div>
                                  <div className="Indent-0"> void {this.props.methodName}({this.props.typeOneName} s){LEFT_CURLY}</div>
                                  <div className="Indent-1"> println(!s);</div>
                                  <div className="Indent-0"> {RIGHT_CURLY}</div>
                                </React.Fragment>

                                : this.props.typeOneName === 'float' || this.props.typeOneName === 'double'
                                  ?
                                  <React.Fragment>
                                    <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
                                    {this.props.typeTwoName === 'boolean'
                                      ?
                                      <div className="Indent-1"> {this.props.methodName}(true, false, true);</div>
                                      : this.props.typeTwoName === 'char'
                                        ?
                                        <div className="Indent-1"> {this.props.methodName}('a', 'b', 'c');</div>
                                        : this.props.typeTwoName === 'String'
                                          ?
                                          <div className="Indent-1"> {this.props.methodName}("one", "two", "three");</div>
                                          :
                                          <div className="Indent-1"> {this.props.methodName}
                                        (new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(1),{" "}
                                         new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(2),{" "}
                                         new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(3));</div>
                                    }
                                    <div className="Indent-0"> {RIGHT_CURLY}</div>
                                    <div className="Indent-0"> void {this.props.methodName}({this.props.typeOneName} s){LEFT_CURLY}</div>
                                    <div className="Indent-1"> println(s + 1.0);</div>
                                    <div className="Indent-0"> {RIGHT_CURLY}</div>
                                  </React.Fragment>

                                  : this.props.typeOneName === 'long' || this.props.typeOneName === 'short' ||
                                    this.props.typeOneName === 'byte' || this.props.typeOneName === 'int'
                                    ?
                                    <React.Fragment>
                                      <div className="Indent-0"> {this.props.methodTypeName} {this.props.varName}; </div>
                                      <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
                                      <div className="Indent-1"> ... </div>
                                      {this.props.typeTwoName === 'String'
                                        ?
                                        <div className="Indent-1"> {this.props.varName} = {this.props.methodName}("one", "two", "three");</div>
                                        : this.props.typeTwoName === 'char'
                                          ?
                                          <div className="Indent-1"> {this.props.varName} = {this.props.methodName}('a', 'b', 'c');</div>
                                          : this.props.typeTwoName === 'boolean'
                                            ?
                                            <div className="Indent-1"> {this.props.varName} = {this.props.methodName}(true, false, true);</div>
                                            : this.props.typeTwoName === 'float'
                                              ?
                                              <div className="Indent-1"> {this.props.varName} = {this.props.methodName}(1.0, 2.0, 3.0);</div>
                                              :
                                              <div className="Indent-1"> {this.props.varName} = {this.props.methodName}
                                        (new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(1),{" "}
                                         new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(2),{" "}
                                         new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(3));</div>
                                      }
                                      <div className="Indent-0"> {RIGHT_CURLY}</div>
                                      <div className="Indent-0"> {this.props.methodTypeName} {this.props.methodName}({this.props.typeOneName} s){LEFT_CURLY}</div>
                                      <div className="Indent-1">  ... </div>
                                      {this.props.methodTypeName === 'String'
                                        ?
                                        <React.Fragment>
                                          <div className="Indent-1"> {this.props.methodTypeName} str = ...;</div>
                                          <div className="Indent-1"> return str;</div>
                                        </React.Fragment>
                                        : this.props.methodTypeName === 'char'
                                          ?
                                          <React.Fragment>
                                            <div className="Indent-1"> {this.props.methodTypeName} c = ...;</div>
                                            <div className="Indent-1"> return c;</div>
                                          </React.Fragment>
                                          : this.props.methodTypeName === 'boolean'
                                            ?
                                            <div className="Indent-1"> return true;</div>
                                            : this.props.methodTypeName === 'float' || this.props.methodTypeName === 'double'
                                              ?
                                              <React.Fragment>
                                                <div className="Indent-1"> {this.props.methodTypeName} n = ...;</div>
                                                <div className="Indent-1"> return n;</div>
                                              </React.Fragment>
                                              : this.props.methodTypeName === 'int' || this.props.methodTypeName === 'short' ||
                                                this.props.methodTypeName === 'long' || this.props.methodTypeName === 'byte'
                                                ?
                                                <React.Fragment>
                                                  <div className="Indent-1"> {this.props.methodTypeName} n = ...;</div>
                                                  <div className="Indent-1"> return n;</div>
                                                </React.Fragment>
                                                :
                                                <div className="Indent-1"> </div>
                                      }
                                      <div className="Indent-0"> {RIGHT_CURLY}</div>
                                    </React.Fragment>

                                    :
                                    <React.Fragment>
                                      <div className="Indent-0"> class {this.props.typeOneName.slice(0, 1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}{"{"}  </div>
                                      <div className="Indent-1"> int a; </div>
                                      <div className="Indent-1"> {this.props.typeOneName.slice(0, 1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}(int a){"{"} </div>
                                      <div className="Indent-2"> this.a = a; </div>
                                      <div className="Indent-1"> {"}"} </div>
                                      <div className="Indent-0"> {"}"} </div>
                                      <div className="Indent-0"> void setup(){LEFT_CURLY} </div>
                                      {this.props.typeTwoName === 'String'
                                        ?
                                        <div className="Indent-1"> {this.props.methodName}("one", "two", "three");</div>
                                        : this.props.typeTwoName === 'char'
                                          ?
                                          <div className="Indent-1"> {this.props.methodName}('a', 'b', 'c');</div>
                                          : this.props.typeTwoName === 'boolean'
                                            ?
                                            <div className="Indent-1"> {this.props.methodName}(true, false, true);</div>
                                            : this.props.typeTwoName === 'float' || this.props.typeTwoName === 'double'
                                              ?
                                              <div className="Indent-1"> {this.props.methodName}(1.0, 2.0, 3.0);</div>
                                              : this.props.typeTwoName === 'int' || this.props.typeTwoName === 'byte' ||
                                                this.props.typeTwoName === 'long' || this.props.typeTwoName === 'short'
                                                ?
                                                <div className="Indent-1"> {this.props.methodName}(1, 2, 3);</div>
                                                :
                                                <div className="Indent-1"> {this.props.methodName}
                                            (new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(1),{" "}
                                             new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(2),{" "}
                                             new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(3));</div>
                                      }
                                      <div className="Indent-0"> {RIGHT_CURLY}</div>
                                      <div className="Indent-0"> void {this.props.methodName}
                                    ({this.props.typeOneName.slice(0, 1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)} s){LEFT_CURLY}</div>
                                      <div className="Indent-1"> println(s.a);</div>
                                      <div className="Indent-0"> {RIGHT_CURLY}</div>
                                    </React.Fragment>
                          }
                        </div>
                      </div>

                      {/** B2S1C1 */}
                      <div className="CodeContainer">
                        <div className="GreenCode">
                          <div className="Indent-0"> {this.props.methodTypeName} {this.props.varName}; </div>
                          <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
                          <div className="Indent-1"> ... </div>
                          {this.props.typeOneName === 'String'
                            ?
                            <div className="Indent-1"> {this.props.varName} = {this.props.methodName}("two");</div>
                            : this.props.typeOneName === 'char'
                              ?
                              <div className="Indent-1"> {this.props.varName} = {this.props.methodName}('s');</div>
                              : this.props.typeOneName === 'boolean'
                                ?
                                <div className="Indent-1"> {this.props.varName} = {this.props.methodName}(true);</div>
                                : this.props.typeOneName === 'double' || this.props.typeOneName === 'float'
                                  ?
                                  <div className="Indent-1"> {this.props.varName} = {this.props.methodName}(2.0);</div>
                                  : this.props.typeOneName === 'int' || this.props.typeOneName === 'short' ||
                                    this.props.typeOneName === 'long' || this.props.typeOneName === 'byte'
                                    ?
                                    <div className="Indent-1"> {this.props.varName} = {this.props.methodName}(2);</div>
                                    :
                                    <div className="Indent-1"> {this.props.varName} = {this.props.methodName}(new {" "}
                                      {this.props.typeOneName.slice(0, 1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}(5));</div>
                          }
                          <div className="Indent-0"> {RIGHT_CURLY}</div>
                          {this.props.typeOneName === 'String' || this.props.typeOneName === 'char' ||
                            this.props.typeOneName === 'short' || this.props.typeOneName === 'byte' ||
                            this.props.typeOneName === 'long' || this.props.typeOneName === 'float' ||
                            this.props.typeOneName === 'double' || this.props.typeOneName === 'boolean' ||
                            this.props.typeOneName === 'int'
                            ?
                            <div className="Indent-0"> {this.props.methodTypeName} {this.props.methodName}({this.props.typeOneName} s){LEFT_CURLY}</div>
                            :
                            <div className="Indent-0"> {this.props.methodTypeName} {this.props.methodName}(
                              {this.props.typeOneName.slice(0, 1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)} s){LEFT_CURLY}</div>
                          }
                          <div className="Indent-1">  ... </div>
                          {this.props.methodTypeName === 'String'
                            ?
                            <React.Fragment>
                              <div className="Indent-1"> {this.props.methodTypeName} str = ...;</div>
                              <div className="Indent-1"> return str;</div>
                            </React.Fragment>
                            : this.props.methodTypeName === 'char'
                              ?
                              <React.Fragment>
                                <div className="Indent-1"> {this.props.methodTypeName} c = ...;</div>
                                <div className="Indent-1"> return c;</div>
                              </React.Fragment>
                              : this.props.methodTypeName === 'boolean'
                                ?
                                <div className="Indent-1"> return true;</div>
                                : this.props.methodTypeName === 'float' || this.props.methodTypeName === 'double'
                                  ?
                                  <React.Fragment>
                                    <div className="Indent-1"> {this.props.methodTypeName} n = ...;</div>
                                    <div className="Indent-1"> return n;</div>
                                  </React.Fragment>
                                  : this.props.methodTypeName === 'int' || this.props.methodTypeName === 'short' ||
                                    this.props.methodTypeName === 'long' || this.props.methodTypeName === 'byte'
                                    ?
                                    <React.Fragment>
                                      <div className="Indent-1"> {this.props.methodTypeName} n = ...;</div>
                                      <div className="Indent-1"> return n;</div>
                                    </React.Fragment>
                                    :
                                    <div className="Indent-1"> </div>
                          }
                          <div className="Indent-0"> {RIGHT_CURLY}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/** B2S2 */}
                <div
                  className="StrategyTile"
                  onClick={() => this.openCodeExampleBoxOnly(22)}
                >
                  <div className="StrategyInstruction">
                    <div className="StrategyMessage">
                      <BlueCheckbox
                        value="box1"
                        checked={this.state.checked22}
                        onChange={() => this.changeChecked(22)}
                      />
                      <div className="Suggestion">
                        {this.props.typeOneName === 'String' || this.props.typeOneName === 'char' ||
                          this.props.typeOneName === 'short' || this.props.typeOneName === 'byte' ||
                          this.props.typeOneName === 'long' || this.props.typeOneName === 'float' || this.props.typeOneName === 'double' ||
                          this.props.typeOneName === 'boolean' || this.props.typeOneName === 'int'
                          ?
                          <React.Fragment>
                            Suggestion 2: Change the number of parameters in the {" "}
                            <p className="InputValue">{this.props.methodName}({this.props.typeOneName})</p> method
                          declaration
                          </React.Fragment>
                          :
                          <React.Fragment>
                            Suggestion 2: Change the number of parameters in the {" "}
                            <p className="InputValue">{this.props.methodName}
                          ({this.props.typeOneName.slice(0, 1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)})</p> method declaration
                          </React.Fragment>
                        }
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

                  {/** B2S2R1 */}
                  {this.state.openCode22 && (
                    <div className="CodeExample">
                      <div className="CodeContainer">
                        <div className="RedCode">
                          {this.props.typeOneName === 'String'
                            ?
                            <React.Fragment>
                              <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
                              {this.props.typeTwoName === 'int' || this.props.typeTwoName === 'long' ||
                                this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte'
                                ?
                                <div className="Indent-1"> {this.props.methodName}(1, 2, 3);</div>
                                : this.props.typeTwoName === 'float' || this.props.typeTwoName === 'double'
                                  ?
                                  <div className="Indent-1"> {this.props.methodName}(1.0, 2.0, 3.0);</div>
                                  : this.props.typeTwoName === 'boolean'
                                    ?
                                    <div className="Indent-1"> {this.props.methodName}(true, false, true);</div>
                                    : this.props.typeTwoName === 'char'
                                      ?
                                      <div className="Indent-1"> {this.props.methodName}('a', 'b', 'c');</div>
                                      :
                                      <div className="Indent-1"> {this.props.methodName}
                                  (new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(1),{" "}
                                   new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(2),{" "}
                                   new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(3));</div>
                              }
                              <div className="Indent-0"> {RIGHT_CURLY}</div>
                              <div className="Indent-0"> void {this.props.methodName}({this.props.typeOneName} s){LEFT_CURLY}</div>
                              <div className="Indent-1"> println(s + "two");</div>
                              <div className="Indent-0"> {RIGHT_CURLY}</div>
                            </React.Fragment>

                            : this.props.typeOneName === 'char'
                              ?
                              <React.Fragment>
                                <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
                                {this.props.typeTwoName === 'int' || this.props.typeTwoName === 'long' ||
                                  this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte'
                                  ?
                                  <div className="Indent-1"> {this.props.methodName}(1, 2, 3);</div>
                                  : this.props.typeTwoName === 'float' || this.props.typeTwoName === 'double'
                                    ?
                                    <div className="Indent-1"> {this.props.methodName}(1.0, 2.0, 3.0);</div>
                                    : this.props.typeTwoName === 'boolean'
                                      ?
                                      <div className="Indent-1"> {this.props.methodName}(true, false, true);</div>
                                      : this.props.typeTwoName === 'String'
                                        ?
                                        <div className="Indent-1"> {this.props.methodName}("one", "two", "three");</div>
                                        :
                                        <div className="Indent-1"> {this.props.methodName}
                                    (new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(1),{" "}
                                     new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(2),{" "}
                                     new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(3));</div>
                                }
                                <div className="Indent-0"> {RIGHT_CURLY}</div>
                                <div className="Indent-0"> void {this.props.methodName}({this.props.typeOneName} s){LEFT_CURLY}</div>
                                <div className="Indent-1"> println(s + 's');</div>
                                <div className="Indent-0"> {RIGHT_CURLY}</div>
                              </React.Fragment>

                              : this.props.typeOneName === 'boolean'
                                ?
                                <React.Fragment>
                                  <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
                                  {this.props.typeTwoName === 'int' || this.props.typeTwoName === 'long' ||
                                    this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte'
                                    ?
                                    <div className="Indent-1"> {this.props.methodName}(1, 2, 3);</div>
                                    : this.props.typeTwoName === 'float' || this.props.typeTwoName === 'double'
                                      ?
                                      <div className="Indent-1"> {this.props.methodName}(1.0, 2.0, 3.0);</div>
                                      : this.props.typeTwoName === 'char'
                                        ?
                                        <div className="Indent-1"> {this.props.methodName}('a', 'b', 'c');</div>
                                        : this.props.typeTwoName === 'String'
                                          ?
                                          <div className="Indent-1"> {this.props.methodName}("one", "two", "three");</div>
                                          :
                                          <div className="Indent-1"> {this.props.methodName}
                                      (new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(1),{" "}
                                       new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(2),{" "}
                                       new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(3));</div>
                                  }
                                  <div className="Indent-0"> {RIGHT_CURLY}</div>
                                  <div className="Indent-0"> void {this.props.methodName}({this.props.typeOneName} s){LEFT_CURLY}</div>
                                  <div className="Indent-1"> println(!s);</div>
                                  <div className="Indent-0"> {RIGHT_CURLY}</div>
                                </React.Fragment>

                                : this.props.typeOneName === 'float' || this.props.typeOneName === 'double'
                                  ?
                                  <React.Fragment>
                                    <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
                                    {this.props.typeTwoName === 'boolean'
                                      ?
                                      <div className="Indent-1"> {this.props.methodName}(true, false, true);</div>
                                      : this.props.typeTwoName === 'char'
                                        ?
                                        <div className="Indent-1"> {this.props.methodName}('a', 'b', 'c');</div>
                                        : this.props.typeTwoName === 'String'
                                          ?
                                          <div className="Indent-1"> {this.props.methodName}("one", "two", "three");</div>
                                          :
                                          <div className="Indent-1"> {this.props.methodName}
                                        (new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(1),{" "}
                                         new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(2),{" "}
                                         new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(3));</div>
                                    }
                                    <div className="Indent-0"> {RIGHT_CURLY}</div>
                                    <div className="Indent-0"> void {this.props.methodName}({this.props.typeOneName} s){LEFT_CURLY}</div>
                                    <div className="Indent-1"> println(s + 1.0);</div>
                                    <div className="Indent-0"> {RIGHT_CURLY}</div>
                                  </React.Fragment>

                                  : this.props.typeOneName === 'long' || this.props.typeOneName === 'short' ||
                                    this.props.typeOneName === 'byte' || this.props.typeOneName === 'int'
                                    ?
                                    <React.Fragment>
                                      <div className="Indent-0"> {this.props.methodTypeName} {this.props.varName}; </div>
                                      <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
                                      <div className="Indent-1"> ... </div>
                                      {this.props.typeTwoName === 'String'
                                        ?
                                        <div className="Indent-1"> {this.props.varName} = {this.props.methodName}("one", "two", "three");</div>
                                        : this.props.typeTwoName === 'char'
                                          ?
                                          <div className="Indent-1"> {this.props.varName} = {this.props.methodName}('a', 'b', 'c');</div>
                                          : this.props.typeTwoName === 'boolean'
                                            ?
                                            <div className="Indent-1"> {this.props.varName} = {this.props.methodName}(true, false, true);</div>
                                            : this.props.typeTwoName === 'float'
                                              ?
                                              <div className="Indent-1"> {this.props.varName} = {this.props.methodName}(1.0, 2.0, 3.0);</div>
                                              :
                                              <div className="Indent-1"> {this.props.varName} = {this.props.methodName}
                                        (new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(1),{" "}
                                         new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(2),{" "}
                                         new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(3));</div>
                                      }
                                      <div className="Indent-0"> {RIGHT_CURLY}</div>
                                      <div className="Indent-0"> {this.props.methodTypeName} {this.props.methodName}({this.props.typeOneName} s){LEFT_CURLY}</div>
                                      <div className="Indent-1">  ... </div>
                                      {this.props.methodTypeName === 'String'
                                        ?
                                        <React.Fragment>
                                          <div className="Indent-1"> {this.props.methodTypeName} str = ...;</div>
                                          <div className="Indent-1"> return str;</div>
                                        </React.Fragment>
                                        : this.props.methodTypeName === 'char'
                                          ?
                                          <React.Fragment>
                                            <div className="Indent-1"> {this.props.methodTypeName} c = ...;</div>
                                            <div className="Indent-1"> return c;</div>
                                          </React.Fragment>
                                          : this.props.methodTypeName === 'boolean'
                                            ?
                                            <div className="Indent-1"> return true;</div>
                                            : this.props.methodTypeName === 'float' || this.props.methodTypeName === 'double'
                                              ?
                                              <React.Fragment>
                                                <div className="Indent-1"> {this.props.methodTypeName} n = ...;</div>
                                                <div className="Indent-1"> return n;</div>
                                              </React.Fragment>
                                              : this.props.methodTypeName === 'int' || this.props.methodTypeName === 'short' ||
                                                this.props.methodTypeName === 'long' || this.props.methodTypeName === 'byte'
                                                ?
                                                <React.Fragment>
                                                  <div className="Indent-1"> {this.props.methodTypeName} n = ...;</div>
                                                  <div className="Indent-1"> return n;</div>
                                                </React.Fragment>
                                                :
                                                <div className="Indent-1"> </div>
                                      }
                                      <div className="Indent-0"> {RIGHT_CURLY}</div>
                                    </React.Fragment>

                                    :
                                    <React.Fragment>
                                      <div className="Indent-0"> class {this.props.typeOneName.slice(0, 1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}{"{"}  </div>
                                      <div className="Indent-1"> int a; </div>
                                      <div className="Indent-1"> {this.props.typeOneName.slice(0, 1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)}(int a){"{"} </div>
                                      <div className="Indent-2"> this.a = a; </div>
                                      <div className="Indent-1"> {"}"} </div>
                                      <div className="Indent-0"> {"}"} </div>
                                      <div className="Indent-0"> void setup(){LEFT_CURLY} </div>
                                      {this.props.typeTwoName === 'String'
                                        ?
                                        <div className="Indent-1"> {this.props.methodName}("one", "two", "three");</div>
                                        : this.props.typeTwoName === 'char'
                                          ?
                                          <div className="Indent-1"> {this.props.methodName}('a', 'b', 'c');</div>
                                          : this.props.typeTwoName === 'boolean'
                                            ?
                                            <div className="Indent-1"> {this.props.methodName}(true, false, true);</div>
                                            : this.props.typeTwoName === 'float' || this.props.typeTwoName === 'double'
                                              ?
                                              <div className="Indent-1"> {this.props.methodName}(1.0, 2.0, 3.0);</div>
                                              : this.props.typeTwoName === 'int' || this.props.typeTwoName === 'byte' ||
                                                this.props.typeTwoName === 'long' || this.props.typeTwoName === 'short'
                                                ?
                                                <div className="Indent-1"> {this.props.methodName}(1, 2, 3);</div>
                                                :
                                                <div className="Indent-1"> {this.props.methodName}
                                            (new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(1),{" "}
                                             new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(2),{" "}
                                             new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(3));</div>
                                      }
                                      <div className="Indent-0"> {RIGHT_CURLY}</div>
                                      <div className="Indent-0"> void {this.props.methodName}
                                    ({this.props.typeOneName.slice(0, 1).toUpperCase() + this.props.typeOneName.slice(1, this.props.typeOneName.length)} s){LEFT_CURLY}</div>
                                      <div className="Indent-1"> println(s.a);</div>
                                      <div className="Indent-0"> {RIGHT_CURLY}</div>
                                    </React.Fragment>
                          }
                        </div>
                      </div>

                      {/** B2S2C1 */}
                      <div className="CodeContainer">
                        <div className="GreenCode">
                          {this.props.typeOneName === 'String' || this.props.typeOneName === 'char' ||
                            this.props.typeOneName === 'short' || this.props.typeOneName === 'byte' ||
                            this.props.typeOneName === 'long' || this.props.typeOneName === 'float' ||
                            this.props.typeOneName === 'double' || this.props.typeOneName === 'boolean' ||
                            this.props.typeOneName === 'int'
                            ? this.props.typeTwoName === 'String' || this.props.typeTwoName === 'char' ||
                              this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte' ||
                              this.props.typeTwoName === 'long' || this.props.typeTwoName === 'float' ||
                              this.props.typeTwoName === 'double' || this.props.typeTwoName === 'boolean' ||
                              this.props.typeTwoName === 'int'
                              ?
                              " "
                              :
                              <React.Fragment>
                                <div className="Indent-0"> class {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}{"{"}  </div>
                                <div className="Indent-1"> int a; </div>
                                <div className="Indent-1"> {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(int a){"{"} </div>
                                <div className="Indent-2"> this.a = a; </div>
                                <div className="Indent-1"> {"}"} </div>
                                <div className="Indent-0"> {"}"} </div>
                              </React.Fragment>

                            : this.props.typeTwoName === 'String' || this.props.typeTwoName === 'char' ||
                              this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte' ||
                              this.props.typeTwoName === 'long' || this.props.typeTwoName === 'float' || this.props.typeTwoName === 'double' ||
                              this.props.typeTwoName === 'boolean' || this.props.typeTwoName === 'int'
                              ?
                              " "
                              :
                              <React.Fragment>
                                <div className="Indent-0"> class {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}{"{"}  </div>
                                <div className="Indent-1"> int b; </div>
                                <div className="Indent-1"> {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(int b){"{"} </div>
                                <div className="Indent-2"> this.b = b; </div>
                                <div className="Indent-1"> {"}"} </div>
                                <div className="Indent-0"> {"}"} </div>
                              </React.Fragment>
                          }
                          <div className="Indent-0"> {this.props.methodTypeName} {this.props.varName}; </div>
                          <div className="Indent-0"> void setup() {LEFT_CURLY}</div>
                          <div className="Indent-1"> ...</div>
                          {this.props.typeOneName === 'String' || this.props.typeOneName === 'char' ||
                            this.props.typeOneName === 'short' || this.props.typeOneName === 'byte' ||
                            this.props.typeOneName === 'long' || this.props.typeOneName === 'int' || this.props.typeOneName === 'double' ||
                            this.props.typeOneName === 'boolean' || this.props.typeOneName === 'float'
                            ? this.props.typeTwoName === 'String'
                              ?
                              <div className="Indent-1"> {this.props.varName} = {this.props.methodName}("1", "2", "3"); </div>
                              : this.props.typeTwoName === 'char'
                                ?
                                <div className="Indent-1"> {this.props.varName} = {this.props.methodName}('a', 'b', 'c');</div>
                                : this.props.typeTwoName === 'boolean'
                                  ?
                                  <div className="Indent-1"> {this.props.varName} = {this.props.methodName}(true, false, true);</div>
                                  : this.props.typeTwoName === 'long' || this.props.typeTwoName === 'int' ||
                                    this.props.typeTwoName === 'byte' || this.props.typeTwoName === 'short'
                                    ?
                                    <div className="Indent-1"> {this.props.varName} = {this.props.methodName}(1, 2, 3);</div>
                                    : this.props.typeTwoName === 'double' || this.props.typeTwoName === 'float'
                                      ?
                                      <div className="Indent-1"> {this.props.varName} = {this.props.methodName}(1.0, 2.0, 3.0);</div>
                                      :
                                      <div className="Indent-1"> {this.props.varName} = {this.props.methodName}
                                      (new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(1),{" "}
                                       new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(2),{" "}
                                       new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(3));
                                      </div>

                            : this.props.typeTwoName === 'String'
                              ?
                              <div className="Indent-1"> {this.props.methodTypeName} {this.props.varName} = {this.props.methodName}("1", "2", "3"); </div>
                              : this.props.typeTwoName === 'char'
                                ?
                                <div className="Indent-1"> {this.props.methodTypeName} {this.props.varName} = {this.props.methodName}('a', 'b', 'c');</div>
                                : this.props.typeTwoName === 'boolean'
                                  ?
                                  <div className="Indent-1"> {this.props.methodTypeName} {this.props.varName} = {this.props.methodName}(true, false, true);</div>
                                  : this.props.typeTwoName === 'long' || this.props.typeTwoName === 'int' ||
                                    this.props.typeTwoName === 'byte' || this.props.typeTwoName === 'short'
                                    ?
                                    <div className="Indent-1"> {this.props.methodTypeName} {this.props.varName} = {this.props.methodName}(1, 2, 3);</div>
                                    : this.props.typeTwoName === 'float' || this.props.typeTwoName === 'double'
                                      ?
                                      <div className="Indent-1"> {this.props.methodTypeName} {this.props.varName} = {this.props.methodName}(1.0, 2.0, 3.0);</div>
                                      :
                                      <div className="Indent-1"> {this.props.methodTypeName} {this.props.varName} = {this.props.methodName}
                                      (new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(1),{" "}
                                       new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(2),{" "}
                                       new {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)}(3));</div>
                          }

                          <div className="Indent-0">{RIGHT_CURLY}</div>
                          {this.props.typeOneName === 'String' || this.props.typeOneName === 'char' ||
                            this.props.typeOneName === 'short' || this.props.typeOneName === 'byte' ||
                            this.props.typeOneName === 'long' || this.props.typeOneName === 'int' || this.props.typeOneName === 'double' ||
                            this.props.typeOneName === 'boolean' || this.props.typeOneName === 'float'
                            ? this.props.typeTwoName === 'String' || this.props.typeTwoName === 'char' ||
                              this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte' ||
                              this.props.typeTwoName === 'long' || this.props.typeTwoName === 'int' || this.props.typeTwoName === 'double' ||
                              this.props.typeTwoName === 'boolean' || this.props.typeTwoName === 'float'
                              ?
                              <div className="Indent-0">
                                {this.props.methodTypeName} {this.props.methodName}({this.props.typeTwoName} s1, {this.props.typeTwoName} s2, {this.props.typeTwoName} s3)
                                {LEFT_CURLY}
                              </div>
                              :
                              <div className="Indent-0"> {this.props.methodTypeName} {this.props.methodName}
                              ({this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)} s1,{" "}
                                {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)} s2,{" "}
                                {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)} s3){LEFT_CURLY}</div>

                            : this.props.typeTwoName === 'String' || this.props.typeTwoName === 'char' ||
                              this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte' ||
                              this.props.typeTwoName === 'long' || this.props.typeTwoName === 'int' || this.props.typeTwoName === 'double' ||
                              this.props.typeTwoName === 'boolean' || this.props.typeTwoName === 'float'
                              ?
                              <div className="Indent-0">
                                {this.props.methodTypeName} {this.props.methodName}({this.props.typeTwoName} s1, {this.props.typeTwoName} s2, {this.props.typeTwoName} s3)
                                {LEFT_CURLY}
                              </div>
                              :
                              <div className="Indent-0"> {this.props.methodTypeName} {this.props.methodName}
                              ({this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)} s1,{" "}
                                {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)} s2,{" "}
                                {this.props.typeTwoName.slice(0, 1).toUpperCase() + this.props.typeTwoName.slice(1, this.props.typeTwoName.length)} s3){LEFT_CURLY}</div>
                          }

                          <div className="Indent-1">  ... </div>
                          {this.props.methodTypeName === 'String'
                            ?
                            <React.Fragment>
                              <div className="Indent-1"> {this.props.methodTypeName} str = ...;</div>
                              <div className="Indent-1"> return str;</div>
                            </React.Fragment>
                            : this.props.methodTypeName === 'char'
                              ?
                              <React.Fragment>
                                <div className="Indent-1"> {this.props.methodTypeName} c = ...;</div>
                                <div className="Indent-1"> return c;</div>
                              </React.Fragment>
                              : this.props.methodTypeName === 'boolean'
                                ?
                                <div className="Indent-1"> return true;</div>
                                : this.props.methodTypeName === 'float' || this.props.methodTypeName === 'double'
                                  ?
                                  <React.Fragment>
                                    <div className="Indent-1"> {this.props.methodTypeName} n = ...;</div>
                                    <div className="Indent-1"> return n;</div>
                                  </React.Fragment>
                                  : this.props.methodTypeName === 'int' || this.props.methodTypeName === 'short' ||
                                    this.props.methodTypeName === 'long' || this.props.methodTypeName === 'byte'
                                    ?
                                    <React.Fragment>
                                      <div className="Indent-1"> {this.props.methodTypeName} n = ...;</div>
                                      <div className="Indent-1"> return n;</div>
                                    </React.Fragment>
                                    :
                                    <div className="Indent-1"> </div>
                          }
                          <div className="Indent-0">{RIGHT_CURLY}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <ParameterMismatchResourceFooter />
        </div>
      </div>
    );
  }
}

export default ParameterMismatch;

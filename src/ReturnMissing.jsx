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

const LEFT_CURLY = "{";
const RIGHT_CURLY = "}";

class ReturnMissing extends React.Component {
  constructor(props) {
    super(props);
    this.openStrategyTile = this.openStrategyTile.bind(this);
    this.openCodeExample = this.openCodeExample.bind(this);
    this.changeChecked = this.changeChecked.bind(this);
    this.state = {
      openStrategy1: false,
      openStrategy2: false,
      openCode11: false,
      openCode21: false,
      checked11: false,
      checked21: false,
    };
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
              {this.props.typeName === 'String' || this.props.typeName === 'boolean' ||
                this.props.typeName === 'char' || this.props.typeName === 'float' ||
                this.props.typeName === 'double' || this.props.typeName === 'short' ||
                this.props.typeName === 'byte' || this.props.typeName === 'int'
                ?                               //Box 1 Ex 1 - All types
                <React.Fragment>
                  This method must return a result of type{" "}
                  <div className="InputValue">{this.props.typeName}</div>
                </React.Fragment>
                :                           //Box 1 Ex 1 - user-made (default)
                <React.Fragment>
                  This method must return a result of type{" "}
                  <div className="InputValue">{this.props.typeName.slice(0,1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}</div>
                </React.Fragment>
              }
            </h2>
          </div>

          <h4>
            <i>
              {this.props.typeName === 'String' || this.props.typeName === 'boolean' ||
                this.props.typeName === 'char' || this.props.typeName === 'float' ||
                this.props.typeName === 'double' || this.props.typeName === 'short' ||
                this.props.typeName === 'byte' || this.props.typeName === 'int'
                ?                               //Box 1 Ex 1 - All types
                <React.Fragment>
                  Translation: You did not return a value of type{" "}
                  <div className="InputValue">{this.props.typeName}</div> like the definition of method{" "}
                  <div className="InputValue">{this.props.methodName}()</div>.
                </React.Fragment>
                :                           //Box 1 Ex 1 - user-made (default)
                <React.Fragment>
                  Translation: You did not return a {" "}
                  <div className="InputValue">{this.props.typeName.slice(0,1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}</div> {" "}
                  object that the method <div className="InputValue">{this.props.methodName}() requires</div>.
                </React.Fragment>
              }
            </i>
          </h4>

          <div className="Tile">
            <div className="ErrorTile" onClick={() => this.openStrategyTile(1)}>
              <div className="ErrorMessage">
                <h4>
                  1: You may have forgotten the return statement for the method{" "}
                  <p className="InputValue">{this.props.methodName}()</p>
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
                        {this.props.typeName === 'String' || this.props.typeName === 'boolean' ||
                          this.props.typeName === 'char' || this.props.typeName === 'float' ||
                          this.props.typeName === 'double' || this.props.typeName === 'short' ||
                          this.props.typeName === 'byte' || this.props.typeName === 'int'
                          ?                               //Box 1 Ex 1 - All types
                          <React.Fragment>
                            Suggestion 1: Add a return statement of type{" "}
                            <p className="InputValue">{this.props.typeName}</p> at the end of the method{" "}
                            <p className="InputValue">{this.props.methodName}()</p>
                          </React.Fragment>
                          :                           //Box 1 Ex 1 - user-made (default)
                          <React.Fragment>
                            Suggestion 1: Add a return statement of type{" "}
                            <p className="InputValue">{this.props.typeName.slice(0,1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}</p> {" "}
                            at the end of the method <p className="InputValue">{this.props.methodName}()</p>
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
                          <div className="Indent-0">
                            { this.props.typeName === 'String' || this.props.typeName === 'boolean' ||
                              this.props.typeName === 'char' || this.props.typeName === 'float' ||
                              this.props.typeName === 'double' || this.props.typeName === 'short' ||
                              this.props.typeName === 'byte' || this.props.typeName === 'int' 
                              ?                               //Box 1 Ex 1 - All data types
                              <React.Fragment>
                              public {this.props.typeName} {this.props.methodName}({this.props.typeName} s) {LEFT_CURLY}
                              </React.Fragment>
                              :                           //Box 1 Ex 1 - user-made object
                              <React.Fragment>  
                              <div className="Indent-0"> class {this.props.typeName.slice(0,1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}{LEFT_CURLY}</div>
                              <div className="Indent-1"> int s;</div>
                              <div className="Indent-1"> {this.props.typeName.slice(0,1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}(int s){LEFT_CURLY}</div>
                              <div className="Indent-2"> this.a = a;</div>
                              <div className="Indent-1"> {RIGHT_CURLY}</div>
                              <div className="Indent-0"> {RIGHT_CURLY}</div>
                              <div className="Indent-0" >{this.props.typeName.slice(0,1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)} {" "}
                              {this.props.methodName}(int s){LEFT_CURLY}</div>
                              <div className="Indent-1"> new {this.props.typeName.slice(0,1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}(s);</div>
                              </React.Fragment>
                            }
                          </div>
                          { this.props.typeName === 'String'             //Box 1 Ex 1 - String
                            ? 
                            <div className="Indent-1"> s = s + "s";</div>
                            : this.props.typeName === 'char'             //Box 1 Ex 1 - char
                              ? 
                              <div className="Indent-1"> s = s + 's';</div>
                              : this.props.typeName === 'boolean'        //Box 1 Ex 1 - boolean
                                ? 
                                <div className="Indent-1"> s = !s;</div>
                                : this.props.typeName === 'float' || this.props.typeName === 'double'     //Box 1 Ex 1 - float/double
                                  ?   
                                  <div className="Indent-1"> s = s + 5.5;</div>
                                  : this.props.typeName === 'byte' || this.props.typeName === 'short'     //Box 1 Ex 1 - short/byte/long/int
                                    || this.props.typeName === 'long' || this.props.typeName === 'int'
                                    ? 
                                    <div className="Indent-1"> s = s + 5;</div>
                                    :                                     //Box 1 Ex 1 - user-made (default)
                                    " "
                          }
                          <div className="Indent-0"> {RIGHT_CURLY}</div>
                        </div>
                      </div>
                      <div className="CodeContainer">
                        <div className="GreenCode">
                        <div className="Indent-0">
                          { this.props.typeName === 'String' || this.props.typeName === 'boolean' ||
                            this.props.typeName === 'char' || this.props.typeName === 'float' ||
                            this.props.typeName === 'double' || this.props.typeName === 'short' ||
                            this.props.typeName === 'byte' || this.props.typeName === 'int' 
                            ?
                            <React.Fragment>
                            public {this.props.typeName} {this.props.methodName}({this.props.typeName} s) {LEFT_CURLY}
                            </React.Fragment>
                            :
                            <React.Fragment> 
                            <div className="Indent-0" >{this.props.typeName.slice(0,1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)} {" "}
                            {this.props.methodName}(int s){LEFT_CURLY}</div>
                            <div className="Indent-1"> return new {this.props.typeName.slice(0,1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}(s);</div>
                            </React.Fragment>
                          }
                          </div>
                          { this.props.typeName === 'String'             //Box 1 Ex 1 - String
                            ?
                            <React.Fragment>
                            <div className="Indent-1"> s = s + "s";</div>
                            <div className="Indent-1"> return s;</div>
                            </React.Fragment> 
                            : this.props.typeName === 'char'             //Box 1 Ex 1 - char
                              ? 
                              <React.Fragment>
                              <div className="Indent-1"> s = s + 's';</div>
                              <div className="Indent-1"> return s;</div>
                              </React.Fragment> 
                              : this.props.typeName === 'boolean'        //Box 1 Ex 1 - boolean
                                ? 
                                <React.Fragment>
                                <div className="Indent-1"> s = !s;</div>
                                <div className="Indent-1"> return s;</div>
                                </React.Fragment> 
                                : this.props.typeName === 'float' || this.props.typeName === 'double'     //Box 1 Ex 1 - float/double
                                  ?   
                                  <React.Fragment>
                                  <div className="Indent-1"> s = s + 5.5;</div>
                                  <div className="Indent-1"> return s;</div>
                                  </React.Fragment> 
                                  : this.props.typeName === 'byte' || this.props.typeName === 'short'     //Box 1 Ex 1 - short/byte/long/int
                                    || this.props.typeName === 'long' || this.props.typeName === 'int'
                                    ? 
                                    <React.Fragment>
                                    <div className="Indent-1"> s = s + 5;</div>
                                    <div className="Indent-1"> return s;</div>
                                    </React.Fragment> 
                                    :                                     //Box 1 Ex 1 - user-made (default)
                                    " "
                          }
                          <div className="Indent-0"> {RIGHT_CURLY}</div>
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
                  2: You may have missed the return statement in some branches
                  of the method{" "}
                  <p className="InputValue">{this.props.methodName}()</p>
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
                  onClick={() => this.openCodeExample(21)}
                >
                  <div className="StrategyInstruction">
                    <div className="StrategyMessage">
                      <BlueCheckbox
                        value="box1"
                        checked={this.state.checked21}
                        onChange={() => this.changeChecked(21)}
                      />
                      <div className="Suggestion">
                        {this.props.typeName === 'String' || this.props.typeName === 'boolean' ||
                          this.props.typeName === 'char' || this.props.typeName === 'float' ||
                          this.props.typeName === 'double' || this.props.typeName === 'short' ||
                          this.props.typeName === 'byte' || this.props.typeName === 'int'
                          ?                               //Box 1 Ex 1 - All types 
                          <React.Fragment>
                            Suggestion 1: Make sure all branches of conditionals in method{" "}
                            <p className="InputValue">{this.props.methodName}()</p>{" "} return value of type{" "}
                            <p className="InputValue">{this.props.typeName}</p>
                          </React.Fragment>
                          :                           //Box 1 Ex 1 - user-made (default)
                          <React.Fragment>
                            Suggestion 1: Make sure all branches of conditionals in method{" "}
                            <p className="InputValue">{this.props.methodName}()</p>{" "} return a {" "}
                            <p className="InputValue">{this.props.typeName.slice(0,1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}</p> object
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
                  {this.state.openCode21 && (
                    <div className="CodeExample">
                      <div className="CodeContainer">
                        <div className="RedCode">
                        <div className="Indent-0">
                            { this.props.typeName === 'String' || this.props.typeName === 'boolean' ||
                              this.props.typeName === 'char' || this.props.typeName === 'float' ||
                              this.props.typeName === 'double' || this.props.typeName === 'short' ||
                              this.props.typeName === 'byte' || this.props.typeName === 'int'
                              ?                               //Box 1 Ex 1 - All types 
                              <React.Fragment>
                              public {this.props.typeName} {this.props.methodName}({this.props.typeName} s) {LEFT_CURLY}
                              </React.Fragment>
                              :                           //Box 1 Ex 1 - user-made (default)
                              <React.Fragment>  
                              public {this.props.typeName.slice(0,1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)} {this.props.methodName}(int s) {LEFT_CURLY}
                              </React.Fragment>
                            }
                          </div>
                          { this.props.typeName === 'String'             //Box 1 Ex 1 - String
                            ? 
                            <div className="Indent-1"> if (s.length() {">="} 5) return s;</div>
                            : this.props.typeName === 'char'             //Box 1 Ex 1 - char
                              ? 
                              <div className="Indent-1"> if (s {"=="} 's') return s;</div>
                              : this.props.typeName === 'boolean'        //Box 1 Ex 1 - boolean
                                ? 
                                <div className="Indent-1"> if (s {"=="} true) return s;</div>
                                : this.props.typeName === 'float' || this.props.typeName === 'double'     //Box 1 Ex 1 - float/double
                                  ?   
                                  <div className="Indent-1"> if (s {">="} 5.5) return s;</div>
                                  : this.props.typeName === 'byte' || this.props.typeName === 'short'     //Box 1 Ex 1 - short/byte/long/int
                                    || this.props.typeName === 'long' || this.props.typeName === 'int'
                                    ? 
                                    <div className="Indent-1"> if (s {">="} 5) return s;</div>
                                    :                                     //Box 1 Ex 1 - user-made (default)
                                    <div className="Indent-1"> if (s {">="} 5) return new {this.props.typeName.slice(0,1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}(s);</div>
                          }
                          <div className="Indent-0"> {RIGHT_CURLY}</div>
                        </div>
                      </div>
                      <div className="CodeContainer">
                        <div className="GreenCode">
                          <div className="Indent-0">
                            { this.props.typeName === 'String' || this.props.typeName === 'boolean' ||
                                this.props.typeName === 'char' || this.props.typeName === 'float' ||
                                this.props.typeName === 'double' || this.props.typeName === 'short' ||
                                this.props.typeName === 'byte' || this.props.typeName === 'int'
                                ?                               //Box 1 Ex 1 - All types 
                                <React.Fragment>
                                public {this.props.typeName} {this.props.methodName}({this.props.typeName} s) {LEFT_CURLY}
                                </React.Fragment>
                                :                           //Box 1 Ex 1 - user-made (default)
                                <React.Fragment>  
                                public {this.props.typeName.slice(0,1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)} {this.props.methodName}(int s) {LEFT_CURLY}
                                </React.Fragment>
                            }
                          </div>
                          { this.props.typeName === 'String'             //Box 1 Ex 1 - String
                            ? 
                            <React.Fragment>
                            <div className="Indent-1"> if (s.length() {">="} 5) return s;</div>
                            <div className="Indent-1"> return s + "add";</div>
                            </React.Fragment>
                            : this.props.typeName === 'char'             //Box 1 Ex 1 - char
                              ? 
                              <React.Fragment>
                              <div className="Indent-1"> if (s {"=="} 's') return s;</div>
                              <div className="Indent-1"> return s + 's';</div>
                              </React.Fragment>
                              : this.props.typeName === 'boolean'        //Box 1 Ex 1 - boolean
                                ? 
                                <React.Fragment>
                                <div className="Indent-1"> if (s {"=="} true) return s;</div>
                                <div className="Indent-1"> return !s;</div>
                                </React.Fragment>
                                : this.props.typeName === 'float' || this.props.typeName === 'double'     //Box 1 Ex 1 - float/double
                                  ?   
                                  <React.Fragment>
                                  <div className="Indent-1"> if (s {">="} 5.5) return s;</div>
                                  <div className="Indent-1"> return -s;</div>
                                  </React.Fragment>
                                  : this.props.typeName === 'byte' || this.props.typeName === 'short'     //Box 1 Ex 1 - short/byte/long/int
                                    || this.props.typeName === 'long' || this.props.typeName === 'int'
                                    ? 
                                    <React.Fragment>
                                    <div className="Indent-1"> if (s {">="} 5) return s;</div>
                                    <div className="Indent-1"> return -s;</div>
                                    </React.Fragment>
                                    :                   //Box 1 Ex 1 - user-made (default)
                                    <React.Fragment>                                     
                                    <div className="Indent-1"> if (s {">="} 5) return new {this.props.typeName.slice(0,1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}(s);</div>
                                    <div className="Indent-1"> return new {this.props.typeName.slice(0,1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}(-s);</div>
                                    </React.Fragment>
                          }
                          <div className="Indent-0"> {RIGHT_CURLY}</div>
                        </div>

                        <div className="GreenCode">
                          <div className="Indent-0">
                            { this.props.typeName === 'String' || this.props.typeName === 'boolean' ||
                                this.props.typeName === 'char' || this.props.typeName === 'float' ||
                                this.props.typeName === 'double' || this.props.typeName === 'short' ||
                                this.props.typeName === 'byte' || this.props.typeName === 'int'
                                ?                               //Box 1 Ex 1 - All types
                                <React.Fragment>
                                public {this.props.typeName} {this.props.methodName}({this.props.typeName} s) {LEFT_CURLY}
                                </React.Fragment>
                                :                           //Box 1 Ex 1 - user-made (default)
                                <React.Fragment>  
                                public {this.props.typeName.slice(0,1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)} {this.props.methodName}(int s) {LEFT_CURLY}
                                </React.Fragment>
                            }
                          </div>
                          { this.props.typeName === 'String'             //Box 1 Ex 1 - String
                            ? 
                            <React.Fragment>
                            <div className="Indent-1"> if (s.length() {">="} 5) {LEFT_CURLY}</div>
                            <div className="Indent-2"> return s;</div>
                            <div className="Indent-1"> {RIGHT_CURLY} else {LEFT_CURLY}</div>
                            <div className="Indent-2"> return s + "add";</div>
                            <div className="Indent-1"> {RIGHT_CURLY}</div>
                            </React.Fragment>
                            : this.props.typeName === 'char'             //Box 1 Ex 1 - char
                              ? 
                              <React.Fragment>
                              <div className="Indent-1"> if (s {"=="} 's')  {LEFT_CURLY}</div>
                              <div className="Indent-2"> return s;</div>
                              <div className="Indent-1"> {RIGHT_CURLY} else {LEFT_CURLY}</div>
                              <div className="Indent-2"> return s + 's';</div>
                              <div className="Indent-1"> {RIGHT_CURLY}</div>
                              </React.Fragment>
                              : this.props.typeName === 'boolean'        //Box 1 Ex 1 - boolean
                                ? 
                                <React.Fragment>
                                <div className="Indent-1"> if (s {"=="} true) {LEFT_CURLY}</div>
                                <div className="Indent-2"> return s;</div>
                                <div className="Indent-1"> {RIGHT_CURLY} else {LEFT_CURLY}</div>
                                <div className="Indent-2"> return !s;</div>
                                <div className="Indent-1"> {RIGHT_CURLY}</div>
                                </React.Fragment>
                                : this.props.typeName === 'float' || this.props.typeName === 'double'     //Box 1 Ex 1 - float/double
                                  ?   
                                  <React.Fragment>
                                    <div className="Indent-1"> if (s {">="} 5.5) {LEFT_CURLY}</div>
                                    <div className="Indent-2"> return s;</div>
                                    <div className="Indent-1"> {RIGHT_CURLY} else {LEFT_CURLY}</div>
                                    <div className="Indent-2"> return -s;</div>
                                    <div className="Indent-1"> {RIGHT_CURLY}</div>
                                  </React.Fragment>
                                  : this.props.typeName === 'byte' || this.props.typeName === 'short'     //Box 1 Ex 1 - short/byte/long/int
                                    || this.props.typeName === 'long' || this.props.typeName === 'int'
                                    ? 
                                    <React.Fragment>
                                      <div className="Indent-1"> if (s {">="} 5) {LEFT_CURLY}</div>
                                      <div className="Indent-2"> return s;</div>
                                      <div className="Indent-1"> {RIGHT_CURLY} else {LEFT_CURLY}</div>
                                      <div className="Indent-2"> return -s;</div>
                                      <div className="Indent-1"> {RIGHT_CURLY}</div>
                                    </React.Fragment>
                                    :                   //Box 1 Ex 1 - user-made  (default)
                                    <React.Fragment>                                     
                                      <div className="Indent-1"> if (s {">="} 5) {LEFT_CURLY}</div>
                                      <div className="Indent-2"> return new {this.props.typeName.slice(0,1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}(s);</div>
                                      <div className="Indent-1"> {RIGHT_CURLY} else {LEFT_CURLY}</div>
                                      <div className="Indent-2"> return new {this.props.typeName.slice(0,1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}(-s);</div>
                                      <div className="Indent-1"> {RIGHT_CURLY}</div>
                                    </React.Fragment>
                          }
                          <div className="Indent-0"> {RIGHT_CURLY}</div>
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

export default ReturnMissing;

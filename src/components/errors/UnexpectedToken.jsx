import React from "react";
import MinusButton from "../../assets/minus.svg";
import PlusButton from "../../assets/plus.svg";
import "../../App.css";
import BlueCheckbox from '../resources/blueCheckbox'

class UnexpectedToken extends React.Component {
  constructor(props) {
    super(props);
    this.openStrategyTile = this.openStrategyTile.bind(this);
    this.openCodeExample = this.openCodeExample.bind(this);
    this.changeChecked = this.changeChecked.bind(this);
    this.state = {
      openStrategy1: false,
      openStrategy2: false,
      openStrategy3: false,
      openStrategy4: false,
      openCode11: false,
      openCode21: false,
      openCode31: false,
      openCode41: false,
      openCode42: false,
      checked11: false,
      checked21: false,
      checked31: false,
      checked41: false,
      chekced42: false,
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

  openStrategyTileBoxOnly(i) {
    switch (i) {
      case 1:
        if(!this.state.openStrategy1){
          this.setState({ openStrategy1: true });
          this.setState({ openCode11: false });
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
      case 4:
        if(!this.state.openStrategy4){
          this.setState({ openStrategy4: true });
          this.setState({ openCode41: false });
          this.setState({ openCode42: false });
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
      case 21:
        if (!this.state.openCode21) {
          this.setState({ openCode21: !this.state.openCode21 });
        }
        break;
      case 31:
        if (!this.state.openCode31) {
          this.setState({ openCode31: !this.state.openCode31 });
        }
        break;
      case 41:
        if (!this.state.openCode41) {
          this.setState({ openCode41: !this.state.openCode41 });
        }
        break;
      case 42:
        if (!this.state.openCode42) {
          this.setState({ openCode42: !this.state.openCode42 });
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
    case 41:
        if(this.state.openCode41){
          if(!this.state.checked41){
          this.setState({ checked41: !this.state.checked41 });
          this.setState({ openCode41: false });
          } else {
          this.setState({ checked41: !this.state.checked41 });
          this.setState({ openCode41: true });
          }
        }
        if(!this.state.openCode41){
          this.setState({ checked41: !this.state.checked41 });
          this.setState({ openCode41: false });
        }
        break;
    case 42:
      if(this.state.openCode42){
        if(!this.state.checked42){
        this.setState({ checked42: !this.state.checked42 });
        this.setState({ openCode42: false });
        } else {
        this.setState({ checked42: !this.state.checked42 });
        this.setState({ openCode42: true });
        }
      }
      if(!this.state.openCode42){
        this.setState({ checked42: !this.state.checked42 });
        this.setState({ openCode42: false });
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
            unexpected token: <div className="InputValue"> {this.props.typeName} </div>
            </h2>
          </div>

          <h4>
            <i>
              Translation: There is something incorrect concerning the <div className="InputValue"> {this.props.typeName} </div> {" "}
              variable you are trying to use.
            </i>
          </h4>

          { this.props.typeName === 'String' || this.props.typeName === 'boolean' || this.props.typeName === 'float' || this.props.typeName === 'double'    //Condition for typeName = String/boolean/float
            ?
            <React.Fragment>
              <div className="Tile">
                <div className="ErrorTile" onClick={() => this.openStrategyTileBoxOnly(1)}>
                  <div className="ErrorMessage">
                    <h4>
                      1: You may have forgotten to place a semicolon at the end of your current line
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
                            Suggestion 1: Add a ";" to the end of the line
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

                      { this.props.typeName === 'String'            //Box 1 Ex 1 - String
                        ? this.state.openCode11 && (
                              <div className="CodeExample">
                              <div className="CodeContainer">
                                  <div className="RedCode">
                                    <div className="Indent-0">
                                    {this.props.typeName} s = "something"
                                  </div>
                                </div>
                              </div>
                              <div className="CodeContainer">
                                <div className="GreenCode">
                                <div className="Indent-0">
                                {this.props.typeName} s = "something";
                                  </div>
                                </div>
                              </div>
                            </div>
                          )

                        : this.props.typeName === 'boolean'
                          ? this.state.openCode11 && (              //Box 1 Ex 1 - boolean
                              <div className="CodeExample">
                              <div className="CodeContainer">
                                  <div className="RedCode">
                                    <div className="Indent-0">
                                    {this.props.typeName} s = true
                                  </div>
                                </div>
                              </div>
                              <div className="CodeContainer">
                                <div className="GreenCode">
                                <div className="Indent-0">
                                {this.props.typeName} s = true;
                                  </div>
                                </div>
                              </div>
                            </div>
                            )

                         : this.state.openCode11 && (          //Box 1 Ex 1 = float/double
                              <div className="CodeExample">
                              <div className="CodeContainer">
                                  <div className="RedCode">
                                    <div className="Indent-0">
                                    {this.props.typeName} s = 5.5
                                  </div>
                                </div>
                              </div>
                              <div className="CodeContainer">
                                <div className="GreenCode">
                                <div className="Indent-0">
                                {this.props.typeName} s = 5.5;
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

              <div className="Tile">
                <div className="ErrorTile" onClick={() => this.openStrategyTileBoxOnly(2)}>
                  <div className="ErrorMessage">
                    <h4>2: You may have left a variable without declaring it.
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
                            Suggestion 1: Either declare the variable, assign it or just remove it if not used
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

                      { this.props.typeName === 'String'
                        ? this.state.openCode21 && (          //Box 2 Ex 1 - String
                          <div className="CodeExample">
                            <div className="CodeContainer">
                                <div className="RedCode">
                                <div className="Indent-0"> s; </div>
                                </div>
                              </div>
                              <div className="CodeContainer">
                                <div className="GreenCode">
                                <div className="Indent-0"> {this.props.typeName} s; </div>
                                </div>
                                <div className="GreenCode">
                                <div className="Indent-0"> {this.props.typeName} s = "something"; </div>
                                </div>
                                <div className="GreenCode">
                                <div className="Indent-0"> <strikethrough> s;</strikethrough> </div>
                                </div>
                              </div>
                            </div>
                          )

                        : this.props.typeName === 'boolean'
                          ? this.state.openCode21 && (          //Box 2 Ex 1 - boolean
                            <div className="CodeExample">
                              <div className="CodeContainer">
                                  <div className="RedCode">
                                  <div className="Indent-0"> s; </div>
                                  </div>
                                </div>
                                <div className="CodeContainer">
                                  <div className="GreenCode">
                                  <div className="Indent-0"> {this.props.typeName} s; </div>
                                  </div>
                                  <div className="GreenCode">
                                  <div className="Indent-0"> {this.props.typeName} s = true; </div>
                                  </div>
                                  <div className="GreenCode">
                                  <div className="Indent-0"> <strikethrough> s;</strikethrough> </div>
                                  </div>
                                </div>
                              </div>
                            )

                          : this.state.openCode21 && (          //Box 2 Ex 1 = float/double
                                <div className="CodeExample">
                                <div className="CodeContainer">
                                    <div className="RedCode">
                                    <div className="Indent-0"> s; </div>
                                    </div>
                                  </div>
                                  <div className="CodeContainer">
                                    <div className="GreenCode">
                                    <div className="Indent-0"> {this.props.typeName} s; </div>
                                    </div>
                                    <div className="GreenCode">
                                    <div className="Indent-0"> {this.props.typeName} s = 5.5; </div>
                                    </div>
                                    <div className="GreenCode">
                                    <div className="Indent-0"> <strikethrough> s;</strikethrough> </div>
                                    </div>
                                  </div>
                                </div>
                              )
                      }
                    </div>
                  </div>
                )}
              </div>
            </React.Fragment>
            : this.props.typeName === 'char'        //Condition for typeName = char
              ?
              <React.Fragment>
                <div className="Tile">
                  <div className="ErrorTile" onClick={() => this.openStrategyTileBoxOnly(1)}>
                    <div className="ErrorMessage">
                      <h4>
                        1: You may have forgotten to place a semicolon at the end of your current line
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
                              Suggestion 1: Add a ";" to the end of the line
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

                        { this.state.openCode11 && (        //Box 1 Ex 1 = char
                                <div className="CodeExample">
                                <div className="CodeContainer">
                                    <div className="RedCode">
                                      <div className="Indent-0">
                                      {this.props.typeName} s = 'something'
                                    </div>
                                  </div>
                                </div>
                                <div className="CodeContainer">
                                  <div className="GreenCode">
                                  <div className="Indent-0">
                                  {this.props.typeName} s = 'something';
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

                <div className="Tile">
                  <div className="ErrorTile" onClick={() => this.openStrategyTileBoxOnly(2)}>
                    <div className="ErrorMessage">
                      <h4>2: You may have left a variable without declaring it.
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
                              Suggestion 1: Either declare the variable, assign it or just remove it if not used
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

                        { this.state.openCode21 && (            //Box 2 Ex 1 = char
                              <div className="CodeExample">
                              <div className="CodeContainer">
                                  <div className="RedCode">
                                  <div className="Indent-0"> s; </div>
                                  </div>
                                </div>
                                <div className="CodeContainer">
                                  <div className="GreenCode">
                                  <div className="Indent-0"> {this.props.typeName} s; </div>
                                  </div>
                                  <div className="GreenCode">
                                  <div className="Indent-0"> {this.props.typeName} s = 'something'; </div>
                                  </div>
                                  <div className="GreenCode">
                                  <div className="Indent-0"> <strikethrough> s;</strikethrough> </div>
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
                <div className="ErrorTile" onClick={() => this.openStrategyTileBoxOnly(3)}>
                  <div className="ErrorMessage">
                    <h4>3: You may have incorrectly tried to cast a <div className="InputValue"></div> float {" "}
                    variable onto a <div className="InputValue">{this.props.typeName}</div> variable
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
                            Suggestion 1: Add a parentheses around <div className="InputValue">{this.props.typeName}</div>, {" "}
                            the type you are trying to convert the variable to
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

                      {this.state.openCode31 && (                //Box 3 Ex 1 = char
                            <div className="CodeExample">
                            <div className="CodeContainer">
                                <div className="RedCode">
                                <div className="Indent-0"> float f = 5.5; </div>
                                <div className="Indent-0"> {this.props.typeName} s = {this.props.typeName} f; </div>
                                </div>
                              </div>
                              <div className="CodeContainer">
                                <div className="GreenCode">
                                <div className="Indent-0"> float f = 5.5; </div>
                                <div className="Indent-0"> {this.props.typeName} s = ({this.props.typeName}) f; </div>
                                </div>
                              </div>
                            </div>
                          )
                      }
                    </div>
                  </div>
                )}
                </div>
              </React.Fragment>
              : this.props.typeName === 'int' || this.props.typeName === 'long' || this.props.typeName === 'byte' || this.props.typeName === 'short'            //Condition for typeName = int/long/short/byte
               ? <React.Fragment>
                  <div className="Tile">
                    <div className="ErrorTile" onClick={() => this.openStrategyTileBoxOnly(1)}>
                      <div className="ErrorMessage">
                        <h4>
                          1: You may have forgotten to place a semicolon at the end of your current line
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
                                Suggestion 1: Add a ";" to the end of the line
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

                          {this.state.openCode11 && (                   //Box 1 Ex 1 = int/float/byte/short
                              <div className="CodeExample">
                              <div className="CodeContainer">
                                  <div className="RedCode">
                                    <div className="Indent-0">
                                    {this.props.typeName} s = 5
                                  </div>
                                </div>
                              </div>
                              <div className="CodeContainer">
                                <div className="GreenCode">
                                <div className="Indent-0">
                                {this.props.typeName} s = 5;
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
                        <h4>2: You may have left a variable without declaring it.
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
                                Suggestion 1: Either declare the variable, assign it or just remove it if not used
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
                          {this.state.openCode21 && (                     //Box 2 Ex 1 = int/float/byte/short
                            <div className="CodeExample">
                            <div className="CodeContainer">
                                <div className="RedCode">
                                <div className="Indent-0"> s; </div>
                                </div>
                              </div>
                              <div className="CodeContainer">
                                <div className="GreenCode">
                                <div className="Indent-0"> {this.props.typeName} s; </div>
                                </div>
                                <div className="GreenCode">
                                <div className="Indent-0"> {this.props.typeName} s = 5; </div>
                                </div>
                                <div className="GreenCode">
                                <div className="Indent-0"> <strikethrough> s;</strikethrough> </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="Tile">
                    <div className="ErrorTile" onClick={() => this.openStrategyTileBoxOnly(3)}>
                      <div className="ErrorMessage">
                        <h4>3: You may have incorrectly tried to cast a <div className="InputValue"> </div> float{" "}
                        variable onto a <div className="InputValue">{this.props.typeName}</div> variable
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
                                Suggestion 1: Add a parentheses around <div className="InputValue">{this.props.typeName}</div>, {" "}
                                the type you are trying to convert the variable to
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
                          {this.state.openCode31 && (                 //Box 3 Ex 1 = int/float/byte/short
                            <div className="CodeExample">
                            <div className="CodeContainer">
                                <div className="RedCode">
                                <div className="Indent-0"> float f = 5.5; </div>
                                <div className="Indent-0"> {this.props.typeName} s = {this.props.typeName} f; </div>
                                </div>
                              </div>
                              <div className="CodeContainer">
                                <div className="GreenCode">
                                <div className="Indent-0"> float f = 5.5; </div>
                                <div className="Indent-0"> {this.props.typeName} s = ({this.props.typeName}) f; </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  { this.props.typeName === 'int'
                    ? <React.Fragment>
                      <div className="Tile">
                        <div className="ErrorTile" onClick={() => this.openStrategyTileBoxOnly(4)}>
                          <div className="ErrorMessage">
                            <h4>4: You may have incorrectly written the parameter of control structures (if-else statement, for-loop, etc...)
                            </h4>
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
                            <i>Tick the box once you have tried the suggestion</i>
                            <div
                              className="StrategyTile"
                              onClick={() => this.openCodeExampleBoxOnly(41)}
                            >
                              <div className="StrategyInstruction">
                                <div className="StrategyMessage">
                                  <BlueCheckbox
                                    value="box1"
                                    checked={this.state.checked41}
                                    onChange={() => this.changeChecked(41)}
                                  />
                                  <div className="Suggestion">
                                    Suggestion 1: Change the parameters of the control structure
                                  </div>
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
                              {this.state.openCode41 && (                 //Box 4 Ex 1 = int
                                <div className="CodeExample">
                                <div className="CodeContainer">
                                    <div className="RedCode">
                                    <div className="Indent-0"> {this.props.typeName} s = 5; </div>
                                    <div className="Indent-0"> if({this.props.typeName} i = 0; i {" < "} 10; i++){"{"} </div>
                                    <div className="Indent-1"> s += s; </div>
                                    <div className="Indent-0"> {"}"} </div>
                                    </div>
                                  </div>
                                  <div className="CodeContainer">
                                    <div className="GreenCode">
                                    <div className="Indent-0"> {this.props.typeName} s = 5; </div>
                                    <div className="Indent-0"> if(s {"<"} 10){"{"} </div>
                                    <div className="Indent-1"> s += s; </div>
                                    <div className="Indent-0"> {"}"} </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>

                            <div
                              className="StrategyTile"
                              onClick={() => this.openCodeExampleBoxOnly(42)}
                            >
                              <div className="StrategyInstruction">
                                <div className="StrategyMessage">
                                  <BlueCheckbox
                                    value="box1"
                                    checked={this.state.checked42}
                                    onChange={() => this.changeChecked(42)}
                                  />
                                  <div className="Suggestion">
                                    Suggestion 2: Change the control structure itself
                                  </div>
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
                              {this.state.openCode42 && (             //Box 4 Ex 2 = int
                                <div className="CodeExample">
                                <div className="CodeContainer">
                                    <div className="RedCode">
                                    <div className="Indent-0"> {this.props.typeName} s = 5; </div>
                                    <div className="Indent-0"> if({this.props.typeName} i = 0; i {" < "} 10; i++){"{"} </div>
                                    <div className="Indent-1"> s += s; </div>
                                    <div className="Indent-0"> {"}"} </div>
                                    </div>
                                  </div>
                                  <div className="CodeContainer">
                                    <div className="GreenCode">
                                    <div className="Indent-0"> {this.props.typeName} s = 5; </div>
                                    <div className="Indent-0"> for({this.props.typeName} i = 0; i {" < "} 10; i++){"{"} </div>
                                    <div className="Indent-1"> s += s; </div>
                                    <div className="Indent-0"> {"}"} </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </React.Fragment>
                    : null
                  }

                </React.Fragment>

              : <React.Fragment>
                  <div className="Tile">
                    <div className="ErrorTile" onClick={() => this.openStrategyTileBoxOnly(2)}>
                      <div className="ErrorMessage">
                        <h4>1: You may have left an object without declaring it.
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
                                Suggestion 1: Either declare the object, assign it or just remove it if not used
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

                          {this.state.openCode21 && (            //Box 1 Ex 1 = User-Made
                                    <div className="CodeExample">
                                    <div className="CodeContainer">
                                        <div className="RedCode">
                                        <div className="Indent-0"> class {this.props.typeName.slice(0,1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}{"{"}  </div>
                                        <div className="Indent-1"> {this.props.typeName.slice(0,1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}(){"{"} </div>
                                        <div className="Indent-2"> ...; </div>
                                        <div className="Indent-1"> {"}"} </div>
                                        <div className="Indent-0"> {"}"} </div>
                                        <div className="Indent-0"> {this.props.typeName} </div>
                                        </div>
                                      </div>
                                      <div className="CodeContainer">
                                        <div className="GreenCode">
                                        <div className="Indent-0"> {this.props.typeName.slice(0,1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)} {this.props.typeName}; </div>
                                        </div>
                                        <div className="GreenCode">
                                        <div className="Indent-0"> {this.props.typeName.slice(0,1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)} {this.props.typeName} = {" "}
                                        new {this.props.typeName.slice(0,1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}(); </div>
                                        </div>
                                        <div className="GreenCode">
                                        <div className="Indent-0"> <strikethrough> {this.props.typeName}; </strikethrough> </div>
                                        </div>
                                      </div>
                                    </div>
                                  )
                          }
                        </div>
                      </div>
                    )}
                  </div>
              </React.Fragment>
          }
        </div>
      </div>
    );
  }
}

export default UnexpectedToken;
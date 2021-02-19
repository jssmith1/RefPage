import React from "react";
import MinusButton from "../assets/minus.svg";
import PlusButton from "../assets/plus.svg";
import "../App.css";
import BlueCheckbox from './resources/blueCheckbox'

class IncorrectVariableDeclaration extends React.Component {
  constructor(props) {
    super(props);
    this.openStrategyTile = this.openStrategyTile.bind(this);
    this.openCodeExample = this.openCodeExample.bind(this);
    this.changeChecked = this.changeChecked.bind(this);
    this.state = {
      openStrategy1: false,
      openCode11: false,
      openCode12: false,
      openCode13: false,
      openCode14: false,
      checked11: false,
      checked12: false,
      checked13: false,
      checked14: false,
    };
  }

  openStrategyTile(i) {
    switch (i) {
      case 1:
        this.setState({ openStrategy1: !this.state.openStrategy1 });
        this.setState({ openCode11: false });
        this.setState({ openCode12: false });
        this.setState({ openCode13: false });
        this.setState({ openCode14: false });
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
      case 13:
        this.setState({ openCode13: !this.state.openCode13 });
        break;
      case 14:
        this.setState({ openCode14: !this.state.openCode14 });
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
          this.setState({ openCode13: false });
          this.setState({ openCode14: false });
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
      case 13:
        if(!this.state.openCode13){
          this.setState({ openCode13: !this.state.openCode13 });
        }
        break;
      case 14:
        if(!this.state.openCode14){
          this.setState({ openCode14: !this.state.openCode14 });
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
      case 13:
        if(this.state.openCode13){
          if(!this.state.checked13){
          this.setState({ checked13: !this.state.checked13 });
          this.setState({ openCode13: false });
          } else {
          this.setState({ checked13: !this.state.checked13 });
          this.setState({ openCode13: true });
          }
        }
        if(!this.state.openCode13){
          this.setState({ checked13: !this.state.checked13 });
          this.setState({ openCode13: false });
        }
        break;
      case 14:
        if(this.state.openCode14){
          if(!this.state.checked14){
          this.setState({ checked14: !this.state.checked14 });
          this.setState({ openCode14: false });
          } else {
          this.setState({ checked14: !this.state.checked14 });
          this.setState({ openCode14: true });
          }
        }
        if(!this.state.openCode14){
          this.setState({ checked14: !this.state.checked14 });
          this.setState({ openCode14: false });
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
              Expecting DOT, found <div className="InputValue">'{this.props.foundName}'</div>
            </h2>
          </div>

          <h4>
            <i>
              Translation: You are trying to use an array which has been declared incorrectly.
            </i>
          </h4>

          <div className="Tile">
            <div className="ErrorTile" onClick={() => this.openStrategyTileBoxOnly(1)}>
              <div className="ErrorMessage">
                <h4>
                  1: You may have made a syntax error while declaring the array
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
                        Suggestion 1: Add the word 'new' beside the type variable you are declaring
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
                          { this.props.typeName === 'String' || this.props.typeName === 'boolean' ||
                            this.props.typeName === 'char' || this.props.typeName === 'float' ||
                            this.props.typeName === 'double' || this.props.typeName === 'short' ||
                            this.props.typeName === 'byte'
                            ?
                            <div className="Indent-0"> {this.props.typeName}[] {this.props.foundName} = {" "}
                            {this.props.typeName}[5]; </div>
                            :
                            <div className="Indent-0"> int[] {this.props.foundName} = {" "}
                            int[5]; </div>
                          }
                        </div>
                      </div>
                      <div className="CodeContainer">
                        <div className="GreenCode">
                          { this.props.typeName === 'String' || this.props.typeName === 'boolean' ||
                            this.props.typeName === 'char' || this.props.typeName === 'float' ||
                            this.props.typeName === 'double' || this.props.typeName === 'short' ||
                            this.props.typeName === 'byte'
                            ?
                            <div className="Indent-0"> {this.props.typeName}[] {this.props.foundName} = {" "}
                            new {this.props.typeName}[5]; </div>
                            :
                            <div className="Indent-0"> int[] {this.props.foundName} = {" "}
                            new int[5]; </div>
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
                        Suggestion 2: Add a semicolon ";" at the end of declaration
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
                          { this.props.typeName === 'String' || this.props.typeName === 'boolean' ||
                            this.props.typeName === 'char' || this.props.typeName === 'float' ||
                            this.props.typeName === 'double' || this.props.typeName === 'short' ||
                            this.props.typeName === 'byte'
                            ?
                            <div className="Indent-0"> {this.props.typeName}[] {this.props.foundName} {" "}
                            new {this.props.typeName}[5] </div>
                            :
                            <div className="Indent-0"> int[] {this.props.foundName} {" "}
                            new int[5] </div>
                          }
                        </div>
                        <div className="RedCode">
                          <div className="Indent-0">
                          { this.props.typeName === 'String'            //Box 1 Ex 2 for String
                                  ?
                                  <React.Fragment>
                                  {this.props.typeName}[] {this.props.foundName} = {"{"}"a", "b", "c", "d", "e"{"}"}
                                  </React.Fragment>

                                  : this.props.typeName === 'char'            //Box 1 Ex 2 for char
                                    ?
                                    <React.Fragment>
                                    {this.props.typeName}[] {this.props.foundName} = {"{'a', 'b, 'c', 'd', 'e'}"}
                                    </React.Fragment>

                                    : this.props.typeName === 'boolean'            //Box 1 Ex 2 for boolean
                                      ?
                                      <React.Fragment>
                                      {this.props.typeName}[] {this.props.foundName} = {"{true, false, true, false, true}"}
                                      </React.Fragment>

                                      : this.props.typeName === 'float' || this.props.typeName === 'double'            //Box 1 Ex 2 for float/double
                                        ?
                                        <React.Fragment>
                                        {this.props.typeName}[] {this.props.foundName} = {"{1.1, 2.2, 3.3, 4.4, 5.5}"}
                                        </React.Fragment>

                                        : this.props.typeName === 'int' || this.props.typeName === 'short' || this.props.typeName === 'byte'             //Box 1 Ex 2 for int/short/byte/long
                                          ?
                                          <React.Fragment>
                                          {this.props.typeName}[] {this.props.foundName} = {"{1,2,3,4,5}"}
                                          </React.Fragment>
                                          :
                                          <React.Fragment>
                                          int[] {this.props.foundName} = {"{1,2,3,4,5}"}
                                          </React.Fragment>
                                }
                          </div>
                        </div>
                      </div>
                      <div className="CodeContainer">
                        <div className="GreenCode">
                          { this.props.typeName === 'String' || this.props.typeName === 'boolean' ||
                            this.props.typeName === 'char' || this.props.typeName === 'float' ||
                            this.props.typeName === 'double' || this.props.typeName === 'short' ||
                            this.props.typeName === 'byte'
                            ?
                            <div className="Indent-0"> {this.props.typeName}[] {this.props.foundName} = {" "}
                            new {this.props.typeName}[5]; </div>
                            :
                            <div className="Indent-0"> int[] {this.props.foundName} = {" "}
                            new int[5]; </div>
                          }
                          </div>
                        <div className="GreenCode">
                          <div className="Indent-0">
                          { this.props.typeName === 'String'            //Box 1 Ex 2 for String
                                  ?
                                  <React.Fragment>
                                  {this.props.typeName}[] {this.props.foundName} = {"{"}"a", "b", "c", "d", "e"{"}"};
                                  </React.Fragment>

                                  : this.props.typeName === 'char'            //Box 1 Ex 2 for char
                                    ?
                                    <React.Fragment>
                                    {this.props.typeName}[] {this.props.foundName} = {"{'a', 'b, 'c', 'd', 'e'}"};
                                    </React.Fragment>

                                    : this.props.typeName === 'boolean'            //Box 1 Ex 2 for boolean
                                      ?
                                      <React.Fragment>
                                      {this.props.typeName}[] {this.props.foundName} = {"{true, false, true, false, true}"};
                                      </React.Fragment>

                                      : this.props.typeName === 'float' || this.props.typeName === 'double'            //Box 1 Ex 2 for float/double
                                        ?
                                        <React.Fragment>
                                        {this.props.typeName}[] {this.props.foundName} = {"{1.1, 2.2, 3.3, 4.4, 5.5}"};
                                        </React.Fragment>

                                        : this.props.typeName === 'int' || this.props.typeName === 'short' || this.props.typeName === 'byte'
                                          ?                                                              //Box 1 Ex 2 for int/short/byte/long
                                          <React.Fragment>
                                          {this.props.typeName}[] {this.props.foundName} = {"{1,2,3,4,5}"};
                                          </React.Fragment>
                                          :
                                          <React.Fragment>
                                          int[] {this.props.foundName} = {"{1,2,3,4,5}"};
                                          </React.Fragment>
                                }
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className="StrategyTile"
                  onClick={() => this.openCodeExampleBoxOnly(13)}
                >
                  <div className="StrategyInstruction">
                    <div className="StrategyMessage">
                      <BlueCheckbox
                        value="box1"
                        checked={this.state.checked13}
                        onChange={() => this.changeChecked(13)}
                      />
                      <div className="Suggestion">
                        Suggestion 3: Add an equal sign "=" when declaring
                      </div>
                    </div>
                    {!this.state.openCode13 && (
                      <div className="ButtonHolder">
                        <img
                          onClick={() => this.openCodeExample(13)}
                          src={PlusButton}
                          alt="down-button"
                          width="20"
                          height="20"
                        ></img>
                      </div>
                    )}
                    {this.state.openCode13 && (
                      <div className="ButtonHolder">
                        <img
                          onClick={() => this.openCodeExample(13)}
                          src={MinusButton}
                          alt="up-button"
                          width="20"
                          height="20"
                        ></img>
                      </div>
                    )}
                  </div>
                  {this.state.openCode13 && (
                    <div className="CodeExample">
                      <div className="CodeContainer">
                        <div className="RedCode">
                          { this.props.typeName === 'String' || this.props.typeName === 'boolean' ||
                            this.props.typeName === 'char' || this.props.typeName === 'float' ||
                            this.props.typeName === 'double' || this.props.typeName === 'short' ||
                            this.props.typeName === 'byte'
                            ?
                            <div className="Indent-0"> {this.props.typeName}[] {this.props.foundName} {" "}
                            new {this.props.typeName}[5]; </div>
                            :
                            <div className="Indent-0"> int[] {this.props.foundName} {" "}
                            new int[5]; </div>
                          }
                        </div>
                        <div className="RedCode">
                          <div className="Indent-0">
                          { this.props.typeName === 'String'            //Box 1 Ex 3 for String
                                  ?
                                  <React.Fragment>
                                  {this.props.typeName}[] {this.props.foundName} {"{"}"a", "b", "c", "d", "e"{"}"};
                                  </React.Fragment>

                                  : this.props.typeName === 'char'            //Box 1 Ex 3 for char
                                    ?
                                    <React.Fragment>
                                    {this.props.typeName}[] {this.props.foundName} {"{'a', 'b, 'c', 'd', 'e'}"};
                                    </React.Fragment>

                                    : this.props.typeName === 'boolean'            //Box 1 Ex 3 for boolean
                                      ?
                                      <React.Fragment>
                                      {this.props.typeName}[] {this.props.foundName} {"{true, false, true, false, true}"};
                                      </React.Fragment>

                                      : this.props.typeName === 'float' || this.props.typeName === 'double'            //Box 1 Ex 3 for float/double
                                        ?
                                        <React.Fragment>
                                        {this.props.typeName}[] {this.props.foundName} {"{1.1, 2.2, 3.3, 4.4, 5.5}"};
                                        </React.Fragment>

                                        : this.props.typeName === 'int' || this.props.typeName === 'short' || this.props.typeName === 'byte'
                                          ?                                                            //Box 1 Ex 3 for int/short/byte/long
                                          <React.Fragment>
                                          {this.props.typeName}[] {this.props.foundName} {"{1,2,3,4,5}"};
                                          </React.Fragment>
                                          :
                                          <React.Fragment>
                                          int[] {this.props.foundName} {"{1,2,3,4,5}"};
                                          </React.Fragment>
                                }
                          </div>
                        </div>
                      </div>
                      <div className="CodeContainer">
                        <div className="GreenCode">
                        { this.props.typeName === 'String' || this.props.typeName === 'boolean' ||
                            this.props.typeName === 'char' || this.props.typeName === 'float' ||
                            this.props.typeName === 'double' || this.props.typeName === 'short' ||
                            this.props.typeName === 'byte'
                            ?
                            <div className="Indent-0"> {this.props.typeName}[] {this.props.foundName} = {" "}
                            new {this.props.typeName}[5]; </div>
                            :
                            <div className="Indent-0"> int[] {this.props.foundName} = {" "}
                            new int[5]; </div>
                          }
                        </div>
                        <div className="GreenCode">
                          <div className="Indent-0">
                          { this.props.typeName === 'String'            //Box 1 Ex 3 for String
                                  ?
                                  <React.Fragment>
                                  {this.props.typeName}[] {this.props.foundName} = {"{"}"a", "b", "c", "d", "e"{"}"};
                                  </React.Fragment>

                                  : this.props.typeName === 'char'            //Box 1 Ex 3 for char
                                    ?
                                    <React.Fragment>
                                    {this.props.typeName}[] {this.props.foundName} = {"{'a', 'b, 'c', 'd', 'e'}"};
                                    </React.Fragment>

                                    : this.props.typeName === 'boolean'            //Box 1 Ex 3 for boolean
                                      ?
                                      <React.Fragment>
                                      {this.props.typeName}[] {this.props.foundName} = {"{true, false, true, false, true}"};
                                      </React.Fragment>

                                      : this.props.typeName === 'float' || this.props.typeName === 'double'            //Box 1 Ex 3 for float/double
                                        ?
                                        <React.Fragment>
                                        {this.props.typeName}[] {this.props.foundName} = {"{1.1, 2.2, 3.3, 4.4, 5.5}"};
                                        </React.Fragment>

                                        : this.props.typeName === 'int' || this.props.typeName === 'short' || this.props.typeName === 'byte'
                                          ?                                                              //Box 1 Ex 3 for int/short/byte/long
                                          <React.Fragment>
                                          {this.props.typeName}[] {this.props.foundName} = {"{1,2,3,4,5}"};
                                          </React.Fragment>
                                          :
                                          <React.Fragment>
                                          int[] {this.props.foundName} = {"{1,2,3,4,5}"};
                                          </React.Fragment>
                                }
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className="StrategyTile"
                  onClick={() => this.openCodeExampleBoxOnly(14)}
                >
                  <div className="StrategyInstruction">
                    <div className="StrategyMessage">
                      <BlueCheckbox
                        value="box1"
                        checked={this.state.checked14}
                        onChange={() => this.changeChecked(14)}
                      />
                      <div className="Suggestion">
                        Suggestion 4: Specify the size of the array
                      </div>
                    </div>
                    {!this.state.openCode14 && (
                      <div className="ButtonHolder">
                        <img
                          onClick={() => this.openCodeExample(14)}
                          src={PlusButton}
                          alt="down-button"
                          width="20"
                          height="20"
                        ></img>
                      </div>
                    )}
                    {this.state.openCode14 && (
                      <div className="ButtonHolder">
                        <img
                          onClick={() => this.openCodeExample(14)}
                          src={MinusButton}
                          alt="up-button"
                          width="20"
                          height="20"
                        ></img>
                      </div>
                    )}
                  </div>
                  {this.state.openCode14 && (
                    <div className="CodeExample">
                      <div className="CodeContainer">
                        <div className="RedCode">
                          { this.props.typeName === 'String' || this.props.typeName === 'boolean' ||
                            this.props.typeName === 'char' || this.props.typeName === 'float' ||
                            this.props.typeName === 'double' || this.props.typeName === 'short' ||
                            this.props.typeName === 'byte'
                            ?
                            <div className="Indent-0"> {this.props.typeName}[] {this.props.foundName} ={" "}
                            new {this.props.typeName}; </div>
                            :
                            <div className="Indent-0"> int[] {this.props.foundName} ={" "}
                            new int; </div>
                          }
                        </div>
                      </div>
                      <div className="CodeContainer">
                        <div className="GreenCode">
                          { this.props.typeName === 'String' || this.props.typeName === 'boolean' ||
                            this.props.typeName === 'char' || this.props.typeName === 'float' ||
                            this.props.typeName === 'double' || this.props.typeName === 'short' ||
                            this.props.typeName === 'byte'
                            ?
                            <div className="Indent-0"> {this.props.typeName}[] {this.props.foundName} ={" "}
                            new {this.props.typeName}[5]; </div>
                            :
                            <div className="Indent-0"> int[] {this.props.foundName} ={" "}
                            new int[5]; </div>
                          }
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

export default IncorrectVariableDeclaration;

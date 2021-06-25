import React from "react";
import MinusButton from "../../assets/minus.svg";
import PlusButton from "../../assets/plus.svg";
import "../../App.css";
import BlueCheckbox from '../resources/blueCheckbox'

class MethodNotFound extends React.Component {
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
            openCode22: false,
            openCode31: false,
            openCode32: false,
            checked11: false,
            checked12: false,
            checked21: false,
            checked22: false,
            checked31: false,
            checked32: false,
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
            case 3:
                this.setState({ openStrategy3: !this.state.openStrategy3 });
                this.setState({ openCode31: false });
                this.setState({ openCode32: false });
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
            case 31:
                this.setState({ openCode31: !this.state.openCode31 });
                break;
            case 32:
                this.setState({ openCode32: !this.state.openCode32 });
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
            case 3:
                if (!this.state.openStrategy3) {
                    this.setState({ openStrategy3: true });
                    this.setState({ openCode31: false });
                    this.setState({ openCode32: false });
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
            case 31:
                if (!this.state.openCode31) {
                    this.setState({ openCode31: !this.state.openCode31 });
                }
                break;
            case 32:
                if (!this.state.openCode32) {
                    this.setState({ openCode32: !this.state.openCode32 });
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
            case 31:
                if (this.state.openCode31) {
                    if (!this.state.checked31) {
                        this.setState({ checked31: !this.state.checked31 });
                        this.setState({ openCode31: false });
                    } else {
                        this.setState({ checked31: !this.state.checked31 });
                        this.setState({ openCode31: true });
                    }
                }
                if (!this.state.openCode31) {
                    this.setState({ checked31: !this.state.checked31 });
                    this.setState({ openCode31: false });
                }
                break;
            case 32:
                if (this.state.openCode32) {
                    if (!this.state.checked32) {
                        this.setState({ checked32: !this.state.checked32 });
                        this.setState({ openCode32: false });
                    } else {
                        this.setState({ checked32: !this.state.checked32 });
                        this.setState({ openCode32: true });
                    }
                }
                if (!this.state.openCode32) {
                    this.setState({ checked32: !this.state.checked32 });
                    this.setState({ openCode32: false });
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
                            The function {" "}
                            <div className="InputValue">{this.props.methodName}()</div> does not exist
                        </h2>
                    </div>

                    <h4>
                        <i>
                            Translation: You are trying to use a function, {" "}
                            <div className="InputValue">{this.props.methodName}()</div>, which Processing{" "}
                             does not recognize. ("method" and "function" is used interchangeably here)
                        </i>
                    </h4>

                    <div className="Tile">
                        <div className="ErrorTile" onClick={() => this.openStrategyTileBoxOnly(1)}>
                            <div className="ErrorMessage">
                                <h4>
                                    1: You may have mistyped the name of function{" "}
                                    <div className="InputValue">{this.props.methodName}()</div>{" "}
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

                        {/** If method not void */}
                        {this.props.typeName === 'String' || this.props.typeName === 'char' ||
                            this.props.typeName === 'short' || this.props.typeName === 'byte' ||
                            this.props.typeName === 'long' || this.props.typeName === 'int' || this.props.typeName === 'double' ||
                            this.props.typeName === 'boolean' || this.props.typeName === 'float'
                            ?
                            <React.Fragment>
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
                                                        Suggestion 1: If you are trying to use an existing Java function, make sure you match the name of{" "}
                                                        <p className="InputValue">{this.props.methodName}()</p> with the function.
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
                                                            onClick={() => this.openCodeEkxample(11)}
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
                                                            <div className="Indent-0"> String s = "s"; </div>
                                                            <div className="Indent-0"> {this.props.typeName} a = s.{this.props.methodName}();</div>
                                                        </div>
                                                    </div>
                                                    <div className="CodeContainer">
                                                        <div className="GreenCode">
                                                            <div className="Indent-0"> String s = "s"; </div>
                                                            <div className="Indent-0"> {this.props.typeName} a = s.{this.props.correctMethodName}();</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </React.Fragment>
                            /** If method is void */
                            :
                            <React.Fragment>
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
                                                        Suggestion 1: Change the name of {" "}
                                                        <p className="InputValue">{this.props.methodName}()</p> to the method you created.
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
                                                            onClick={() => this.openCodeEkxample(11)}
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
                                                            <div className="Indent-0"> {this.props.methodName}();</div>
                                                            <div className="Indent-0"> {this.props.typeName} {this.props.correctMethodName}(){"{"}
                                                                <div className="Indent-1"> ... </div>
                                                                <div className="Indent-0"> {"}"} </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="CodeContainer">
                                                        <div className="GreenCode">
                                                            <div className="Indent-0"> {this.props.correctMethodName}();</div>
                                                            <div className="Indent-0"> {this.props.typeName} {this.props.correctMethodName}(){"{"}
                                                                <div className="Indent-1"> ... </div>
                                                                <div className="Indent-0"> {"}"} </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </React.Fragment>
                        }

                        {this.props.typeName === 'String' || this.props.typeName === 'char' ||
                            this.props.typeName === 'short' || this.props.typeName === 'byte' ||
                            this.props.typeName === 'long' || this.props.typeName === 'int' || this.props.typeName === 'double' ||
                            this.props.typeName === 'boolean' || this.props.typeName === 'float'
                            ?
                            <React.Fragment>
                                {this.state.openStrategy1 && (
                                    <div className="StrategyContainer">
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
                                                        Suggestion 2: Change the name of {" "}
                                                        <p className="InputValue">{this.props.methodName}()</p> to the method you created.
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
                                                            onClick={() => this.openCodeEkxample(12)}
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
                                                            <div className="Indent-0"> {this.props.typeName} a = {this.props.methodName}(5);</div>
                                                            <div className="Indent-0"> {this.props.typeName} {this.props.correctMethodName}({this.props.typeName} s){"{"}</div>
                                                            <div className="Indent-1"> return s+1; </div>
                                                            <div className="Indent-0"> {"}"} </div>
                                                        </div>
                                                    </div>
                                                    <div className="CodeContainer">
                                                        <div className="GreenCode">
                                                            <div className="Indent-0"> {this.props.typeName} a = {this.props.correctMethodName}(5);</div>
                                                            <div className="Indent-0"> {this.props.typeName} {this.props.correctMethodName}({this.props.typeName} s){"{"} </div>
                                                            <div className="Indent-1"> return s+1; </div>
                                                            <div className="Indent-0"> {"}"} </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </React.Fragment>
                            :
                            " "
                        }
                    </div>

                    <div className="Tile">
                        <div className="ErrorTile" onClick={() => this.openStrategyTileBoxOnly(2)}>
                            <div className="ErrorMessage">
                                <h4>
                                    2: You may have forgotten to create the method{" "}
                                    <div className="InputValue">{this.props.methodName}()</div>
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
                                                Suggestion 1: Create the {" "}
                                                <p className="InputValue">{this.props.methodName}()</p> method
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
                                                    {this.props.typeName === 'String' || this.props.typeName === 'char' ||
                                                        this.props.typeName === 'short' || this.props.typeName === 'byte' ||
                                                        this.props.typeName === 'long' || this.props.typeName === 'int' || this.props.typeName === 'double' ||
                                                        this.props.typeName === 'boolean' || this.props.typeName === 'float'
                                                        ?
                                                        <div className="Indent-0"> {this.props.typeName} a = {this.props.methodName}(5); </div>
                                                        :
                                                        <div className="Indent-0"> {this.props.methodName}(); </div>
                                                    }
                                                </div>
                                            </div>
                                            <div className="CodeContainer">
                                                <div className="GreenCode">
                                                    {this.props.typeName === 'String' || this.props.typeName === 'char' ||
                                                        this.props.typeName === 'short' || this.props.typeName === 'byte' ||
                                                        this.props.typeName === 'long' || this.props.typeName === 'int' || this.props.typeName === 'double' ||
                                                        this.props.typeName === 'boolean' || this.props.typeName === 'float'
                                                        ?
                                                        <React.Fragment>
                                                            <div className="Indent-0"> {this.props.typeName} a = {this.props.methodName}(5); </div>
                                                            <div className="Indent-0"> {this.props.typeName} {this.props.methodName}({this.props.typeName} s) {"{"} </div>
                                                            <div className="Indent-1"> ... </div>
                                                            <div className="Indent-0"> {"}"}</div>
                                                        </React.Fragment>
                                                        :
                                                        <React.Fragment>
                                                            <div className="Indent-0"> {this.props.methodName}(); </div>
                                                            <div className="Indent-0"> {this.props.typeName} {this.props.methodName}() {"{"} </div>
                                                            <div className="Indent-1"> ... </div>
                                                            <div className="Indent-0"> {"}"}</div>
                                                        </React.Fragment>
                                                    }
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
                                <h4>
                                    3: You may have used the method{" "}
                                    <div className="InputValue">{this.props.methodName}()</div>{" "}
                                    of class <div className="InputValue">{this.props.className}</div> incorrectly
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
                                                Suggestion 1: Create an object of class {" "}
                                                <p className="InputValue">{this.props.className}</p> and then call the method {" "}
                                                <p className="InputValue">{this.props.methodName}()</p> on it
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
                                    {this.state.openCode31 && (
                                        <div className="CodeExample">
                                            <div className="CodeContainer">
                                                <div className="RedCode">
                                                    <div className="Indent-0"> class {this.props.className}{"{"}
                                                        <div className="Indent-1"> {this.props.className}(){"{"}  </div>
                                                        <div className="Indent-2"> ... </div>
                                                        <div className="Indent-1"> {"}"} </div>
                                                        {this.props.typeName === 'String' || this.props.typeName === 'char' ||
                                                            this.props.typeName === 'short' || this.props.typeName === 'byte' ||
                                                            this.props.typeName === 'long' || this.props.typeName === 'int' || this.props.typeName === 'double' ||
                                                            this.props.typeName === 'boolean' || this.props.typeName === 'float'
                                                            ?
                                                            <React.Fragment>
                                                                <div className="Indent-1"> {this.props.typeName} {this.props.methodName}({this.props.typeName} s){"{"}</div>
                                                                <div className="Indent-2"> return s+1; </div>
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment>
                                                                <div className="Indent-1"> {this.props.typeName} {this.props.methodName}(){"{"}</div>
                                                                <div className="Indent-2"> ... </div>
                                                            </React.Fragment>
                                                        }
                                                        <div className="Indent-1"> {"}"} </div>
                                                        <div className="Indent-0"> {"}"} </div>
                                                    </div>
                                                    {this.props.typeName === 'String' || this.props.typeName === 'char' ||
                                                        this.props.typeName === 'short' || this.props.typeName === 'byte' ||
                                                        this.props.typeName === 'long' || this.props.typeName === 'int' || this.props.typeName === 'double' ||
                                                        this.props.typeName === 'boolean' || this.props.typeName === 'float'
                                                        ?
                                                        <React.Fragment>
                                                            <div className="Indent-0">{this.props.typeName} a = {this.props.methodName}(5);</div>
                                                        </React.Fragment>
                                                        :
                                                        <React.Fragment>
                                                            <div className="Indent-0"> {this.props.methodName}();</div>
                                                        </React.Fragment>
                                                    }
                                                </div>
                                            </div>
                                            <div className="CodeContainer">
                                                <div className="GreenCode">
                                                    <div className="Indent-0"> class {this.props.className}{"{"}
                                                        <div className="Indent-1"> {this.props.className}(){"{"}  </div>
                                                        <div className="Indent-2"> ... </div>
                                                        <div className="Indent-1"> {"}"} </div>
                                                        {this.props.typeName === 'String' || this.props.typeName === 'char' ||
                                                            this.props.typeName === 'short' || this.props.typeName === 'byte' ||
                                                            this.props.typeName === 'long' || this.props.typeName === 'int' || this.props.typeName === 'double' ||
                                                            this.props.typeName === 'boolean' || this.props.typeName === 'float'
                                                            ?
                                                            <React.Fragment>
                                                                <div className="Indent-1"> {this.props.typeName} {this.props.methodName}({this.props.typeName} s){"{"}</div>
                                                                <div className="Indent-2"> return s+1; </div>
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment>
                                                                <div className="Indent-1"> {this.props.typeName} {this.props.methodName}(){"{"}</div>
                                                                <div className="Indent-2"> ... </div>
                                                            </React.Fragment>
                                                        }
                                                        <div className="Indent-1"> {"}"} </div>
                                                        <div className="Indent-0"> {"}"} </div>
                                                    </div>
                                                    {this.props.typeName === 'String' || this.props.typeName === 'char' ||
                                                        this.props.typeName === 'short' || this.props.typeName === 'byte' ||
                                                        this.props.typeName === 'long' || this.props.typeName === 'int' || this.props.typeName === 'double' ||
                                                        this.props.typeName === 'boolean' || this.props.typeName === 'float'
                                                        ?
                                                        <React.Fragment>
                                                            <div className="Indent-0">{this.props.className} {this.props.varName} = new {this.props.className}()</div>
                                                            <div className="Indent-0">{this.props.typeName} a = {this.props.varName}.{this.props.methodName}(5);</div>
                                                        </React.Fragment>
                                                        :
                                                        <React.Fragment>
                                                            <div className="Indent-0"> {this.props.className} {this.props.varName} = new {this.props.className}()</div>
                                                            <div className="Indent-0"> {this.props.varName}.{this.props.methodName}();</div>
                                                        </React.Fragment>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div
                                    className="StrategyTile"
                                    onClick={() => this.openCodeExampleBoxOnly(32)}
                                >
                                    <div className="StrategyInstruction">
                                        <div className="StrategyMessage">
                                            <BlueCheckbox
                                                value="box1"
                                                checked={this.state.checked32}
                                                onChange={() => this.changeChecked(32)}
                                            />
                                            <div className="Suggestion">
                                                Suggestion 2: Create the method {" "}
                                                <p className="InputValue">{this.props.methodName}()</p> in {" "}
                                                 class <p className="InputValue">{this.props.className}</p>
                                            </div>
                                        </div>
                                        {!this.state.openCode32 && (
                                            <div className="ButtonHolder">
                                                <img
                                                    onClick={() => this.openCodeExample(32)}
                                                    src={PlusButton}
                                                    alt="down-button"
                                                    width="20"
                                                    height="20"
                                                ></img>
                                            </div>
                                        )}
                                        {this.state.openCode32 && (
                                            <div className="ButtonHolder">
                                                <img
                                                    onClick={() => this.openCodeExample(32)}
                                                    src={MinusButton}
                                                    alt="up-button"
                                                    width="20"
                                                    height="20"
                                                ></img>
                                            </div>
                                        )}
                                    </div>
                                    {this.state.openCode32 && (
                                        <div className="CodeExample">
                                            <div className="CodeContainer">
                                                <div className="RedCode">
                                                    <div className="Indent-0"> class {this.props.className}{"{"}
                                                        <div className="Indent-1"> {this.props.className}(){"{"}  </div>
                                                        <div className="Indent-2"> ... </div>
                                                        <div className="Indent-1"> {"}"} </div>
                                                        <div className="Indent-0"> {"}"} </div>
                                                    </div>
                                                    {this.props.typeName === 'String' || this.props.typeName === 'char' ||
                                                        this.props.typeName === 'short' || this.props.typeName === 'byte' ||
                                                        this.props.typeName === 'long' || this.props.typeName === 'int' || this.props.typeName === 'double' ||
                                                        this.props.typeName === 'boolean' || this.props.typeName === 'float'
                                                        ?
                                                        <React.Fragment>
                                                            <div className="Indent-0">{this.props.className} {this.props.varName} = new {this.props.className}()</div>
                                                            <div className="Indent-0">{this.props.typeName} a = {this.props.varName}.{this.props.methodName}(5);</div>
                                                        </React.Fragment>
                                                        :
                                                        <React.Fragment>
                                                            <div className="Indent-0"> {this.props.className} {this.props.varName} = new {this.props.className}()</div>
                                                            <div className="Indent-0"> {this.props.varName}.{this.props.methodName}();</div>
                                                        </React.Fragment>
                                                    }
                                                </div>
                                            </div>
                                            <div className="CodeContainer">
                                                <div className="GreenCode">
                                                <div className="Indent-0"> class {this.props.className}{"{"}
                                                        <div className="Indent-1"> {this.props.className}(){"{"}  </div>
                                                        <div className="Indent-2"> ... </div>
                                                        <div className="Indent-1"> {"}"} </div>
                                                        {this.props.typeName === 'String' || this.props.typeName === 'char' ||
                                                            this.props.typeName === 'short' || this.props.typeName === 'byte' ||
                                                            this.props.typeName === 'long' || this.props.typeName === 'int' || this.props.typeName === 'double' ||
                                                            this.props.typeName === 'boolean' || this.props.typeName === 'float'
                                                            ?
                                                            <React.Fragment>
                                                                <div className="Indent-1"> {this.props.typeName} {this.props.methodName}({this.props.typeName} s){"{"}</div>
                                                                <div className="Indent-2"> return s+1; </div>
                                                            </React.Fragment>
                                                            :
                                                            <React.Fragment>
                                                                <div className="Indent-1"> {this.props.typeName} {this.props.methodName}(){"{"}</div>
                                                                <div className="Indent-2"> ... </div>
                                                            </React.Fragment>
                                                        }
                                                        <div className="Indent-1"> {"}"} </div>
                                                        <div className="Indent-0"> {"}"} </div>
                                                    </div>
                                                    {this.props.typeName === 'String' || this.props.typeName === 'char' ||
                                                        this.props.typeName === 'short' || this.props.typeName === 'byte' ||
                                                        this.props.typeName === 'long' || this.props.typeName === 'int' || this.props.typeName === 'double' ||
                                                        this.props.typeName === 'boolean' || this.props.typeName === 'float'
                                                        ?
                                                        <React.Fragment>
                                                            <div className="Indent-0">{this.props.className} {this.props.varName} = new {this.props.className}()</div>
                                                            <div className="Indent-0">{this.props.typeName} a = {this.props.varName}.{this.props.methodName}(5);</div>
                                                        </React.Fragment>
                                                        :
                                                        <React.Fragment>
                                                            <div className="Indent-0"> {this.props.className} {this.props.varName} = new {this.props.className}()</div>
                                                            <div className="Indent-0"> {this.props.varName}.{this.props.methodName}();</div>
                                                        </React.Fragment>
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

export default MethodNotFound;

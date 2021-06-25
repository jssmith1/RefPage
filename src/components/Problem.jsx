import React from "react";
import MinusButton from "../assets/minus.svg";
import PlusButton from "../assets/plus.svg";
import "../App.css";

class Problem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    render() {
        return <div className="Tile">
            <div className="ErrorTile" onClick={() => this.state.open = true}>
                <div className="ErrorMessage">
                    <h4>
                        {this.props.title}
                        <div className="Indent-0">
                            (Tip: {this.props.tip})
                        </div>
                    </h4>
                </div>
                {!this.state.open && (
                    <div className="ButtonHolder">
                        <img
                            onClick={() => this.state.open = true}
                            src={PlusButton}
                            alt="down-button"
                            width="20"
                            height="20"
                        ></img>
                    </div>
                )}
                {this.state.open && (
                    <div className="ButtonHolder">
                        <img
                            onClick={() => this.state.open = false}
                            src={MinusButton}
                            alt="up-button"
                            width="20"
                            height="20"
                        ></img>
                    </div>
                )}
            </div>

            {this.state.open && (
                <div className="StrategyContainer">
                    <i>Tick the box once you have tried the suggestion.</i>
                    {this.props.children}
                </div>
            )}
        </div>;
    }
}

export default Problem;

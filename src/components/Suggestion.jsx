import React from "react";
import MinusButton from "../assets/minus.svg";
import PlusButton from "../assets/plus.svg";
import "../App.css";
import BlueCheckbox from './resources/blueCheckbox';
import BadExample from "./BadExample";
import GoodExample from "./GoodExample";

class Suggestion extends React.Component {

    constructor() {
        super();
        this.state = { open: false, checked: false };
    }

    render() {
        const badExamples = [];
        const goodExamples = [];
        const otherChildren = [];

        React.Children.forEach(this.props.children, (child) => {
            if (child.type.name === BadExample.name) {
                badExamples.push(child);
            } else if (child.type.name === GoodExample.name) {
                goodExamples.push(child);
            } else {
                otherChildren.push(child);
            }
        });

        return <div className="StrategyTile" onClick={() => {
            if (!this.state.open) {
                this.setState({ open: true });
            }
        }}>
            <div className="StrategyInstruction">
                <div className="StrategyMessage">
                    <BlueCheckbox
                        value="box1"
                        checked={this.state.checked}
                        onChange={() => this.setState({ checked: !this.state.checked, open: this.state.checked })}
                    />
                    <div className="Suggestion">
                        {this.props.title}
                    </div>
                </div>
                {!this.state.open && (
                    <div className="ButtonHolder">
                        <img
                            onClick={() => this.setState({ open: true })}
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
                            onClick={() => this.setState({ open: false })}
                            src={MinusButton}
                            alt="up-button"
                            width="20"
                            height="20"
                        ></img>
                    </div>
                )}
            </div>
            {this.state.open && (
                <div className="CodeExample">
                    <div className="CodeContainer">
                        {badExamples}
                    </div>
                    <div className="CodeContainer">
                        {goodExamples}
                    </div>

                    {otherChildren}
                </div>
            )}
        </div>;
    }
}

export default Suggestion;

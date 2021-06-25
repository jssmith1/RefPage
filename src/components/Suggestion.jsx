import React from "react";
import MinusButton from "../assets/minus.svg";
import PlusButton from "../assets/plus.svg";
import "../App.css";
import BlueCheckbox from './resources/blueCheckbox';

class Suggestion extends React.Component {

    constructor(props) {
        super(props);
        this.state = { checked: false, open: false };
    }

    render() {
        return <div className="StrategyTile" onClick={() => this.state.open = true}>
            <div className="StrategyInstruction">
                <div className="StrategyMessage">
                    <BlueCheckbox
                        value="box1"
                        checked={this.state.checked}
                        onChange={() => this.state.checked = !this.state.checked}
                    />
                    <div className="Suggestion">
                        {this.props.title}
                    </div>
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
                <div className="CodeExample">
                    {this.makeGoodCodeBoxes(props.badExamples)}
                    {this.makeGoodCodeBoxes(props.goodExamples)}
                </div>
            )}
        </div>;
    }

    makeBadCodeBoxes(examples) {
        return <div className="CodeContainer">
            {examples.map(this.makeBadCodeBox)}
        </div>;
    }

    makeBadCodeBox(example) {
        return <div className="RedCode">
            <div className="Indent-0">
                {example}
            </div>
        </div>;
    }

    makeGoodCodeBoxes(examples) {
        return <div className="CodeContainer">
            {examples.map(this.makeGoodCodeBox)}
        </div>;
    }

    makeGoodCodeBox(example) {
        return <div className="GreenCode">
            <div className="Indent-0">
                {example}
            </div>
        </div>;
    }
}

export default Suggestion;

import React from "react";
import "../App.css";

class CompilerError extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <div className="AppContent">
                    <div className="Title">
                        <h2>
                            {this.props.title}
                        </h2>
                    </div>

                    <h4>
                        <i>
                            {this.props.translation}
                        </i>
                    </h4>

                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default CompilerError;

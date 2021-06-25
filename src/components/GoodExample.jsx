import React from "react";

class GoodExample extends React.Component {

    render() {
        return <div className="GreenCode">
            {this.props.children}
        </div>;
    }

}

export default GoodExample;

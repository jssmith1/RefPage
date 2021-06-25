import React from "react";

class BadExample extends React.Component {

    render() {
        return <div className="RedCode">
            {this.props.children}
        </div>;
    }

}

export default BadExample;

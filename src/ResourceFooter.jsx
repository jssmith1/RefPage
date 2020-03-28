import React from "react";
import "./App.css";

class ResourceFooter extends React.Component {
  render() {
    return (
        <i>
        <h4>Still unable to fix this error? More resources</h4>
        <div className="Indent-1">
          <a href="https://stackoverflow.com/">Stack Overflow</a>
        </div>
        <div className="Indent-1">
          <a href="https://github.com/processing/processing/wiki/Common-Errors">
            Processing Common Errors
          </a>
        </div>
      </i>
    );
  }
}

export default ResourceFooter;

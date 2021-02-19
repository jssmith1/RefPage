import React from "react";
import "../../App.css";

class NonStaticFromStaticResourceFooter extends React.Component {
  render() {
    return (
        <i>
        <h4> More information on this</h4>
        <div className="Indent-1">
          <a href="https://processing.org/reference/static.html"  target="_blank" rel="noopener noreferrer" Link Here>
            Processing Reference
          </a>
        </div>
      </i>
    );
  }
}

export default NonStaticFromStaticResourceFooter;

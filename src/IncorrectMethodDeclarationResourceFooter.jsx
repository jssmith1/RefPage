import React from "react";
import "./App.css";

class IncorrectMethodDeclarationResourceFooter extends React.Component {
  render() {
    return (
        <i>
        <h4> More information on this</h4>
        <div className="Indent-1">
          <a href="https://stackoverflow.com/questions/6658827/processing-it-looks-like-youre-mixing-active-and-static-modes#:~:text=Static%20mode%20simply%20means%20it's,you're%20getting%20the%20error.">
            Stack Overflow
          </a>
        </div>
      </i>
    );
  }
}

export default IncorrectMethodDeclarationResourceFooter;

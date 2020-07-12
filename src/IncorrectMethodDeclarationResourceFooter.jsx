import React from "react";
import "./App.css";

class IncorrectMethodDeclarationResourceFooter extends React.Component {
  render() {
    return (
        <i>
        <h4> More information on this</h4>
        <div className="Indent-1">
          <a href="https://stackoverflow.com/questions/6658827/processing-it-looks-like-youre-mixing-active-and-static-modes#answer-6660645:~:text=Processing%20runs%20in%20two%20separate%20modes%3A%20static%20or%20active" target="_blank" Link Here>
            Stack Overflow
          </a>
        </div>
      </i>
    );
  }
}

export default IncorrectMethodDeclarationResourceFooter;

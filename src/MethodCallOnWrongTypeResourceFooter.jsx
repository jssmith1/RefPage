import React from "react";
import "./App.css";

class MethodCallOnWrongTypeResourceFooter extends React.Component {
  render() {
    return (
        <i>
        <h4> More information on this</h4>
        <div className="Indent-1">
          <a href="https://stackoverflow.com/questions/35462681/cannot-invoke-equalsstring-on-the-primitive-type-int-error#answer-35462851:~:text=.equals(String)%20is%20a%20method%20to%20check,to%20a%20human%2Dreadable%20form%2C%20of%20course)."  target="_blank" Link Here>
            Stack Overflow
          </a>
        </div>
      </i>
    );
  }
}

export default MethodCallOnWrongTypeResourceFooter;

import React from "react";
import "../../App.css";
import CompilerError from "../CompilerError";
import Problem from "../Problem";
import Suggestion from "../Suggestion";
import BadExample from "../BadExample";
import GoodExample from "../GoodExample";
import IncorrectMethodDeclarationResourceFooter from "../resourceFooters/IncorrectMethodDeclarationResourceFooter.jsx";

class IncorrectMethodDeclaration extends React.Component {

  render() {
    const LEFT_CURLY = "{";
    const RIGHT_CURLY = "}";

    const isSpecialMethod = ["setup", "draw"].includes(this.props.methodName);
    const parameterPlaceholder = isSpecialMethod ? "" : "/* parameters if any */";

    return <CompilerError title={"It looks like you're mixing \"active\" and \"static\" modes."}
      translation={`In Processing, "active" mode uses the setup() and draw() calls and keeps running. The "static" mode includes calls
    on both existing and user-made functions.`}
      embed={this.props.embed}>
      <Problem
        title={<>You may have forgotten to add the return type in the declaration of {<div className="InputValue">{this.props.methodName}()</div>}.</>}
      >
        <Suggestion title={<>Add the return type before {<div className="InputValue">{this.props.methodName}()</div>}.</>}>
          <BadExample>
            <div className="Indent-0">
              {this.props.methodName}({parameterPlaceholder}) {LEFT_CURLY}
            </div>
            <div className="Indent-1">...</div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0">
              void {this.props.methodName}({parameterPlaceholder}) {LEFT_CURLY}
            </div>
            <div className="Indent-1">...</div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
          </GoodExample>
        </Suggestion>
      </Problem>
      {!isSpecialMethod && <Problem
        title={<>You may have called on {<div className="InputValue">{this.props.methodName}()</div>} outside the setup() or draw() scope.</>}
      >
        <Suggestion title={<>Use the <div className="InputValue">{this.props.methodName}()</div> function inside setup().</>}>
          <BadExample>
            <div className="Indent-0"> {this.props.methodName}({parameterPlaceholder});  </div>
            <div className="Indent-0">
              void setup() {LEFT_CURLY}
            </div>
            <div className="Indent-1">...</div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0">
              void setup() {LEFT_CURLY}
            </div>
            <div className="Indent-1"> {this.props.methodName}({parameterPlaceholder});  </div>
            <div className="Indent-1">...</div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
          </GoodExample>
        </Suggestion>
        <Suggestion title={<>Use the <div className="InputValue">{this.props.methodName}()</div> function inside draw().</>}>
          <BadExample>
            <div className="Indent-0">
              void draw(){LEFT_CURLY}
            </div>
            <div className="Indent-1">...</div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
            <div className="Indent-0"> {this.props.methodName}({parameterPlaceholder});</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0">
              void draw(){LEFT_CURLY}
            </div>
            <div className="Indent-1"> {this.props.methodName}({parameterPlaceholder});</div>
            <div className="Indent-1">...</div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
          </GoodExample>
        </Suggestion>
      </Problem>}
      <IncorrectMethodDeclarationResourceFooter />
    </CompilerError>;
  }
}

export default IncorrectMethodDeclaration;

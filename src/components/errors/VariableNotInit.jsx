import React from "react";
import "../../App.css";
import CompilerError from "../CompilerError";
import Problem from "../Problem";
import Suggestion from "../Suggestion";
import BadExample from "../BadExample";
import GoodExample from "../GoodExample";

class VariableNotInit extends React.Component {

  render() {
    const LEFT_CURLY = "{";
    const RIGHT_CURLY = "}";

    return <CompilerError
      title={<>The local variable <p className="InputValue">{this.props.varName}</p> may not have been initialized</>}
      translation={<>You are trying to use the variable  <div className="InputValue">{this.props.varName}</div> before giving it a value.</>}
    >
      <Problem
        title={<>You may have declared variable <div className="InputValue">{this.props.varName}</div> and used it before giving it a value.</>}
      >
        <Suggestion title={<>Assign a value to <p className="InputValue">{this.props.varName}</p> at declaration.</>}>
          <BadExample>
            <div className="Indent-0">int {this.props.varName};</div>
            <div className="Indent-0">{this.props.varName} = {this.props.varName} + 1;</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0">int {this.props.varName} = 3;</div>
            <div className="Indent-0">{this.props.varName} = {this.props.varName} + 1;</div>
          </GoodExample>
        </Suggestion>
        <Suggestion title={<>Assign value to <p className="InputValue">{this.props.varName}</p> before using it.</>}>
          <BadExample>
            <div className="Indent-0">int {this.props.varName};</div>
            <div className="Indent-0">{this.props.varName} = {this.props.varName} + 1;</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0">int {this.props.varName};</div>
            <div className="Indent-0">{this.props.varName} = 3;</div>
            <div className="Indent-0">{this.props.varName} = {this.props.varName} + 1;</div>
          </GoodExample>
        </Suggestion>
      </Problem>
      <Problem
        title={<>You may have initialized <div className="InputValue">{this.props.varName}</div> and used it in different scopes.</>}
      >
        <Suggestion title={<>Have variable assignment and variable usage of <p className="InputValue">{this.props.varName}</p> in the same scope.</>}>
          <BadExample>
            <div className="Indent-0">int {this.props.varName};</div>
            <div className="Indent-0">int cond = 0;</div>
            <div className="Indent-0">if (cond == 0) {LEFT_CURLY} </div>
            <div className="Indent-1">{this.props.varName} = 3;</div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
            <div className="Indent-0">{this.props.varName} = {this.props.varName} + 1;</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0">int {this.props.varName};</div>
            <div className="Indent-0">int cond = 0;</div>
            <div className="Indent-0">if (cond == 0) {LEFT_CURLY}</div>
            <div className="Indent-1">{this.props.varName} = 3;</div>
            <div className="Indent-1">{this.props.varName} = {this.props.varName} + 1;</div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
          </GoodExample>
        </Suggestion>
      </Problem>
    </CompilerError>;
  }
}

export default VariableNotInit;

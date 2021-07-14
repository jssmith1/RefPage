import React from "react";
import "../../App.css";
import CompilerError from "../CompilerError";
import Problem from "../Problem";
import Suggestion from "../Suggestion";
import BadExample from "../BadExample";
import GoodExample from "../GoodExample";

class VariableNotInit extends React.Component {

  render() {
    console.log(this.props.typeName);
    const typeToValue = {
      String: "\"example\"",
      char: "'s'",
      boolean: "true",
      double: "5.0",
      float: "5.0",
      byte: "5",
      short: "5",
      int: "5",
      long: "5"
    };

    const typeToUsage = {
      String: "+ \"hello\"",
      char: "+ 't'",
      boolean: "== false",
      double: "+ 3.0",
      float: "+ 3.0",
      byte: "+ 2",
      short: "+ 2",
      int: "+ 2",
      long: "+ 2"
    };

    const knownTypes = ["String", "boolean", "char", "float", "double", "int", "short", "byte", "long"];

    const isKnownType = knownTypes.includes(this.props.typeName);
    const demoValue = isKnownType ? typeToValue[this.props.typeName] : `new ${this.props.typeName}(1)`;
    const demoUsage = isKnownType ? `${this.props.varName} = ${this.props.varName} ${typeToUsage[this.props.typeName]};` : `${this.props.varName}.someMethod();`;

    const LEFT_CURLY = "{";
    const RIGHT_CURLY = "}";

    return <CompilerError
      title={<>The local variable <p className="InputValue">{this.props.varName}</p> may not have been initialized</>}
      translation={<>You are trying to use the variable  <div className="InputValue">{this.props.varName}</div> before giving it a value.</>}
      embed={this.props.embed}
    >
      <Problem
        title={<>You may have declared variable <div className="InputValue">{this.props.varName}</div> and used it before giving it a value.</>}
      >
        <Suggestion title={<>Assign a value to <p className="InputValue">{this.props.varName}</p> at declaration.</>}>
          <BadExample>
            <div className="Indent-0">{this.props.typeName} {this.props.varName};</div>
            <div className="Indent-0">{demoUsage}</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0">{this.props.typeName} {this.props.varName} = {demoValue};</div>
            <div className="Indent-0">{demoUsage}</div>
          </GoodExample>
        </Suggestion>
        <Suggestion title={<>Assign value to <p className="InputValue">{this.props.varName}</p> before using it.</>}>
          <BadExample>
            <div className="Indent-0">{this.props.typeName} {this.props.varName};</div>
            <div className="Indent-0">{demoUsage}</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0">{this.props.typeName} {this.props.varName};</div>
            <div className="Indent-0">{this.props.varName} = {demoValue};</div>
            <div className="Indent-0">{demoUsage}</div>
          </GoodExample>
        </Suggestion>
      </Problem>
      <Problem
        title={<>You may have initialized <div className="InputValue">{this.props.varName}</div> and used it in different scopes.</>}
      >
        <Suggestion title={<>Have variable assignment and variable usage of <p className="InputValue">{this.props.varName}</p> in the same scope.</>}>
          <BadExample>
            <div className="Indent-0">{this.props.typeName} {this.props.varName};</div>
            <div className="Indent-0">int cond = 0;</div>
            <div className="Indent-0">if (cond == 0) {LEFT_CURLY} </div>
            <div className="Indent-1">{this.props.varName} = {demoValue};</div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
            <div className="Indent-0">{demoUsage}</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0">{this.props.typeName} {this.props.varName};</div>
            <div className="Indent-0">int cond = 0;</div>
            <div className="Indent-0">if (cond == 0) {LEFT_CURLY}</div>
            <div className="Indent-1">{this.props.varName} = {demoValue};</div>
            <div className="Indent-1">{demoUsage}</div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
          </GoodExample>
        </Suggestion>
      </Problem>
    </CompilerError>;
  }
}

export default VariableNotInit;

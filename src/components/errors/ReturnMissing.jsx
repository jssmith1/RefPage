import React from "react";
import "../../App.css";
import CompilerError from "../CompilerError";
import Problem from "../Problem";
import Suggestion from "../Suggestion";
import BadExample from "../BadExample";
import GoodExample from "../GoodExample";

class ReturnMissing extends React.Component {

  render() {
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

    const typeToSecondValue = {
      String: "\"hello\"",
      char: "'t'",
      boolean: "false",
      double: "3.0",
      float: "3.0",
      byte: "2",
      short: "2",
      int: "2",
      long: "2"
    };

    const knownTypes = ["String", "boolean", "char", "float", "double", "int", "short", "byte", "long"];

    const demoValue = knownTypes.includes(this.props.typeName) ? typeToValue[this.props.typeName] : `new ${this.props.typeName}(1)`;
    const extraDemoValue = knownTypes.includes(this.props.typeName) ? typeToSecondValue[this.props.typeName] : `new ${this.props.typeName}(2)`;

    const demoConditional = "/* a condition */";

    const requiredTypes = this.props.requiredTypes.split(",");
    const numParams = requiredTypes.length;
    let separatedDeclarationArgs = [];
    if (requiredTypes[0].length > 0) {
      separatedDeclarationArgs = [...Array(numParams).keys()].map((index) => `${requiredTypes[index]} param${index + 1}`);
    }
    const declarationArgs = separatedDeclarationArgs.join(", ");

    const LEFT_CURLY = "{";
    const RIGHT_CURLY = "}";

    // eslint-disable-next-line
    const abbreviatedComment = "/* your code */";

    return <CompilerError
      title={<>This method must return a result of type{" "}
        <div className="InputValue">{this.props.typeName}</div></>}
      translation={<>You did not return a value of type{" "}
        <div className="InputValue">{this.props.typeName}</div> like the definition of method{" "}
        <div className="InputValue">{this.props.methodName}()</div>.</>}
      embed={this.props.embed}
    >
      <Problem
        title={<>You may have forgotten the return statement for the method{" "}
          <p className="InputValue">{this.props.methodName}()</p>.</>}
      >
        <Suggestion title={<>Add a return statement of type{" "}
          <p className="InputValue">{this.props.typeName}</p> at the end of the method{" "}
          <p className="InputValue">{this.props.methodName}()</p>.</>}>
          <BadExample>
            <div className="Indent-0">{this.props.typeName} {this.props.methodName}({declarationArgs}) {LEFT_CURLY}</div>
            <div className="Indent-1"> {abbreviatedComment}</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0">{this.props.typeName} {this.props.methodName}({declarationArgs}) {LEFT_CURLY}</div>
            <div className="Indent-1"> {abbreviatedComment}</div>
            <div className="Indent-1"> return {demoValue};</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
          </GoodExample>
        </Suggestion>
      </Problem>
      <Problem
        title={<>You may have missed the return statement in some branches
          of the method{" "}
          <p className="InputValue">{this.props.methodName}()</p>.</>}
      >
        <Suggestion title={<>Make sure all branches of conditionals in method{" "}
          <p className="InputValue">{this.props.methodName}()</p>{" "} return value of type{" "}
          <p className="InputValue">{this.props.typeName}</p>.</>}>
          <BadExample>
            <div className="Indent-0">{this.props.typeName} {this.props.methodName}({declarationArgs}) {LEFT_CURLY}</div>
            <div className="Indent-1"> if ({demoConditional}) return {extraDemoValue};</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0">{this.props.typeName} {this.props.methodName}({declarationArgs}) {LEFT_CURLY}</div>
            <div className="Indent-1"> if ({demoConditional}) return {extraDemoValue};</div>
            <div className="Indent-1"> return {demoValue};</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
          </GoodExample>
          <GoodExample>
            <div className="Indent-0">{this.props.typeName} {this.props.methodName}({declarationArgs}) {LEFT_CURLY}</div>
            <div className="Indent-1"> if ({demoConditional}) {LEFT_CURLY}</div>
            <div className="Indent-2"> return {extraDemoValue};</div>
            <div className="Indent-1"> {RIGHT_CURLY} else {LEFT_CURLY}</div>
            <div className="Indent-2"> return {demoValue};</div>
            <div className="Indent-1"> {RIGHT_CURLY}</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
          </GoodExample>
        </Suggestion>
      </Problem>
    </CompilerError>;
  }
}

export default ReturnMissing;
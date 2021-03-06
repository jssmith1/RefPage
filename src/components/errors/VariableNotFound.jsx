import React from "react";
import "../../App.css";
import CompilerError from "../CompilerError";
import Problem from "../Problem";
import Suggestion from "../Suggestion";
import BadExample from "../BadExample";
import GoodExample from "../GoodExample";

class VariableNotFound extends React.Component {

  makeDemoValue(typeName) {
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

    const knownTypes = ["String", "boolean", "char", "float", "double", "int", "short", "byte", "long"];

    if (knownTypes.includes(typeName)) {
      return typeToValue[typeName];
    } else if (typeName.endsWith("[]")) {
      return `new ${typeName.replace("[]", "[5]")}`;
    } else {
      return `new ${typeName}()`;
    }

  }

  render() {
    const LEFT_CURLY = "{";
    const RIGHT_CURLY = "}";

    // eslint-disable-next-line
    const abbreviatedComment = "/* your code */";

    const demoValue = this.makeDemoValue(this.props.className);

    return <CompilerError
      title={<><div className="InputValue">{this.props.varName}</div> cannot be resolved to a variable</>}
      translation={<>You are trying to use a variable named <div className="InputValue">{this.props.varName}</div> which does not exist yet.</>}
      embed={this.props.embed}
    >
      <Problem
        title={<>You may have forgotten to declare variable <div className="InputValue">{this.props.varName}</div>.</>}
      >
        <Suggestion title={<>Add variable declaration for{" "}
          <p className="InputValue">{this.props.varName}</p>{" "}
          before the first occurence of{" "}
          <p className="InputValue">{this.props.varName}</p> in the code.</>}>
          <BadExample>
            <div className="Indent-0">print({this.props.varName});</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0">{this.props.className} {this.props.varName} = {demoValue};</div>
            <div className="Indent-0">print({this.props.varName});</div>
          </GoodExample>
        </Suggestion>
      </Problem>
      <Problem
        title={<>You may have mistyped variable name <div className="InputValue">{this.props.varName}</div>.</>}
      >
        <Suggestion title={<>Change <p className="InputValue">{this.props.varName}</p> to the variable name that you have defined.</>}>
          <BadExample>
            <div className="Indent-0">{this.props.className} correctName  = {demoValue};</div>
            <div className="Indent-0">{abbreviatedComment}</div>
            <div className="Indent-0">print({this.props.varName});</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0">{this.props.className} correctName  = {demoValue};</div>
            <div className="Indent-0">{abbreviatedComment}</div>
            <div className="Indent-0">print(correctName);</div>
          </GoodExample>
        </Suggestion>
      </Problem>
      <Problem
        title={<>You may have used variable <div className="InputValue">{this.props.varName}</div> in the incorrect scope.</>}
      >
        <Suggestion title={<>Move <p className="InputValue">{this.props.varName}</p> to the same function with its declaration.</>}>
          <BadExample>
            <div className="Indent-0">void setup() {LEFT_CURLY}</div>
            <div className="Indent-1">{this.props.className} {this.props.varName} = {demoValue};</div>
            <div className="Indent-1">{abbreviatedComment}</div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
            <div className="Indent-0">void draw() {LEFT_CURLY}</div>
            <div className="Indent-1">println({this.props.varName});</div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0">void draw() {LEFT_CURLY}</div>
            <div className="Indent-1">{this.props.className} {this.props.varName}  = {demoValue};</div>
            <div className="Indent-1">{abbreviatedComment}</div>
            <div className="Indent-1">println({this.props.varName});</div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
          </GoodExample>
        </Suggestion>
        <Suggestion title={<>Move <p className="InputValue">{this.props.varName}</p> to the same or smaller scope than its declaration.</>}>
          <BadExample>
            <div className="Indent-0">while (i != count) {LEFT_CURLY}</div>
            <div className="Indent-1">{this.props.className} {this.props.varName}  = {demoValue};</div>
            <div className="Indent-1">i++;</div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
            <div className="Indent-0">println({this.props.varName});</div>
          </BadExample>
          <BadExample>
            <div className="Indent-0">void setup() {LEFT_CURLY}</div>
            <div className="Indent-1">{this.props.className} {this.props.varName}  = {demoValue};</div>
            <div className="Indent-1">{abbreviatedComment}</div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
            <div className="Indent-0">void draw() {LEFT_CURLY}</div>
            <div className="Indent-1">println({this.props.varName});</div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0">while (i != count) {LEFT_CURLY}</div>
            <div className="Indent-1">{this.props.className} {this.props.varName}  = {demoValue};</div>
            <div className="Indent-1">println({this.props.varName});</div>
            <div className="Indent-1">i++;</div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
          </GoodExample>
          <GoodExample>
            <div className="Indent-0">{this.props.className} {this.props.varName};</div>
            <div className="Indent-0">void setup() {LEFT_CURLY}</div>
            <div className="Indent-1">{this.props.varName}  = {demoValue};</div>
            <div className="Indent-1">{abbreviatedComment}</div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
            <div className="Indent-0">void draw() {LEFT_CURLY}</div>
            <div className="Indent-1">println({this.props.varName});</div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
          </GoodExample>
        </Suggestion>
      </Problem>
      <Problem
        title={<>You may have made a syntax error while declaring an array of <div className="InputValue">{this.props.varName}</div> objects.</>}
      >
        <Suggestion title={<>Add the word 'new' before the object name.</>}>
          <BadExample>
            <div className="Indent-0"> class {this.props.varName} {LEFT_CURLY} {abbreviatedComment} {RIGHT_CURLY} </div>
            <div className="Indent-0">{this.props.varName}[] example = {this.props.varName}[5];</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0">class {this.props.varName} {LEFT_CURLY} {abbreviatedComment} {RIGHT_CURLY} </div>
            <div className="Indent-0">{this.props.varName}[] example = new {this.props.varName}[5];</div>
          </GoodExample>
        </Suggestion>
      </Problem>
    </CompilerError>;
  }

}

export default VariableNotFound;

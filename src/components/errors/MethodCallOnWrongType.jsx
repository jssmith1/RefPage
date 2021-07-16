import React from "react";
import "../../App.css";
import CompilerError from "../CompilerError";
import Problem from "../Problem";
import Suggestion from "../Suggestion";
import BadExample from "../BadExample";
import GoodExample from "../GoodExample";
import MethodCallOnWrongTypeResourceFooter from "../resourceFooters/MethodCallOnWrongTypeResourceFooter.jsx";

class MethodCallOnWrongType extends React.Component {

  render() {
    const LEFT_CURLY = "{";
    const RIGHT_CURLY = "}";

    const type = this.props.typeName;
    const knownTypes = ["boolean", "char", "float", "double", "byte", "short", "int", "long"];

    const typeDescription = knownTypes.includes(type) ? "primitive" : "array";
    const nonArrayType = type.includes("[") ? type.substring(0, type.indexOf('[')) : type;

    let exampleAssignment;
    if (!knownTypes.includes(type)) {
      exampleAssignment = `${this.props.varName}[0] = `;
    } else if (knownTypes.includes(this.props.returnType)) {
      exampleAssignment = `${this.props.returnType} s2 = `;
    } else {
      exampleAssignment = "";
    }

    const demoValue = knownTypes.includes(type) ? {
      char: "'s'",
      boolean: "true",
      double: "5.0",
      float: "5.0",
      byte: "5",
      short: "5",
      int: "5",
      long: "5"
    }[type] : `new ${nonArrayType}[5]`;

    // eslint-disable-next-line
    const abbreviatedComment = "/* your code */";
    const exampleVarName = "example";
    const exampleClassName = "YourClass";

    return <CompilerError
      title={<>Cannot invoke <div className="InputValue">{this.props.methodName}()</div> on <div className="InputValue">{typeDescription}</div> type <div className="InputValue">{type}</div>.</>}
      translation={
        <>You are trying to use a method{" "}
          <div className="InputValue">{this.props.methodName}()</div> on <div className="InputValue">{typeDescription}</div> {" "}
          type of data <div className="InputValue">{type}</div>. Methods can't be applied to{" "}
          <div className="InputValue">{typeDescription}</div> types, which include{" "}
          boolean, byte, char, short, int, long, float, and double.</>
      }
      embed={this.props.embed}
    >
      <Problem
        title={
          <>You may have tried to use the method <div className="InputValue">{this.props.methodName}()</div> {" "}
            that you created globally, on <div className="InputValue">{typeDescription}</div> type <div className="InputValue">{type}</div>.{" "}
            (Global methods are made outside setup() and draw(),{" "}
            and can be accessed anywhere in the code.)</>
        }
      >
        <Suggestion title={<>Use <div className="InputValue">{this.props.methodName}()</div> by itself, and assign it to a proper type variable.</>}>
          <BadExample>
            <div className="Indent-0"> {this.props.returnType} {this.props.methodName}() {LEFT_CURLY}</div>
            <div className="Indent-1"> {abbreviatedComment} </div>
            <div className="Indent-0"> {RIGHT_CURLY} </div>
            <div className="Indent-0"> {type} {this.props.varName} = {demoValue}; </div>
            <div className="Indent-0"> {exampleAssignment}{this.props.varName}.{this.props.methodName}();</div>
          </BadExample>

          <GoodExample>
            <div className="Indent-0"> {this.props.returnType} {this.props.methodName}() {LEFT_CURLY}</div>
            <div className="Indent-1"> {abbreviatedComment}</div>
            <div className="Indent-0"> {RIGHT_CURLY} </div>
            <div className="Indent-0"> {type} {this.props.varName} = {demoValue}; </div>
            <div className="Indent-0"> {exampleAssignment}{this.props.methodName}();</div>
          </GoodExample>
        </Suggestion>
      </Problem>
      <Problem
        title={
          <>You may have used the method <div className="InputValue">{this.props.methodName}()</div> of class {" "}
            <div className="InputValue">{exampleClassName}</div> {" "}
            that you created on <div className="InputValue">{typeDescription}</div> type <div className="InputValue">{type}.</div></>
        }
      >
        <Suggestion title={
          <>Create a <div className="InputValue">{exampleClassName}</div> {" "}
            object and call <div className="InputValue">{this.props.methodName}()</div> on it.</>
        }>
          <BadExample>
            <div className="Indent-0"> class {exampleClassName} {LEFT_CURLY}</div>
            <div className="Indent-1"> {this.props.returnType} {this.props.methodName}() {LEFT_CURLY}</div>
            <div className="Indent-2"> {abbreviatedComment} </div>
            <div className="Indent-1"> {RIGHT_CURLY} </div>
            <div className="Indent-0"> {RIGHT_CURLY} </div>
            <div className="Indent-0"> {type} {this.props.varName} = {demoValue};</div>
            <div className="Indent-0"> {exampleAssignment}{this.props.varName}.{this.props.methodName}();</div>
          </BadExample>

          <GoodExample>
            <div className="Indent-0"> class {exampleClassName} {LEFT_CURLY}</div>
            <div className="Indent-1"> {this.props.returnType} {this.props.methodName}() {LEFT_CURLY}</div>
            <div className="Indent-2"> {abbreviatedComment} </div>
            <div className="Indent-1"> {RIGHT_CURLY} </div>
            <div className="Indent-0"> {RIGHT_CURLY} </div>
            <div className="Indent-0"> {exampleClassName} {exampleVarName} = new {exampleClassName}();</div>
            <div className="Indent-0"> {type} {this.props.varName} = {demoValue};</div>
            <div className="Indent-0"> {exampleAssignment}{exampleVarName}.{this.props.methodName}();</div>
          </GoodExample>
        </Suggestion>
      </Problem>
      <Problem
        title={
          <>You may have used an existing method <div className="InputValue">{this.props.methodName}()</div> {" "}
            on a <div className="InputValue">{typeDescription}</div> type <div className="InputValue">{type}.</div></>
        }
      >
        <Suggestion title={
          <>Change the variable you are using <p className="InputValue">{this.props.methodName}()</p> on.</>
        }>
          <BadExample>
            <div className="Indent-0"> String {exampleVarName} = "{exampleVarName}";</div>
            <div className="Indent-0"> {type} {this.props.varName} = {demoValue}; </div>
            <div className="Indent-0"> {exampleAssignment}{this.props.varName}.{this.props.methodName}(); </div>
          </BadExample>

          <GoodExample>
            <div className="Indent-0"> String {exampleVarName} = "{exampleVarName}";</div>
            <div className="Indent-0"> {type} {this.props.varName} = {demoValue}; </div>
            <div className="Indent-0"> {exampleAssignment}{exampleVarName}.{this.props.methodName}(); </div>
          </GoodExample>
        </Suggestion>
      </Problem>
      <MethodCallOnWrongTypeResourceFooter />
    </CompilerError>;
  }
}

export default MethodCallOnWrongType;

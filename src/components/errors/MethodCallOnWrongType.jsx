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
    const isPrimitive = this.props.typeTwoName === 'boolean' || this.props.typeTwoName === 'char' ||
      this.props.typeTwoName === 'float' || this.props.typeTwoName === 'double' || this.props.typeTwoName === 'int' ||
      this.props.typeTwoName === 'short' || this.props.typeTwoName === 'byte' || this.props.typeTwoName === 'long';

    const type = this.props.typeTwoName;
    const typeDescription = isPrimitive ? "primitive" : "array";
    const nonArrayType = type.includes("[") ? type.substring(0, type.indexOf('[')) : type;
    const exampleAssignment = isPrimitive ? `${type} s2` : `s1[0]`;

    const demoValue = isPrimitive ? {
      char: "'s'",
      boolean: "true",
      double: "5.0",
      float: "5.0",
      byte: "5",
      short: "5",
      int: "5",
      long: "5"
    }[type] : `new ${nonArrayType}[5]`;


    return <CompilerError
      title={<>Cannot invoke <div className="InputValue">{this.props.methodName}()</div> on <div className="InputValue">{typeDescription}</div> type <div className="InputValue">{type}</div>.</>}
      translation={
        <>You are trying to use a method{" "}
          <div className="InputValue">{this.props.methodName}()</div> on <div className="InputValue">{typeDescription}</div> {" "}
          type of data <div className="InputValue">{type}</div>. Methods can't be applied to{" "}
          <div className="InputValue">{typeDescription}</div> types, which include{" "}
          boolean, byte, char, short, int, long, float and double.</>
      }
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
            <div className="Indent-0"> {nonArrayType} {this.props.methodName}() {LEFT_CURLY}</div>
            <div className="Indent-1"> ...</div>
            <div className="Indent-0"> {RIGHT_CURLY} </div>
            <div className="Indent-0"> {type} s1 = {demoValue}; </div>
            <div className="Indent-0"> {exampleAssignment} = s1.{this.props.methodName}();</div>
          </BadExample>

          <GoodExample>
            <div className="Indent-0"> {nonArrayType} {this.props.methodName}() {LEFT_CURLY}</div>
            <div className="Indent-1"> ...</div>
            <div className="Indent-0"> {RIGHT_CURLY} </div>
            <div className="Indent-0"> {type} s1 = {demoValue}; </div>
            <div className="Indent-0"> {exampleAssignment} = {this.props.methodName}();</div>
          </GoodExample>
        </Suggestion>
      </Problem>
      <Problem
        title={
          <>You may have used the method <div className="InputValue">{this.props.methodName}()</div> of class {" "}
            <div className="InputValue">{this.props.className}</div> {" "}
            that you created, on <div className="InputValue">{typeDescription}</div> type <div className="InputValue">{type}.</div></>
        }
      >
        <Suggestion title={
          <>Create a <div className="InputValue">{this.props.className}</div> {" "}
            object and call <div className="InputValue">{this.props.methodName}()</div> on it.</>
        }>
          <BadExample>
            <div className="Indent-0"> class {this.props.className}{"{"}</div>
            <div className="Indent-1"> {this.props.className}(){"{"}</div>
            <div className="Indent-2"> ... </div>
            <div className="Indent-1"> {"}"} </div>
            <div className="Indent-0"> </div>
            <div className="Indent-1"> {nonArrayType} {this.props.methodName}(){"{"}</div>
            <div className="Indent-2"> ... </div>
            <div className="Indent-1"> {"}"} </div>
            <div className="Indent-0"> {"}"} </div>
            <div className="Indent-0">{type} s1 = {demoValue};</div>
            <div className="Indent-0">{exampleAssignment} = s1.{this.props.methodName}();</div>
          </BadExample>

          <GoodExample>
            <div className="Indent-0"> class {this.props.className}{"{"}</div>
            <div className="Indent-1"> {this.props.className}(){"{"}</div>
            <div className="Indent-2"> ... </div>
            <div className="Indent-1"> {"}"} </div>
            <div className="Indent-0"> </div>
            <div className="Indent-1"> {nonArrayType} {this.props.methodName}(){"{"}</div>
            <div className="Indent-2"> ... </div>
            <div className="Indent-1"> {"}"} </div>
            <div className="Indent-0"> {"}"} </div>
            <div className="Indent-0"> {this.props.className} {this.props.varName} = new {this.props.className}();</div>
            <div className="Indent-0">{type} s1 = {demoValue};</div>
            <div className="Indent-0">{exampleAssignment} = {this.props.varName}.{this.props.methodName}();</div>
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
          <>Create a <div className="InputValue">{this.props.className}</div> {" "}
            object and call <div className="InputValue">{this.props.methodName}()</div> on it.</>
        }>
          <BadExample>
            <div className="Indent-0"> String {this.props.varName}  = "{this.props.varName}";</div>
            <div className="Indent-0"> {type} s1 = {demoValue}; </div>
            <div className="Indent-0"> {exampleAssignment} = s1.{this.props.methodName}(); </div>
          </BadExample>

          <GoodExample>
            <div className="Indent-0"> String {this.props.varName}  = "{this.props.varName}";</div>
            <div className="Indent-0"> {type} s1 = {demoValue}; </div>
            <div className="Indent-0"> {exampleAssignment} = {this.props.varName}.{this.props.methodName}(); </div>
          </GoodExample>
        </Suggestion>
      </Problem>
      <MethodCallOnWrongTypeResourceFooter />
    </CompilerError>;
  }
}

export default MethodCallOnWrongType;

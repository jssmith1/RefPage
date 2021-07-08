import React from "react";
import "../../App.css";
import CompilerError from "../CompilerError";
import Problem from "../Problem";
import Suggestion from "../Suggestion";
import BadExample from "../BadExample";
import GoodExample from "../GoodExample";
import ParameterMismatchResourceFooter from "../resourceFooters/ParameterMismatchResourceFooter.jsx";

class ParameterMismatch extends React.Component {

  render() {
    const providedTypes = this.props.providedTypes.split(",");
    const requiredTypes = this.props.requiredTypes.split(",")
    const hasRightParamCount = providedTypes.length === requiredTypes.length;

    let separatedDeclarationArgs = [];
    let separatedCorrectedDeclarationArgs = [];
    if (requiredTypes[0].length > 0) {
      separatedDeclarationArgs = [...Array(requiredTypes.length).keys()].map((index) => `${requiredTypes[index]} param${index + 1}`);
    }
    if (providedTypes[0].length > 0) {
      separatedCorrectedDeclarationArgs = [...Array(providedTypes.length).keys()].map((index) => `${providedTypes[index]} param${index + 1}`);
    }

    const declarationArgs = separatedDeclarationArgs.join(", ");
    const correctedDeclarationArgs = separatedCorrectedDeclarationArgs.join(", ");

    const providedTypeList = providedTypes.join(", ");
    const requiredTypeList = requiredTypes.join(", ");

    const knownTypes = ["String", "boolean", "char", "float", "double", "int", "short", "byte", "long", ""];
    const typeToValue = {
      String: "\"example\"",
      char: "'s'",
      boolean: "true",
      double: "2.5",
      float: "5.0",
      byte: "1",
      short: "2",
      int: "3",
      long: "4",
      "": ""          // If the method has no arguments, the type will be empty
    };
    
    const providedArgs = providedTypes.map((type) => knownTypes.includes(type) ? typeToValue[type] : `new ${type}()`).join(", ");
    const correctedArgs = requiredTypes.map((type) => knownTypes.includes(type) ? typeToValue[type] : `new ${type}()`).join(", ");

    const LEFT_CURLY = "{";
    const RIGHT_CURLY = "}";

    // eslint-disable-next-line
    const abbreviatedComment = "/* your code */";

    return <CompilerError
      title={<>The method “<div className="InputValue">{this.props.methodName}({requiredTypeList})</div>”
        in the type <div className="InputValue">{this.props.className}</div> is not applicable for the
        arguments <div className="InputValue">({providedTypeList}) </div></>}
      translation={<>You are trying to use the method “
        <div className="InputValue">{this.props.methodName}({requiredTypeList})</div>” but
        with the incorrect parameters.</>}
      embed={this.props.embed}
    >
      {hasRightParamCount && <Problem
        title={<>You may have used the wrong type of parameter for
          the method <div className="InputValue">{this.props.methodName}({requiredTypeList})</div>.</>}
      >
        <Suggestion title={<>Change the parameter of{" "}
          <p className="InputValue">{this.props.methodName}({requiredTypeList})</p> to the expected type.</>}>
          <BadExample>
            <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
            <div className="Indent-1"> {this.props.methodName}({providedArgs});</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
            <div className="Indent-0"> {this.props.methodTypeName} {this.props.methodName}({declarationArgs}){LEFT_CURLY}</div>
            <div className="Indent-1"> {abbreviatedComment}</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
            <div className="Indent-1"> {this.props.methodName}({correctedArgs});</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
            <div className="Indent-0"> {this.props.methodTypeName} {this.props.methodName}({declarationArgs}){LEFT_CURLY}</div>
            <div className="Indent-1"> {abbreviatedComment}</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
          </GoodExample>
        </Suggestion>
        <Suggestion title={<>Change the parameter of{" "}
          <p className="InputValue">{this.props.methodName}({requiredTypeList})</p> in
          the method declaration to match with  <p className="InputValue">{providedTypeList}</p>.</>}>
          <BadExample>
            <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
            <div className="Indent-1"> {this.props.methodName}({providedArgs});</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
            <div className="Indent-0"> {this.props.methodTypeName} {this.props.methodName}({declarationArgs}){LEFT_CURLY}</div>
            <div className="Indent-1"> {abbreviatedComment}</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
            <div className="Indent-1"> {this.props.methodName}({providedArgs});</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
            <div className="Indent-0"> {this.props.methodTypeName} {this.props.methodName}({correctedDeclarationArgs}){LEFT_CURLY}</div>
            <div className="Indent-1"> {abbreviatedComment}</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
          </GoodExample>
        </Suggestion>
      </Problem>}
      {!hasRightParamCount && <Problem
        title={<>You may have used the wrong number of parameters for the method{" "}
          <p className="InputValue">{this.props.methodName}({requiredTypeList})</p>.</>}
      >
        <Suggestion title={<>Change the number of parameters to the expected amount when calling{" "}
          <p className="InputValue">{this.props.methodName}({requiredTypeList})</p>.</>}>
          <BadExample>
            <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
            <div className="Indent-1"> {this.props.methodName}({providedArgs});</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
            <div className="Indent-0"> void {this.props.methodName}({declarationArgs}){LEFT_CURLY}</div>
            <div className="Indent-1"> {abbreviatedComment}</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
            <div className="Indent-1"> {this.props.methodName}({correctedArgs});</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
            <div className="Indent-0"> void {this.props.methodName}({declarationArgs}){LEFT_CURLY}</div>
            <div className="Indent-1"> {abbreviatedComment}</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
          </GoodExample>
        </Suggestion>
        <Suggestion title={<>Change the number of parameters in the {" "}
          <p className="InputValue">{this.props.methodName}({requiredTypeList})</p> method.</>}>
          <BadExample>
            <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
            <div className="Indent-1"> {this.props.methodName}({providedArgs});</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
            <div className="Indent-0"> void {this.props.methodName}({declarationArgs}){LEFT_CURLY}</div>
            <div className="Indent-1"> {abbreviatedComment}</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
            <div className="Indent-1"> {this.props.methodName}({providedArgs});</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
            <div className="Indent-0"> void {this.props.methodName}({correctedDeclarationArgs}){LEFT_CURLY}</div>
            <div className="Indent-1"> {abbreviatedComment}</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
          </GoodExample>
        </Suggestion>
      </Problem>}
      <ParameterMismatchResourceFooter />
    </CompilerError>;
  }

}

export default ParameterMismatch;

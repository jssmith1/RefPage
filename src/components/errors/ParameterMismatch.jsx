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
    const trimmedTypeOne = this.props.typeOneName.substring(this.props.typeOneName.lastIndexOf('.') + 1);
    const trimmedTypeTwo = this.props.typeTwoName.substring(this.props.typeTwoName.lastIndexOf('.') + 1);

    const typeToValue = {
      String: "\"example\"",
      char: "'s'",
      boolean: "true",
      double: "5.0",
      float: "5.0",
      byte: "5",
      short: "5",
      int: "5",
      long: "5",
      "": ""
    };

    const knownTypes = ["String", "boolean", "char", "float", "double", "int", "short", "byte", "long"];
    const matchingValue = knownTypes.includes(trimmedTypeOne) ? typeToValue[trimmedTypeOne] : `new ${trimmedTypeOne}()`;
    const providedValue = knownTypes.includes(trimmedTypeTwo) ? typeToValue[trimmedTypeTwo] : `new ${trimmedTypeTwo}()`;

    const LEFT_CURLY = "{";
    const RIGHT_CURLY = "}";

    return <CompilerError
      title={<>The method “<div className="InputValue">{this.props.methodName}({this.props.typeOneName})</div>”
        in the type <div className="InputValue">{this.props.className}</div> is not applicable for the
        arguments <div className="InputValue">({this.props.typeTwoName}) </div></>}
      translation={<>You are trying to use the method “
        <div className="InputValue">{this.props.methodName}({trimmedTypeOne})</div>” but
        with the incorrect parameters.</>}
    >
      <Problem
        title={<>You may have used the wrong type of parameter for
          the method <div className="InputValue">{this.props.methodName}({trimmedTypeOne})</div>.</>}
      >
        <Suggestion title={<>Change the parameter of{" "}
          <p className="InputValue">{this.props.methodName}({trimmedTypeOne})</p> to the expected type.</>}>
          <BadExample>
            <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
            <div className="Indent-1"> {this.props.methodName}({providedValue});</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
            <div className="Indent-0"> {this.props.methodTypeName} {this.props.methodName}({trimmedTypeOne} s){LEFT_CURLY}</div>
            <div className="Indent-1"> ...</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
            <div className="Indent-1"> {this.props.methodName}({matchingValue});</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
            <div className="Indent-0"> {this.props.methodTypeName} {this.props.methodName}({trimmedTypeOne} s){LEFT_CURLY}</div>
            <div className="Indent-1"> ...</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
          </GoodExample>
        </Suggestion>
        <Suggestion title={<>Change the parameter of{" "}
          <p className="InputValue">{this.props.methodName}({trimmedTypeOne})</p> in
          the method declaration to match with  <p className="InputValue">{trimmedTypeTwo}</p>.</>}>
          <BadExample>
            <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
            <div className="Indent-1"> {this.props.methodName}({providedValue});</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
            <div className="Indent-0"> {this.props.methodTypeName} {this.props.methodName}({trimmedTypeOne} s){LEFT_CURLY}</div>
            <div className="Indent-1"> ...</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
            <div className="Indent-1"> {this.props.methodName}({providedValue});</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
            <div className="Indent-0"> {this.props.methodTypeName} {this.props.methodName}({trimmedTypeTwo} s){LEFT_CURLY}</div>
            <div className="Indent-1"> ...</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
          </GoodExample>
        </Suggestion>
      </Problem>
      <Problem
        title={<>You may have used the wrong number of parameters for the method{" "}
          <p className="InputValue">{this.props.methodName}({trimmedTypeOne})</p>.</>}
      >
        <Suggestion title={<>Change the number of parameters to the expected amount when calling{" "}
          <p className="InputValue">{this.props.methodName}({trimmedTypeOne})</p>.</>}>
          <BadExample>
            <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
            <div className="Indent-1"> {this.props.methodName}({matchingValue}, {providedValue});</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
            <div className="Indent-0"> void {this.props.methodName}({trimmedTypeOne} s){LEFT_CURLY}</div>
            <div className="Indent-1"> ...</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
            <div className="Indent-1"> {this.props.methodName}({matchingValue});</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
            <div className="Indent-0"> void {this.props.methodName}({trimmedTypeOne} s){LEFT_CURLY}</div>
            <div className="Indent-1"> ...</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
          </GoodExample>
        </Suggestion>
        <Suggestion title={<>Change the number of parameters in the {" "}
          <p className="InputValue">{this.props.methodName}({trimmedTypeOne})</p> method.</>}>
          <BadExample>
            <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
            <div className="Indent-1"> {this.props.methodName}({matchingValue}, {providedValue});</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
            <div className="Indent-0"> void {this.props.methodName}({trimmedTypeOne} s){LEFT_CURLY}</div>
            <div className="Indent-1"> ...</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0"> void setup() {LEFT_CURLY} </div>
            <div className="Indent-1"> {this.props.methodName}({matchingValue}, {providedValue});</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
            <div className="Indent-0"> void {this.props.methodName}({trimmedTypeOne} s, {trimmedTypeTwo} t){LEFT_CURLY}</div>
            <div className="Indent-1"> ...</div>
            <div className="Indent-0"> {RIGHT_CURLY}</div>
          </GoodExample>
        </Suggestion>
      </Problem>
      <ParameterMismatchResourceFooter />
    </CompilerError>;
  }

}

export default ParameterMismatch;

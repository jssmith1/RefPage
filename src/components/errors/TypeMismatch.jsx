import React from "react";
import "../../App.css";
import CompilerError from "../CompilerError";
import Problem from "../Problem";
import Suggestion from "../Suggestion";
import BadExample from "../BadExample";
import GoodExample from "../GoodExample";

class TypeMismatch extends React.Component {

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
    const providedValue = this.makeDemoValue(this.props.typeOneName);
    const matchingValue = this.makeDemoValue(this.props.typeTwoName);

    const LEFT_CURLY = "{";
    const RIGHT_CURLY = "}";

    return <CompilerError
      title={<>Cannot convert from <div className="InputValue">{this.props.typeOneName}</div>{" "}
        to <div className="InputValue">{this.props.typeTwoName}</div></>}
      translation={<>You are trying to use the variable{" "}
        <div className="InputValue">{this.props.varName}</div> of type{" "}
        <div className="InputValue">{this.props.typeTwoName}</div> as a{" "}
        <div className="InputValue">{this.props.typeOneName}</div>-type variable.</>}
      embed={this.props.embed}
    >
      <Problem
        title={<>You may have assigned a <div className="InputValue">{this.props.typeOneName}</div> value to variable{" "}
          <div className="InputValue">{this.props.varName}</div> of type <div className="InputValue">{this.props.typeTwoName}</div>.</>}
      >
        <Suggestion title={<>Change variable declaration of{" "}
          <p className="InputValue">{this.props.varName}</p> to type <div className="InputValue">{this.props.typeOneName}</div>.</>}>
          <BadExample>
            <div className="Indent-0"> {this.props.typeTwoName} {this.props.varName} = {providedValue};</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0"> {this.props.typeOneName} {this.props.varName} = {providedValue};</div>
          </GoodExample>
        </Suggestion>
        <Suggestion title={<>Change value of{" "}
          <p className="InputValue">{this.props.varName}</p> to a <div className="InputValue">{this.props.typeTwoName}</div> value.</>}>
          <BadExample>
            <div className="Indent-0"> {this.props.typeTwoName} {this.props.varName} = {providedValue};</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0"> {this.props.typeTwoName} {this.props.varName} = {matchingValue};</div>
          </GoodExample>
        </Suggestion>
      </Problem>
      <Problem
        title={<>You may have returned a <div className="InputValue">{this.props.typeOneName}</div> value in a method that expects to return a <div className="InputValue">{this.props.typeTwoName}</div> value.</>}
      >
        <Suggestion title={<>Change the method's expected return type to <div className="InputValue">{this.props.typeOneName}</div> type.</>}>
          <BadExample>
            <div className="Indent-0">{this.props.typeTwoName} doSomething() {LEFT_CURLY}</div>
            <div className="Indent-1">{this.props.typeOneName} {this.props.varName} = {providedValue};</div>
            <div className="Indent-1">return {this.props.varName};</div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0">{this.props.typeOneName} doSomething() {LEFT_CURLY}</div>
            <div className="Indent-1">{this.props.typeOneName} {this.props.varName}  = {providedValue};</div>
            <div className="Indent-1">return {this.props.varName}; </div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
          </GoodExample>
        </Suggestion>
      </Problem>

      {this.props.typeTwoName === 'int' && (this.props.typeOneName === 'float' || this.props.typeOneName === 'double')
        ? <Problem
          title={<>You may have used <div className="InputValue">{this.props.typeTwoName}</div>-type variable{" "}
            <div className="InputValue">{this.props.varName}</div>{" "} in an operation involving <div className="InputValue">{this.props.typeOneName}</div> type.</>}
        >
          <Suggestion title={<>Change the type of <div className="InputValue">{this.props.varName}</div> {" "}
            from <div className="InputValue">{this.props.typeTwoName}</div> to <div className="InputValue">{this.props.typeOneName}</div>.</>}>
            <BadExample>
              <div className="Indent-0">{this.props.typeTwoName} {this.props.varName} = 3;</div>
              <div className="Indent-0">{this.props.varName} = {this.props.varName} * 3.14;</div>
            </BadExample>
            <GoodExample>
              <div className="Indent-0"> {this.props.typeOneName} {this.props.varName} = 3;</div>
              <div className="Indent-0">{this.props.varName} = {this.props.varName} * 3.14;</div>
            </GoodExample>
          </Suggestion>
        </Problem>
        : <></>
      }
    </CompilerError>;
  }

}

export default TypeMismatch;

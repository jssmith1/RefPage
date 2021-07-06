import React from "react";
import "../../App.css";
import CompilerError from "../CompilerError";
import Problem from "../Problem";
import Suggestion from "../Suggestion";
import BadExample from "../BadExample";
import GoodExample from "../GoodExample";

class TypeMismatch extends React.Component {

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
      long: "5"
    };

    const knownTypes = ["String", "boolean", "char", "float", "double", "int", "short", "byte", "long"];
    const providedValue = knownTypes.includes(trimmedTypeOne) ? typeToValue[trimmedTypeOne] : `new ${trimmedTypeOne}()`;
    const matchingValue = knownTypes.includes(trimmedTypeTwo) ? typeToValue[trimmedTypeTwo] : `new ${trimmedTypeTwo}()`;

    const LEFT_CURLY = "{";
    const RIGHT_CURLY = "}";

    return <CompilerError
      title={<>Cannot convert from <div className="InputValue">{trimmedTypeOne}</div>{" "}
        to <div className="InputValue">{trimmedTypeTwo}</div></>}
      translation={<>You are trying to use the variable{" "}
        <div className="InputValue">{this.props.varName}</div> of type{" "}
        <div className="InputValue">{trimmedTypeTwo}</div> as a{" "}
        <div className="InputValue">{trimmedTypeOne}</div>-type variable.</>}
      embed={this.props.embed}
    >
      <Problem
        title={<>You may have assigned a <div className="InputValue">{trimmedTypeOne}</div> value to variable{" "}
          <div className="InputValue">{this.props.varName}</div> of type <div className="InputValue">{trimmedTypeTwo}</div>.</>}
      >
        <Suggestion title={<>Change variable declaration of{" "}
          <p className="InputValue">{this.props.varName}</p> to type <div className="InputValue">{trimmedTypeOne}</div>.</>}>
          <BadExample>
            <div className="Indent-0"> {trimmedTypeTwo} {this.props.varName} = {providedValue};</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0"> {trimmedTypeOne} {this.props.varName} = {providedValue};</div>
          </GoodExample>
        </Suggestion>
        <Suggestion title={<>Change value of{" "}
          <p className="InputValue">{this.props.varName}</p> to a <div className="InputValue">{trimmedTypeTwo}</div> value.</>}>
          <BadExample>
            <div className="Indent-0"> {trimmedTypeTwo} {this.props.varName} = {providedValue};</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0"> {trimmedTypeTwo} {this.props.varName} = {matchingValue};</div>
          </GoodExample>
        </Suggestion>
      </Problem>
      <Problem
        title={<>You may have returned a <div className="InputValue">{trimmedTypeOne}</div> value in a method that expects to return a <div className="InputValue">{trimmedTypeTwo}</div> value.</>}
      >
        <Suggestion title={<>Change the method's expected return type to <div className="InputValue">{trimmedTypeOne}</div> type.</>}>
          <BadExample>
            <div className="Indent-0">{trimmedTypeTwo} doSomething() {LEFT_CURLY}</div>
            <div className="Indent-1">{trimmedTypeOne} {this.props.varName} = {providedValue};</div>
            <div className="Indent-1">return {this.props.varName};</div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0">{trimmedTypeOne} doSomething() {LEFT_CURLY}</div>
            <div className="Indent-1">{trimmedTypeOne} {this.props.varName}  = {providedValue};</div>
            <div className="Indent-1">return {this.props.varName}; </div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
          </GoodExample>
        </Suggestion>
      </Problem>

      {trimmedTypeTwo === 'int' && (trimmedTypeOne === 'float' || trimmedTypeOne === 'double')
        ? <Problem
          title={<>You may have used <div className="InputValue">{trimmedTypeTwo}</div>-type variable{" "}
            <div className="InputValue">{this.props.varName}</div>{" "} in an operation involving <div className="InputValue">{trimmedTypeOne}</div> type.</>}
        >
          <Suggestion title={<>Change the type of <div className="InputValue">{this.props.varName}</div> {" "}
            from <div className="InputValue">{trimmedTypeTwo}</div> to <div className="InputValue">{trimmedTypeOne}</div>.</>}>
            <BadExample>
              <div className="Indent-0">{trimmedTypeTwo} {this.props.varName} = 3;</div>
              <div className="Indent-0">{this.props.varName} = {this.props.varName} * 3.14;</div>
            </BadExample>
            <GoodExample>
              <div className="Indent-0"> {trimmedTypeOne} {this.props.varName} = 3;</div>
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

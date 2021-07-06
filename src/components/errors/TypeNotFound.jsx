import React from "react";
import "../../App.css";
import CompilerError from "../CompilerError";
import Problem from "../Problem";
import Suggestion from "../Suggestion";
import BadExample from "../BadExample";
import GoodExample from "../GoodExample";

class TypeNotFound extends React.Component {

  render() {
    const LEFT_CURLY = "{";
    const RIGHT_CURLY = "}";

    return <CompilerError
      title={<>Cannot find a class or type name{" "}
        <div className="InputValue">{this.props.className}</div></>}
      translation={<>You are trying to declare a variable of type{" "}
        <div className="InputValue">{this.props.className}</div>, which Processing{" "}
        does not recognize.</>}
      embed={this.props.embed}
    >
      <Problem
        title={<>You may have mistyped class name{" "}
          <div className="InputValue">{this.props.className}</div>.</>}
      >
        <Suggestion title={<>Change{" "}
          <p className="InputValue">{this.props.className}</p> to
          the class name that you have defined.</>}>
          <BadExample>
            <div className="Indent-0">class {this.props.correctClassName} {LEFT_CURLY}</div>
            <div className="Indent-1">{this.props.correctClassName}() {LEFT_CURLY}</div>
            <div className="Indent-1">...</div>
            <div className="Indent-1">{RIGHT_CURLY}</div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
            <div className="Indent-0">{this.props.className} {this.props.varName} = new {this.props.className}();</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0">class {this.props.correctClassName} {LEFT_CURLY}</div>
            <div className="Indent-1">{this.props.correctClassName}() {LEFT_CURLY}</div>
            <div className="Indent-1">...</div>
            <div className="Indent-1">{RIGHT_CURLY}</div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
            <div className="Indent-0">{this.props.correctClassName} {this.props.varName} = new {this.props.correctClassName}();</div>
          </GoodExample>
        </Suggestion>
      </Problem>
      <Problem
        title={<>You may have forgotten to create class{" "}
          <div className="InputValue">{this.props.className}</div>.</>}
      >
        <Suggestion title={<>Add class{" "}
          <p className="InputValue">{this.props.className}</p> to your current file.</>}>
          <BadExample>
            <div className="Indent-0">{this.props.className} {this.props.varName} = new {this.props.className}();</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0">class {this.props.className} {LEFT_CURLY}</div>
            <div className="Indent-1">{this.props.className}() {LEFT_CURLY}</div>
            <div className="Indent-2">...</div>
            <div className="Indent-1">{RIGHT_CURLY}</div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
            <div className="Indent-0">{this.props.className} {this.props.varName} = new {this.props.className}();</div>
          </GoodExample>
        </Suggestion>
      </Problem>
      <Problem
        title={<>You may have forgotten to import class{" "}
          <div className="InputValue">{this.props.className}</div> from a built-in library.</>}
      >
        <Suggestion title={<>Import{" "}
          <p className="InputValue">{this.props.className}</p> to your file.</>}>
          <BadExample>
            <div className="Indent-0">{this.props.className} {this.props.varName} = new {this.props.className}();</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0">import path.to.library.{this.props.className};</div>
            <div className="Indent-0">{this.props.className} {this.props.varName} = new {this.props.className}();</div>
          </GoodExample>
        </Suggestion>
      </Problem>
      <Problem
        title={<>You may be trying to use a class from another file in static mode, which confuses Processing.</>}
      >
        <Suggestion title={<>Declare the <div className="InputValue">draw</div>() or{" "}
          <div className="InputValue">setup</div>() methods in one of your files.</>}>
          <BadExample>
            <div className="Indent-0">{this.props.className} {this.props.varName} = new {this.props.className}();</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0">{this.props.className} {this.props.varName} = new {this.props.className}();</div>
            <div className="Indent-0">void setup() {LEFT_CURLY}{RIGHT_CURLY}</div>
          </GoodExample>
          <GoodExample>
            <div className="Indent-0">{this.props.className} {this.props.varName} = new {this.props.className}();</div>
            <div className="Indent-0">void draw() {LEFT_CURLY}{RIGHT_CURLY}</div>
          </GoodExample>
        </Suggestion>
      </Problem>
    </CompilerError>;
  }
}

export default TypeNotFound;

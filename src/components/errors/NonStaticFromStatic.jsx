import React from "react";
import "../../App.css";
import CompilerError from "../CompilerError";
import Problem from "../Problem";
import Suggestion from "../Suggestion";
import BadExample from "../BadExample";
import GoodExample from "../GoodExample";
import NonStaticFromStaticResourceFooter from "../resourceFooters/NonStaticFromStaticResourceFooter.jsx";

class NonStaticFromStatic extends React.Component {

  render() {
    return <CompilerError
      title={<>Cannot make a static reference to the non-static method {" "}
        <div className="InputValue">{this.props.methodName}() </div> from the type {this.props.fileName}</>}
      translation="You are calling on a non-static method inside a static method."
      embed={this.props.embed}
    >
      <Problem
        title={<>You may have called on method <div className="InputValue">{this.props.methodName}() </div> {" "}
          inside your static method <div className="InputValue">{this.props.staticMethodName}()</div>.</>}
      >
        <Suggestion title={<>Make your static method <div className="InputValue">{this.props.staticMethodName}() </div> {" "}
          non-static.</>}>
          <BadExample>
            <div className="Indent-0"> static void {this.props.staticMethodName}() {"{"} </div>
            <div className="Indent-1"> {this.props.methodName}(); </div>
            <div className="Indent-0"> {"}"} </div>
            <div className="Indent-0"> void {this.props.methodName}() {"{"} </div>
            <div className="Indent-1"> ... </div>
            <div className="Indent-0"> {"}"} </div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0"> void {this.props.staticMethodName}() {"{"} </div>
            <div className="Indent-1"> {this.props.methodName}(); </div>
            <div className="Indent-0"> {"}"} </div>
            <div className="Indent-0"> void {this.props.methodName}() {"{"} </div>
            <div className="Indent-1"> ... </div>
            <div className="Indent-0"> {"}"} </div>
          </GoodExample>
        </Suggestion>
        <Suggestion title={<>Make your non-static method <div className="InputValue">{this.props.methodName}() </div> static.</>}>
          <BadExample>
            <div className="Indent-0"> static void {this.props.staticMethodName}() {"{"} </div>
            <div className="Indent-1"> {this.props.methodName}(); </div>
            <div className="Indent-0"> {"}"} </div>
            <div className="Indent-0"> void {this.props.methodName}() {"{"} </div>
            <div className="Indent-1"> ... </div>
            <div className="Indent-0"> {"}"} </div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0"> static void {this.props.staticMethodName}() {"{"} </div>
            <div className="Indent-1"> {this.props.methodName}(); </div>
            <div className="Indent-0"> {"}"} </div>
            <div className="Indent-0"> static void {this.props.methodName}() {"{"} </div>
            <div className="Indent-1"> ... </div>
            <div className="Indent-0"> {"}"} </div>
          </GoodExample>
        </Suggestion>
      </Problem>
      <NonStaticFromStaticResourceFooter />
    </CompilerError>;
  }
}

export default NonStaticFromStatic;

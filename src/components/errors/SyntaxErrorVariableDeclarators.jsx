import React from "react";
import "../../App.css";
import CompilerError from "../CompilerError";
import Problem from "../Problem";
import Suggestion from "../Suggestion";
import BadExample from "../BadExample";
import GoodExample from "../GoodExample";

class SyntaxErrorVariableDeclarators extends React.Component {

  render() {
    const trimmedType = this.props.typeName.substring(this.props.typeName.lastIndexOf('.') + 1);

    return <CompilerError
      title={"Syntax error, insert \"VariableDeclarators\" to complete LocalVariableDeclaration"}
      translation="A syntax error occured while declaring a variable."
    >
      <Problem
        title={<>It looks like Processing is reading the <div className="InputValue">{this.props.methodOneName} </div> method {" "}
          as a variable. You may have forgotten to add parentheses when writing {" "}
          <div className="InputValue">{this.props.methodOneName}</div>.</>}
      >
        <Suggestion title={<>Add "()" to the end of {" "}
          <div className="InputValue">{this.props.methodOneName}</div>.</>}>
          <BadExample>
            <div className="Indent-0">{this.props.methodOneName};</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0">{this.props.methodOneName}();</div>
          </GoodExample>
        </Suggestion>
      </Problem>
      <Problem
        title={<>You may have forgotten to fully write the body of the method {" "}
          <div className="InputValue">{this.props.methodTwoName}()</div>.</>}
      >
        <Suggestion title={<>Specify what {" "}
          <div className="InputValue">{this.props.methodTwoName}() </div> should do.</>}>
          <BadExample>
            <div className="Indent-0"> {trimmedType} s = 5; </div>
            <div className="Indent-0"> void {this.props.methodTwoName}({trimmedType} x) {"{"}</div>
            <div className="Indent-1"> s; </div>
            <div className="Indent-0"> {"}"}</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0"> {this.props.typeName} s = 5; </div>
            <div className="Indent-0"> void {this.props.methodTwoName}({trimmedType} x) {"{"}</div>
            <div className="Indent-1"> s = s * x; </div>
            <div className="Indent-0"> {"}"}</div>
          </GoodExample>
        </Suggestion>
      </Problem>
    </CompilerError>;
  }

}

export default SyntaxErrorVariableDeclarators;

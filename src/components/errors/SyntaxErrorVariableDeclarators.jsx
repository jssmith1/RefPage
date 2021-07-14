import React from "react";
import "../../App.css";
import CompilerError from "../CompilerError";
import Problem from "../Problem";
import Suggestion from "../Suggestion";
import BadExample from "../BadExample";
import GoodExample from "../GoodExample";

class SyntaxErrorVariableDeclarators extends React.Component {

  render() {
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
    const demoValue = knownTypes.includes(this.props.typeName) ? typeToValue[this.props.typeName] : `new ${this.props.typeName}()`;

    return <CompilerError
      title={"Syntax error, insert \"VariableDeclarators\" to complete LocalVariableDeclaration"}
      translation="A syntax error occured while declaring a variable."
      embed={this.props.embed}
    >
      <Problem
        title={<>It looks like Processing is reading the <div className="InputValue">{this.props.methodOneName} </div> method {" "}
          as a variable. You may have forgotten to add parentheses when writing {" "}
          <div className="InputValue">{this.props.methodOneName}</div>.</>}
      >
        <Suggestion title={<>Add "()" to the end of <div className="InputValue">{this.props.methodOneName}</div>.</>}>
          <BadExample>
            <div className="Indent-0">{this.props.methodOneName};</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0">{this.props.methodOneName}();</div>
          </GoodExample>
        </Suggestion>
      </Problem>
      <Problem
        title={<>You may have written a statement with only the name of variable <div className="InputValue">{this.props.methodOneName}</div>.</>}
      >
        <Suggestion title={<>Do something with the variable <div className="InputValue">{this.props.methodOneName}</div>.</>}>
          <BadExample>
            <div className="Indent-0"> {this.props.methodOneName}; </div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0"> {this.props.methodOneName} = {demoValue}; </div>
          </GoodExample>
        </Suggestion>
        <Suggestion title={<>Remove the statement with variable <div className="InputValue">{this.props.methodOneName}</div>.</>}>
          <BadExample>
            <div className="Indent-0"> {this.props.methodOneName}; </div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0"> <strikethrough>{this.props.methodOneName};</strikethrough> </div>
          </GoodExample>
        </Suggestion>
      </Problem>
    </CompilerError>;
  }

}

export default SyntaxErrorVariableDeclarators;

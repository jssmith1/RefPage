import React from "react";
import "../../App.css";
import CompilerError from "../CompilerError";
import Problem from "../Problem";
import Suggestion from "../Suggestion";
import BadExample from "../BadExample";
import GoodExample from "../GoodExample";

class IncorrectDimensionExpression1 extends React.Component {

  render() {
    const knownTypes = ["String", "char", "boolean", "short", "byte", "long", "int", "float", "double"];
    const isKnownType = knownTypes.includes(this.props.typeName);

    // eslint-disable-next-line
    const classPlaceholder = isKnownType ? "" : <div className="Indent-0">class {this.props.typeName} {"{"}/* your code */{"}"} </div>;

    return <CompilerError
      title="Variable must provide either dimension expressions or an array initializer"
      translation="You have not given the array a certain size."
      embed={this.props.embed}
    >
      <Problem
        title="You may have forgotten to type the size of the array inside the brackets."
      >
        <Suggestion title="Specify the size of the array.">
          <BadExample>
            {classPlaceholder}
            <div className="Indent-0">{this.props.typeName}[] {this.props.arrName} = new {this.props.typeName}[];</div>
          </BadExample>

          <GoodExample>
            {classPlaceholder}
            <div className="Indent-0">{this.props.typeName}[] {this.props.arrName} = new {this.props.typeName}[5];</div>
          </GoodExample>
        </Suggestion>
      </Problem>
    </CompilerError>;
  }
}

export default IncorrectDimensionExpression1;

import React from "react";
import "../../App.css";
import CompilerError from "../CompilerError";
import Problem from "../Problem";
import Suggestion from "../Suggestion";
import BadExample from "../BadExample";
import GoodExample from "../GoodExample";

class IncorrectDimensionExpression2 extends React.Component {

  render() {
    const knownTypes = ["String", "char", "boolean", "short", "byte", "long", "int", "float", "double"];
    const isKnownType = knownTypes.includes(this.props.typeName);

    // eslint-disable-next-line
    const classPlaceholder = isKnownType ? "" : <div className="Indent-0">class {this.props.typeName} {"{"}/* your code */{"}"} </div>;

    return <CompilerError
      title="Cannot specify an array dimension after an empty dimension"
      translation="In a 2D array, you have not given the innermost array a certain size."
      embed={this.props.embed}
    >
      <Problem
        title="You may not have given the innermost array a size."
      >
        <Suggestion title="Specify the size of the innermost array.">
          <BadExample>
            {classPlaceholder}
            <div className="Indent-0">{this.props.typeName}[][] {this.props.arrName} = new {this.props.typeName}[][5]; </div>
          </BadExample>

          <GoodExample>
            {classPlaceholder}
            <div className="Indent-0">{this.props.typeName}[][] {this.props.arrName} = new {this.props.typeName}[5][5];</div>
          </GoodExample>
          <GoodExample>
            {classPlaceholder}
            <div className="Indent-0">{this.props.typeName}[][] {this.props.arrName} = new {this.props.typeName}[5][]; </div>
          </GoodExample>
        </Suggestion>
      </Problem>
    </CompilerError>;
  }
}

export default IncorrectDimensionExpression2;

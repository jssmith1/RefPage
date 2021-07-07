import React from "react";
import "../../App.css";
import CompilerError from "../CompilerError";
import Problem from "../Problem";
import Suggestion from "../Suggestion";
import BadExample from "../BadExample";
import GoodExample from "../GoodExample";

class IncorrectDimensionExpression3 extends React.Component {

  render() {
    const knownTypes = ["String", "char", "boolean", "short", "byte", "long", "int", "float", "double"];
    const isKnownType = knownTypes.includes(this.props.typeName);

    const demoArrays = {
      String: "{\"a\", \"b\", \"c\", \"d\", \"e\"}",
      char: "{'a', 'b', 'c', 'd', 'e'}",
      boolean: "{true, false, true, false, true}",
      byte: "{1, 2, 3, 4, 5}",
      short: "{1, 2, 3, 4, 5}",
      int: "{1, 2, 3, 4, 5}",
      long: "{1, 2, 3, 4, 5}",
      float: "{1.1, 2.2, 3.3, 4.4, 5.5}",
      double: "{1.1, 2.2, 3.3, 4.4, 5.5}"
    };

    let unknownTypeArray = "{";
    for (let i = 0; i < 5; i++) {
      unknownTypeArray += `new ${this.props.typeName}(), `;
    }
    unknownTypeArray = unknownTypeArray.substring(0, unknownTypeArray.length - 2) + "}";

    const demoArray = isKnownType ? demoArrays[this.props.typeName] : unknownTypeArray;

    // eslint-disable-next-line
    const classPlaceholder = isKnownType ? "" : <div className="Indent-0">class {this.props.typeName} {"{"}/* your code */{"}"} </div>;

    return <CompilerError
      title="Cannot define dimension expressions when an array initializer is provided"
      translation="You have defined an array twice."
      embed={this.props.embed}
    >
      <Problem
        title="You may have used both methods to construct an array together"
      >
        <Suggestion title="Choose only one of the methods to make an array.">
          <BadExample>
            {classPlaceholder}
            <div className="Indent-0">{this.props.typeName}[] {this.props.arrName} = new {this.props.typeName}[5] {demoArray};</div>
          </BadExample>

          <GoodExample>
            {classPlaceholder}
            <div className="Indent-0">{this.props.typeName}[] {this.props.arrName} = new {this.props.typeName}[5];</div>
          </GoodExample>
          <GoodExample>
            {classPlaceholder}
            <div className="Indent-0">{this.props.typeName}[] {this.props.arrName} = {demoArray};</div>
          </GoodExample>
        </Suggestion>
      </Problem>
    </CompilerError>;
  }
}

export default IncorrectDimensionExpression3;

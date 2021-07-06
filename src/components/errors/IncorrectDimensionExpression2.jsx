import React from "react";
import "../../App.css";
import CompilerError from "../CompilerError";
import Problem from "../Problem";
import Suggestion from "../Suggestion";
import BadExample from "../BadExample";
import GoodExample from "../GoodExample";

class IncorrectDimensionExpression2 extends React.Component {

  render() {
    const isPrimitive = this.props.typeName === 'String' || this.props.typeName === 'char' || this.props.typeName === 'boolean' || this.props.typeName === 'short' || this.props.typeName === 'byte' ||
      this.props.typeName === 'long' || this.props.typeName === 'int' || this.props.typeName === 'float' || this.props.typeName === 'double';

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
            {isPrimitive ?
              <div className="Indent-0">{this.props.typeName}[][] s = new {this.props.typeName}[][5]; </div>
              : <><div className="Indent-0"> class {this.props.typeName.slice(0, 1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)} {"{"}  </div>
                <div className="Indent-1"> {this.props.typeName.slice(0, 1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}() {"{"} </div>
                <div className="Indent-2"> ...; </div>
                <div className="Indent-1"> {"}"} </div>
                <div className="Indent-0"> {"}"} </div>
                <div className="Indent-0">
                  {this.props.typeName.slice(0, 1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}[][] s = {" "}
                  new {this.props.typeName.slice(0, 1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}[][5]; </div></>
            }
          </BadExample>

          <GoodExample>
            {isPrimitive ?
              <div className="Indent-0">{this.props.typeName}[][] s = new {this.props.typeName}[5][5];</div>
              : <div className="Indent-0">
                {this.props.typeName.slice(0, 1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}[][] s = {" "}
                new {this.props.typeName.slice(0, 1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}[5][5]; </div>
            }
          </GoodExample>
          <GoodExample>
            {isPrimitive ?
              <div className="Indent-0">{this.props.typeName}[][] s = new {this.props.typeName}[5][]; </div>
              : <div className="Indent-0">
                {this.props.typeName.slice(0, 1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}[][] s = {" "}
                new {this.props.typeName.slice(0, 1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}[5][]; </div>
            }
          </GoodExample>
        </Suggestion>
      </Problem>
    </CompilerError>;
  }
}

export default IncorrectDimensionExpression2;

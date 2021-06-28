import React from "react";
import "../../App.css";
import BadExample from "../BadExample";
import CompilerError from "../CompilerError";
import GoodExample from "../GoodExample";
import Problem from "../Problem";
import Suggestion from "../Suggestion";

class IncorrectDimensionExpression1 extends React.Component {

  render() {
    const isPrimitive = this.props.typeName === 'String' || this.props.typeName === 'char' || this.props.typeName === 'boolean' || this.props.typeName === 'short' || this.props.typeName === 'byte' ||
      this.props.typeName === 'long' || this.props.typeName === 'int' || this.props.typeName === 'float' || this.props.typeName === 'double';

    return <CompilerError
      title="Variable must provide either dimension expressions or an array initializer'"
      translation="You have not given the array a certain size."
    >
      <Problem
        title="You may have forgotten to type the size of the array inside the brackets."
      >
        <Suggestion title="Specify the size of the array.">
          <BadExample>
            {isPrimitive ?
              <div className="Indent-0">{this.props.typeName}[] s = new {this.props.typeName}[]; </div>
              : <><div className="Indent-0"> class {this.props.typeName.slice(0, 1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)} {"{"}  </div>
                <div className="Indent-1"> {this.props.typeName.slice(0, 1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}() {"{"} </div>
                <div className="Indent-2"> ...; </div>
                <div className="Indent-1"> {"}"} </div>
                <div className="Indent-0"> {"}"} </div>
                <div className="Indent-0">
                  {this.props.typeName.slice(0, 1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}[] s = new {" "}
                  {this.props.typeName.slice(0, 1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}[];
                </div></>
            }
          </BadExample>

          <GoodExample>
            {isPrimitive ?
              <div className="Indent-0">{this.props.typeName}[] s = new {this.props.typeName}[5]; </div>
              : <><div className="Indent-0"> class {this.props.typeName.slice(0, 1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)} {"{"}  </div>
                <div className="Indent-1"> {this.props.typeName.slice(0, 1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}() {"{"} </div>
                <div className="Indent-2"> ...; </div>
                <div className="Indent-1"> {"}"} </div>
                <div className="Indent-0"> {"}"} </div>
                <div className="Indent-0">
                  {this.props.typeName.slice(0, 1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}[] s = new {" "}
                  {this.props.typeName.slice(0, 1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}[5];
                </div></>
            }
          </GoodExample>
        </Suggestion>
      </Problem>
    </CompilerError>;
  }
}

export default IncorrectDimensionExpression1;

import React from "react";
import "../../App.css";
import CompilerError from "../CompilerError";
import Problem from "../Problem";
import Suggestion from "../Suggestion";
import BadExample from "../BadExample";
import GoodExample from "../GoodExample";

class IncorrectDimensionExpression3 extends React.Component {

  render() {
    const isPrimitive = this.props.typeName === 'String' || this.props.typeName === 'char' || this.props.typeName === 'boolean' || this.props.typeName === 'short' || this.props.typeName === 'byte' ||
      this.props.typeName === 'long' || this.props.typeName === 'int' || this.props.typeName === 'float' || this.props.typeName === 'double';

    return <CompilerError
      title="Cannot define dimension expressions when an array initializer is provided"
      translation="You have defined an array twice."
    >
      <Problem
        title="You may have used both methods to construct an array together"
      >
        <Suggestion title="Choose only one of the methods to make an array.">
          <BadExample>
            {isPrimitive ?
              <div className="Indent-0">
                {this.props.typeName === 'String'            //Box 1 Ex 1 for String
                  ?
                  <>{this.props.typeName}[] s = new {this.props.typeName}[5] {"{"}"a", "b", "c", "d", "e"{"}"};</>

                  : this.props.typeName === 'char'            //Box 1 Ex 1 for char
                    ?
                    <>{this.props.typeName}[] s = new {this.props.typeName}[5] {"{'a', 'b, 'c', 'd', 'e'}"};</>

                    : this.props.typeName === 'boolean'            //Box 1 Ex 1 for boolean
                      ?
                      <>{this.props.typeName}[] s = new {this.props.typeName}[5] {"{true, false, true, false, true}"};</>

                      : this.props.typeName === 'float' || this.props.typeName === 'double'            //Box 1 Ex 1 for float/double
                        ?
                        <>{this.props.typeName}[] s = new {this.props.typeName}[5] {"{1.1, 2.2, 3.3, 4.4, 5.5}"};</>

                        :                                                               //Box 1 Ex 1 for int/short/byte/long
                        <>{this.props.typeName}[] s = new {this.props.typeName}[5] {"{1, 2, 3, 4, 5}"};</>
                }
              </div>
              : <><div className="Indent-0"> class {this.props.typeName.slice(0, 1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)} {"{"}  </div>
                <div className="Indent-1"> {this.props.typeName.slice(0, 1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}() {"{"} </div>
                <div className="Indent-2"> ...; </div>
                <div className="Indent-1"> {"}"} </div>
                <div className="Indent-0"> {"}"} </div>
                <div className="Indent-0">
                  {this.props.typeName.slice(0, 1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}[] s = {" "}
                  new {this.props.typeName.slice(0, 1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}[5] {" "}
                  {"{"}new {this.props.typeName.slice(0, 1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}(), {" "}
                  new {this.props.typeName.slice(0, 1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}(), {" "}
                  new {this.props.typeName.slice(0, 1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}(), {" "}
                  new {this.props.typeName.slice(0, 1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}(), {" "}
                  new {this.props.typeName.slice(0, 1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}(){"}"};
                </div></>
            }
          </BadExample>

          <GoodExample>
            {isPrimitive ?
              <div className="Indent-0">{this.props.typeName}[] s = new {this.props.typeName}[5]; </div>
              : <div className="Indent-0">
                {this.props.typeName.slice(0, 1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}[] s = {" "}
                new {this.props.typeName.slice(0, 1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}[5]; </div>
            }
          </GoodExample>
          <GoodExample>
            {isPrimitive ?
              <div className="Indent-0">
                {this.props.typeName === 'String'            //Box 1 Ex 1 for String
                  ?
                  <>{this.props.typeName}[] s = {"{"}"a", "b", "c", "d", "e"{"}"};</>

                  : this.props.typeName === 'char'            //Box 1 Ex 1 for char
                    ?
                    <>{this.props.typeName}[] s = {"{'a', 'b, 'c', 'd', 'e'}"};</>

                    : this.props.typeName === 'boolean'            //Box 1 Ex 1 for boolean
                      ?
                      <>{this.props.typeName}[] s = {"{true, false, true, false, true}"};</>

                      : this.props.typeName === 'float' || this.props.typeName === 'double'            //Box 1 Ex 1 for float/double
                        ?
                        <>{this.props.typeName}[] s = {"{1.1, 2.2, 3.3, 4.4, 5.5}"};</>

                        :                                                               //Box 1 Ex 1 for int/short/byte/long
                        <>{this.props.typeName}[] s = {"{1, 2, 3, 4, 5}"};</>
                }
              </div>
              : <div className="Indent-0">
                {this.props.typeName.slice(0, 1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}[] s = {"{"}new {this.props.typeName.slice(0, 1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}(), {" "}
                new {this.props.typeName.slice(0, 1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}(), {" "}
                new {this.props.typeName.slice(0, 1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}(), {" "}
                new {this.props.typeName.slice(0, 1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}(), {" "}
                new {this.props.typeName.slice(0, 1).toUpperCase() + this.props.typeName.slice(1, this.props.typeName.length)}(){"}"};
              </div>
            }
          </GoodExample>
        </Suggestion>
      </Problem>
    </CompilerError>;
  }
}

export default IncorrectDimensionExpression3;

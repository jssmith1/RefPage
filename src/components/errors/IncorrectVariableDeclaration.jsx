import React from "react";
import "../../App.css";
import CompilerError from "../CompilerError";
import Problem from "../Problem";
import Suggestion from "../Suggestion";
import BadExample from "../BadExample";
import GoodExample from "../GoodExample";

class IncorrectVariableDeclaration extends React.Component {

  render() {
    const isPrimitive = this.props.typeName === 'String' || this.props.typeName === 'char' || this.props.typeName === 'boolean' || this.props.typeName === 'short' || this.props.typeName === 'byte' ||
      this.props.typeName === 'long' || this.props.typeName === 'int' || this.props.typeName === 'float' || this.props.typeName === 'double';

    return <CompilerError
      title={<>Expecting DOT, found <div className="InputValue">'{this.props.foundName}'</div></>}
      translation="You are trying to use an array which has been declared incorrectly."
      embed={this.props.embed}
    >
      <Problem
        title="You may have made a syntax error while declaring the array."
      >
        <Suggestion title="Add the word 'new' beside the type variable you are declaring.">
          <BadExample>
            {isPrimitive ?
              <div className="Indent-0"> {this.props.typeName}[] {this.props.foundName} = {this.props.typeName}[5]; </div>
              : <div className="Indent-0"> int[] {this.props.foundName} = int[5]; </div>
            }
          </BadExample>

          <GoodExample>
            {isPrimitive ?
              <div className="Indent-0"> {this.props.typeName}[] {this.props.foundName} = new {this.props.typeName}[5]; </div>
              : <div className="Indent-0"> int[] {this.props.foundName} = new int[5]; </div>
            }
          </GoodExample>
        </Suggestion>
        <Suggestion title={"Add a semicolon \";\" at the end of declaration."}>
          <BadExample>
            {isPrimitive ?
              <div className="Indent-0"> {this.props.typeName}[] {this.props.foundName} new {this.props.typeName}[5] </div>
              : <div className="Indent-0"> int[] {this.props.foundName} new int[5] </div>
            }
          </BadExample>

          <BadExample>
            <div className="Indent-0">
              {this.props.typeName === 'String'            //Box 1 Ex 2 for String
                ?
                <>{this.props.typeName}[] {this.props.foundName} = {"{"}"a", "b", "c", "d", "e"{"}"}</>

                : this.props.typeName === 'char'            //Box 1 Ex 2 for char
                  ?
                  <>{this.props.typeName}[] {this.props.foundName} = {"{'a', 'b, 'c', 'd', 'e'}"}</>

                  : this.props.typeName === 'boolean'            //Box 1 Ex 2 for boolean
                    ?
                    <>{this.props.typeName}[] {this.props.foundName} = {"{true, false, true, false, true}"}</>

                    : this.props.typeName === 'float' || this.props.typeName === 'double'            //Box 1 Ex 2 for float/double
                      ?
                      <>{this.props.typeName}[] {this.props.foundName} = {"{1.1, 2.2, 3.3, 4.4, 5.5}"}</>

                      : this.props.typeName === 'int' || this.props.typeName === 'short' || this.props.typeName === 'byte'             //Box 1 Ex 2 for int/short/byte/long
                        ?
                        <>{this.props.typeName}[] {this.props.foundName} = {"{1,2,3,4,5}"}</>
                        :
                        <>int[] {this.props.foundName} = {"{1,2,3,4,5}"}</>
              }
            </div>
          </BadExample>

          <GoodExample>
            {isPrimitive ?
              <div className="Indent-0"> {this.props.typeName}[] {this.props.foundName} = new {this.props.typeName}[5]; </div>
              : <div className="Indent-0"> int[] {this.props.foundName} = {" "}new int[5]; </div>
            }
          </GoodExample>

          <GoodExample>
            <div className="Indent-0">
              {this.props.typeName === 'String'            //Box 1 Ex 2 for String
                ?
                <>{this.props.typeName}[] {this.props.foundName} = {"{"}"a", "b", "c", "d", "e"{"}"};</>

                : this.props.typeName === 'char'            //Box 1 Ex 2 for char
                  ?
                  <>{this.props.typeName}[] {this.props.foundName} = {"{'a', 'b, 'c', 'd', 'e'}"};</>

                  : this.props.typeName === 'boolean'            //Box 1 Ex 2 for boolean
                    ?
                    <>{this.props.typeName}[] {this.props.foundName} = {"{true, false, true, false, true}"};</>

                    : this.props.typeName === 'float' || this.props.typeName === 'double'            //Box 1 Ex 2 for float/double
                      ?
                      <>{this.props.typeName}[] {this.props.foundName} = {"{1.1, 2.2, 3.3, 4.4, 5.5}"};</>

                      : this.props.typeName === 'int' || this.props.typeName === 'short' || this.props.typeName === 'byte'
                        ?                                                              //Box 1 Ex 2 for int/short/byte/long
                        <>{this.props.typeName}[] {this.props.foundName} = {"{1,2,3,4,5}"};</>
                        :
                        <>int[] {this.props.foundName} = {"{1,2,3,4,5}"};</>
              }
            </div>
          </GoodExample>
        </Suggestion>
        <Suggestion title={"Add an equal sign \"=\" when declaring."}>
          <BadExample>
            {isPrimitive ?
              <div className="Indent-0"> {this.props.typeName}[] {this.props.foundName} new {this.props.typeName}[5]; </div>
              : <div className="Indent-0"> int[] {this.props.foundName} new int[5]; </div>
            }
          </BadExample>

          <BadExample>
            <div className="Indent-0">
              {this.props.typeName === 'String'            //Box 1 Ex 3 for String
                ?
                <>{this.props.typeName}[] {this.props.foundName} {"{"}"a", "b", "c", "d", "e"{"}"};</>

                : this.props.typeName === 'char'            //Box 1 Ex 3 for char
                  ?
                  <>{this.props.typeName}[] {this.props.foundName} {"{'a', 'b, 'c', 'd', 'e'}"};</>

                  : this.props.typeName === 'boolean'            //Box 1 Ex 3 for boolean
                    ?
                    <>{this.props.typeName}[] {this.props.foundName} {"{true, false, true, false, true}"};</>

                    : this.props.typeName === 'float' || this.props.typeName === 'double'            //Box 1 Ex 3 for float/double
                      ?
                      <>{this.props.typeName}[] {this.props.foundName} {"{1.1, 2.2, 3.3, 4.4, 5.5}"};</>

                      : this.props.typeName === 'int' || this.props.typeName === 'short' || this.props.typeName === 'byte'
                        ?                                                            //Box 1 Ex 3 for int/short/byte/long
                        <>{this.props.typeName}[] {this.props.foundName} {"{1,2,3,4,5}"};</>
                        :
                        <>int[] {this.props.foundName} {"{1,2,3,4,5}"};</>
              }
            </div>
          </BadExample>

          <GoodExample>
            {isPrimitive ?
              <div className="Indent-0"> {this.props.typeName}[] {this.props.foundName} = new {this.props.typeName}[5]; </div>
              : <div className="Indent-0"> int[] {this.props.foundName} = new int[5]; </div>
            }
          </GoodExample>

          <GoodExample>
            <div className="Indent-0">
              {this.props.typeName === 'String'            //Box 1 Ex 3 for String
                ?
                <>{this.props.typeName}[] {this.props.foundName} = {"{"}"a", "b", "c", "d", "e"{"}"};</>

                : this.props.typeName === 'char'            //Box 1 Ex 3 for char
                  ?
                  <>{this.props.typeName}[] {this.props.foundName} = {"{'a', 'b, 'c', 'd', 'e'}"};</>

                  : this.props.typeName === 'boolean'            //Box 1 Ex 3 for boolean
                    ?
                    <>{this.props.typeName}[] {this.props.foundName} = {"{true, false, true, false, true}"};</>

                    : this.props.typeName === 'float' || this.props.typeName === 'double'            //Box 1 Ex 3 for float/double
                      ?
                      <>{this.props.typeName}[] {this.props.foundName} = {"{1.1, 2.2, 3.3, 4.4, 5.5}"};</>

                      : this.props.typeName === 'int' || this.props.typeName === 'short' || this.props.typeName === 'byte'
                        ?                                                              //Box 1 Ex 3 for int/short/byte/long
                        <>{this.props.typeName}[] {this.props.foundName} = {"{1,2,3,4,5}"};</>
                        :
                        <>int[] {this.props.foundName} = {"{1,2,3,4,5}"};</>
              }
            </div>
          </GoodExample>
        </Suggestion>
        <Suggestion title="Specify the size of the array.">
          <BadExample>
            {isPrimitive ?
              <div className="Indent-0"> {this.props.typeName}[] {this.props.foundName} = new {this.props.typeName}; </div>
              : <div className="Indent-0"> int[] {this.props.foundName} = new int; </div>
            }
          </BadExample>

          <GoodExample>
            {isPrimitive ?
              <div className="Indent-0"> {this.props.typeName}[] {this.props.foundName} = new {this.props.typeName}[5]; </div>
              : <div className="Indent-0"> int[] {this.props.foundName} = new int[5]; </div>
            }
          </GoodExample>
        </Suggestion>
      </Problem>
    </CompilerError>;
  }
}

export default IncorrectVariableDeclaration;

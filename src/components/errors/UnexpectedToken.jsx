import React from "react";
import "../../App.css";
import CompilerError from "../CompilerError";
import Problem from "../Problem";
import Suggestion from "../Suggestion";
import BadExample from "../BadExample";
import GoodExample from "../GoodExample";

class UnexpectedToken extends React.Component {

  render() {
    const knownTypes = ["String", "boolean", "char", "float", "double", "int", "short", "byte", "long"];
    const intTypes = ["int", "short", "byte", "long", "char"];

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

    const demoValue = knownTypes.includes(this.props.typeName) ? typeToValue[this.props.typeName] : `new ${this.props.typeName}()`;

    return <CompilerError
      title={<>unexpected token: <div className="InputValue">{this.props.typeName}</div></>}
      translation={<>There is something incorrect concerning the <div className="InputValue">{this.props.typeName}</div>{" "}
        variable you are trying to use.</>}
      embed={this.props.embed}
    >
      {knownTypes.includes(this.props.typeName)
        ? <><Problem
          title="You may have forgotten to place a semicolon at the end of your current line."
        >
          <Suggestion title={"Add a \";\" to the end of the line."}>
            <BadExample>
              <div className="Indent-0">{this.props.typeName} s = {demoValue}</div>
            </BadExample>
            <GoodExample>
              <div className="Indent-0">{this.props.typeName} s = {demoValue};</div>
            </GoodExample>
          </Suggestion>
        </Problem>
          <Problem
            title="You may have left a variable without declaring it."
          >
            <Suggestion title="Either declare the variable, assign it, or just remove it if it is not used.">
              <BadExample>
                <div className="Indent-0"> s; </div>
              </BadExample>
              <GoodExample>
                <div className="Indent-0"> {this.props.typeName} s; </div>
              </GoodExample>
              <GoodExample>
                <div className="Indent-0"> {this.props.typeName} s = {demoValue}; </div>
              </GoodExample>
              <GoodExample>
                <div className="Indent-0"> <strikethrough>s;</strikethrough> </div>
              </GoodExample>
            </Suggestion>
          </Problem></>
        : <Problem
          title="You may have left an object without declaring it."
        >
          <Suggestion title="Either declare the object, assign it, or just remove it if it is not used.">
            <BadExample>
              <div className="Indent-0"> {this.props.typeName} </div>
            </BadExample>
            <GoodExample>
              <div className="Indent-0"> {this.props.typeName} s; </div>
            </GoodExample>
            <GoodExample>
              <div className="Indent-0"> {this.props.typeName} s = {demoValue}; </div>
            </GoodExample>
            <GoodExample>
              <div className="Indent-0"> <strikethrough> {this.props.typeName} </strikethrough> </div>
            </GoodExample>
          </Suggestion>
        </Problem>
      }
      {intTypes.includes(this.props.typeName)
        ? <Problem
          title={<>You may have incorrectly tried to cast a <div className="InputValue"></div> float {" "}
            variable onto a <div className="InputValue">{this.props.typeName}</div> variable.</>}
        >
          <Suggestion title={<>Add a parentheses around <div className="InputValue">{this.props.typeName}</div>, {" "}
            the type you are trying to convert the variable to.</>}>
            <BadExample>
              <div className="Indent-0"> float f = 5.5; </div>
              <div className="Indent-0"> {this.props.typeName} s = {this.props.typeName} f; </div>
            </BadExample>
            <GoodExample>
              <div className="Indent-0"> float f = 5.5; </div>
              <div className="Indent-0"> {this.props.typeName} s = ({this.props.typeName}) f; </div>
            </GoodExample>
          </Suggestion>
        </Problem>
        : <></>
      }
      {this.props.typeName === 'int'
        ? <Problem
          title="You may have incorrectly written the parameter of control structures (if-else statement, for-loop, etc.)."
        >
          <Suggestion title="Change the parameters of the control structure.">
            <BadExample>
              <div className="Indent-0"> {this.props.typeName} s = 5; </div>
              <div className="Indent-0"> if ({this.props.typeName} i = 0; i {" < "} 10; i++) {"{"} </div>
              <div className="Indent-1"> s += s; </div>
              <div className="Indent-0"> {"}"} </div>
            </BadExample>
            <GoodExample>
              <div className="Indent-0"> {this.props.typeName} s = 5; </div>
              <div className="Indent-0"> if (s {"<"} 10) {"{"} </div>
              <div className="Indent-1"> s += s; </div>
              <div className="Indent-0"> {"}"} </div>
            </GoodExample>
          </Suggestion>
          <Suggestion title="Change the control structure itself.">
            <BadExample>
              <div className="Indent-0"> {this.props.typeName} s = 5; </div>
              <div className="Indent-0"> if ({this.props.typeName} i = 0; i {" < "} 10; i++) {"{"} </div>
              <div className="Indent-1"> s += s; </div>
              <div className="Indent-0"> {"}"} </div>
            </BadExample>
            <GoodExample>
              <div className="Indent-0"> {this.props.typeName} s = 5; </div>
              <div className="Indent-0"> for ({this.props.typeName} i = 0; i {" < "} 10; i++) {"{"} </div>
              <div className="Indent-1"> s += s; </div>
              <div className="Indent-0"> {"}"} </div>
            </GoodExample>
          </Suggestion>
        </Problem>
        : <></>
      }
    </CompilerError>;
  }

}

export default UnexpectedToken;
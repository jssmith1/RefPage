import React from "react";
import "../../App.css";
import CompilerError from "../CompilerError";
import Problem from "../Problem";
import Suggestion from "../Suggestion";
import BadExample from "../BadExample";
import GoodExample from "../GoodExample";

class MethodNotFound extends React.Component {

    render() {
        const methodUsePrefix = this.props.typeName === "void" ? "" : `${this.props.typeName} a = `;
        const LEFT_CURLY = "{";
        const RIGHT_CURLY = "}";

        // eslint-disable-next-line
        const abbreviatedComment = "/* your code */";

        const exampleVarName = "example";
        const exampleClassName = "YourClass";

        const providedTypes = decodeURI(this.props.providedTypes).split(",");
        const numParams = providedTypes.length;

        let separatedDeclarationArgs = [];
        if (providedTypes[0].length > 0) {
            separatedDeclarationArgs = [...Array(numParams).keys()].map((index) => `${providedTypes[index]} param${index + 1}`);
        }

        const declarationArgs = separatedDeclarationArgs.join(", ");
        const invocationArgs = decodeURI(this.props.providedParams).split(",").join(", ");

        return <CompilerError
            title={<>The function <div className="InputValue">{this.props.methodName}()</div> does not exist</>}
            translation={<>You are trying to use a function, {" "}
                <div className="InputValue">{this.props.methodName}()</div>, which Processing{" "}
                does not recognize. ("Method" and "function" are used interchangeably here.)</>}
            embed={this.props.embed}
        >
            <Problem
                title={<>You may have mistyped the name of function <div className="InputValue">{this.props.methodName}()</div>.</>}
            >
                <Suggestion
                    title={<>If you are trying to use an existing Java function, make sure you match the name of{" "}
                        <p className="InputValue">{this.props.methodName}()</p> with the function.</>}
                >
                    <BadExample>
                        <div className="Indent-0"> String s = "s"; </div>
                        <div className="Indent-0"> {methodUsePrefix}s.{this.props.methodName}({invocationArgs});</div>
                    </BadExample>
                    <GoodExample>
                        <div className="Indent-0"> String s = "s"; </div>
                        <div className="Indent-0"> {methodUsePrefix}s.{this.props.correctMethodName}({invocationArgs});</div>
                    </GoodExample>
                </Suggestion>
                <Suggestion
                    title={<>Change the name of <p className="InputValue">{this.props.methodName}()</p> to the method you created.</>}
                >
                    <BadExample>
                        <div className="Indent-0"> {methodUsePrefix}{this.props.methodName}({invocationArgs});</div>
                        <div className="Indent-0"> {this.props.typeName} {this.props.correctMethodName}({declarationArgs}) {LEFT_CURLY}</div>
                        <div className="Indent-1"> {abbreviatedComment} </div>
                        <div className="Indent-0"> {RIGHT_CURLY} </div>
                    </BadExample>
                    <GoodExample>
                        <div className="Indent-0"> {methodUsePrefix}{this.props.correctMethodName}({invocationArgs});</div>
                        <div className="Indent-0"> {this.props.typeName} {this.props.correctMethodName}({declarationArgs}) {LEFT_CURLY} </div>
                        <div className="Indent-1"> {abbreviatedComment} </div>
                        <div className="Indent-0"> {RIGHT_CURLY} </div>
                    </GoodExample>
                </Suggestion>
            </Problem>
            <Problem
                title={<>You may have forgotten to create the method{" "}
                    <div className="InputValue">{this.props.methodName}()</div>.</>}
            >
                <Suggestion
                    title={<>Create the {" "}
                        <p className="InputValue">{this.props.methodName}()</p> method.</>}
                >
                    <BadExample>
                        <div className="Indent-0"> {methodUsePrefix}{this.props.methodName}({invocationArgs}); </div>
                    </BadExample>
                    <GoodExample>
                        <div className="Indent-0"> {methodUsePrefix}{this.props.methodName}({invocationArgs}); </div>
                        <div className="Indent-0"> {this.props.typeName} {this.props.methodName}({declarationArgs}) {LEFT_CURLY} </div>
                        <div className="Indent-1"> {abbreviatedComment} </div>
                        <div className="Indent-0"> {RIGHT_CURLY}</div>
                    </GoodExample>
                </Suggestion>
            </Problem>
            <Problem
                title={<>You may have used the method <div className="InputValue">{this.props.methodName}()</div> of a class incorrectly.</>}
            >
                <Suggestion
                    title={<>Create an object of a class and then call the method <p className="InputValue">{this.props.methodName}()</p> on it.</>}
                >
                    <BadExample>
                        <div className="Indent-0"> class {exampleClassName} {LEFT_CURLY}</div>
                        <div className="Indent-1"> {this.props.typeName} {this.props.methodName}({declarationArgs}) {LEFT_CURLY}</div>
                        <div className="Indent-2"> {abbreviatedComment} </div>
                        <div className="Indent-1"> {RIGHT_CURLY} </div>
                        <div className="Indent-0"> {RIGHT_CURLY} </div>
                        <div className="Indent-0"> {methodUsePrefix}{this.props.methodName}({invocationArgs});</div>
                    </BadExample>
                    <GoodExample>
                        <div className="Indent-0"> class {exampleClassName} {LEFT_CURLY}</div>
                        <div className="Indent-1"> {this.props.typeName} {this.props.methodName}({declarationArgs}) {LEFT_CURLY}</div>
                        <div className="Indent-2"> {abbreviatedComment} </div>
                        <div className="Indent-1"> {RIGHT_CURLY} </div>
                        <div className="Indent-0"> {RIGHT_CURLY} </div>
                        <div className="Indent-0"> {exampleClassName} {exampleVarName} = new {exampleClassName}()</div>
                        <div className="Indent-0"> {methodUsePrefix}{exampleVarName}.{this.props.methodName}({invocationArgs});</div>
                    </GoodExample>
                </Suggestion>
                <Suggestion
                    title={<>Create the method <p className="InputValue">{this.props.methodName}()</p> in a class.</>}
                >
                    <BadExample>
                        <div className="Indent-0"> class {exampleClassName} {LEFT_CURLY} {RIGHT_CURLY}</div>
                        <div className="Indent-0"> {exampleClassName} {exampleVarName} = new {exampleClassName}()</div>
                        <div className="Indent-0"> {methodUsePrefix}{exampleVarName}.{this.props.methodName}({invocationArgs});</div>
                    </BadExample>
                    <GoodExample>
                        <div className="Indent-0"> class {exampleClassName} {LEFT_CURLY}</div>
                        <div className="Indent-1"> {this.props.typeName} {this.props.methodName}({declarationArgs}) {LEFT_CURLY}</div>
                        <div className="Indent-2"> {abbreviatedComment} </div>
                        <div className="Indent-1"> {RIGHT_CURLY} </div>
                        <div className="Indent-0"> {RIGHT_CURLY} </div>
                        <div className="Indent-0"> {exampleClassName} {exampleVarName} = new {exampleClassName}()</div>
                        <div className="Indent-0"> {methodUsePrefix}{exampleVarName}.{this.props.methodName}({invocationArgs});</div>
                    </GoodExample>
                </Suggestion>
            </Problem>
        </CompilerError>;
    }
}

export default MethodNotFound;

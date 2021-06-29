import React from "react";
import "../../App.css";
import CompilerError from "../CompilerError";
import Problem from "../Problem";
import Suggestion from "../Suggestion";
import BadExample from "../BadExample";
import GoodExample from "../GoodExample";

class MethodNotFound extends React.Component {

    render() {
        return <CompilerError
            title={<>The function <div className="InputValue">{this.props.methodName}()</div> does not exist</>}
            translation={<>You are trying to use a function, {" "}
                <div className="InputValue">{this.props.methodName}()</div>, which Processing{" "}
                does not recognize. ("Method" and "function" are used interchangeably here.)</>}
        >
            <Problem
                title={<>You may have mistyped the name of function{" "}
                    <div className="InputValue">{this.props.methodName}()</div>.</>}
            >
                <Suggestion
                    title={<>If you are trying to use an existing Java function, make sure you match the name of{" "}
                        <p className="InputValue">{this.props.methodName}()</p> with the function.</>}
                >
                    <BadExample>
                        <div className="Indent-0"> String s = "s"; </div>
                        <div className="Indent-0"> {this.props.typeName} a = s.{this.props.methodName}();</div>
                    </BadExample>
                    <GoodExample>
                        <div className="Indent-0"> String s = "s"; </div>
                        <div className="Indent-0"> {this.props.typeName} a = s.{this.props.correctMethodName}();</div>
                    </GoodExample>
                </Suggestion>
                <Suggestion
                    title={<>Change the name of {" "}
                        <p className="InputValue">{this.props.methodName}()</p> to the method you created.</>}
                >
                    <BadExample>
                        <div className="Indent-0"> {this.props.typeName} a = {this.props.methodName}(5);</div>
                        <div className="Indent-0"> {this.props.typeName} {this.props.correctMethodName}({this.props.typeName} s){"{"}</div>
                        <div className="Indent-1"> ... </div>
                        <div className="Indent-0"> {"}"} </div>
                    </BadExample>
                    <GoodExample>
                        <div className="Indent-0"> {this.props.typeName} a = {this.props.correctMethodName}(5);</div>
                        <div className="Indent-0"> {this.props.typeName} {this.props.correctMethodName}({this.props.typeName} s){"{"} </div>
                        <div className="Indent-1"> ... </div>
                        <div className="Indent-0"> {"}"} </div>
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
                        <div className="Indent-0"> {this.props.typeName} a = {this.props.methodName}(5); </div>
                    </BadExample>
                    <GoodExample>
                        <div className="Indent-0"> {this.props.typeName} a = {this.props.methodName}(5); </div>
                        <div className="Indent-0"> {this.props.typeName} {this.props.methodName}({this.props.typeName} s) {"{"} </div>
                        <div className="Indent-1"> ... </div>
                        <div className="Indent-0"> {"}"}</div>
                    </GoodExample>
                </Suggestion>
            </Problem>
            <Problem
                title={<>You may have used the method{" "}
                    <div className="InputValue">{this.props.methodName}()</div>{" "}
                    of class <div className="InputValue">{this.props.className}</div> incorrectly.</>}
            >
                <Suggestion
                    title={<>Create an object of class {" "}
                        <p className="InputValue">{this.props.className}</p> and then call the method {" "}
                        <p className="InputValue">{this.props.methodName}()</p> on it.</>}
                >
                    <BadExample>
                        <div className="Indent-0"> class {this.props.className}{"{"}</div>
                        <div className="Indent-1"> {this.props.className}(){"{"}  </div>
                        <div className="Indent-2"> ... </div>
                        <div className="Indent-1"> {"}"} </div>
                        <div className="Indent-1"> {this.props.typeName} {this.props.methodName}({this.props.typeName} s){"{"}</div>
                        <div className="Indent-2"> ... </div>
                        <div className="Indent-1"> {"}"} </div>
                        <div className="Indent-0"> {"}"} </div>
                        <div className="Indent-0">{this.props.typeName} a = {this.props.methodName}(5);</div>
                    </BadExample>
                    <GoodExample>
                        <div className="Indent-0"> class {this.props.className}{"{"}</div>
                        <div className="Indent-1"> {this.props.className}(){"{"}  </div>
                        <div className="Indent-2"> ... </div>
                        <div className="Indent-1"> {"}"} </div>
                        <div className="Indent-1"> {this.props.typeName} {this.props.methodName}({this.props.typeName} s){"{"}</div>
                        <div className="Indent-2"> ... </div>
                        <div className="Indent-1"> {"}"} </div>
                        <div className="Indent-0"> {"}"} </div>
                        <div className="Indent-0">{this.props.className} {this.props.varName} = new {this.props.className}()</div>
                        <div className="Indent-0">{this.props.typeName} a = {this.props.varName}.{this.props.methodName}(5);</div>
                    </GoodExample>
                </Suggestion>
                <Suggestion
                    title={<>Create the method {" "}
                        <p className="InputValue">{this.props.methodName}()</p> in {" "}
                        class <p className="InputValue">{this.props.className}</p>.</>}
                >
                    <BadExample>
                        <div className="Indent-0"> class {this.props.className}{"{"}</div>
                        <div className="Indent-1"> {this.props.className}(){"{"}  </div>
                        <div className="Indent-2"> ... </div>
                        <div className="Indent-1"> {"}"} </div>
                        <div className="Indent-0"> {"}"} </div>
                        <div className="Indent-0">{this.props.className} {this.props.varName} = new {this.props.className}()</div>
                        <div className="Indent-0">{this.props.typeName} a = {this.props.varName}.{this.props.methodName}(5);</div>
                    </BadExample>
                    <GoodExample>
                        <div className="Indent-0"> class {this.props.className}{"{"}</div>
                        <div className="Indent-1"> {this.props.className}(){"{"}  </div>
                        <div className="Indent-2"> ... </div>
                        <div className="Indent-1"> {"}"} </div>
                        <div className="Indent-1"> {this.props.typeName} {this.props.methodName}({this.props.typeName} s){"{"}</div>
                        <div className="Indent-2"> ... </div>
                        <div className="Indent-1"> {"}"} </div>
                        <div className="Indent-0"> {"}"} </div>
                        <div className="Indent-0">{this.props.className} {this.props.varName} = new {this.props.className}()</div>
                        <div className="Indent-0">{this.props.typeName} a = {this.props.varName}.{this.props.methodName}(5);</div>
                    </GoodExample>
                </Suggestion>
            </Problem>
        </CompilerError>;
    }
}

export default MethodNotFound;

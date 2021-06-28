import React from "react";
import "../../App.css";
import CompilerError from "../CompilerError";
import Problem from "../Problem";
import Suggestion from "../Suggestion";
import BadExample from "../BadExample";
import GoodExample from "../GoodExample";

class ExtraneousClosingCurlyBrace extends React.Component {
  render() {
    return <CompilerError title="Expecting EOF, found '}'" translation="There is an extra closing curly brace }">
      <Problem
        title="You may have added an extra closing curly brace at the end of your code."
        tip="Try using the Auto-Format feature first -> Ctrl + T"
      >
        <Suggestion title="Remove the extra closing curly brace from the end of your method.">
          <BadExample>
            <div className="Indent-0"> void {this.props.methodName}() {"{"} </div>
            <div className="Indent-1"> if(...) {"{"} </div>
            <div className="Indent-2"> for(...) {"{"} </div>
            <div className="Indent-3"> ... </div>
            <div className="Indent-2"> {"}"} </div>
            <div className="Indent-1"> {"}"} </div>
            <div className="Indent-0"> {"}"} </div>
            <div className="Indent-0"> {"}"} </div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0"> void {this.props.methodName}() {"{"} </div>
            <div className="Indent-1"> if(...) {"{"} </div>
            <div className="Indent-2"> for(...) {"{"} </div>
            <div className="Indent-3"> ... </div>
            <div className="Indent-2"> {"}"} </div>
            <div className="Indent-1"> {"}"} </div>
            <div className="Indent-0"> {"}"} </div>
          </GoodExample>
        </Suggestion>
        <Suggestion title="Remove the extra closing curly brace from the end of your class">
          <BadExample>
            <div className="Indent-0"> class {this.props.className}{"{"} </div>
            <div className="Indent-1">  {this.props.className}(){"{"} </div>
            <div className="Indent-2">  ...; </div>
            <div className="Indent-1">  {"}"} </div>
            <div className="Indent-1"> void {this.props.methodName}() {"{"} </div>
            <div className="Indent-2"> if(...) {"{"} </div>
            <div className="Indent-3"> for(...) {"{"} </div>
            <div className="Indent-4"> ...; </div>
            <div className="Indent-3"> {"}"} </div>
            <div className="Indent-2"> {"}"} </div>
            <div className="Indent-1"> {"}"} </div>
            <div className="Indent-0"> {"}"} </div>
            <div className="Indent-0"> {"}"} </div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0"> class {this.props.className}{"{"} </div>
            <div className="Indent-1">  {this.props.className}(){"{"} </div>
            <div className="Indent-2">  ... </div>
            <div className="Indent-1">  {"}"} </div>
            <div className="Indent-1"> void {this.props.methodName}() {"{"} </div>
            <div className="Indent-2"> if(...) {"{"} </div>
            <div className="Indent-3"> for(...) {"{"} </div>
            <div className="Indent-4"> ... </div>
            <div className="Indent-3"> {"}"} </div>
            <div className="Indent-2"> {"}"} </div>
            <div className="Indent-1"> {"}"} </div>
            <div className="Indent-0"> {"}"} </div>
          </GoodExample>
        </Suggestion>
      </Problem>
    </CompilerError>;
  }
}

export default ExtraneousClosingCurlyBrace;

import React from "react";
import "../../App.css";
import CompilerError from "../CompilerError";
import Problem from "../Problem";
import Suggestion from "../Suggestion";
import BadExample from "../BadExample";
import GoodExample from "../GoodExample";

class ExtraneousClosingCurlyBrace extends React.Component {
  render() {
    return <CompilerError title="Expecting EOF, found '}'" translation="There is an extra closing curly brace }" embed={this.props.embed}>
      <Problem
        title="You may have added an extra closing curly brace at the end of your code."
        tip="Try using the Auto-Format feature first -> Ctrl + T"
      >
        <Suggestion title="Remove the extra closing curly brace from the end of your code block.">
          <BadExample>
            <div className="Indent-0">{this.props.original}</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0">{this.props.fixed}</div>
          </GoodExample>
        </Suggestion>
      </Problem>
    </CompilerError>;
  }
}

export default ExtraneousClosingCurlyBrace;

import React from "react";
import "../../App.css";
import CompilerError from "../CompilerError";
import Problem from "../Problem";
import Suggestion from "../Suggestion";
import BadExample from "../BadExample";
import GoodExample from "../GoodExample";
import IncorrectMethodDeclarationResourceFooter from "../resourceFooters/IncorrectMethodDeclarationResourceFooter.jsx";

class IncorrectMethodDeclaration extends React.Component {

  render() {
    const LEFT_CURLY = "{";
    const RIGHT_CURLY = "}";

    return <CompilerError title={"It looks like you're mixing \"active\" and \"static\" modes."}
      translation={`In Processing, "active" mode uses the setup() and draw() calls and keeps running. The "static" mode includes calls
    on both existing and user-made functions.`}>
      embed={this.props.embed}
      <Problem
        title={"You may have forgotten to add the return type \"void\" before setup() or draw()."}
      >
        <Suggestion title={"Add the return type \"void\" before setup()."}>
          <BadExample>
            <div className="Indent-0">
              setup() {LEFT_CURLY}
            </div>
            <div className="Indent-1">
              {this.props.setupMethodName}(1000, 1000);
              <div className="Indent-1">...</div>
            </div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
            <div className="Indent-0">
              void draw(){LEFT_CURLY}
            </div>
            <div className="Indent-1"> {this.props.drawMethodName}(500, 500, 200, 100);</div>
            <div className="Indent-1">...</div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0">
              void setup() {LEFT_CURLY}
            </div>
            <div className="Indent-1">
              {this.props.setupMethodName}(1000, 1000);
              <div className="Indent-1">...</div>
            </div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
            <div className="Indent-0">
              void draw(){LEFT_CURLY}
            </div>
            <div className="Indent-1"> {this.props.drawMethodName}(500, 500, 200, 100);</div>
            <div className="Indent-1">...</div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
          </GoodExample>
        </Suggestion>
        <Suggestion title={"Add the return type \"void\" before draw()"}>
          <BadExample>
            <div className="Indent-0">
              void setup() {LEFT_CURLY}
            </div>
            <div className="Indent-1">
              {this.props.setupMethodName}(1000, 1000);
              <div className="Indent-1">...</div>
            </div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
            <div className="Indent-0">
              draw(){LEFT_CURLY}
            </div>
            <div className="Indent-1"> {this.props.drawMethodName}(500, 500, 200, 100);</div>
            <div className="Indent-1">...</div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0">
              void setup() {LEFT_CURLY}
            </div>
            <div className="Indent-1">
              {this.props.setupMethodName}(1000, 1000);
              <div className="Indent-1">...</div>
            </div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
            <div className="Indent-0">
              void draw(){LEFT_CURLY}
            </div>
            <div className="Indent-1"> {this.props.drawMethodName}(500, 500, 200, 100);</div>
            <div className="Indent-1">...</div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
          </GoodExample>
        </Suggestion>
      </Problem>
      <Problem
        title="You may have called on a function outside the setup() or draw() scope."
      >
        <Suggestion title={<>Use the <div className="InputValue">{this.props.setupMethodName}()</div> function inside setup().</>}>
          <BadExample>
            <div className="Indent-0"> {this.props.setupMethodName}(1000, 1000);  </div>
            <div className="Indent-0">
              void setup() {LEFT_CURLY}
            </div>
            <div className="Indent-1">...</div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0">
              void setup() {LEFT_CURLY}
            </div>
            <div className="Indent-1"> {this.props.setupMethodName}(1000, 1000);  </div>
            <div className="Indent-1">...</div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
          </GoodExample>
        </Suggestion>
        <Suggestion title={<>Use the <div className="InputValue">{this.props.drawMethodName}()</div> function inside draw().</>}>
          <BadExample>
            <div className="Indent-0">
              void draw(){LEFT_CURLY}
            </div>
            <div className="Indent-1">...</div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
            <div className="Indent-0"> {this.props.drawMethodName}(500, 500, 200, 100);</div>
          </BadExample>
          <GoodExample>
            <div className="Indent-0">
              void draw(){LEFT_CURLY}
            </div>
            <div className="Indent-1"> {this.props.drawMethodName}(500, 500, 200, 100);</div>
            <div className="Indent-1">...</div>
            <div className="Indent-0">{RIGHT_CURLY}</div>
          </GoodExample>
        </Suggestion>
      </Problem>
      <IncorrectMethodDeclarationResourceFooter />
    </CompilerError>;
  }
}

export default IncorrectMethodDeclaration;

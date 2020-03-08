import React from 'react';
import UpArrow from './assets/up-arrow.svg';
import DownArrow from './assets/down-arrow.svg';
import './App.css';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const BlueCheckbox = withStyles({
  root: {
    color: blue[400],
    '&$checked': {
      color: blue[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

const LEFT_CURLY = "{";
const RIGHT_CURLY = "}";
class App extends React.Component {
  constructor(props){
    super(props);
    this.handleChangeVarName = this.handleChangeVarName.bind(this);
    this.openStrategyTile = this.openStrategyTile.bind(this);
    this.openCodeExample = this.openCodeExample.bind(this);
    this.state = {
      varName: 'Thing', 
      openStrategy: false,
      openCode: false
    };
  }

  handleChangeVarName(event) {
    this.setState({varName: event.target.value});
  }

  openStrategyTile(){
    this.setState({openStrategy: !this.state.openStrategy});
  }

  openCodeExample(){
    this.setState({openCode: !this.state.openCode});
  }
  render() {
    this.varName="Hi"
    return (
      <div className="App">
        <div className="AppContent">
            <form className="form-horizontal">
                <p>Input class name</p>
                <input type="text" value={this.state.value} onChange={this.handleChangeVarName} />
            </form>
          <div className="Title">
            <h2>Type <div className="VarName">{this.state.varName}</div> was not found</h2>
          </div>
          
          <h4><i>Translation: You are trying to declare a variable of type <div className="VarName">{this.state.varName}</div> but I don’t know what a <div className="VarName">{this.state.varName}</div> is.</i></h4>
          
          <div className="Tile">
            <div className="ErrorTile">
              <div className="ErrorMessage">
                <h4>Suggestion 1: You may have mistyped class name <div className="VarName">{this.state.varName}</div> </h4>
                <p>Hint: Is <div className="VarName">{this.state.varName}</div> the exact class name that you want?</p>
              </div>
              <div className="ButtonHolder"><img src={DownArrow} alt="down-button" width="20" height="20"></img></div>
              {/* {this.state.openStrategy && <div className="ButtonHolder"><img onClick={this.openStrategyTile} src={UpArrow} alt="up-button" width="20" height="20"></img></div>} */}
            </div>
          </div>
          <div className="Tile">
            <div className="ErrorTile">
              <div className="ErrorMessage">
                <h4>Suggestion 2: You may have forgotten to create class <div className="VarName">{this.state.varName}</div> </h4>
                <p>Hint: Is <div className="VarName">{this.state.varName}</div> the name of the class you wanted to create?</p>
              </div>
              {!this.state.openStrategy && <div className="ButtonHolder"><img onClick={this.openStrategyTile} src={DownArrow} alt="down-button" width="20" height="20"></img></div>}
              {this.state.openStrategy && <div className="ButtonHolder"><img onClick={this.openStrategyTile} src={UpArrow} alt="up-button" width="20" height="20"></img></div>}
            </div>
            {this.state.openStrategy && <div className="StrategyContainer">
              
              <p><i>Tick the box once you have tried the suggestion</i></p>
              <div className="StrategyTile">
                <div className="StrategyInstruction"> 
                  <div className="StrategyMessage">
                    <BlueCheckbox
                      value="box1"
                    /> 
                    <p>Suggestion 1: Is <p className="VarName">{this.state.varName}</p> the exact class name that you want?</p>
                  </div>
                  {!this.state.openCode && <div className="ButtonHolder"><img onClick={this.openCodeExample} src={DownArrow} alt="down-button" width="20" height="20"></img></div>}
                  {this.state.openCode && <div className="ButtonHolder"><img onClick={this.openCodeExample} src={UpArrow} alt="up-button" width="20" height="20"></img></div>}
          
                </div> 
                {this.state.openCode && <div className="CodeExample">
                  <div className="RedCode"> 
                    <div className="Indent-0"><p className="VarName">{this.state.varName}</p> mything = new <p className="VarName">{this.state.varName}</p>();</div>
                  </div>
                  <div className="GreenCode">  
                    <div className="Indent-0">void setup() {LEFT_CURLY} </div>
                      <div className="Indent-1"><p className="VarName">{this.state.varName}</p> myThing = new <p className="VarName">{this.state.varName}</p>(); </div>
                      <div className="Indent-0">{RIGHT_CURLY}</div>
                      <div className="Indent-0">class <p className="VarName">{this.state.varName}</p> {LEFT_CURLY}</div>
                      <div className="Indent-1"><p className="VarName">{this.state.varName}</p>() {LEFT_CURLY}</div>
                      <div className="Indent-1">{RIGHT_CURLY}</div>
                      <div className="Indent-0">{RIGHT_CURLY}</div>
                  </div>
                </div>}
              </div>
            </div>}
          </div>
        </div>
      </div>
    );
  }

}



export default App;

import React from 'react';
import downButton from './assets/down-button.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {varName: 'Thing'};
  }

  handleChange(event) {
    this.setState({varName: event.target.value});
    
}

  render() {
    this.varName="Hi"
    return (
      <div className="App">
        <div className="AppContent">
        <form className="form-horizontal">
                <p>Type in your variable/class</p>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </form>
            
            
          <div className="Title"><h2>Type <div className="VarName">{this.state.varName}</div> was not found</h2></div>
          <p>
          Translation: You are trying to declare a variable of type <div className="VarName">{this.state.varName}</div> but I don’t know what a <div className="VarName">{this.state.varName}</div> is.
          </p>
          <div className="ErrorTile">
            <div className="ErrorMessage">
              <h4>1. You may have mistyped class name <div className="VarName">{this.state.varName}</div> </h4>
              <p>Hint: Is <div className="VarName">{this.state.varName}</div> the exact class name that you want?</p>
            </div>

            <div className="ButtonHolder"><img src={downButton} alt="Drop-down-button" width="30" height="30"></img></div>
          </div>
          
        </div>
      </div>
    );
  }

}



export default App;

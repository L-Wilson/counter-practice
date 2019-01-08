import React, { Component } from 'react';
import Title from './components/Title';
import Buttons from './components/Buttons';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    }
  }

  increase = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  decrease = () => {
    this.setState({
      number: this.state.number - 1
    })
  }

  render() {
    return (
      <div className="App">
        <Title cake={this.state.number} />
        <Buttons kuchen={this.increase} struedel={this.decrease} />
      </div>
    );
  }
}

export default App;
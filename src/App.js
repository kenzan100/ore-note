import React, { Component } from 'react';
import './App.css';
import NewMemo from './NewMemo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memos: [
        {
          content: 'sample'
        }
      ]
    };
  }

  onSave(text) {
    this.setState({
      memos: this.state.memos.concat([
        {
          content: text
        }
      ])
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ore Note</h1>
        </header>
        <div className="App-intro">
        <NewMemo
      onSave={(text) => this.onSave(text)}
        />
        </div>
      </div>
    );
  }
}

export default App;

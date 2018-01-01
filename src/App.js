import React, { Component } from 'react';
import './App.css';
import NewMemo from './NewMemo.js';
import Draft from './Draft.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memos: []
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
        <Draft
      memos={this.state.memos}
        />
        <NewMemo
      onSave={(text) => this.onSave(text)}
        />
        </div>
      </div>
    );
  }
}

export default App;

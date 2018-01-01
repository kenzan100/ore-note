import React, { Component } from 'react';
import './App.css';
import NewMemo from './NewMemo.js';
import Draft from './Draft.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      insertAt: 0,
      memos: []
    };
  }

  onSave = (text) => {
    const insertAt = this.state.insertAt;
    const newMemosFirst = this.state.memos.slice(0, insertAt);
    const newMemosLast  = this.state.memos.slice(insertAt);
    const newMemos = newMemosFirst.concat({content:text}).concat(newMemosLast);
    this.setState({
      insertAt: newMemos.length,
      memos: newMemos
    });
  }

  onInsert = (index) => {
    this.setState({
      insertAt: index
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
      onInsert={this.onInsert}
      memos={this.state.memos}
        />
        <NewMemo
      insertAt={this.state.insertAt}
      onSave={this.onSave}
        />
        </div>
      </div>
    );
  }
}

export default App;

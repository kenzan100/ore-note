import React, { Component } from 'react';

class Separator extends Component {
  onClick = () => {
    this.props.onClick(this.props.index);
  }

  render(){
    return(
        <button onClick={this.onClick}>
        +
        </button>
    );
  }
}

function Sentence(props) {
  return(
      <div>
      <Separator onClick={props.onInsert} index={props.index}/>
      <p>{props.content}</p>
      </div>
  );
}

class Draft extends Component {
  render() {
    const sentences = this.props.memos.map((m) => m.content);
    const elems = sentences.map(
      (c, i) => <Sentence
      key={i}
      index={i}
      onInsert={this.props.onInsert}
      content={c}
        />
    );
    return(
        <div>
        {elems}
        </div>
    );
  }
}

export default Draft;

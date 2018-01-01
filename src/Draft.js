import React, { Component } from 'react';

function Separator(props) {
  return(
      <button>
      +
      </button>
  );
}

function Sentence(props) {
  return(
      <div>
      <Separator />
      <p>{props.content}</p>
      </div>
  );
}

class Draft extends Component {
  render() {
    const sentences = this.props.memos.map((m) => m.content);
    const elems = sentences.map((c) => <Sentence content={c}/>);
    return(
        <div>
        {elems}
        </div>
    );
  }
}

export default Draft;

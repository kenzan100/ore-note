import React, { Component } from 'react';

function SubmitBtn(props) {
  return (
      <button onClick={props.onClick}>
      Insert at {props.insertAt}
      </button>
  );
}

class NewMemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "What's up?"
    };
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  onSave = () => {
    if(this.state.value === '') {
      return;
    }
    this.props.onSave(this.state.value);
    this.setState({value: ''});
  }

  render() {
    return(
      <div>
        <textarea
      value={this.state.value}
      onChange={this.handleChange}
        />
        <SubmitBtn
      insertAt={this.props.insertAt}
      onClick={this.onSave}
        />
      </div>
    );
  }
}

export default NewMemo;

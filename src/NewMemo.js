import React, { Component } from 'react';

function SubmitBtn(props) {
  return (
      <button onClick={props.onClick}>
        Save
      </button>
  );
}

class NewMemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "What's up?"
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  onSave() {
    this.props.onSave(this.state.value);
    this.setState({value: ''});
  }

  render() {
    return(
      <div>
        <textarea value={this.state.value}
      onChange={this.handleChange}
        />
        <SubmitBtn
      onClick={this.onSave}
        />
      </div>
    );
  }
}

export default NewMemo;

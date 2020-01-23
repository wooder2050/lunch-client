import React, { Component } from "react";
import "./InputBox.scss";

class InputBox extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.state = {
      name: ""
    };
    this.onHandleChangeName = this.onHandleChangeName.bind(this);
  }
  onHandleChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  componentDidUpdate(prevProps) {
    const { person } = this.props;
    if (person !== prevProps.person) {
      this.setState({
        name: ""
      });
    }
  }
  render() {
    const { person, inputError, addPeople } = this.props;
    return (
      <div className="input-box">
        <div className="input-box-header">Input your name, please</div>
        <div className="input-btn-wrapper">
          <input
            className="input-name-form"
            type="text"
            onChange={this.onHandleChangeName}
            value={this.state.name}
            name="name"
            placeholder="Input your name, please"
            ref={this.nameInput}
          />
          <div onClick={e => addPeople(this, person)} className="input-btn">
            Join
          </div>
        </div>
        <div className="error-box">{inputError && inputError}</div>
      </div>
    );
  }
}

export default InputBox;

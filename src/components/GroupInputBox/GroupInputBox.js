import React, { Component } from "react";
import "./GroupInputBox.scss";

class GroupInputBox extends Component {
  constructor(props) {
    super(props);
    this.groupInput = React.createRef();
    this.minimumSizeInput = React.createRef();
    this.state = {
      group: "",
      minimumSize: ""
    };
    this.onHandleChangeGroup = this.onHandleChangeGroup.bind(this);
    this.onHandleChangeMinimumSize = this.onHandleChangeMinimumSize.bind(this);
  }
  onHandleChangeGroup(e) {
    this.setState({
      group: e.target.value
    });
  }
  onHandleChangeMinimumSize(e) {
    this.setState({
      minimumSize: e.target.value
    });
  }
  componentDidUpdate(prevProps) {
    const { groupResult } = this.props;
    if (groupResult !== prevProps.groupResult) {
      this.setState({
        group: "",
        minimumSize: ""
      });
    }
  }
  render() {
    const { person, makeLunchGroup, resetGroup } = this.props;
    return (
      <div className="make-group-btn-wrapper">
        <div className="make-group-btn-box">
          <input
            className="input-group-form"
            type="text"
            onChange={this.onHandleChangeGroup}
            value={this.state.group}
            name="group-size"
            placeholder="group-size"
            ref={this.groupInput}
          />
          <input
            className="input-minimum-size-form"
            type="text"
            onChange={this.onHandleChangeMinimumSize}
            value={this.state.minimumSize}
            name="minimum-size"
            placeholder="minimum-size"
            ref={this.minimumSizeInput}
          />
          <div
            className="make-group-btn"
            onClick={e => makeLunchGroup(this, person)}
          >
            Start
          </div>
          <div className="make-group-btn" onClick={resetGroup}>
            Reset
          </div>
        </div>
      </div>
    );
  }
}

export default GroupInputBox;

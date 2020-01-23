import React, { Component } from "react";
import "./GroupBox.scss";

class GroupBox extends Component {
  render() {
    const { groupResult, groupMakeError } = this.props;
    return (
      <>
        <div className="main-box-header">LUNCH GROUP</div>
        <div className="main-box">
          <div className="main-wrapper">
            {groupResult &&
              groupResult.map((group, i) => {
                return (
                  <div className="group-box" key={i}>
                    <div className="group-box-header"># {i + 1}</div>
                    {group &&
                      group.map((people, j) => {
                        return (
                          <div className="people" key={j}>
                            {people}
                          </div>
                        );
                      })}
                  </div>
                );
              })}
            {groupMakeError && (
              <div className="error-box">{groupMakeError}</div>
            )}
            {!groupMakeError && !groupResult && (
              <div className="lunch-info">Create a group now.</div>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default GroupBox;

import React, { Component } from "react";
import "./PeopleList.scss";

class PeopleList extends Component {
  render() {
    const { person, deletePeople } = this.props;
    return (
      <div className="people-list-box">
        <div className="people-list-header">Participant Status</div>
        <div className="people-list-wrapper">
          <div className="people-list">
            {person &&
              person.map((people, i) => {
                return (
                  <div className="name-list" key={i}>
                    <div className="name">{people.name}</div>
                    <div
                      className="delete-btn"
                      onClick={e => deletePeople(people.name)}
                    >
                      X
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default PeopleList;

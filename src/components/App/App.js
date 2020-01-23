import React, { Component } from "react";
import Header from "../Header/Header";
import GroupBox from "../GroupBox/GroupBox";
import GroupInputBox from "../GroupInputBox/GroupInputBox";
import PeopleList from "../PeopleList/PeopleList";
import InputBox from "../InputBox/InputBox";
import "./App.scss";

class App extends Component {
  componentDidMount() {
    this.props.onLoad();
  }
  render() {
    const {
      person,
      inputError,
      groupResult,
      groupMakeError,
      addPeople,
      deletePeople,
      makeLunchGroup,
      resetGroup
    } = this.props;
    return (
      <div className="app">
        <Header />
        <div className="main">
          <div className="left-content">
            <GroupBox
              groupResult={groupResult}
              groupMakeError={groupMakeError}
            />
            <GroupInputBox
              person={person}
              groupResult={groupResult}
              makeLunchGroup={makeLunchGroup}
              resetGroup={resetGroup}
            />
          </div>

          <div className="right-content">
            <PeopleList person={person} deletePeople={deletePeople} />
            <InputBox
              person={person}
              inputError={inputError}
              addPeople={addPeople}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

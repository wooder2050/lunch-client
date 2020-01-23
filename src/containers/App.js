import { connect } from "react-redux";
import App from "../components/App/App";
import {
  fetchPeopleGet,
  fetchPeopleUpdate,
  fetchPeopleDelete,
  makeGroup
} from "../api";

const mapStateToProps = state => {
  const { person, inputError, groupResult, groupMakeError } = state.lunch;
  return {
    person,
    inputError,
    groupResult,
    groupMakeError
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLoad() {
      fetchPeopleGet(dispatch);
    },
    addPeople(event, person) {
      fetchPeopleUpdate(dispatch, event, person);
    },
    deletePeople(event) {
      fetchPeopleDelete(dispatch, event);
    },
    makeLunchGroup(event, person) {
      makeGroup(dispatch, event, person);
    },
    resetGroup() {
      dispatch({
        type: "RESET_GROUP"
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import { combineReducers } from "redux";
import {
  LOAD_PERSON_DATA,
  ADD_PEOPLE,
  UPDATE_GROUP,
  RESET_GROUP
} from "../constants/actionTypes";

const initialState = {
  person: null,
  inputError: null,
  groupResult: null,
  groupMakeError: null
};
export function lunchReducers(state = initialState, action) {
  switch (action.type) {
    case LOAD_PERSON_DATA:
      return Object.assign(
        { ...state },
        {
          person: action.responseJson.user
        }
      );
    case ADD_PEOPLE:
      return Object.assign(
        { ...state },
        {
          person: action.responseJson.user,
          inputError: action.responseJson.inputError
        }
      );
    case UPDATE_GROUP:
      return Object.assign(
        { ...state },
        {
          groupResult: action.responseJson.group,
          groupMakeError: action.responseJson.makeError
        }
      );
    case RESET_GROUP:
      return Object.assign(
        { ...state },
        {
          groupResult: null
        }
      );
    default:
      return state;
  }
}

export default combineReducers({
  lunch: lunchReducers
});

import {
  SERVER_URL,
  LOAD_PERSON_DATA,
  ADD_PEOPLE,
  UPDATE_GROUP
} from "../constants/actionTypes";

export const fetchPeopleGet = async function(dispatch) {
  let response = await fetch(`${SERVER_URL}/api/people`, {
    method: "GET",
    header: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    }
  });
  let responseJson = await response.json();
  dispatch({ type: LOAD_PERSON_DATA, responseJson });
};

export const fetchPeopleUpdate = async function(dispatch, event, person) {
  let name = event.nameInput.current.value;
  let response = await fetch(`${SERVER_URL}/api/people/update`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    body: JSON.stringify({ name: name, person: person })
  });
  let responseJson = await response.json();
  dispatch({ type: ADD_PEOPLE, responseJson });
};

export const fetchPeopleDelete = async function(dispatch, name) {
  let response = await fetch(`${SERVER_URL}/api/people/delete`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    body: JSON.stringify({ name: name })
  });
  let responseJson = await response.json();
  dispatch({ type: LOAD_PERSON_DATA, responseJson });
};

export const makeGroup = async function(dispatch, event, person) {
  let groupSize = event.groupInput.current.value;
  let minimumSize = event.minimumSizeInput.current.value;
  let response = await fetch(`${SERVER_URL}/api/group`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    },
    body: JSON.stringify({
      person: person,
      groupSize: groupSize,
      minimumSize: minimumSize
    })
  });
  let responseJson = await response.json();
  dispatch({ type: UPDATE_GROUP, responseJson });
};

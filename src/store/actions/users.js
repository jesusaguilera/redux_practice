import { GET_USERS, ADD_USER } from "../actionsTypes/users";

// Get users
export const getUsersSuccess = (data) => {
  return {
    type: GET_USERS,
    payload: {
      data,
    },
  };
};
export function getUsers() {
  return (dispatch) => {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.ok) {
          response.json().then((responseJson) => {
            dispatch(getUsersSuccess(responseJson));
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

// Add user
export const addUserSuccess = (data) => ({
  type: ADD_USER,
  payload: {
    data
  },
});
export const addUser = (data, success, error) => {
  return (dispatch) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
    })
      .then((response) => {
        if (response.ok) {
          response.json()
            .then((responseJson) => {
              dispatch(addUserSuccess(responseJson));
              success();
            });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

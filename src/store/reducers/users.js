import { GET_USERS, ADD_USER } from "../actionsTypes/users";

const initialState = {
  users :  [],
  user :  {},
}

let usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return Object.assign({}, state, {
        users: action.payload.data 
      });
      break;
    case ADD_USER:
      return Object.assign({}, state, {
        user: action.payload.data 
      });
      break;
    default:
      return state;
  }
}

export default usersReducer; 

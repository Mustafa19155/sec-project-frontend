import { authenticateUser } from "../actionTypes";

const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case authenticateUser:
      return {
        ...state,
        isAuthenticated: true,
        name: action.payload.name,
      };
    default:
      return state;
  }
};

export default userReducer;

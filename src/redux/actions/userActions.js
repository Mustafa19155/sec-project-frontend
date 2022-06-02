import { authenticateUser } from "../actionTypes";
export const authenticatedUser = (name) => {
  return {
    type: authenticateUser,
    payload: {
      name: name,
    },
  };
};

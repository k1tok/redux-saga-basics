import { User } from "../types/UserDataTypes";

const defaultState = {
  users: [],
};

const SET_USERS = "SET_USERS";
export const FETCH_USERS = "FETCH_USERS";

export const userReducer = (
  state = defaultState,
  action: { type: string; payload: Array<User> }
) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload };
  }
  return state;
};

export const setUsersAction = (payload: Array<User>) => ({
  type: SET_USERS,
  payload: payload,
});

export const fetchUsersAction = () => ({
  type: FETCH_USERS,
});

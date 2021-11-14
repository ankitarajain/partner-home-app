import { User } from "./type";
export const SET_USER_INFO = "SET_USER_INFO";

export const setUserInfo = (user: User) => (dispatch: Function) => {
  dispatch({
    type: SET_USER_INFO,
    payload: user,
  });
};

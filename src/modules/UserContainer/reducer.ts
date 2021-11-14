import { SET_USER_INFO } from "./actions";

const INITIAL_STATE = {
  info: {
    name: "ankita",
  },
  options: [
    { title: "account Setting", id: "account" },
    { title: "logout", id: "logout" },
    {
      title: "language",
      id: "language",
      children: [
        { title: "english", id: "english" },
        { title: "german", id: "german" },
      ],
    },
  ],
};

type actionType = {
  type: string;
  payload: any;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state: Object = INITIAL_STATE, action: actionType) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER_INFO:
      return {
        ...state,
        info: payload,
      };
    default:
      return state;
  }
};

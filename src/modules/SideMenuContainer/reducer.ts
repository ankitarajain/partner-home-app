import {
  GET_SIDE_MENU_DATA,
  GET_SIDE_MENU_DATA_SUCCESS,
  GET_SIDE_MENU_DATA_FAIL,
  SET_SIDE_MENU_OPEN,
  SELECT_SIDE_MENU_ITEM,
} from "./actions";

const INITIAL_STATE = {
  width: 400,
  loading: false,
  error: null,
  open: false,
  data: [],
  selected: null,
};

type actionType = {
  type: string;
  payload: any;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state: Object = INITIAL_STATE, action: actionType) => {
  const { payload } = action;
  switch (action.type) {
    case SET_SIDE_MENU_OPEN:
      return {
        ...state,
        open: payload,
      };
    case GET_SIDE_MENU_DATA:
      return {
        ...state,
        loading: true,
      };
    case GET_SIDE_MENU_DATA_SUCCESS:
      return {
        ...state,
        data: payload,
      };
    case GET_SIDE_MENU_DATA_FAIL:
      return {
        ...state,
        error: payload,
      };
    case SELECT_SIDE_MENU_ITEM:
      return {
        ...state,
        selected: payload,
      };

    default:
      return state;
  }
};

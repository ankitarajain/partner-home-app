import { SideMenuItem } from "../../components/SideMenu";
import { get } from "../../services/request";

export const SET_SIDE_MENU_OPEN = "SET_SIDE_MENU_OPEN";
export const SELECT_SIDE_MENU_ITEM = "SELECT_SIDE_MENU_ITEM";
export const GET_SIDE_MENU_DATA = "GET_SIDE_MENU_DATA";
export const GET_SIDE_MENU_DATA_SUCCESS = "GET_SIDE_MENU_DATA_SUCCESS";
export const GET_SIDE_MENU_DATA_FAIL = "GET_SIDE_MENU_DATA_FAIL";

export const setSideMenuOpen = (isOpen: boolean) => (dispatch: Function) => {
  dispatch({
    type: SET_SIDE_MENU_OPEN,
    payload: isOpen,
  });
};

export const getSideMenuData = () => (dispatch: Function) => {
  dispatch({
    type: GET_SIDE_MENU_DATA,
  });
  // const uri = "data/navigation.json";
  const uri = "b49604f2-3705-4e14-992f-1378fb4b598f?mocky-delay=1000ms";
  get(uri)
    .then(resp => {
      dispatch({
        type: GET_SIDE_MENU_DATA_SUCCESS,
        payload: resp,
      });
    })
    .catch(error => {
      dispatch({
        type: GET_SIDE_MENU_DATA_FAIL,
        payload: error,
      });
    });
};

export const selectMenuItem = (item: SideMenuItem) => (dispatch: Function) => {
  dispatch({
    type: SELECT_SIDE_MENU_ITEM,
    payload: item,
  });
};

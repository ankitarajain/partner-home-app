import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import { combineReducers } from "redux";
import sideMenuReducer from "./modules/SideMenuContainer/reducer";
import userReducer from "./modules/UserContainer/reducer";

const rootReducer = combineReducers({
  sideMenu: sideMenuReducer,
  user: userReducer,
});
const middleware = [ReduxThunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;

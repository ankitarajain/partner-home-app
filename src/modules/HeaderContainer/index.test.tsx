import { render } from "@testing-library/react";
import { Provider } from "react-redux";
//import thunk from "redux-thunk";
// import configureMockStore from "redux-mock-store";
import HeaderContainer from "./index";
// const mockStore = configureMockStore([thunk]);
// const store = mockStore({});

test.skip("renders <HeaderContainer />", () => {
  expect(
    render(
      // <Provider store={store}>
      <HeaderContainer />
      // </Provider>
    )
  ).toMatchSnapshot();
});

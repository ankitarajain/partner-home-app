import { render } from "@testing-library/react";
import UserContainer from "./index";

test.skip("renders <UserContainer />", () => {
  expect(render(<UserContainer />)).toMatchSnapshot();
});

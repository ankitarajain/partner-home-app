import { render } from "@testing-library/react";
import SideMenuContainer from "./index";

test.skip("renders <SideMenuContainer />", () => {
  expect(render(<SideMenuContainer />)).toMatchSnapshot();
});

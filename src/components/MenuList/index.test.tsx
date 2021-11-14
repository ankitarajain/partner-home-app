import { render } from "@testing-library/react";
import { MenuList } from "./index";

const defaultProps = {
  onItemSelected: () => {},
  data: [
    { id: "1", title: "1" },
    { id: "2", title: "2", children: [{ id: "3", title: "3" }] },
  ],
  selected: { id: "1", title: "1" },
};
test("renders <MenuList />", () => {
  expect(render(<MenuList {...defaultProps} />)).toMatchSnapshot();
});

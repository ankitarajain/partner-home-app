import { render } from "@testing-library/react";
import { SideMenu } from "./index";

const defaultProps = {
  open: false,
  onClick: () => {},
  onItemSelected: () => {},
  data: [
    { id: "1", title: "1", hasAlert: true },
    {
      id: "2",
      title: "2",
      hasAlert: false,
      children: [{ id: "3", title: "3", hasAlert: true }],
    },
  ],
  selected: { id: "1", title: "1", hasAlert: true },
};
test("renders <SideMenu />", () => {
  expect(render(<SideMenu {...defaultProps} />)).toMatchSnapshot();
});

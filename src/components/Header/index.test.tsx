import { render, screen } from "@testing-library/react";
import { Header } from "./index";

const defaultProps = {
  open: false,
  title: "i am header",
  rightChildren: [<div>right child</div>],
};
test("renders <Header />", () => {
  expect(render(<Header {...defaultProps} />)).toMatchSnapshot();
  expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  expect(screen.getByText("right child")).toBeInTheDocument();
});

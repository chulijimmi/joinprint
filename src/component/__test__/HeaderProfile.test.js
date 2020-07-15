import React from "react";
import { render } from "@testing-library/react-native";
import HeaderProfile from "../HeaderProfile";

function renderFormSearch() {
  const props = {
    name: "test",
    email: "test@gmail.com",
  };
  const { getByTestId } = render(<HeaderProfile {...props} />);
  expect(getByTestId("HeaderProfileName")).toHaveTextContent("test");
  expect(getByTestId("HeaderProfileEmail")).toHaveTextContent("test@gmail.com");
}

describe("FormSearch test", () => {
  it("should render textInput", renderFormSearch);
});

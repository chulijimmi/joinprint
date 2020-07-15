import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Button from "../Button";

function renderButton() {
  const props = {
    value: "Submit",
    onPress: jest.fn(() => true),
  };
  const { getByTestId } = render(<Button {...props} />);
  const button = getByTestId("button");
  fireEvent.press(button);
  expect(getByTestId("buttonValue")).toHaveTextContent("Submit");
}

describe("Button test", () => {
  it("Test render button", renderButton);
});

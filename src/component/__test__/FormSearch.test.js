import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import FormSearch from "../FormSearch";

function renderFormSearch() {
  const props = {
    onSearch: jest.fn((value) => value),
  };
  const { getByTestId } = render(<FormSearch {...props} />);
  const TextInput = getByTestId("FormSearchTextInput");
  const searchKey = "test123";
  fireEvent.changeText(TextInput, searchKey);

  expect(getByTestId("FormSearchTextInput").props.value).toEqual(searchKey);
}

describe("FormSearch test", () => {
  it("should render textInput", renderFormSearch);
});

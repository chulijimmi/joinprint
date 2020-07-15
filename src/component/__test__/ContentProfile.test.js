import React from "react";
import { render } from "@testing-library/react-native";
import ContentProfile from "../ContentProfile";

function renderContentProfile() {
  const props = {
    roles: [{ id: 1, name: "Test roles" }],
    stores: [{ id: 2, name: "Test stores", authCode: "123" }],
  };
  const { getByTestId } = render(<ContentProfile {...props} />);
  expect(getByTestId("ContentProfileRolesName")).toHaveTextContent(
    "Test roles"
  );
  expect(getByTestId("ContentProfileStoreName")).toHaveTextContent(
    "Test stores"
  );
}

describe("ContentProfile test", () => {
  it("should render roles and store", renderContentProfile);
});

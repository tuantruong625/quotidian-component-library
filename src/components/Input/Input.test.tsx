import React from "react";
import { render, screen } from "@testing-library/react";
import { UserIcon } from "@heroicons/react/outline";
import Input from "./Input";

const renderComponent = (props = {}) => {
 render(
  <Input
   type="text"
   placeholder="input with icon"
   label="Input with icon"
   {...props}
  />
 );
};
describe("Input", () => {
 it("renders an icon", () => {
  renderComponent({ icon: <UserIcon /> });

  expect(screen.getByLabelText("Input with icon")).toMatchSnapshot()
 });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import Heading, { HeadingProps } from "./Heading";

const HEADING_COPY = "This is a heading";
const renderComponent = ({ ...props }: HeadingProps) => {
 return render(<Heading {...props}>{HEADING_COPY}</Heading>);
};

describe("Heading", () => {
 describe("h1 heading", () => {
  it("renders a h1 tag", () => {
   renderComponent({ type: "h1" });
   expect(screen.getByRole("heading", { name: HEADING_COPY }))
    .toMatchInlineSnapshot(`
        .c0 {
          margin: 1.5rem 0;
          line-height: 2.5rem;
          color: #3B4252;
          font-size: 4.25em;
        }

        <h1
          class="c0"
          type="h1"
        >
          This is a heading
        </h1>
      `);
  });
 });

 describe("h2 heading", () => {
  it("renders a h2 tag", () => {
   renderComponent({ type: "h2" });
   expect(screen.getByRole("heading", { name: HEADING_COPY }))
    .toMatchInlineSnapshot(`
        .c0 {
          margin: 1.5rem 0;
          line-height: 2.5rem;
          color: #3B4252;
          font-size: 2.625em;
          font-size: 2.625em;
        }

        <h2
          class="c0"
          type="h2"
        >
          This is a heading
        </h2>
      `);
  });
 });

 describe("h3 heading", () => {
  it("renders a h3 tag", () => {
   renderComponent({ type: "h3" });
   expect(screen.getByRole("heading", { name: HEADING_COPY }))
    .toMatchInlineSnapshot(`
        .c0 {
          margin: 1.5rem 0;
          line-height: 2.5rem;
          color: #3B4252;
          font-size: 1.625em;
        }

        <h3
          class="c0"
          type="h3"
        >
          This is a heading
        </h3>
      `);
  });
 });

 describe("h4 heading", () => {
  it("renders a h4 tag", () => {
   renderComponent({ type: "h4" });
   expect(screen.getByRole("heading", { name: HEADING_COPY }))
    .toMatchInlineSnapshot(`
        .c0 {
          margin: 1.5rem 0;
          line-height: 2.5rem;
          color: #3B4252;
          font-size: 1em;
        }

        <h4
          class="c0"
          type="h4"
        >
          This is a heading
        </h4>
      `);
  });
 });
});

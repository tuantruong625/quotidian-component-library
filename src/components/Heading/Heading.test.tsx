import React from "react";
import { render, screen } from "@testing-library/react";
import Heading from "./Heading";
import { Typography } from "../../utils";

const HEADING_COPY = "This is a heading";
const renderComponent = (props = {}) => {
  return render(<Heading type="h1" {...props}>{HEADING_COPY}</Heading>);
};

describe("Heading", () => {
  describe("h1 heading", () => {
    it("renders a h1 tag", () => {
      renderComponent({ type: "h1" });
      expect(screen.getByRole("heading", { name: HEADING_COPY }))
        .toMatchInlineSnapshot(`
        .c0 {
          margin: 0.5rem 0;
          line-height: 1.5rem;
          color: #3B4252;
          font-size: 4.25em;
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
          margin: 0.5rem 0;
          line-height: 1.5rem;
          color: #3B4252;
          font-size: 4.25em;
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
          margin: 0.5rem 0;
          line-height: 1.5rem;
          color: #3B4252;
          font-size: 4.25em;
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
          margin: 0.5rem 0;
          line-height: 1.5rem;
          color: #3B4252;
          font-size: 4.25em;
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

  describe("handles sizing", () => {
    const SIZING_HEADING = "This heading with sizing";
    describe("when xs sizing is passed", () => {
      it("font size is set to typography scale small", () => {
        render(
          <Heading size="xs" type="h2">
            {SIZING_HEADING}
          </Heading>
        );
        expect(
          screen.getByRole("heading", { name: SIZING_HEADING })
        ).toHaveStyleRule("font-size", Typography.xsmall);
      });
    });

    describe("when sm sizing is passed", () => {
      it("font size is set to typography scale small", () => {
        render(
          <Heading size="sm" type="h2">
            {SIZING_HEADING}
          </Heading>
        );
        expect(
          screen.getByRole("heading", { name: SIZING_HEADING })
        ).toHaveStyleRule("font-size", Typography.small);
      });
    });

    describe("when md sizing is passed", () => {
      it("font size is set to typography scale small", () => {
        render(
          <Heading size="md" type="h2">
            {SIZING_HEADING}
          </Heading>
        );
        expect(
          screen.getByRole("heading", { name: SIZING_HEADING })
        ).toHaveStyleRule("font-size", Typography.body);
      });
    });

    describe("when lg sizing is passed", () => {
      it("font size is set to typography scale small", () => {
        render(
          <Heading size="lg" type="h2">
            {SIZING_HEADING}
          </Heading>
        );
        expect(
          screen.getByRole("heading", { name: SIZING_HEADING })
        ).toHaveStyleRule("font-size", Typography.heading3);
      });
    });

    describe("when xl sizing is passed", () => {
      it("font size is set to typography scale small", () => {
        render(
          <Heading size="xl" type="h2">
            {SIZING_HEADING}
          </Heading>
        );
        expect(
          screen.getByRole("heading", { name: SIZING_HEADING })
        ).toHaveStyleRule("font-size", Typography.heading2);
      });
    });
  });
});

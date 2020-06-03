import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'

import App, { AppProps } from "./App";

describe("<App />", () => {
  test("displays Hello World if no name prop is passed", async () => {
    const { container, asFragment } = render(<App />);
    expect(screen.getByText("Hello world!")).toBeInTheDOM;
    expect(container).toMatchSnapshot();
  });

  test("displays Hello $name when a name prop is passed", async () => {
    const { container, asFragment } = render(<App name="Eric" />);
    expect(screen.getByText("Hello Eric!")).toBeInTheDOM;
    expect(container).toMatchSnapshot();
  });
});
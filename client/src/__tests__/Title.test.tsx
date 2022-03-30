import React from "react";
import { render, screen } from "@testing-library/react";
import Title from "../components/Title";

test("renders main page", () => {
  render(<Title />);
  const titleElement = screen.getByText(/Space Flight New/i);
  expect(titleElement).toBeInTheDocument();
});

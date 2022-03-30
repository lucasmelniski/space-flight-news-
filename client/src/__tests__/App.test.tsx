import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders main page", () => {
  render(<App />);
  const linkElement = screen.getByText(/Carregar Mais/i);
  expect(linkElement).toBeInTheDocument();
});

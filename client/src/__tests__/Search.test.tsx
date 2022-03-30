import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "../components/Search";

test("renders main page", () => {
  render(
    <Search
      searchFunc={null as any}
      setTitle={null as any}
      setSort={null as any}
    />
  );
  const searchElement = screen.getByPlaceholderText(/Search/i);
  const sortElement = screen.getByDisplayValue(/Sort/i);

  expect(searchElement).toBeInTheDocument();
  expect(sortElement).toBeInTheDocument();
});

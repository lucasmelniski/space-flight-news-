import React from "react";
import { render, screen } from "@testing-library/react";
import Article from "../components/Article";

const articleMock = {
  id: 11300,
  featured: false,
  title:
    "SpaceX’s path to refueling Starships in space is clearer than it seems",
  url: "https://www.teslarati.com/spacex-how-to-refuel-starships-in-space/",
  imageUrl:
    "https://www.teslarati.com/wp-content/uploads/2020/10/Starship-propellant-transfer-Sept-2019-SpaceX-1-c.jpg",
  newsSite: "Teslarati",
  summary:
    "Perhaps the single biggest mystery of SpaceX’s Starship program is how exactly the company plans to refuel the largest spacecraft ever built...",
  publishedAt: "2021-10-24T20:23:30.000Z",
  launches: [],
  events: [],
};

test("renders Article component", () => {
  render(<Article article={articleMock} setArticles={null as any} index={0} />);
  const titleElement = screen.getByText(
    /SpaceX’s path to refueling Starships in space is clearer than it seems/i
  );
  const summaryElement = screen.getByText(
    /Perhaps the single biggest mystery of SpaceX’s Starship program is how exactly the company plans to refuel the largest spacecraft ever built.../i
  );
  const dateElement = screen.getByText(/24\/10\/2021/i);
  expect(titleElement).toBeInTheDocument();
  expect(summaryElement).toBeInTheDocument();
  expect(dateElement).toBeInTheDocument();
});

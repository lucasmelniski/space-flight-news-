import app from "../../src";
import supertest from "supertest";

describe("article", () => {
  let request: supertest.SuperTest<supertest.Test>;
  beforeAll(async () => {
    request = supertest(await app);
  });

  it("should test status", async () => {
    const response = await request.get("/");

    expect(response.status).toBe(200);
    expect(response.text).toBe(
      "Fullstack Challenge 2021 🏅 - Space Flight News"
    );
  });

  it("should test get all", async () => {
    const response = await request.get("/articles/");

    expect(response.status).toBe(200);
    expect(response.body.articles.length).toBe(10);
  });

  it("should test get one", async () => {
    const response = await request.get("/articles/13607");
    const expectBody = {
      _id: "61e42806d57d552976ad4a1d",
      id: 13607,
      featured: false,
      title:
        "Cape Canaveral’s busy January to continue with another Starlink launch",
      url: "https://spaceflightnow.com/2022/01/15/cape-canaverals-busy-january-to-continue-with-another-starlink-launch/",
      imageUrl:
        "https://spaceflightnow.com/wp-content/uploads/2021/09/starlink2-1-stack.jpg",
      newsSite: "Spaceflight Now",
      summary:
        "Forecasters expect brisk winds and chilly temperatures for a prime time, full moon launch of a SpaceX Falcon 9 rocket with another batch of Starlink internet satellites Monday night from NASA’s Kennedy Space Center in Florida.",
      publishedAt: "2022-01-15T17:02:41.000Z",
      launches: [
        {
          _id: null,
          provider: "Launch Library 2",
        },
      ],
      events: [],
    };

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual(expectBody);
  });
});

import Utils from "@/utils/Utils";
import * as express from "express";
import "reflect-metadata";
import { Article } from "../database/entity/Article/Article";
import ArticleResolvers from "../database/resolvers/ArticleResolvers";

const article = express.Router();
const articleResolvers = new ArticleResolvers();

article.post("/seed/all", async (req, res) => {
  const result = await articleResolvers.seedArticles();
  return res.send(result);
});

article.get("/", async (req, res) => {
  const { page, sort, title } = req.query || {};

  const result = await articleResolvers.getAll({
    page: page || "0",
    sort,
    title,
  });
  return res.send(result);
});

article.get("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await articleResolvers.getOne(+id);
  return res.send(result);
});

article.put("/:id", async (req, res) => {
  const id = req.params.id;
  const data: Article = req.body;
  const article = Object.assign(new Article(), data);

  const result = await articleResolvers.updateOne(article, +id);
  return res.send(result);
});

article.post("/", async (req, res) => {
  const data: Article = req.body;
  const article = Object.assign(new Article(), data);
  const result = await articleResolvers.addOne(article);
  return res.send(result);
});

article.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await articleResolvers.deleteOne(+id);
  return res.send(result);
});

export default article;

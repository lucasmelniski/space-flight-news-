import axios from "axios";
import { Article } from "../entity/Article/Article";
import { getMongoManager, MongoEntityManager, Raw } from "typeorm";
import { ApiCount } from "../entity/ApiCount/Events";
import { ILike } from "typeorm";
interface getAllProps {
  page?: any;
  sort?: any;
  title?: any;
}
export default class ArticleResolvers {
  public seedArticles = async () => {
    try {
      let { data: count } = await axios.get(
        "https://api.spaceflightnewsapi.net/v3/articles/count"
      );
      const { data: allArticles } = await axios.get(
        `https://api.spaceflightnewsapi.net/v3/articles?_limit=${count}`
      );
      const manager = getMongoManager();
      await manager.insertOne(ApiCount, { id: 1, count });
      await manager.insertMany(Article, allArticles);
      return true;
    } catch (error) {
      console.log("seedArticles failed,", error);
      return false;
    }
  };

  public addOne = async (article: Article) => {
    try {
      const manager = getMongoManager();
      await manager.insertOne(Article, article);
      return true;
    } catch (error) {
      console.log("addOne failed,", error);
      return false;
    }
  };

  public updateOne = async (
    updatedArticle: Article,
    id: number
  ): Promise<boolean> => {
    try {
      const article = await this.getOne(id);
      if (!article) return false;
      const newaAticle = Object.assign(article, updatedArticle);
      await Article.update({ id }, newaAticle);
      return true;
    } catch (error) {
      console.log("updateOne Article failed,", error);
      return false;
    }
  };

  public deleteOne = async (id: number): Promise<boolean> => {
    try {
      const article = await this.getOne(id);
      if (!article) return false;
      const manager = getMongoManager();

      await manager.deleteOne(Article, article);
      return true;
    } catch (error) {
      console.log("deleteOne Article failed,", error);
      return false;
    }
  };

  public getOne = async (id: number): Promise<Article | undefined> => {
    try {
      const manager = getMongoManager();
      const article = await manager.findOne(Article, {
        where: { id },
      });

      return article;
    } catch (error) {
      console.log("getOne Article failed,", error);
      return undefined;
    }
  };

  public getAll = async ({
    page,
    sort,
    title,
  }: getAllProps): Promise<{ articles: Article[] } | boolean> => {
    try {
      const take = 10;
      const whereOption = title ? { title: new RegExp(`${title}`) } : {};
      const sortOption = sort
        ? {
            publishedAt: sort,
          }
        : undefined;
      const options = {
        where: whereOption,
        order: sortOption,
        take,
        skip: +page * take,
      };

      const manager = getMongoManager();
      const articles = await manager.find(Article, {
        ...options,
      });

      return { articles };
    } catch (error) {
      console.log("getAll Article failed,", error);
      return false;
    }
  };
}

import * as axios from "axios";

interface getArticlesProps {
  page?: number;
  title?: string;
  sort?: "ASC" | "DESC" | undefined;
}

interface deleteArticlesProps {
  id: number;
}

export interface editArticlesProps {
  id: number;
  title?: string;
  url?: string;
  imageUrl?: string;
  newsSite?: string;
  summary?: string;
}

interface createArticlesProps {
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
}
export class AxiosArticle {
  public request: axios.AxiosInstance;
  constructor() {
    this.request = axios.default.create({
      baseURL: "http://localhost:5000/",
      timeout: 8000, // 8 segundos
    });
  }

  public getArticles = async ({ page, title, sort }: getArticlesProps) => {
    return await this.request.get(`articles/`, {
      params: {
        page,
        title,
        sort,
      },
    });
  };

  public deleteArticles = async ({ id }: deleteArticlesProps) => {
    return await this.request.delete(`articles/${id}`);
  };

  public editArticles = async ({
    id,
    title,
    url,
    imageUrl,
    newsSite,
    summary,
  }: editArticlesProps) => {
    return await this.request.put(`articles/${id}`, {
      title,
      url,
      imageUrl,
      newsSite,
      summary,
    });
  };

  public createArticles = async ({
    title,
    url,
    imageUrl,
    newsSite,
    summary,
    publishedAt,
  }: createArticlesProps) => {
    return await this.request.post(`articles/`, {
      id: 23607,
      title,
      url,
      imageUrl,
      newsSite,
      summary,
      publishedAt,
      updatedAt: publishedAt,
      featured: false,
      launches: [],
      events: [],
    });
  };
}

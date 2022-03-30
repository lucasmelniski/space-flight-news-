import React from "react";
import Col from "react-bootstrap/esm/Col";
import Search from "../Search";
import "./index.css";
import Title from "../Title";
import Article, { ArticleProps } from "../Article";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import { AxiosArticle } from "../../utils/api/Articles";
import Modal from "../Article/Modal";

function App() {
  const { getArticles } = new AxiosArticle();
  const [show, setShow] = React.useState(false);
  const [articles, setArticles] = React.useState<ArticleProps[]>([]);
  const [page, setPage] = React.useState(0);
  const [title, setTitle] = React.useState();
  const [sort, setSort] = React.useState();

  const loadMore = async () => {
    const newPage = page + 1;
    setPage(newPage);
    const { articles: articlesData } = (
      await getArticles({ page: newPage, title, sort })
    ).data;
    setArticles((articles) => [...articles, ...articlesData]);
  };

  const searchFunc = async () => {
    setPage(0);
    const { articles: articlesData } = (
      await getArticles({ page: 0, sort, title })
    ).data;
    setArticles(articlesData);
  };

  const getArticlesFunc = async () => {
    const { articles: articlesData } = (await getArticles({})).data;
    setArticles(articlesData);
  };
  React.useEffect(() => {
    getArticlesFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Col id="app">
      <Search searchFunc={searchFunc} setTitle={setTitle} setSort={setSort} />
      <Title />
      <Row className="justify-content-end">
        <Button
          variant="success"
          style={{ width: "50px" }}
          onClick={() => setShow(true)}
        >
          <i className="bi bi-journal-plus"></i>
        </Button>
      </Row>
      {articles &&
        articles.map((article, index) => (
          <Article
            setArticles={setArticles}
            article={article}
            index={index}
            key={index}
          />
        ))}
      <Row className="justify-content-md-center" md={4}>
        <Button onClick={loadMore} className="loadMore">
          Carregar Mais
        </Button>
      </Row>
      <Modal show={show} setShow={setShow} setArticles={setArticles} />
    </Col>
  );
}

export default App;

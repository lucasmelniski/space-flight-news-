import React from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Image from "react-bootstrap/Image";
import dayjs from "dayjs";
import { AxiosArticle } from "../../utils/api/Articles";
import "./index.css";
import Badge from "react-bootstrap/esm/Badge";
import Modal from "./Modal";
import OverlayTrigger from "react-bootstrap/esm/OverlayTrigger";
import Popover from "react-bootstrap/esm/Popover";

export interface ArticleProps {
  id?: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  updatedAt?: string;
  featured?: boolean;
  launches?: {
    id: string;
    provider: string;
  }[];
  events?: never[];
}

interface ArticleComponentProps {
  article: ArticleProps;
  index: number;
  setArticles: React.Dispatch<React.SetStateAction<ArticleProps[]>>;
}

function Article({ article, index, setArticles }: ArticleComponentProps) {
  require("dayjs/locale/pt-br");
  dayjs.locale("pt-br");
  
  const [show, setShow] = React.useState(false);
  const { deleteArticles } = new AxiosArticle();
  const handleShow = () => setShow(true);

  const imageCol = (
    <Col
      className="align-items-center"
      md={2}
      style={{ minHeight: "200px", paddingRight: "20px" }}
    >
      <Image className="image" src={article.imageUrl}></Image>
    </Col>
  );

  const handleDelete = async () => {
    const id = article.id!;
    setArticles((articles) => articles.filter((el) => el.id !== id));
    await deleteArticles({ id });
  };
  

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Ações</Popover.Header>
      <Popover.Body>
        <Button
          style={{ marginRight: "10px" }}
          variant="primary"
          onClick={handleShow}
        >
          Edit
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Popover.Body>
    </Popover>
  );

  const articleCol = (
    <Col md={4}>
      <h2 className="title">{article.title}</h2>
      <Row style={{ padding: "10px" }}>
        <span className="col date">
          {dayjs(article.publishedAt).format("DD/MM/YYYY")}
        </span>
        <Badge className="col" bg="secondary">
          {article.newsSite}
        </Badge>

        <OverlayTrigger trigger="focus" placement="right" overlay={popover}>
          <Button className="col actionButton">
            <i className="bi bi-gear-fill"></i>
          </Button>
        </OverlayTrigger>
      </Row>
      <p className="content">{article.summary}</p>
      <Button onClick={() => window.open(article.url)} className="moreInfos">
        Ver Mais
      </Button>
    </Col>
  );
  return (
    <Row className="justify-content-center articleRow">
      {index % 2 === 0 ? (
        <>
          {imageCol}
          {articleCol}
        </>
      ) : (
        <>
          {articleCol}
          {imageCol}
        </>
      )}
      <Modal
        show={show}
        setShow={setShow}
        article={article}
        setArticles={setArticles}
      />
    </Row>
  );
}

export default Article;

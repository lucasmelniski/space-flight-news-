import React from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import "./index.css";
import Modal from "react-bootstrap/esm/Modal";
import { ArticleProps } from "..";
import { AxiosArticle } from "../../../utils/api/Articles";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import dayjs from "dayjs";

interface ModalProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
  article?: ArticleProps;
  setArticles: React.Dispatch<React.SetStateAction<ArticleProps[]>>;
}

function ArticleModal({ setShow, show, article, setArticles }: ModalProps) {
  const { editArticles, createArticles } = new AxiosArticle();

  const handleEdit = async () => {
    if (!article) return;
    const newArticle = {
      ...article,
      id: article!.id!,
      title: title!,
      url: url!,
      imageUrl: imageUrl!,
      newsSite: newsSite!,
      summary: summary!,
    };

    setArticles((articles) => {
      const index = articles.findIndex((el) => el.id === article.id);
      return [
        ...articles.slice(0, index),
        { ...newArticle },
        ...articles.slice(index + 1, articles.length),
      ];
    });

    await editArticles({
      id: article.id!,
      title,
      url,
      imageUrl,
      newsSite,
      summary,
    });
    handleClose();
  };

  const [title, setTitle] = React.useState(article?.title || "Title");
  const [url, setUrl] = React.useState(article?.url || "Url");
  const [imageUrl, setImageUrl] = React.useState(
    article?.imageUrl || "imageUrl"
  );
  const [summary, setSummary] = React.useState(article?.summary || "summary");
  const [newsSite, setNewsSite] = React.useState(
    article?.newsSite || "newsSite"
  );

  const handleClose = () => setShow(false);
  const handleCreate = async () => {
    const publishedAt = dayjs().format();
    const newArticle = {
      title,
      url,
      imageUrl,
      newsSite,
      summary,
      publishedAt,
    };
    await createArticles(newArticle);
    setArticles((articles) => [newArticle, ...articles]);
    handleClose();
  };
  return (
    <Modal show={show} onHide={handleClose} size="xl">
      <Modal.Header closeButton>
        <Form.Control
          as="textarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Title"
        ></Form.Control>
      </Modal.Header>
      <Modal.Body>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={4}>
            News Site Name
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              type="text"
              onChange={(e) => setNewsSite(e.target.value)}
              value={newsSite}
              placeholder="newsSite"
            ></Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={4}>
            Url news
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              type="text"
              onChange={(e) => setUrl(e.target.value)}
              value={url}
              placeholder="url"
            ></Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={4}>
            News image Url
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              type="text"
              onChange={(e) => setImageUrl(e.target.value)}
              value={imageUrl}
              placeholder="imageUrl"
            ></Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={4}>
            News summary
          </Form.Label>
          <Col sm={6}>
            <Form.Control
              as="textarea"
              onChange={(e) => setSummary(e.target.value)}
              value={summary}
              placeholder="Summary"
            ></Form.Control>
          </Col>
        </Form.Group>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => (article ? handleEdit() : handleCreate())}
        >
          {article ? "Save Changes" : "Create Article"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ArticleModal;

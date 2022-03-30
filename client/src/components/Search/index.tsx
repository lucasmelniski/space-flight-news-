import React from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import InputGroup from "react-bootstrap/esm/InputGroup";
import Row from "react-bootstrap/esm/Row";
import "./index.css";

interface SearchProps {
  searchFunc: () => Promise<void>;
  setTitle: React.Dispatch<React.SetStateAction<undefined>>;
  setSort: React.Dispatch<React.SetStateAction<undefined>>;
}

function Search({ searchFunc, setTitle, setSort }: SearchProps) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="searchForm">
        <Row className="justify-content-md-end" md={4}>
          <Col>
            <InputGroup id="searchGroup" className="mb-3">
              <Form.Control
                type="text"
                className="titleInput"
                placeholder="Search"
                onChange={(e: any) => setTitle(e.target.value)}
              />
              <Button
                id="searchButton"
                onClick={searchFunc}
              >
                <InputGroup.Text id="searchIcon">
                  <i className="bi bi-search"></i>
                </InputGroup.Text>
              </Button>
            </InputGroup>
          </Col>
          <Col md={1}>
            <Form.Select
              aria-label="Sort"
              defaultValue={undefined}
              onChange={(e: any) => setSort(e.target.value)}
            >
              <option value={undefined}>Sort</option>
              <option value="ASC">Mais Antigas</option>
              <option value="DESC">Mais Novas</option>
            </Form.Select>
          </Col>
        </Row>
      </Form.Group>
    </Form>
  );
}

export default Search;

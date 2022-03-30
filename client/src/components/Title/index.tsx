import Row from "react-bootstrap/esm/Row";
import { ReactComponent as Rocket } from "../../images/rocket.svg";
import "./index.css";

function Title() {
  return (
    <Row className="justify-content-center titleRow">
      <div className="rocket">
        <Rocket className="rocketIcon" />
      </div>
      <h1 className="title">Space Flight News</h1>
    </Row>
  );
}

export default Title;

import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiSqllite,
  DiMysql,
} from "react-icons/di";
import {
  SiDotnet,
  SiCsharp,
  SiXamarin,
  SiUnrealengine,
  SiUnity,
  SiGithubactions,
} from "react-icons/si";

function Clients() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={3} className="tech-icons">
        <SiDotnet />
        <h3>NET Core & Framework </h3>
      </Col>

      <Col xs={4} md={3} className="tech-icons">
        <SiXamarin />
        <h3>Xamarin & Maui</h3>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
        <h3>C#</h3>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h3>React</h3>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h3>JavaScript</h3>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h3>Node.js</h3>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h3>Git</h3>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiUnrealengine />
        <h3>Unreal Engine</h3>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiUnity />
        <h3>Unity</h3>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiSqllite />
        <h3>SQLite</h3>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <h3>MySQL</h3>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGithubactions />
        <h3>GitHub Actions</h3>
      </Col>
    </Row>
  );
}

export default Clients;
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
        <SiDotnet className="tech-icon-inner" />
        <h3 className="tech-label">NET Core & Framework </h3>
      </Col>

      <Col xs={4} md={3} className="tech-icons">
        <SiXamarin className="tech-icon-inner" />
        <h3 className="tech-label">Xamarin & Maui</h3>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp className="tech-icon-inner" />
        <h3 className="tech-label">C#</h3>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact className="tech-icon-inner" />
        <h3 className="tech-label">React</h3>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 className="tech-icon-inner" />
        <h3 className="tech-label">JavaScript</h3>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs className="tech-icon-inner" />
        <h3 className="tech-label">Node.js</h3>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit className="tech-icon-inner" />
        <h3 className="tech-label">Git</h3>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiUnrealengine className="tech-icon-inner" />
        <h3 className="tech-label">Unreal Engine</h3>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiUnity className="tech-icon-inner" />
        <h3 className="tech-label">Unity</h3>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiSqllite className="tech-icon-inner" />
        <h3 className="tech-label">SQLite</h3>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMysql className="tech-icon-inner" />
        <h3 className="tech-label">MySQL</h3>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGithubactions className="tech-icon-inner" />
        <h3 className="tech-label">GitHub Actions</h3>
      </Col>
    </Row>
  );
}

export default Clients;
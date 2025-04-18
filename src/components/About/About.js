import React from "react";
import Clients from "./Clients";
import Home2 from "../Home/Home2"
import { Container } from "react-bootstrap";

function About() {
  return (
    <section>
      <Container fluid className="about-section">
        <Container>

          <Home2 />

          <h1 className="project-heading">
            Technologies I've <strong className="purple">worked with </strong>
          </h1>
          <Clients />
          
        </Container>
      </Container>
    </section>
  );
}

export default About;
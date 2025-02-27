import React from "react";
import Particle from "../Particle";
import Clients from "./Clients";
import Home2 from "../Home/Home2"
import { Container } from "react-bootstrap";

// import { Row, Col } from "react-bootstrap";
// import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/about.png";
// import Toolstack from "./Toolstack";
// import myImg from "../../Assets/avatar.svg";
// import Student from "../../Assets/home-main.svg"
// import Tilt from "react-parallax-tilt";
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
//   AiFillDribbbleCircle,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

function About() {
  return (
    <section>
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Home2/>
          <h1 className="project-heading">
            What I've <strong className="purple">worked with </strong>
          </h1>

        <Clients />
      </Container>
    </Container>
    </section>
  );
}

export default About;
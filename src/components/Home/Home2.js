import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Student from "../../Assets/home-main.svg"
import Tilt from "react-parallax-tilt";
import ScrollTrigger from "../About/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

function Home2() {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });
  
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        {!isLargeScreen && (
            <Col md={8} className="home-about-description">
              <h1
                className="home2H1"
                style={{
                  fontSize: "2.2em",
                  width: "500px",
                  textAlign: "left",
                }}
              >
                A University Of Newcastle{" "}
                <span className="purple"> Student Led </span> Design Studio.
              </h1>
              <p
                className="home-about-body"
                style={{
                  width: "500px",
                  textAlign: "left",
                  fontSize: "2.2em",
                }}
              >
                <br />
                <br />
                We work together with
                <i>
                  <b className="purple">
                    {" "}
                    communities, governments, universities and select start-up
                    businesses{" "}
                  </b>
                </i>
                <br />
                <br />
                We work on large scale projects from&nbsp;
                <i>
                  <b className="purple">llustration and graphic design </b>{" "}
                  through to{" "}
                  <b className="purple">campaigns and creative consultancy.</b>
                </i>
                <br />
                <br />
                Feel free to get in touch for an{" "}
                <b className="purple">obligation free consultation.</b> And
                everything from
                <i>
                  <b className="purple"> Aye!</b>
                </i>
                &nbsp;to
                <i>
                  <b className="purple"> Zed!</b>
                </i>
              </p>
            </Col>
          )}

          {!isLargeScreen && (
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={Student}
                className="img-fluid"
                alt="avatar"
                style={{ minHeight: "450px" }}
              />
            </Tilt>
          </Col>)}

          {isLargeScreen && <ScrollTrigger className="scroll-trigger" />}
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
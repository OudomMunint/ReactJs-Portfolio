import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Student from "../../Assets/home-main.svg"
import Tilt from "react-parallax-tilt";
import ScrollTrigger from "../ScrollTrigger";
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
                I am an experienced software engineer based in{" "}
                <span className="purple"> Newcastle, </span> New South Wales Australia.
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
                A graduate from the University of Newcastle, I have a passion for
                <i>
                  <b className="purple">
                    {" "}
                    web and app development.{" "}
                  </b>
                </i>
                <br />
                <br />
                I have a passion for creating&nbsp;
                <i>
                  <b className="purple">visually stunning, interactive websites </b>{" "}
                  and {" "}
                  <b className="purple">cross platform applications.</b>
                </i>
                <br />
                <br />
                I also have a keen interest in{" "}
                <b className="purple">games development, computer graphics, PC hardware,</b>
                <i> and also the latest
                  <b className="purple"> technologies in the world of computing</b>
                </i>
              </p>
            </Col>
          )}

          {!isLargeScreen && (
          <Col md={4} className="myAvtar">
              <img
                src={Student}
                className="img-fluid"
                alt="avatar"
                style={{ minHeight: "450px" }}
              />
          </Col>)}

          {isLargeScreen && <ScrollTrigger className="scroll-trigger" />}
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  //let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
        </Col>
        <Col md="4" className="footer-copywright">
        <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/OudomMunint"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                data-toggle="tooltip"
                data-placement="top"
                title="GitHub"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/oudom-munint/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                data-toggle="tooltip"
                data-placement="top"
                title="LinkedIn">
                {/* onClick={(e) => e.preventDefault()} */}
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
          <h3>Powered by ReactJs, NodeJs & Netlify</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
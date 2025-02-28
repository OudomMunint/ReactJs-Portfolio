import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgArrowRight } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", letterSpacing: "0px", wordSpacing: "0px" }}>
          {props.description}
        </Card.Text>

        {"\n"}
        {"\n"}

        {props.ghLink && (
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            style={{ marginLeft: "10px" }}>
            {"GitHub"} &nbsp;
            <CgArrowRight />
          </Button>
        )}

        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}>
            {"Visit"} &nbsp;
            <CgArrowRight />
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
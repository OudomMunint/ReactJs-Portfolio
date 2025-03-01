import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgArrowRight } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />

      {/* <Carousel>
        <Carousel.Item interval={null}>
          <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        </Carousel.Item>
        <Carousel.Item interval={null}>
          <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        </Carousel.Item>
        <Carousel.Item interval={null}>
          <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        </Carousel.Item>
      </Carousel> */}

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ letterSpacing: "0px", wordSpacing: "0px" }}>
          {props.description}
        </Card.Text>

        {"\n"}
        {"\n"}

        {props.sourceLink && (
          <Button
            variant="primary"
            href={props.sourceLink}
            target="_blank"
            style={{ marginLeft: "10px" }}>
            {"GitHub"} &nbsp;
            <CgArrowRight />
          </Button>
        )}

        {props.visitLink && (
          <Button
            variant="primary"
            href={props.visitLink}
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
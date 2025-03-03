import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgArrowRight } from "react-icons/cg";

function ProjectCards(props) {

  const openImage = (imagePath) => {
    window.open(imagePath, "_blank");
  }

  return (
    <Card className="project-card-view">

    <style>
      {`
        .pointer {
          cursor: pointer;
        }
      `}
    </style>

    {!props.hasMultipleImages && (
      <Card.Img variant="top" src={props.imgPath} alt="card-img" onClick={() => openImage(props.imgPath)} className="pointer" />
    )}

    {props.hasMultipleImages && (
        <Carousel interval={null}>
          <Carousel.Item onClick={() => openImage(props.imgPath1)} className="pointer">
            <Card.Img variant="top" src={props.imgPath1} alt="card-img" />
          </Carousel.Item>
          <Carousel.Item onClick={() => openImage(props.imgPath2)} className="pointer">
            <Card.Img variant="top" src={props.imgPath2} alt="card-img" />
          </Carousel.Item>
          <Carousel.Item onClick={() => openImage(props.imgPath3)} className="pointer">
            <Card.Img variant="top" src={props.imgPath3} alt="card-img" />
          </Carousel.Item>

          {props.imgPath4 && (
            <Carousel.Item onClick={() => openImage(props.imgPath4)} className="pointer">
              <Card.Img variant="top" src={props.imgPath4} alt="card-img" />
            </Carousel.Item>
          )}

        </Carousel>
      )}

      <Card.Body>
        <Card.Title style={{fontWeight: "800"}}>{props.title}</Card.Title>
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
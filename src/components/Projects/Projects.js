import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import benchmark from "../../Assets/benchmark.png"
import maui from "../../Assets/maui.png"
import studioZed from "../../Assets/studiozed.png"
import tpsUnreal from "../../Assets/tps.png"
import ogPortfolio from "../../Assets/ogwebsite.png"
import unityPlatformer from "../../Assets/unity2d.png"

function Projects() {
  const reactPortfolio = "https://raw.githubusercontent.com/OudomMunint/ReactJs-Portfolio/main/Media/maingif.gif";
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Some of my <strong className="main-name">Work </strong>
        </h1>
        <p>
          Here are a few projects that I've worked on
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={42} className="project-card">
            <ProjectCard
              imgPath={benchmark}
              title="Hardware Info & Performance Benchmark"
              description="A .NET Core 9.0 C# console app that displays system specs and runs performance benchmarks for CPU,
                           memory, and IO. It tests integer performance (prime computation), floating-point (matrix multiplication),
                           cryptographic (AES & hashing), memory (16GB dataset encryption), and multithreading.
                           Results can be exported to a text file"
              // sourceLink="https://github.com/OudomMunint/Benchmark"
              sourceLink="https://github.com/OudomMunint/Benchmark"
            />
          </Col>

          <Col md={42} className="project-card">
            <ProjectCard
              imgPath={maui}
              title="Check mate - .Net Maui to-do list app"
              description="A minimalistic, performant, cross platform .NET MAUI application that performs CRUD operations and stores data locally
                          with SQLite. This app features optional biometric authentication, a dashboard view with charts, camera & image gallery usage,
                          ListView with bulk actions as well as dark & light themes."
              sourceLink="https://github.com/OudomMunint/.NetMAUI-To-Do-List-App"
            />
          </Col>

          <Col md={42} className="project-card">
            <ProjectCard
              imgPath={studioZed}
              title="Studio Zed SPA website"
              description="A React SPA template designed & developed for a design studio called Studio Zed. Feel free to contribute or use this for your
                           own needs, this template is the base for the website you are currently viewing!"   
              visitLink="https://studiozed.netlify.app/"
              sourceLink="https://github.com/OudomMunint/StudioZed-ReactJS"    
            />
          </Col>

          <Col md={42} className="project-card">
            <ProjectCard
              imgPath={tpsUnreal}
              title="UE5 third person shooter (still thinking of a name lol)"
              description="A 3rd person shooter, this was a solo university assignment in Games design and development.
                           Feel free to use it as a template for your own projects. This project features AI bots using Unreal's Perception system,
                           a health system for both player & AI, a weapon system with shoulder switching aiming & reloading,
                           a standard movement system, a scoring system with win/loss conditions and a robust menu system & HUDs."
              sourceLink="https://github.com/OudomMunint/Unreal-3rd-person-shooter-4.27"
            />
          </Col>

          <Col md={42} className="project-card">
            <ProjectCard
              imgPath={ogPortfolio}
              title="Personal website"
              description="A fun, responsive website made with HTML, JavaScript, bootstrap, SCSS and .JS libraries such as Scroll trigger, Scroll magic, GSAP.
                           This website is a template created for my personal portfolio, It is the original website you are currently
                           viewing before being ported to React. feel free to use it for your own needs!"
              visitLink="https://oldportfoliodom.netlify.app/"
            />
          </Col>

          <Col md={42} className="project-card">
            <ProjectCard
              imgPath={unityPlatformer}
              title="Unity 2D platformer game"
              description="A 2D platformer game made in Unity with C# & .Net Framework 2.1. A short platformer game featuring 5 Levels with collectables,
                           hazards, health system, checkpoints, a scoring system and proper win/loss conditions.
                           Feel free to use it as a template or starting point."
              sourceLink="https://github.com/OudomMunint/Unity-2D-Platformer"
            />
          </Col>

          <Col md={42} className="project-card">
            <ProjectCard
              imgPath={reactPortfolio}
              title="React Portfolio SPA"
              description="The website you are currently viewing! feel free to use it as a template for your own portfolio."
              sourceLink="https://github.com/OudomMunint/ReactJs-Portfolio"
              visitLink="https://oudommunint.netlify.app/"
            />
          </Col>

          <h1 className="project-heading">
            Visit my
            <strong className="main-name">
              <a href="https://github.com/OudomMunint?tab=repositories"
                 target="_blank" 
                 rel="noopener noreferrer"> Github </a>
            </strong>
            to see more projects that I've worked on!
          </h1>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

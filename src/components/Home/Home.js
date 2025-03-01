import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import Github from "../About/Github";
import { CgFileDocument } from "react-icons/cg";
import { AiFillGithub, AiFillLinkedin, } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Loader from "../LoadingScreen";

function Home() {
  const navigate = useNavigate();
  const [load, setLoad] = useState(true); // State for tracking loading

  const handleImageLoad = () => {
    setLoad(false); // Hide Loader when images finish loading
  };
  const goToResume = () => {
    navigate("/resume");
  };

  return (
    <section className="HomeHeroSection">
    <Loader load={load} /> {/* Show Loader while loading */}
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={5} sm={12} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Welcome!{" "}
              </h1>

              <h1 className="heading-name">
                I'm <strong className="main-name">Oudom Munint</strong>
              </h1>

              <div className="d-flex flex-column align-items-md-start mb-5" style={{ paddingLeft: 45 }}>
                <Type />
              </div>

              <div className="d-flex" style={{ paddingLeft: 30 }}>
                <ul className="footer-icons d-flex justify-content-center justify-content-md-start">
                  <li className="social-icons">
                    <a href="https://github.com/OudomMunint" className="icon-colour-normal"
                      target="_blank" rel="noopener noreferrer" data-toggle="tooltip" data-placement="top" title="GitHub">
                      <AiFillGithub size={50} className="icon-colour-normal" />
                    </a>
                  </li>

                  <li className="social-icons">
                    <a href="https://www.linkedin.com/in/oudom-munint/" className="icon-colour-normal"
                      rel="noopener noreferrer" data-toggle="tooltip" data-placement="top" title="LinkedIn">
                      <AiFillLinkedin size={50} className="icon-colour-normal" />
                    </a>
                  </li>

                  <li className="social-icons">
                    <button className="icon-colour-normal" style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                      data-toggle="tooltip" data-placement="top" title="Resume" onClick={goToResume}>
                      <CgFileDocument size={50} className="icon-colour-normal" />
                    </button>
                  </li>
                </ul>
              </div>
            </Col>


            <Col className="home-header" md={7} style={{ padding: 20 }}>

              <Github onLoad={handleImageLoad}/>

              <div style={{display:"flex", alignItems:"center"}}> 
                <a className="ma-2" href="https://github.com/anuraghazra/github-readme-stats">
                  <img align="center" alt="Oudom's Github Stats" className="github-stats"
                       src="https://github-readme-stats.vercel.app/api?username=oudommunint&show_icons=true&theme=transparent&hide_border=true&include_all_commits=false&rank_icon=percentile%&show=reviews,prs_merged,prs_merged_percentage&hide=contribs"
                       onLoad={handleImageLoad}/>
                </a>

                <a className="ma-2" href="https://github.com/anuraghazra/convoychat">
                  <img text-align="center" alt="Oudom's Top Languages" className="github-stats"
                            src="https://github-readme-stats.vercel.app/api/top-langs/?username=oudommunint&hide=css,html,c,freebasic,makefile&hide_border=true&theme=transparent&langs_count=100&layout=compact&card_width=350&text_color=417E87"
                            onLoad={handleImageLoad}/>
                </a>
                
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
export default Home;
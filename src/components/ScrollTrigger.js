import React from "react";
import Card from "react-bootstrap/Card";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

function ScrollTrigger() {
  
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1368 });
  const isDesktop = useMediaQuery({ minWidth: 1081 });
  const isDevelopment = process.env.NODE_ENV === "development";

  useEffect(() => {
    let currentIntersectedElement = null;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Reset previous element
          // if (currentIntersectedElement && currentIntersectedElement !== entry.target) {
          //   currentIntersectedElement.style.opacity = 0.1;
          // }
          entry.target.style.opacity = 1;
          currentIntersectedElement = entry.target;
        } else {
          entry.target.style.opacity = 0.1;
          if (currentIntersectedElement === entry.target) {
            currentIntersectedElement = null;
          }
        }
      });
    }, {
      // desktop and laptops options
      // threshold: 1,
      // rootMargin: "-150px",
      // Tablets options
      // threshold: 0.7,
      // rootMargin: "-50px",
      threshold: isTablet ? 0.5 : 1,
      rootMargin: isTablet ? "-200px" : "-190px",
    });

    if (isDevelopment) { console.log(observer.thresholds, observer.rootMargin) }
    console.log(observer.thresholds, observer.rootMargin);
    console.log(window.innerWidth, window.innerHeight);


    document.querySelectorAll('.triggerSpan').forEach((element) => {
      element.style.opacity = 0.1;
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [isTablet, isDesktop, isDevelopment]);

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <div id="aboutMe" className="body">
          <div className="triggerDiv" tg-name="_" tg-ref="container" tg-from="1" tg-to="8" tg-step="1">
            <section tg-name="_" tg-map="1,2,3,4,5,6,7,8,9,10: 1">
              <span className="triggerSpan" tg-name="opacity" tg-filter="2!" tg-follow="container">
              I'm an experienced software engineer based in Newcastle, New South Wales Australia.
              </span>
              <br />
              <span className="triggerSpan" tg-name="opacity" tg-filter="3!" tg-follow="container">
              A graduate from the University of Newcastle, I have a passion for web and app development.
              </span> <br />
              {/* <span className="triggerSpan" tg-name="opacity" tg-filter="4!" tg-follow="container">
              I'm currently working at <a class="pds"href="https://www.pdsglobal.com/" target="_blank">
              Productivity Developement Solutions</a> as a software engineer.
              </span> */}
              {/* <br /> */}
              <span className="triggerSpan" tg-name="opacity" tg-filter="5!" tg-follow="container">
              I have a passion for creating visually stunning and interactive websites and applications.
              </span> <br />
              <span className="triggerSpan" tg-name="opacity" tg-filter="6!" tg-follow="container">
              I also have a keen interest in games development, computer graphics, PC hardware, and the latest
              technologies in the world of computing.
              </span>
            </section>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ScrollTrigger;
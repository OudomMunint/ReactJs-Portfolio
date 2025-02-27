import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{paddingBottom: "10px", paddingLeft: "30px"}}>
      <h1 style={{ paddingBottom: "25px" }}>
        My Github <strong className="main-name">Contributions</strong>
      </h1>
      <GitHubCalendar
        username="OudomMunint"
        blockSize={20}
        blockMargin={5}
        hideColorLegend={true}
        fontSize={20}
        showWeekdayLabels={false}
        hideMonthLabels={true}     
        hideTotalCount={true}
      />
    </Row>
  );
}

export default Github;
import React from "react";
function LoadingScreen(props) {
  return <div id={props.load ? "loader" : "loader-none"}></div>;
}

export default LoadingScreen;
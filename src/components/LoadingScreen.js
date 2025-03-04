import React from "react";
function LoadingScreen(props) {
  return (
    <div className="backdrop" id={props.load ? "backdrop" : "backdrop-none"}>
      <span className="loader" id={props.load ? "loader" : "loader-none"}>
        <style>
          {`
            #loader {
              position: fixed;
              top: 50%;
              left: 50%;
              z-index: 999999;
              background-color: transparent;
              background-repeat: no-repeat;
              background-position: center;
              width: 48px;
              height: 48px;
              border: 5px solid #FFF;
              border-bottom-color: transparent;
              border-radius: 50%;
              display: inline-block;
              box-sizing: border-box;
              animation: rotation 1s linear infinite;
            }

            @keyframes rotation {
              0% {
                transform: rotate(0deg);
              }

              100% {
                transform: rotate(360deg);
              }
            }

            .backdrop {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.5);
              z-index: 99999;
            }

            #backdrop-none {
              display: none;
            }

            #loader-none {
              opacity: 0;
            }
        `}
        </style>
      </span>
    </div>
  );
}

export default LoadingScreen;
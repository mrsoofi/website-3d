import React from "react";
import "./Section.css";
import Fade from "react-reveal/Fade";

const Section = ({
  path,
  topMove,
  leftMove,
  matn1,
  matn2,
  matn3,
  ...props
}) => {
  return (
    <div className="section all  ">
      <div className="wrapper">
        <video
          className="video"
          //   playsInline
          muted
          playsInline
          autoPlay
          loop
          src={path}
        ></video>
      </div>
      <div className="text-overlay">
        <div className="text-inner">
          <div
            className="text-wrapper"
            style={{ top: `${topMove}%`, left: `${leftMove}%` }}
          >
            <Fade {...props} cascade>
              <div>
                <h2>{matn1}</h2>
                <h2
                  style={{
                    fontSize: "20px",
                    whiteSpace: "normal",
                    fontWeight: "lighter",
                  }}
                >
                  {matn2}
                </h2>
                <h2>{matn3}</h2>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;

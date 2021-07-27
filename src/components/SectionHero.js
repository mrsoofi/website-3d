import React, { useState } from "react";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/web";
import { Scene } from "./Canvas";
import "./Section.css";
import "./SectionHero.css";
const SectionHero = () => {
  const [toggle, set] = useState(0);
  // Set up a shared spring which simply animates the toggle above
  // We use this spring to interpolate all the colors, position and rotations
  const [{ x }] = useSpring(
    {
      x: toggle,
      config: { mass: 5, tension: 1000, friction: 50, precision: 0.0001 },
    },
    [toggle]
  );
  return (
    <div className="section hero">
      <div className="scroll">
        <div className="mouse"></div>
      </div>
      <a.div
        class="container"
        style={{
          backgroundColor: x.to([0, 1], ["#c9ffed", "#ff2558"]),
          color: x.to([0, 1], ["#7fffd4", "#c70f46"]),
        }}
      >
        <h1 class="open" children="mohammad" />
        <h1 class="close" children="soofi" />
        <a.h1>web</a.h1>
        <Scene x={x} set={set} />
      </a.div>
    </div>
  );
};

export default SectionHero;

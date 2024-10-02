import React, { useState } from "react";

function FollowMouse() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove} style={{ height: "100vh" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        version="1.1"
      >
        <line
          x1={mousePosition.x}
          y1={0}
          x2={mousePosition.x}
          y2={mousePosition.y}
          stroke="red"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

export default FollowMouse;

"use client";

import React, { PropsWithChildren, useState } from "react";

const MousePointer = ({ children }: PropsWithChildren) => {
  const [xy, setXY] = useState({ x: 0, y: 0 });

  const mouseMoveHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    setXY({ x: mouseX, y: mouseY });
  };

  return (
    <div onMouseMove={mouseMoveHandler} className="w-screen h-screen">
      {children}
      <div
        style={{ transform: `translate(${xy?.x}px, ${xy?.y}px)` }}
        className="absolute rounded-full -z-10 w-12 h-12 -left-4 -top-4 border-2 border-solid border-white"
      />
    </div>
  );
};

export default MousePointer;

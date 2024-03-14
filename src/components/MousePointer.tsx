"use client";

import { XYType } from "@/types";
import React, { PropsWithChildren, useState } from "react";

const MousePointer = ({ children }: PropsWithChildren) => {
  const [xy, setXY] = useState<XYType>();

  const mouseMoveHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    setXY({ x: mouseX, y: mouseY });
  };

  return (
    <div onMouseMove={mouseMoveHandler} className="w-screen h-screen">
      {children}
      <div
        style={{ transform: `translate(${xy?.x}px, ${xy?.y}px)` }}
        className="absolute rounded-full -z-10 w-12 h-12 -left-4 -top-4 border-2 border-solid border-gray-900"
      />
    </div>
  );
};

export default MousePointer;

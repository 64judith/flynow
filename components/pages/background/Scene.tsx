import { Cityscape, Landscape } from "@/components/svg";
import React from "react";

export const Scene = () => {
  return (
    <>
      <div className="scapesvgBg">
        <Landscape width="100%" />
      </div>
      <div className="svgBg">
        <Cityscape width="50%" />
        <Cityscape width="50%" />
      </div>
      <div className="gradientBg"></div>
    </>
  );
};


"use client";

import { searchMenu } from "@/constant";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

interface menuProps {
  // key: number;
  id: string;
  title: string;
  icon: (width: string, fill: string, stroke: string) => React.ReactElement;
  active: boolean;
  link: string;
  path: string;
}

const Menu: React.FC<menuProps> = ({ id, title, icon, active, link, path }) => {
  const [hover, setHover] = useState(false);

  const isFlight = id == "0" && path == "/";
  const isRide = id == "1" && path == "/ride";
  const isStay = id == "2" && path == "/stay";

  const [fill, setFill] = useState(
    isFlight ? "#3895d3" : isRide ? "#3895d3" : isStay ? "#3895d3" : "#cccccc"
  );
  const [stroke, setStroke] = useState(
    isFlight ? "#3895d3" : isRide ? "#3895d3" : isStay ? "#3895d3" : "#444444"
  );
  return (
    <button
      className="button__search"
      onClick={() => {
        console.log("menu clicked!!");
      }}
      onMouseOver={() => {
        setFill("#3895d3");
        setStroke("#3895d3");
        setHover(true);
      }}
      onMouseOut={() => {
        setFill(
          isFlight
            ? "#3895d3"
            : isRide
            ? "#3895d3"
            : isStay
            ? "#3895d3"
            : "#cccccc"
        );
        setStroke(
          isFlight
            ? "#3895d3"
            : isRide
            ? "#3895d3"
            : isStay
            ? "#3895d3"
            : "#444444"
        );
        setHover(false);
      }}
    >
      <span>{icon("3em", fill, stroke)}</span>
      <span style={{ color: stroke, paddingBottom: "6px", paddingTop: "4px" }}>
        {title}
      </span>
      <span
        className="h-[5px] bg-[#3895d3] rounded-t-[4px]"
        style={{
          width: `${
            hover
              ? "100%"
              : isFlight
              ? "100%"
              : isRide
              ? "100%"
              : isStay
              ? "100%"
              : "0%"
          }`,
          transition: "width 0.2s linear",
        }}
      ></span>
    </button>
  );
};

export const SearchMenu = () => {
  const pathname = usePathname();
  return (
    <div className="section__main__search__menu">
      {searchMenu.map((item, index) => (
        <Menu
          key={index}
          id={item.id}
          title={item.title}
          icon={item.icon}
          active={item.active}
          link={item.link}
          path={pathname}
        />
      ))}
    </div>
  );
};

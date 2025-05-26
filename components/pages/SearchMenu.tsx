"use client";

import { searchMenu } from "@/constant";
import React, { useState } from "react";

interface menuProps {
  // key: number;
  id: string;
  title: string;
  icon: (width: string, fill: string, stroke: string) => React.ReactElement;
  active: boolean;
  link: string;
}

const Menu: React.FC<menuProps> = ({ id, title, icon, active, link }) => {
  const [hover, setHover] = useState(false);
  const [fill, setFill] = useState("#cccccc");
  const [stroke, setStroke] = useState("#444444");
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
        setFill("#cccccc");
        setStroke("#444444");
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
          width: `${hover ? "100%" : "0%"}`,
          transition: "width 0.2s linear",
        }}
      ></span>
    </button>
  );
};

export const SearchMenu = () => {
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
        />
      ))}
    </div>
  );
};

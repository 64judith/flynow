"use client";

import React, { useState } from "react";
import { Arrow } from "../svg";

interface props {
  svg: React.ReactElement;
  titles: string[];
}

export const Dropdown: React.FC<props> = ({ svg, titles }) => {
  const [title, setTitle] = useState(titles[0]);
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="dropdown">
      <button
        className="dropdown__button"
        onClick={() => setDropdown((prev) => !prev)}
      >
        <span className="flex gap-1">
          {svg}
          {title}
        </span>
        <span>
          <Arrow width="0.6em" />
        </span>
      </button>
      {dropdown && (
        <div className="dropdown__collapse">
          {titles.map((item, index) => (
            <button
              className={[
                "dropdown__collapse__items",
                `${item === title ? "font-bold" : ""}`,
              ]
                .filter(Boolean)
                .join(" ")}
              key={index}
              onClick={() => {
                setTitle(item);
                setDropdown(false);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

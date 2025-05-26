"use client";

import { useStore } from "@/store";
import React, { Dispatch, SetStateAction, useState } from "react";

interface cityProps {
  id: string;
  title: string;
  clicked: string | null;
  setClicked: (clickID?: string | null | undefined) => void;
}

interface dateProps {
  id: string;
  title: string;
  clicked: string | null;
  setClicked: (clickID?: string | null | undefined) => void;
}

const Passenger: React.FC<dateProps> = ({ title, id, clicked, setClicked }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setClicked(id);
      }}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      className="search__select__item"
    >
      <span
        style={{
          color: `${hover ? "var(--primary)" : "black"}`,
        }}
      >
        {title}
      </span>
      <span className="">
        <span className="font-bold text-3xl">1</span> Passenger
      </span>

      {clicked === id && (
        <div className="search__select__item__dropdown w-[100%] lg:w-[150%] right-0"></div>
      )}
    </div>
  );
};

const Date: React.FC<dateProps> = ({ title, id, clicked, setClicked }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setClicked(id);
      }}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      className="search__select__item"
    >
      <span
        style={{
          color: `${hover ? "var(--primary)" : "black"}`,
        }}
      >
        {title}
      </span>
      <span className="">
        <span className="font-bold text-3xl">23</span> May'25
      </span>
      <span
        style={{
          color: `${hover ? "var(--primary)" : "black"}`,
        }}
      >
        Friday
      </span>

      {clicked === id && (
        <div className="search__select__item__dropdown w-[100%] lg:w-[150%] left-0"></div>
      )}
    </div>
  );
};

const City: React.FC<cityProps> = ({ title, id, clicked, setClicked }) => {
  const [hover, setHover] = useState(false);
  //   const [dropdown, setDropdown] = useState(false);
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setClicked(id);
      }}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      className="search__select__item"
    >
      <span
        style={{
          color: `${hover ? "var(--primary)" : "black"}`,
        }}
      >
        {title}
      </span>
      <span className="font-bold text-3xl">Select City</span>
      <span
        style={{
          color: `${hover ? "var(--primary)" : "black"}`,
        }}
      >
        LHR, Heathrow
      </span>

      {clicked === id && (
        <div
          className={[
            "search__select__item__dropdown w-[150%]",
            id === "1" ? "right-0 lg:left-0" : "left-0",
          ]
            .filter(Boolean)
            .join(" ")}
        ></div>
      )}
    </div>
  );
};

const SearchSelect = () => {
  const { tripClickedID, setTripClickedID } = useStore();
  return (
    <div className="search__select">
      <div className="search__select__city">
        <City
          id="0"
          clicked={tripClickedID}
          setClicked={setTripClickedID}
          title="From"
        />
        <City
          id="1"
          clicked={tripClickedID}
          setClicked={setTripClickedID}
          title="To"
        />
      </div>

      <div className="search__select__guide">
        <Date
          id="2"
          clicked={tripClickedID}
          setClicked={setTripClickedID}
          title="Departure"
        />
      </div>

      <div className="search__select__guide">
        <Passenger
          id="3"
          clicked={tripClickedID}
          setClicked={setTripClickedID}
          title="Passenger"
        />
      </div>
    </div>
  );
};

export default SearchSelect;

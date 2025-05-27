"use client";

import { useStore } from "@/store";
import React, { useEffect, useState } from "react";
import { Flight2, Search } from "../svg";
import axios from "axios";
import { popularCities } from "@/constant/cities";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getCurrentDate } from "@/script";

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
  const [passenger, setPassenger] = useState(1);
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
        <span className="font-bold text-3xl">{passenger}</span>{" "}
        {passenger > 1 ? " Passengers" : " Passenger"}
      </span>

      {clicked === id && (
        <div className="search__select__item__dropdown w-[100%] lg:w-[150%] right-0">
          <p className="w-full text-left">On the day of travel</p>
          <div className="search__select__passenger">
            {Array.from({ length: 9 }, (_, i) => i + 1).map((item, index) => (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setPassenger(item);
                  setClicked(null);
                }}
                className="search__select__passenger__item"
                key={index}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Date: React.FC<dateProps> = ({ title, id, clicked, setClicked }) => {
  const [hover, setHover] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string[]>(getCurrentDate());

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
        <span className="font-bold text-3xl">{selectedDate[2]}</span>
        {` ${selectedDate[1]}'${selectedDate[3]}`}
      </span>
      <span
        style={{
          color: `${hover ? "var(--primary)" : "black"}`,
        }}
      >
        {selectedDate[0]}
      </span>

      {clicked === id && (
        <div className="search__select__item__dropdown left-0">
          <DatePicker
            id="date-picker"
            // selected={selectedDate}
            inline
            onChange={(date: any) => {
              // console.log("type of date",date?.toDateString(),date?.toISOString())
              setSelectedDate(date.toDateString().split(" "));
              // e.stopPropagation();
              setClicked(id);
            }}
            dateFormat="dd/MM/yyyy" // Customize date format
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            showYearDropdown // Enables year selection dropdown
            scrollableYearDropdown // Makes year dropdown scrollable
            yearDropdownItemNumber={15} // Number of years to show in dropdown
          />
        </div>
      )}
    </div>
  );
};

const City: React.FC<cityProps> = ({ title, id, clicked, setClicked }) => {
  const [hover, setHover] = useState(false);
  const [selected, setSelected] = useState<{ [key: string]: string }>({
    cityName: "Select City",
    airportName: "",
    iataCode: "",
  });
  const [searchResult, setSearchResult] = useState<{ [key: string]: string }[]>(
    []
  );

  const searchHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = `/api/getIata?city=${e.currentTarget.value}`;
    const result = await axios(url);
    setSearchResult(result.data.data);
    // console.log("result", result.data);
  };

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
      <span className="font-bold text-3xl">{selected.cityName}</span>
      <span
        style={{
          color: `${hover ? "var(--primary)" : "black"}`,
        }}
      >
        {`${selected.iataCode}, ${selected.airportName}`}
      </span>

      {clicked === id && (
        <div
          className={[
            "search__select__item__dropdown w-[200%] lg:w-[150%]",
            id === "1" ? "right-0 lg:left-0" : "left-0",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <div className="search__select__item__input">
            <span>
              <Search width="2em" />
            </span>
            <input
              className="w-full p-1 outline-none"
              type="text"
              placeholder={title}
              onChange={searchHandler}
            />{" "}
          </div>

          <div className="search__select__item__guide">
            <p>Searches</p>
            {searchResult.length < 1 ? (
              <span className="text-zinc-400">...search</span>
            ) : (
              <div className="flex flex-col">
                {searchResult.map((item, index) => (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelected(item);
                      setClicked(null);
                    }}
                    key={index}
                    className="search__select__item__btn"
                  >
                    <span className="flex gap-2">
                      <span>
                        <Flight2 width="2em" stroke="#000000" fill="#000000" />
                      </span>
                      <span className="flex flex-col justify-start gap-1">
                        <span className="text-xl w-full text-left">
                          {item.cityName}
                        </span>
                        <span className="text-[12px] text-zinc-400 w-full">
                          {`${item.airportName} (${item.iataCode})`}{" "}
                        </span>
                      </span>
                    </span>
                    <span>{item.iataCode}</span>
                  </button>
                ))}
              </div>
            )}
            <p className="">Popular Cities</p>
            <div className="search__select__item__popular__cities">
              {popularCities.map((item, index) => (
                <button
                  className="search__select__item__popular__cities__btn"
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
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

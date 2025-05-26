import React from "react";
import { Seat } from "../svg";
import { Dropdown } from "../ui";
import { seatType } from "@/constant";
import SearchSelect from "./SearchSelect";

export const Trip = () => {
  return (
    <div className="search__trip">
      <div className="search__trip__menu">
        <div className="search__trip__select">
          <span className="search__trip__input">
            <input type="radio" />
            One Way
          </span>
          <span className="search__trip__input">
            <input type="radio" />
            Round Trip
          </span>
          <Dropdown svg={<Seat width="1em" />} titles={[...seatType]} />
        </div>

        <p className="hidden md:flex">
          Book International and Domestic Flights
        </p>
      </div>

      <SearchSelect />
    </div>
  );
};

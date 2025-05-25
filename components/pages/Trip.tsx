import React from "react";
import { Seat } from "../svg";
import { Dropdown } from "../ui";
import { seatType } from "@/constant";

export const Trip = () => {
  return (
    <div className="search__trip">
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
  );
};

"use client";

import { CityInfo, Header, SearchMenu, Trip } from "@/components/pages";
import { useStore } from "@/store";
import Image from "next/image";

export default function Home() {
  const { setTripClickedID } = useStore();
  return (
    <div
      className="home"
      onClick={() => {
        setTripClickedID(null);
        console.log("body clicked!!");
      }}
    >
      <div className="section__main">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.4]"></div>
        <Header />
        <div className="section__main__search">
          <SearchMenu />
          <Trip />
          <CityInfo />
        </div>
      </div>

      <div className="section__slide"></div>
    </div>
  );
}

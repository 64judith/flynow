"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// // import Swiper core and required modules
import { Autoplay, Pagination } from "swiper/modules";
import { slide } from "@/constant";

import "swiper/css";

interface props {
  id: string;
  title: string;
  body: string | null;
  bodyList: boolean;
  bodyListItems: (string | undefined)[] | null;
  image: string;
}

const SlideItem: React.FC<props> = ({
  id,
  title,
  body,
  bodyList,
  bodyListItems,
  image,
}) => {
  return (
    <div className="slide__item" id={id}>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="slide__item__bg"
      ></div>
      <div className="slide__item__opacity"></div>
      <div className="slide__item__text">
        <div className="slide__item__text__outline">
          <p className="font-[700] text-3xl">{title}</p>
          {!bodyList && <p className="text-md">{body}</p>}
          {bodyList && (
            <ul className="text-md flex flex-col gap-2">
              {bodyListItems?.map((item, index) => (
                <li key={index} className="flex flex-col gap-[2px]">
                  <span>{item}</span>
                  {index * 1 != bodyListItems.length - 1 && (
                    <hr className="w-full h-[1px] border-[0px] bg-white" />
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export const Slider = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      loop
      spaceBetween={0}
      slidesPerView={1}
      speed={800}
      slideToClickedSlide={true}
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
      }}
      autoplay={{
        delay: 3000, // Autoplay slides every 3 seconds
        disableOnInteraction: false, // Continue autoplay even after user interaction
      }}
      effect={"slide"}
      className="w-full h-full rounded-[6px]"
    >
      {slide.map((item, index) => (
        <SwiperSlide className="h-full w-full" key={index}>
          <SlideItem
            id={item.id}
            title={item.title}
            body={item.body}
            bodyList={item.bodyList}
            bodyListItems={item.bodyListItems}
            image={item.image}
          />
        </SwiperSlide>
      ))}
      <div className="swiper-pagination"></div>
    </Swiper>
  );
};

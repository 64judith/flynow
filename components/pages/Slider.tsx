"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// // import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

// // Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { slide } from "@/constant";

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
        }}
        className="slide__item__bg"
      ></div>
      <div className="slide__item__text">
        <div className="slide__item__text__outline">
          <p className="font-[700] text-3xl">{title}</p>
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
        // el: ".swiper-pagination",
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
    </Swiper>
  );
};

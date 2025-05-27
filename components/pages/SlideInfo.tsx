"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useIsMobile } from "@/hooks/customHooks";

const slide = [
  "/images/emirates96hrs-v3.webp",
  "/images/qatarAdventure-v3.webp",
  "/images/TAAG_Banner.webp",
  "/images/xejet-v3.webp",
];

export const SlideInfo = () => {
  const isMobile = useIsMobile();
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      loop
      spaceBetween={6}
      slidesPerView={isMobile ? 1 : 2}
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
      className="w-full h-full rounded-[6px] bg-zinc-300"
    >
      {slide.map((item, index) => (
        <SwiperSlide className="h-full w-full" key={index}>
          <div className="rounded overflow-hidden">
            <img src={item} className="w-full" />
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-pagination"></div>
    </Swiper>
  );
};

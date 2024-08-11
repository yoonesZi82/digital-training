"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function SliderMain() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="/images/photo1-slider.jpg"
            alt=""
            className="h-[300px] max-h-[300px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/photo1-slider.jpg"
            alt=""
            className="h-[300px] max-h-[300px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/photo1-slider.jpg"
            alt=""
            className="h-[300px] max-h-[300px]"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

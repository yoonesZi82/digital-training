"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

function DescriptionWeb() {
  return (
    <div className="flex justify-center items-center my-6 w-full">
      <TypeAnimation
        sequence={[
          "به سایت مرکز اموزش مهارت های تحول دیجیتال خوش امدید ❤️",
          1000,
        ]}
        wrapper="span"
        speed={50}
        className="inline-block mb-3 font-medium text-3xl text-center text-normalBlue"
        repeat={Infinity}
      />
    </div>
  );
}

export default DescriptionWeb;

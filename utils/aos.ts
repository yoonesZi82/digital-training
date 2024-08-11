"use client";
import AOS from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

function AOSInit() {
  useEffect(() => {
    AOS.init();
  }, []);
  return null;
}

export default AOSInit;

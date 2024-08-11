import { Button } from "antd";
import React from "react";
import DrawerList from "../drawer/DrawerList";

function LatestNews() {
  return (
    <div data-aos="fade-up" className="container">
      <div className="flex flex-col justify-center items-center gap-4 bg-normalWhite shadow-[10px_10px_10px_#babecc,-10px_-10px_20px_#ffffff] my-12 p-12 rounded-xl w-full text-center">
        <p className="font-medium text-3xl text-normalBlue leading-[45px]">
          برایه مشاهده اخرین اخبار کلیک کنید 👇
        </p>
        <DrawerList />
      </div>
    </div>
  );
}

export default LatestNews;

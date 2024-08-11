import React from "react";
import { PiArticleBold } from "react-icons/pi";
import workData from "./data/WorkData";
import Link from "next/link";

function WorkGroups() {
  return (
    <div data-aos="fade-down" className="container">
      <div className="flex justify-center items-center gap-2 mt-16 mb-10 w-full">
        <hr className="desktop:w-[43%] laptop:w-[38%] border-2 border-normalBlue rounded-xl w-[40%] mobile:w-[30%] tablet:w-[36%]" />
        <h1 className="font-medium text-4xl text-center text-normalBlue">
          کارگروه ها
        </h1>
        <hr className="desktop:w-[43%] laptop:w-[38%] border-2 border-normalBlue rounded-xl w-[40%] mobile:w-[30%] tablet:w-[36%]" />
      </div>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        className="gap-10 grid grid-cols-1 desktop:grid-cols-3 laptop:grid-cols-3 tablet:grid-cols-2 mobile:grid-col-1 w-full"
      >
        {workData.map((item) => (
          <fieldset
            className="border-[#e6e6e6] border border-r-0 w-full max-h-[250px] overflow-y-auto"
            key={item.id}
          >
            <legend className="flex justify-center items-center gap-2 pl-3">
              <PiArticleBold size={20} color="#272c85" />
              <p className="font-medium text-normalBlue text-xl">
                {item.title}
              </p>
            </legend>
            <div>
              {item.data.length > 0 ? (
                item.data.map((item) => (
                  <div className="flex flex-col gap-3 w-full" key={item.id}>
                    <Link href={item.link ? item.link : "/"}>
                      <div className="flex justify-start items-center gap-4 hover:bg-black hover:bg-opacity-10 px-3 py-3 w-full transition-colors duration-500 cursor-pointer">
                        <img src={item.src} alt="" className="w-[30%]" />
                        <p className="font-medium text-lg text-normalBlue">
                          {item.title}
                        </p>
                      </div>
                      <hr
                        className={
                          item
                            ? "border-[#e6e6e6] mx-auto my-1 border rounded-xl w-[70%]"
                            : "w-full"
                        }
                      />
                    </Link>
                  </div>
                ))
              ) : (
                <div className="flex justify-center items-center p-[90px] w-full">
                  <p className="font-medium text-red-500 text-xl">
                    موردی یافت نشد 😔
                  </p>
                </div>
              )}
            </div>
          </fieldset>
        ))}
      </div>
    </div>
  );
}

export default WorkGroups;

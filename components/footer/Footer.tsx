import React from "react";
import {
  PiPhoneCallFill,
  PiPhoneDisconnectFill,
  PiInstagramLogoBold,
  PiTelegramLogoBold,
} from "react-icons/pi";
import { Layout, Tooltip } from "antd";
import Link from "next/link";
import Image from "next/image";
const { Footer } = Layout;

function FooterPage() {
  return (
    <Footer className="gap-10 grid grid-cols-1 desktop:grid-cols-3 laptop:grid-cols-3 mobile:grid-cols-1 tablet:grid-cols-2 bg-normalBlue">
      <div>
        <p className="font-medium text-lg text-normalWhite">گالری</p>
        <hr className="border-2 border-normalWhite my-1 w-[5%]" />
        <div className="flex flex-col gap-2 mt-3">
          <div className="flex gap-4">
            <Image
              src="/images/photo1.jpg"
              alt=""
              width={100}
              height={100}
              className="w-[15%]"
              quality={100}
            />
            <Image
              src="/images/photo2.jpg"
              alt=""
              className="w-[15%]"
              quality={100}
              width={100}
              height={100}
            />
            <Image
              src="/images/photo3.jpg"
              alt=""
              className="w-[15%]"
              quality={100}
              width={100}
              height={100}
            />
          </div>
          <div className="flex gap-4">
            <Image
              src="/images/photo4.jpg"
              alt=""
              className="w-[15%]"
              quality={100}
              width={100}
              height={100}
            />
            <Image
              src="/images/photo1.jpg"
              alt=""
              className="w-[15%]"
              quality={100}
              width={100}
              height={100}
            />
            <Image
              src="/images/photo2.jpg"
              alt=""
              className="w-[15%]"
              quality={100}
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-medium text-lg text-normalWhite">
          لینک هایه پربازدید
        </p>
        <hr className="border-2 border-normalWhite my-1 w-[5%]" />
        <ul className="flex flex-col gap-3 mt-3">
          <Link href={"/"} className="text-gray-300">
            <li className="relative font-medium text-sm footer-link-hover">
              دوره هایه اموزشی
            </li>
          </Link>
          <Link href={"/"} className="text-gray-300">
            <li className="relative font-medium text-sm footer-link-hover">
              راهنمای ثبت نام
            </li>
          </Link>
        </ul>
      </div>
      <div>
        <p className="font-medium text-lg text-normalWhite">نشانی</p>
        <hr className="border-2 border-normalWhite my-1 w-[5%]" />
        <div className="flex flex-col gap-5 mt-3">
          <p className="font-medium text-gray-300 text-sm">
            تهران، انتهای خیابان کارگر شمالی، پژوهشگاه ارتباطات و فناوری
            اطلاعات، (مرکز آموزش مهارت های تحول دیجیتال)
          </p>
          <div className="flex gap-4">
            <Tooltip title="02184977300" color="#fff" className="text-black">
              <Link href={"tel:02184977300"}>
                <div className="flex justify-center items-center border-2 border-normalWhite bg-transparent hover:bg-normalWhite rounded-xl w-12 h-12 hover:text-normalBlue transition-colors duration-500 box-icon-footer">
                  <PiPhoneCallFill size={24} color="#fff" className="icon" />
                </div>
              </Link>
            </Tooltip>
            <Tooltip title="02188635588" color="#fff" className="text-black">
              <Link href={"tel:02188635588"}>
                <div className="flex justify-center items-center border-2 border-normalWhite bg-transparent hover:bg-normalWhite rounded-xl w-12 h-12 hover:text-normalBlue transition-colors duration-500 box-icon-footer">
                  <PiPhoneDisconnectFill
                    size={24}
                    color="#fff"
                    className="icon"
                  />
                </div>
              </Link>
            </Tooltip>
            <Tooltip
              title="@Jahad-daneshgahi"
              color="#fff"
              className="text-black"
            >
              <Link href={"https://www.instagram.com/Jahad_daneshgahi"}>
                <div className="flex justify-center items-center border-2 border-normalWhite bg-transparent hover:bg-normalWhite rounded-xl w-12 h-full hover:text-normalBlue transition-colors duration-500 box-icon-footer">
                  <PiInstagramLogoBold
                    size={24}
                    color="#fff"
                    className="icon"
                  />
                </div>
              </Link>
            </Tooltip>
            <Tooltip
              title="@Jahad-daneshgahi"
              color="#fff"
              className="text-black"
            >
              <Link href={"https://t.me/Jahad_daneshgahi"}>
                <div className="flex justify-center items-center border-2 border-normalWhite bg-transparent hover:bg-normalWhite rounded-xl w-12 h-full hover:text-normalBlue transition-colors duration-500 box-icon-footer">
                  <PiTelegramLogoBold size={24} color="#fff" className="icon" />
                </div>
              </Link>
            </Tooltip>
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterPage;

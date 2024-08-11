"use client";
import React, { useEffect, useState } from "react";
import { PiHouseLineBold, PiInfoBold, PiArticle } from "react-icons/pi";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import Link from "next/link";
import Image from "next/image";
import { Layout } from "antd";
import { Input } from "antd";
type SearchProps = GetProps<typeof Input.Search>;
const { Header } = Layout;
const { Search } = Input;

import type { GetProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "home",
    label: <Link href="/">صفحه اصلی</Link>,
    icon: <PiHouseLineBold size={18} />,
  },
  {
    key: "training",
    label: "دوره های اموزشی",
    icon: <PiArticle size={18} />,
    children: [
      {
        key: "projects",
        label: <Link href="/"> مسیولیت پذیری </Link>,
      },
      {
        key: "answer",
        label: <Link href="/">پاسخگویی </Link>,
      },
      {
        key: "will",
        label: <Link href="/"> آینده نگری و تفکر راهبردی </Link>,
      },
      {
        key: "overview",
        label: <Link href="/"> کل نگری و نگرش فرآیندی </Link>,
      },
      {
        key: "projects-control",
        label: <Link href="/"> نظارت و کنترل پروژه تا حصول نتیجه </Link>,
      },
      {
        key: "target-overview",
        label: <Link href="/"> هدف گرایی و هدایت عملکرد </Link>,
      },
      {
        key: "hard-work",
        label: <Link href="/"> همت و سخت کوشی</Link>,
      },
      {
        key: "wait",
        label: <Link href="/"> صبر و بردباری </Link>,
      },
      {
        key: "team",
        label: <Link href="/"> تیم و شبکه سازی </Link>,
      },
    ],
  },
  {
    key: "Registration-guide",
    label: " راهنمایه ثبت نام",
    icon: <PiArticle size={18} />,
    children: [
      {
        key: "video-guide",
        label: <Link href="/video-guide"> راهنمایه تصویری </Link>,
        icon: <PiArticle size={18} />,
      },
    ],
  },
  {
    key: "login",
    label: <Link href="/login"> ثبت نام/ورود </Link>,
    icon: <PiInfoBold size={18} />,
  },
];

const Navbar: React.FC = () => {
  const [current, setCurrent] = useState("home");
  const [searchData, setSearchData] = useState<string>("");
  const [fixTop, setFixTop] = useState(false);
  useEffect(() => {
    const fixNavbarToTop = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 40) {
        setFixTop(true);
      } else {
        setFixTop(false);
      }
    };
    window.addEventListener("scroll", fixNavbarToTop);

    return () => window.removeEventListener("scroll", fixNavbarToTop);
  }, [fixTop]);

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };
  const onSearch: SearchProps["onSearch"] = (value, _e, info) => {
    setSearchData(value);
  };
  return (
    <div className="flex justify-center items-center w-full">
      <Header className={fixTop ? "fix-nav" : "class-nav"}>
        <div className="demo-logo">
          <Link href="/" className="text-normalWhite">
            LOGO
          </Link>
        </div>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["home"]}
          items={items}
          className="flex justify-center items-center"
          style={{ flex: 1, minWidth: 0 }}
        />
        <div className="flex">
          <Search placeholder="جستجو کنید..." onSearch={onSearch} enterButton />
        </div>
      </Header>
    </div>
  );
};

export default Navbar;

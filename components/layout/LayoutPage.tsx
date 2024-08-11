"use client";
import React from "react";
import { Layout } from "antd";
import Navbar from "../navbar/Nav";
import FooterPage from "../footer/Footer";
import { usePathname } from "next/navigation";
const { Content } = Layout;

function LayoutPage({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <>
      <Layout>
        <Navbar />
        <Content className="desktop:px-[152px] laptop:px-[152px] bg-normalWhite px-[53px] mobile:px-[53px] tablet:px[75px] py-[130px]">
          <div>{children}</div>
        </Content>
        <FooterPage />
        <div className="flex justify-center items-center bg-normalWhite w-full text-center">
          <p className="text-gray-500 text-lg"> ساخته شده با ❤️ توسط YS</p>
        </div>
      </Layout>
    </>
  );
}

export default LayoutPage;

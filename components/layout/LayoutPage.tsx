"use client";
import React, { useEffect, useState } from "react";
import { Layout, Spin } from "antd";
import Navbar from "../navbar/Nav";
import FooterPage from "../footer/Footer";
import ScrollToTup from "@/utils/ScrollToTup";
import AOSInit from "@/utils/aos";
const { Content } = Layout;

function LayoutPage({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center w-full h-[100svh]">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <AOSInit />
          <Layout>
            <Navbar />
            <Content className="desktop:px-[152px] laptop:px-[152px] bg-normalWhite px-[53px] mobile:px-[53px] tablet:px[75px] py-[130px]">
              <div>{children}</div>
            </Content>
            <FooterPage />
            <div className="flex justify-center items-center bg-normalWhite p-3 w-full text-center">
              <p className="text-gray-500 text-lg"> ساخته شده با ❤️ توسط YS</p>
            </div>
          </Layout>
          <ScrollToTup />
        </>
      )}
    </>
  );
}

export default LayoutPage;

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import Fa from "antd/locale/fa_IR";
import React from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ConfigProvider
      direction="rtl"
      locale={Fa}
      theme={{
        components: {
          Menu: {
            itemBg: "unset",
            iconSize: 14,
            itemColor: "#fdebec",
            itemHoverColor: "#fdebec",
            itemHoverBg: "rgba(255,255,255,0.1)",
            horizontalItemSelectedColor: "#fdebec",
            fontSize: 18,
          },
          Layout: {},
          Input: {
            hoverBorderColor: "#fdebec",
          },
        },
        token: {
          colorPrimary: "#272c85",
          colorTextLightSolid: "#000",
          fontFamily: "var(--font-vazir)",
        },
      }}
    >
      <AntdRegistry>{children}</AntdRegistry>
    </ConfigProvider>
  );
};

export default ThemeProvider;

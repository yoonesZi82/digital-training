import React from "react";
import { Button, Result } from "antd";
import Link from "next/link";
import { PiArrowArcLeftBold } from "react-icons/pi";

const page: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="متاسفانه صفحه مورد نظر پیدا نشد 😔"
    extra={
      <Link href="/">
        <Button
          type="primary"
          size="large"
          icon={<PiArrowArcLeftBold size={20} />}
          className="flex flex-row-reverse border-2 border-normalBlue bg-transparent hover:bg-normalBlue shadow-[10px_10px_10px_#babecc,-10px_-10px_20px_#ffffff] text-normalBlue hover:text-normalWhite transition-colors duration-500"
        >
          صفحه اصلی
        </Button>
      </Link>
    }
  />
);

export default page;

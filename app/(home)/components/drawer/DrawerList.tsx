"use client";
import React from "react";
import { Button, Drawer } from "antd";
import DrawerData from "./drawer-data/DrawerData";
import Link from "next/link";
import { PiInfoBold, PiListMagnifyingGlassBold } from "react-icons/pi";

const DrawerList: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);

  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <Button
        type="primary"
        size="large"
        icon={<PiListMagnifyingGlassBold size={20} />}
        className="flex-row-reverse flex- border-2 border-normalBlue bg-transparent hover:bg-normalBlue text-normalBlue hover:text-normalWhite transition-colors duration-500"
        onClick={showLoading}
      >
        مشاهده اخبار
      </Button>

      <Drawer
        closable
        destroyOnClose
        title={<p> اخرین اخبار </p>}
        placement="right"
        open={open}
        loading={loading}
        onClose={() => setOpen(false)}
      >
        {DrawerData.map((item) => (
          <div key={item.id}>
            <Link href={item.link ? item.link : ""}>
              <div className="text-right flex flex-col justify-start items-start gap-2 bg-normalWhite shadow-[10px_10px_10px_#babecc,-10px_-10px_20px_#ffffff] my-8 px-4 py-6 rounded-xl new-box-hover w-full">
                <p className="font-medium text-[16px] text-normalBlue">
                  {item.data} - {item.time}
                </p>
                <div className="text-right flex justify-start items-start gap-2 w-full">
                  <PiInfoBold size={30} color="#272c85" />
                  <p className="line-clamp-2 font-medium text-lg text-normalBlue">
                    {item.title}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Drawer>
    </>
  );
};

export default DrawerList;

import DrawerType from "./types/drawerType";
import GetTime from "@/utils/GetTime";
const time = GetTime();
const DrawerData: DrawerType[] = [
  {
    id: "1",
    data: new Date().toLocaleDateString("fa-IR"),
    time,
    title: " راهنمای تصویری ثبت نام دوره های آموزشی آفلاین مهارت های شایستگی",
    link: "/news",
  },
  {
    id: "2",
    data: new Date().toLocaleDateString("fa-IR"),
    time,
    title: " راهنمای تصویری ثبت نام دوره های آموزشی آفلاین مهارت های شایستگی",
    link: "/news2",
  },
];

export default DrawerData;

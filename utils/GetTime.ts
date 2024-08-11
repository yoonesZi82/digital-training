const GetTime = () => {
  const date = new Date();
  const time = date.toLocaleTimeString("fa-IR").split(":");
  const finalTime = `${time[0]}:${time[1]}`;
  return finalTime;
};

export default GetTime;

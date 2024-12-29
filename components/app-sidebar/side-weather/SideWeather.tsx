import { cloudy, rain, sideSun } from "@/app/utils/icons";
import React from "react";

const SideWeather = () => {
  return (
    <div className="flex flex-col justify-between pt-10">
      <div className="flex justify-center pt-6">{sideSun}</div>
      <div className="flex flex-col gap-9 px-5 text-center">
        <p className="text-[100px] ">12°C</p>
        <p className="text-[25px]">
          Monday, <span className="text-stone-400">16:00</span>
        </p>
        <div></div>
        <div className="flex flex-col gap-3 px-7">
          <div className="flex gap-4">
            {cloudy}
            <p>Cloudy</p>
          </div>
          <div className="flex gap-4">
            {rain}
            <p>Rain - 30%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideWeather;

import { sun } from "@/app/utils/icons";
import React from "react";

const WeatherCard = () => {
  return (
    <div className="flex flex-col justify-between items-center text-center w-40 bg-white py-10 rounded-xl shrink-0">
      <p>Sun</p>
      <div className="py-3">{sun}</div>
      <div className="flex gap-3">
        <p>15°C</p>
        <p className="text-stone-400">4°C</p>
      </div>
    </div>
  );
};

export default WeatherCard;

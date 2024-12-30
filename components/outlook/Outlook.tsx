import React from "react";
import WeatherCard from "./weather-card/WeatherCard";

const Outlook = () => {
  return (
    <div className="flex justify-between w-full gap-3 mt-10 overflow-x-auto flex-nowrap px-4">
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
    </div>
  );
};

export default Outlook;

import React from "react";
import WeatherCard from "./weather-card/WeatherCard";

const Outlook = () => {
  return (
    <div className="flex justify-between gap-3 mt-20 overflow-x-auto max-md:justify-center">
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

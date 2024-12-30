import React from "react";
import CardHighlights from "./card-highlights/CardHighlights";
import { Progress } from "@/components/ui/progress";
import UVIndex from "./UVIndex";
import WindStatus from "./WindStatus";
import SunStatus from "./SunStatus";
import Humidity from "./Humidity";
import Visibility from "./Visibility";
import AirQuality from "./AirQuality";

const Highlights = () => {
  return (
    <div className="mt-12 ">
      <h2 className="text-[40px] mb-8">Today's Highlights</h2>
      <div className="flex flex-wrap justify-between gap-4 max-lg:justify-center">
        <CardHighlights title="UV Index">
          <UVIndex />
        </CardHighlights>
        <CardHighlights title="Wind Status">
          <WindStatus />
        </CardHighlights>
        <CardHighlights title="Sunrice & Sunset">
          <SunStatus />
        </CardHighlights>
        <CardHighlights title="Humidity">
          <Humidity />
        </CardHighlights>
        <CardHighlights title="Visibility">
          <Visibility />
        </CardHighlights>
        <CardHighlights title="Air Quality">
          <AirQuality />
        </CardHighlights>
      </div>
    </div>
  );
};

export default Highlights;

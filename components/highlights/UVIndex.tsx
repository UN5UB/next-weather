import React from "react";
import { Progress } from "../ui/progress";

const UVIndex = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-[40px]">5</p>
      <Progress value={80} />
    </div>
  );
};

export default UVIndex;

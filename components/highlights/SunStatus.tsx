import { arrowDown, arrowUp } from "@/app/utils/icons";
import React from "react";

const SunStatus = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-6">
        <span>{arrowUp}</span>
        <div>
          <p className="text-[25px] ">6:35 AM</p>
          <p className="text-[14px] text-stone-300">- 1m 46s</p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <span>{arrowDown}</span>
        <div>
          <p className="text-[25px] ">5:42 PM</p>
          <p className="text-[14px] text-stone-300">+ 2m 22s</p>
        </div>
      </div>
    </div>
  );
};

export default SunStatus;

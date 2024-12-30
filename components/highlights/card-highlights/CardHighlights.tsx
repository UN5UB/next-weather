import React from "react";

const CardHighlights = ({ title, children }: CardHihlightsProps) => {
  return (
    <div className="flex flex-col w-full bg-white max-w-[450px] p-5 gap-3 max-h-[265px] rounded-xl">
      <h3 className="text-stone-300 text-start mb-5">{title}</h3>
      {children}
    </div>
  );
};

export default CardHighlights;

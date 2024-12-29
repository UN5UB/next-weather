"use client";

import NavMenu from "@/components/navbar/NavMenu";
import Outlook from "@/components/outlook/Outlook";

export default function Home() {
  return (
    <div className="px-11 w-full bg-stone-100 max-md:flex flex-col justify-center items-center">
      <NavMenu />
      <Outlook />
    </div>
  );
}

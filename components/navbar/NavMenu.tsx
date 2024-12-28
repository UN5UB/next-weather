"use client";

import React from "react";

const NavMenu = () => {
  return (
    <nav>
      <ul className="flex gap-4 mt-4 text-[25px] font-semibold">
        <li>
          <a href="#">Today</a>
        </li>
        <li>
          <a href="#">Week</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;

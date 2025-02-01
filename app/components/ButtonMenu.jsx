"use client";

import { IoMenuSharp } from "react-icons/io5";
import Menu from "./Menu";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ButtonMenu() {
  const [show, setShow] = useState(false);

  const showMenu = () => {
    setShow(true);
  };
  return (
    <div className="flex flex-row gap-x-2 items-center ">
      <Menu setShow={setShow} show={show}></Menu>
      <p className="text-[20px] hover:cursor-pointer hidden md:block">Menu</p>
      <IoMenuSharp
        className="w-[25px] h-[25px] hover:cursor-pointer"
        onClick={(e) => showMenu(e)}
      />
    </div>
  );
}

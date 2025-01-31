"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ImCross } from "react-icons/im";

export default function Menu({ show, setShow }) {
  const hideMenu = () => {
    setShow(false);
  };

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden"; // Evita el scroll lateral
    } else {
      document.body.style.overflow = "auto"; // Restaura el scroll normal
    }
  }, [show]);

  return (
    <div
      className={`fixed text-white top-0 right-0 h-screen w-full max-w-[250px] md:max-w-[300px] lg:max-w-[350px] 
        bg-gradient-to-b from-[#07b28e] to-[#0064bf] flex flex-col gap-y-4 px-6 
        transform transition-transform duration-300 ease-in-out z-20
        ${
          show
            ? "translate-x-0 opacity-100 visible"
            : "translate-x-full opacity-0 invisible delay-200"
        }`}
    >
      <ImCross
        className="mt-6 flex self-end hover:cursor-pointer w-[25px] h-[25px]"
        onClick={(e) => hideMenu(e)}
      >
        X
      </ImCross>
      <Link
        href="/"
        className="text-[25px] border-b-[1px] border-gray-300 "
        onClick={(e) => setShow(false)}
      >
        Home
      </Link>
      <Link
        href="/dashboard"
        className="text-[25px] border-b-[1px] border-gray-300 "
        onClick={(e) => setShow(false)}
      >
        Dashboard
      </Link>
      <Link
        href="/tables"
        className="text-[25px] border-b-[1px] border-gray-300 "
        onClick={(e) => setShow(false)}
      >
        Tables
      </Link>
    </div>
  );
}

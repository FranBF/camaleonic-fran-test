"use client";
import { useState } from "react";
import { IoFilter } from "react-icons/io5";

export default function TableFilter({ setType }) {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="w-36 self-end flex flex-col gap-y-2">
      <button
        className="w-full rounded-sm border-[1px] border-gray-200 h-12 flex gap-x-2 items-center justify-start px-4 text-[16px]"
        onClick={(e) => setShowFilter(!showFilter)}
      >
        <IoFilter />
        Filter
      </button>
      {showFilter && (
        <div className="w-36 h-32 mt-16 bg-[#1D1C1D] p-4 border-[1px] rounded-sm absolute z-20 border-gray-200">
          <p
            className="border-b-gray-200 border-b-[1px] border-opacity-45 hover:text-[#04AEB7] hover:cursor-pointer"
            onClick={(e) => {
              setType("todos");
              setShowFilter(false);
            }}
          >
            Todos
          </p>
          <p
            className="border-b-gray-200 border-b-[1px] border-opacity-45 hover:text-[#04AEB7] hover:cursor-pointer"
            onClick={(e) => {
              setType("posts");
              setShowFilter(false);
            }}
          >
            Posts
          </p>
          <p
            className="border-b-gray-200 border-b-[1px] border-opacity-45 hover:text-[#04AEB7] hover:cursor-pointer"
            onClick={(e) => {
              setType("albums");
              setShowFilter(false);
            }}
          >
            Albums
          </p>
          <p
            className="border-b-gray-200 border-b-[1px] border-opacity-45 hover:text-[#04AEB7] hover:cursor-pointer"
            onClick={(e) => {
              setType("photos");
              setShowFilter(false);
            }}
          >
            Photos
          </p>
        </div>
      )}
    </div>
  );
}

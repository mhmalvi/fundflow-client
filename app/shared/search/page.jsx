'use client'
import React from "react";
import "./searchStyle.css";

const CustomSearch = ({ search, handleSearch }) => {
  return (
    <div className="z-[999] absolute top-15 right-5 sm:static w-[90%]">
      <div
        className={`${
          search ? "bg-white rounded-lg lg:rounded-full shadow-lg" : ""
        } flex items-center delay-300 z-[999]`}
      >
        <input
          type="text"
          placeholder="Search..."
          className={`${
            search
              ? "w-full text-black rounded-tl-full rounded-bl-full bg-white shadow-sm px-3 py-1.5 lg:py-1"
              : "w-0"
          } custom-transition-all duration-700 outline-none z-[999]`}
        />
        <div
          onClick={() => {
            handleSearch(false);
          }}
          className={`${
            search
              ? "w-8 rounded-tr-full rounded-br-full cursor-pointer px-2 text-black"
              : "text-white invisible duration-300"
          } text-sm custom-transition-all delay-200 z-[999]`}
        >
          X
        </div>
      </div>
    </div>
  );
};

export default CustomSearch;

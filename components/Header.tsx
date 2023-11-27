"use client";
import Image from "next/image";
import React from "react";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";

const Header = () => {
  return (
    <header>
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055d1] rounded-md filter blur-3xl opacity-50 -z-50" />
      <div className="flex flex-col p-5 md:flex-row items-center bg-gray-500/10">
        <Image
          priority
          src="https://links.papareact.com/c2cdd5"
          alt="trello-logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          {/* search box */}
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-5 text-gray-500" />
            <input
              type="text"
              placeholder="search..."
              className="p-2 flex-1 outline-none"
            />
            <button hidden type="submit">
              Search
            </button>
          </form>
          {/* Avatar */}
          <Avatar name="Mohammed Aaashik" round color="#0055D1" size="50" />
        </div>
      </div>

      <div className="flex items-center justify-center px-5 md:py-5 py-2">
        <p className="flex items-center p-5 text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055d1]">
          <UserCircleIcon className="h-10 w-10 inline-block text-[#0055d1] mr-1" />
          GPT is summerizing your tasks for the days..
        </p>
      </div>
    </header>
  );
};

export default Header;

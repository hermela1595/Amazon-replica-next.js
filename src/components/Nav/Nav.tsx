import Link from "next/link";
import React from "react";
import { LuMenu } from "react-icons/Lu";
import { BiCaretDown } from "react-icons/bi";

function Nav() {
  return (
    <div className="w-full h-10 bg-amazon_light text-xs text-white px-4 flex items-center">
      <p className="flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        <LuMenu className="text-xl" /> All
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
      Medical Care
      <BiCaretDown />
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
       Best seller
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
       Amazon Basics
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        Prim
        <BiCaretDown />
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        Customer Service
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        New Release
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
       Music
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
       Today's Deal
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
       Books
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
       Fashion
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
       Amazon Home
      </p>
      <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-red-600 text-amazon_yellow hover:text-red-400 cursor-pointer duration-300">
       Sign Out
      </p>
    </div>
   
  );
}

export default Nav;

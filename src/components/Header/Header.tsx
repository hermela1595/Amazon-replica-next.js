import React from "react";
import logo from "../../images/logo1.png";
import Image from "next/image";
import Link from "next/link";
import { BiCaretDown } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
// import {LiaCartPlusSolid} from 'react-icons/lia'
import cart from "../../images/cartNew.png";
import flag from "../../images/flag.png";

function Header() {
  return (
    <header className="h-20 w-full bg-black text-lightText sticky top-0 z-50 ">
      <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3">
        {/* logo part */}
        
          <Link
            href={"/"}
            className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]"
          >
            <Image
              className="w-20 mt-1 object-cover"
              src={logo}
              alt="logo image"
            />
          </Link>
        
        {/* delivery part */}
        <div className=" text-sm px-2 border border-transparent hover:border-white cursor-pointer duration-300 items-center justify-center h-[70%] hidden-xl:inline-flex gap-1 hidden md:inline-flex">
          <SlLocationPin />
          <div>
            <p className="text-xs pt-4">Delivery Location</p>
            <p className="test-white font-bold uppercase text-xs">USA</p>
          </div>
        </div>

        {/* search */}

        <div className="flex-1 h-8 hidden md:inline-flex items-center justify-between relative">
         <input
            className="w-full h-full rounded-md px-2 placeholder::text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow"
            type="text"
            placeholder="Search Amazon"
          />
          <span className="w-12 h-full bg-amazon_yellow text-black text-2xl 
          flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
            <HiOutlineSearch />
          </span>
        </div>

        {/* flag */}

        <Link href={"/"}>
          <div className="hidden md:inline-flex">
            <Image className="w-6" src={flag} alt="cart" />
          </div>
        </Link>

      

        <div className=" text-xs text-gray-100 flex flex-col px-2 border border-transparent hover:border-white cursor-pointer duration-300 justify-center h-[70%]  gap-1 ">
          <div>
            <p className="text-xs pt-4">Hello sine in</p>
            <p className="text-xs font-bold">Account &List</p>
          <BiCaretDown/>
        </div>
        </div>
        <div className=" text-xs text-gray-100 flex flex-col px-2 border border-transparent hover:border-white cursor-pointer duration-300 justify-center h-[70%]  gap-1 ">
          <div>
            <p className="text-xs">Returns</p>
            <p className="text-xs font-bold">& Orders</p>
        </div>
        </div>

          {/* cart */}
        <Link href={"/cart"}>
          <div className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 justify-center h-[70%] relative">
            <Image
              className="w-auto object-cover h-8"
              src={cart}
              alt="cart"
            />
            <p className=" text-xs text-white font-bold mt-3">Cart</p>
            <span className=" absolute text-sm text-amazon_yellow bottom-4 left-[29px] font-semibold">0</span>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;

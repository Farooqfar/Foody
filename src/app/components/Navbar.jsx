import Link from "next/link";
import React, { useState } from "react";
import { RiAccountBoxFill } from "react-icons/ri";
import { FaCartPlus } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";

export default function Navbar({ addCart, setaddcart }) {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <nav
        className={`relative w-full flex justify-between items-center p-5 max-md:flex-col max-md:justify-normal ${
          menu ? "max-md:items-center" : "max-md:items-start"
        }`}
      >
        <ul>logo</ul>

        <div
          className={`flex justify-between items-center w-[65%] max-md:flex-col max-md:h-screen ${
            menu ? "max-md:block" : "max-md:hidden"
          }`}
        >
          <ul className="flex justify-center items-center gap-10 max-md:h-full max-md:flex-col">
            <li className="relative text-md uppercase hover:text-[#E1380A] before:absolute before:content-[''] before:w-0 before:h-0.5 before:bottom-0 before:bg-[#E1380A] before:left-0 hover:before:w-full before:transition-all  transition-all duration-300">
              <Link href="#">Home</Link>
            </li>
            <li className="relative text-md uppercase hover:text-[#E1380A] before:absolute before:content-[''] before:w-0 before:h-0.5 before:bottom-0 before:bg-[#E1380A] before:left-0 hover:before:w-full before:transition-all  transition-all duration-300">
              <Link href="#">Offers</Link>
            </li>
            <li className="relative text-md uppercase hover:text-[#E1380A] before:absolute before:content-[''] before:w-0 before:h-0.5 before:bottom-0 before:bg-[#E1380A] before:left-0 hover:before:w-full before:transition-all  transition-all duration-300">
              <Link href="#">regular</Link>
            </li>
            <li className="relative text-md uppercase hover:text-[#E1380A] before:absolute before:content-[''] before:w-0 before:h-0.5 before:bottom-0 before:bg-[#E1380A] before:left-0 hover:before:w-full before:transition-all  transition-all duration-300">
              <Link href="#">contactus</Link>
            </li>
          </ul>
          <ul className="flex gap-2">
            <li className="text-2xl hover:text-[#E1380A] transition-all duration-300">
              <Link href="/auth/login">
                <RiAccountBoxFill />
              </Link>
            </li>
            <li className="text-2xl hover:text-[#E1380A] transition-all duration-300 ">
              <button
                onClick={() => setaddcart(!addCart)}
                className="cursor-pointer"
              >
                <FaCartPlus />
              </button>
            </li>
          </ul>
        </div>
        <button
          className="absolute top-2 right-2 text-4xl hidden max-md:block"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <MdRestaurantMenu /> : <CiMenuFries />}
        </button>
      </nav>
    </>
  );
}

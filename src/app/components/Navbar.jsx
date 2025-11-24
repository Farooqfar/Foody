import Link from "next/link";
import React from "react";
import { RiAccountBoxFill } from "react-icons/ri";
import { FaCartPlus } from "react-icons/fa";

export default function Navbar({ addCart, setaddcart }) {
  return (
    <>
      <nav className="w-full flex justify-between items-center p-5">
        <ul>logo</ul>
        <ul className="flex justify-center items-center gap-10">
          <li className="relative text-md uppercase hover:text-[#E1380A] before:absolute before:content-[''] before:w-0 before:h-0.5 before:bottom-0 before:bg-[#E1380A] before:left-0 hover:before:w-full before:transition-all  transition-all duration-300">
            <Link href="#">Home</Link>
          </li>
          <li className="relative text-md uppercase hover:text-[#E1380A] before:absolute before:content-[''] before:w-0 before:h-0.5 before:bottom-0 before:bg-[#E1380A] before:left-0 hover:before:w-full before:transition-all  transition-all duration-300">
            <Link href="#">menu</Link>
          </li>
          <li className="relative text-md uppercase hover:text-[#E1380A] before:absolute before:content-[''] before:w-0 before:h-0.5 before:bottom-0 before:bg-[#E1380A] before:left-0 hover:before:w-full before:transition-all  transition-all duration-300">
            <Link href="#">blog</Link>
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
      </nav>
    </>
  );
}

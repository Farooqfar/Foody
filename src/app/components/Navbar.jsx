import Link from "next/link";
import React from "react";
import { RiAccountBoxFill } from "react-icons/ri";
import { FaCartPlus } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <nav className="w-full flex justify-between items-center p-5">
        <ul>logo</ul>
        <ul className="flex justify-center items-center gap-10">
          <li className="relative text-md uppercase hover:text-amber-500 before:absolute before:content-[''] before:w-0 before:h-0.5 before:bottom-0 before:bg-amber-500 before:left-0 hover:before:w-full before:transition-all  transition-all duration-300">
            <Link href="#">Home</Link>
          </li>
          <li className="relative text-md uppercase hover:text-amber-500 before:absolute before:content-[''] before:w-0 before:h-0.5 before:bottom-0 before:bg-amber-500 before:left-0 hover:before:w-full before:transition-all  transition-all duration-300">
            <Link href="#">menu</Link>
          </li>
          <li className="relative text-md uppercase hover:text-amber-500 before:absolute before:content-[''] before:w-0 before:h-0.5 before:bottom-0 before:bg-amber-500 before:left-0 hover:before:w-full before:transition-all  transition-all duration-300">
            <Link href="#">blog</Link>
          </li>
          <li className="relative text-md uppercase hover:text-amber-500 before:absolute before:content-[''] before:w-0 before:h-0.5 before:bottom-0 before:bg-amber-500 before:left-0 hover:before:w-full before:transition-all  transition-all duration-300">
            <Link href="#">contactus</Link>
          </li>
        </ul>
        <ul className="flex gap-2">
          <li className="text-2xl hover:text-amber-500 transition-all duration-300">
            <Link href="#">
              <RiAccountBoxFill />
            </Link>
          </li>
          <li className="text-2xl hover:text-amber-500 transition-all duration-300">
            <Link href="#">
              <FaCartPlus />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

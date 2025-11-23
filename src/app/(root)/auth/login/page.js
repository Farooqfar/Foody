import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <section className="w-full h-screen flex justify-center items-center flex-col">
        <form className="w-[500px] h-100 bg-gray-800 flex flex-col">
          <h1 className="text-[#E1380A] text-2xl text-bold text-center p-3 font-bold">
            Login
          </h1>
          <div className="w-full flex flex-col p-5">
            <label className="text-gray-400">Email</label>
            <input
              type="email"
              className="border p-1 caret-[#E1380A] text-[#E1380A] outline-none"
            />
          </div>
          <div className="w-full flex flex-col p-5">
            <label className="text-gray-400">Email</label>
            <input
              type="password"
              className="border p-1 caret-[#E1380A] text-[#E1380A] outline-none"
            />
          </div>
          <div className="w-full flex flex-col p-5">
            <button
              type="submit"
              className="bg-[#E1380A] p-1 hover:bg-gray-800 border-0 border-[#E1380A] hover:text-[#E1380A] hover:border-[#E1380A] hover:border-2 hover:cursor-pointer transition-all duration-300"
            >
              Login
            </button>
            <Link
              href="#"
              className="text-[#E1380A] p-1 hover:text-gray-500 transition-all duration-300"
            >
              Register
            </Link>
            <Link
              href="#"
              className="text-[#E1380A] p-1 hover:text-gray-500 transition-all duration-300"
            >
              Forgot password
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}

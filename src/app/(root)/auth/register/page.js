"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function page() {
  const pathname = usePathname();
  const [login, setLogin] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const handlelogin = (e) => {
    let { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };
  const handleForm = (e) => {
    e.preventDefault();
    console.log(login);
  };
  return (
    <>
      <section className="w-full h-screen flex justify-center items-center flex-col">
        <form
          className="w-[500px] h-auto bg-gray-800 flex flex-col"
          onSubmit={handleForm}
        >
          <h1 className="text-[#E1380A] text-2xl text-bold text-center p-3 font-bold">
            Register Foody
          </h1>
          <div className="w-full flex flex-col p-5">
            <label className="text-gray-400">Name</label>
            <input
              type="text"
              className="border p-1 caret-[#E1380A] text-[#E1380A] outline-none placeholder-[#E1380A]"
              placeholder="Enter Name"
              name="name"
              value={login.name}
              onChange={(e) => handlelogin(e)}
            />
          </div>

          <div className="w-full flex flex-col p-5">
            <label className="text-gray-400">Email</label>
            <input
              type="email"
              className="border p-1 caret-[#E1380A] text-[#E1380A] outline-none placeholder-[#E1380A]"
              placeholder="Email"
              name="email"
              value={login.email}
              onChange={(e) => handlelogin(e)}
            />
          </div>
          <div className="w-full flex flex-col p-5">
            <label className="text-gray-400">Password</label>
            <input
              type="password"
              className="border p-1 caret-[#E1380A] text-[#E1380A] outline-none placeholder-[#E1380A]"
              placeholder="Password"
              name="password"
              value={login.password}
              onChange={(e) => handlelogin(e)}
            />
          </div>
          <div className="w-full flex flex-col p-5">
            <label className="text-gray-400">Confirm Password</label>
            <input
              type="password"
              className="border p-1 caret-[#E1380A] text-[#E1380A] outline-none placeholder-[#E1380A]"
              placeholder="Confirm Password"
              name="cpassword"
              value={login.cpassword}
              onChange={(e) => handlelogin(e)}
            />
          </div>
          <div className="w-full flex flex-col p-5">
            <button
              type="submit"
              className="bg-[#E1380A] p-1 hover:bg-gray-800 border-0 border-[#E1380A] hover:text-[#E1380A] hover:border-[#E1380A] hover:border-2 hover:cursor-pointer transition-all duration-300"
            >
              Register Now
            </button>
            <Link
              href="#"
              className="text-[#E1380A] p-1 hover:text-gray-500 transition-all duration-300"
            >
              {pathname === "/auth/login" ? "register" : "login"}
            </Link>
            <Link
              href="#"
              className="text-[#E1380A] p-1 hover:text-gray-500 transition-all duration-300"
            >
              {pathname === "/auth/register" ? " " : "forgot password"}
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}

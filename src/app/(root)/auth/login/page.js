"use client";
import { api } from "@/app/lib/axios";
import Link from "next/link";
import React, { useState } from "react";

export default function page() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const handlelogin = (e) => {
    let { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const data = await api.post("/login", login);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      <section className="w-full h-screen flex justify-center items-center flex-col">
        <form
          className="w-[500px] h-100 bg-gray-800 flex flex-col max-md:w-full"
          onSubmit={handleForm}
        >
          <h1 className="text-[#E1380A] text-2xl text-bold text-center p-3 font-bold">
            Login Foody
          </h1>
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
            <button
              type="submit"
              className="bg-[#E1380A] p-1 hover:bg-gray-800 border-0 border-[#E1380A] hover:text-[#E1380A] hover:border-[#E1380A] hover:border-2 hover:cursor-pointer transition-all duration-300"
            >
              Login
            </button>
            <Link
              href="/auth/register"
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

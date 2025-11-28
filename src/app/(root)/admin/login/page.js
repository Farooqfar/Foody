import React from "react";

export default function page() {
  return (
    <>
      <section className="w-full h-screen flex justify-center items-center">
        <form className="flex flex-col gap-6 border w-[500px] h-80 p-5 max-md:w-[400px]">
          <h1 className="text-3xl text-amber-600 text-center">
            Admin Dashboard
          </h1>
          <div>
            <h1>Email</h1>
            <input
              type="email"
              required
              className="w-full p-1 caret-amber-600 border"
              placeholder="Email"
            />
          </div>
          <div>
            <h1>Password</h1>
            <input
              type="password"
              required
              className="w-full p-1 caret-amber-600 border"
              placeholder="Password"
            />
          </div>
          <div>
            <button className="bg-amber-600 w-28 p-1 cursor-pointer">
              Login
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

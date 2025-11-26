"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function page() {
  const [count, setCount] = useState(1);
  const increase_count = () => {
    if (count > 4) return;
    setCount(count + 1);
  };
  const decrease_count = () => {
    if (count <= 1) return;
    setCount(count - 1);
  };
  return (
    <>
      <section className="w-full h-screen flex max-md:flex-col">
        <div className="w-[50%] h-full flex justify-center items-center max-md:w-[99%] ">
          <div className="w-100 h-100 flex justify-center items-center border border-amber-700 max-md:border-none">
            <Image
              src="/p2.png"
              alt="image"
              width={100}
              height={100}
              className="w-80"
            />
          </div>
        </div>
        <div className="w-[50%] h-full flex flex-col justify-center gap-1 max-md:w-full">
          <div className="relative w-full h-100 flex flex-col justify-start items-start p-4">
            <div>
              <h1 className="text-3xl font-semibold">Product Name</h1>
              <h2 className="text-amber-700 text-xl font-medium">
                Price: Rs. 1,999
              </h2>
            </div>

            <div className="mt-3">
              <h3 className="text-2xl font-semibold mb-1">Description</h3>
              <p className="text-gray-700 leading-relaxed">
                Experience premium craftsmanship at a competitive price. This
                product is designed with attention to detail, ensuring
                outstanding durability, comfort, and long-lasting performance.
                Elevate your everyday lifestyle with a product built to deliver
                value and style.
              </p>
            </div>

            <div className="absolute bottom-2 flex flex-col gap-2 max-md:w-full">
              <div className="flex p-1">
                <button
                  className="bg-amber-600 w-8 text-2xl cursor-pointer"
                  onClick={decrease_count}
                >
                  -
                </button>
                <p className="w-14 text-2xl text-center bg-amber-700 transition-all duration-300">
                  {count}
                </p>
                <button
                  className="bg-amber-600 w-8 text-2xl cursor-pointer"
                  onClick={increase_count}
                >
                  +
                </button>
              </div>
              <Link
                href="#"
                className="bg-amber-600 w-32 inline-block text-center text-white hover:bg-amber-700 transition-all duration-300 cursor-pointer p-2 rounded max-md:w-[90%]"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

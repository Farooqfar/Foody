import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Cards({ slug }) {
  return (
    <>
      <section className="w-80 h-80 bg-gray-900 p-5 m-5 rounded">
        <div className="w-full h-44 flex justify-center items-center">
          <Image
            src="/pizza1.png"
            alt="product"
            width={100}
            height={100}
            className="w-52 h-full"
          />
        </div>
        <div className="w-full h-auto">
          <h1 className="text-3xl">Orange</h1>
          <p className="text-[#E1380A]">2999 PKR</p>
        </div>
        <div className="flex gap-3">
          <Link
            href="#"
            className="block w-full text-center rounded p-1 bg-amber-600 hover:bg-amber-700 transition-all duration-300 ease-linear mt-3"
          >
            Add to cart
          </Link>
          <Link
            href={`auth/order/${slug}`}
            className="block w-full text-center rounded p-1 bg-[#E1380A] hover:bg-red-700 transition-all duration-300 ease-out mt-3"
          >
            Order Now
          </Link>
        </div>
      </section>
    </>
  );
}

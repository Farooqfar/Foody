import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Cards() {
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
          <p className="text-amber-500">2999 PKR</p>
        </div>
        <Link
          href="#"
          className="block w-full text-center rounded p-1 bg-amber-500 mt-3"
        >
          Order Now
        </Link>
      </section>
    </>
  );
}

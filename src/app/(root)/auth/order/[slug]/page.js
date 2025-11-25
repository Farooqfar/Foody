import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function page({ params }) {
  return (
    <>
      <section className="w-full h-screen flex">
        <div className="w-[50%] h-full flex justify-center items-center">
          <div className="w-100 h-100 flex justify-center items-center border border-amber-700">
            <Image
              src="/p2.png"
              alt="image"
              width={100}
              height={100}
              className="w-80"
            />
          </div>
        </div>
        <div className="w-[50%] h-full flex flex-col justify-center gap-1">
          <div className="relative w-full h-100 flex flex-col justify-start items-start  border border-amber-700">
            <div>
              <h1 className="text-3xl ">Name</h1>
              <h1 className="text-amber-700">Price 1999</h1>
            </div>
            <div>
              <h1 className="text-2xl">Description</h1>
              <p>
                Get premium quality at an affordable price. Our products are
                crafted with care, ensuring great durability, comfort, and value
                for your money. Buy now and enjoy top-notch quality without
                breaking the bank!
              </p>
            </div>
            <div className="absolute bottom-2">
              <Link
                href="#"
                className="bg-amber-600 w-32 text-center hover:bg-amber-700 transition-all duration-300 cursor-pointer p-1"
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

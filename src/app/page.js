"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";
import Cards from "./components/Cards";
import Cart from "./components/Cart";
import { useState } from "react";

export default function page() {
  const [addCart, setaddcart] = useState(false);
  return (
    <>
      <main className="w-full h-screen overflow-x-hidden  flex flex-col items-center p-5">
        <Navbar addCart={addCart} setaddcart={setaddcart} />
        <section className="w-full h-full flex bg-linear-to-tl to-black from-gray-800 p-5">
          <div className="w-[50%] h-full  flex flex-col justify-center gap-10">
            <h1 className="text-white">Premium Restaurant</h1>
            <h1 className="text-white font-bold text-9xl">
              Dedelay&apos;s
              <br />
              Oven
            </h1>

            <p className="text-white">
              Best hot and fresh pizzas served in our restaurant.
            </p>
            <button className="w-28 p-2 bg-[#E1380A] text-white hover:bg-[#E1380A] transition-all duration-200  cursor-pointer hover:scale-105">
              Learn More
            </button>
          </div>
          <div className="w-[50%] flex justify-center items-center">
            <Image
              src="/pizaa.png"
              alt="banner"
              width={100}
              height={100}
              className="w-[80%]"
            />
          </div>
        </section>
        <section className="w-full h-100 bg-gray-800 flex p-5">
          <div className="w-[50%] h-full flex  flex-col justify-around">
            <h1 className="text-5xl uppercase font-bold">orange benefit</h1>
            <div className="flex gap-8">
              <div>
                <Image
                  src="/p3.png"
                  alt="orange"
                  width={100}
                  height={100}
                  className="w-48"
                />
              </div>
              <div className="flex flex-col justify-center items-start gap-3">
                <p>
                  Rich in Vitamin C to boost immunity and keep you energized
                  every day
                </p>
                <Link href="#" className="w-28 bg-[#E1380A] p-2">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[50%] h-full flex justify-center items-center">
            <Image
              src="/p2.png"
              alt="orange"
              width={100}
              height={100}
              className="w-100"
            />
          </div>
        </section>
        <section className="w-full flex justify-center items-center gap-3 flex-wrap mt-5">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </section>
        <section className="w-full flex justify-center items-center gap-3 flex-wrap mt-5">
          <h1 className="text-6xl uppercase text-[#E1380A] font-bold">
            Offers
          </h1>
          <div className="w-full flex justify-center items-center gap-3 flex-wrap">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </section>
        <section
          className={`absolute w-[90%] min-h-100 top-32 bg-[#E1380A] p-5 overflow-hidden ${
            addCart
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-5 pointer-events-none"
          } transition-all duration-300`}
        >
          <Cart />
        </section>
        <footer className="w-full bg-gray-800 flex justify-around items-center p-5">
          <div className="w-80 flex flex-col gap-1">
            <h1 className="text-[#E1380A]">Dedelay's Oven</h1>
            <p className="text-md text-gray-500">
              From our oven to your plate, Dedelay's Oven delivers flavor,
              freshness, and a love for pizza in every bite. Experience the
              perfect slice, crafted just for you.
            </p>
          </div>
          <div className="w-100">
            <h1 className="text-[#E1380A]">Menu</h1>
            <div className="text-gray-500 text-md flex flex-col w-full gap-1">
              <Link href="#">Home</Link>
              <Link href="#">Menu</Link>
              <Link href="#">Blog</Link>
              <Link href="#">Contact Us</Link>
            </div>
          </div>
          <div>
            <h1 className="text-[#E1380A]">Customer Support</h1>
            <div className="text-gray-500 text-md flex flex-col w-full gap-1">
              <Link href="#">Privacy Policey</Link>
              <Link href="#">Contactus</Link>
              <Link href="#">Shipping</Link>
              <Link href="#">About Us</Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

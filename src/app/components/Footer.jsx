import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="w-full bg-gray-800 flex justify-around items-center p-5 max-md:flex-col max-md:items-start max-md:justify-normal max-md:gap-2">
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
    </>
  );
}

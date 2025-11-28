"use client";
import Cards from "@/app/components/Cards";
import React from "react";

export default function page() {
  return (
    <>
      <section className="w-full flex justify-center items-center gap-3 flex-wrap mt-5">
        <div className="w-full p-10 uppercase text-[#E1380A]">
          <h1 className="text-4xl text-start">Big Deal with Meal</h1>
        </div>
        <div className="w-full flex justify-center items-center gap-3 flex-wrap mt-5">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </section>
    </>
  );
}

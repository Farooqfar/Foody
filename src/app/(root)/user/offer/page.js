"use client";
import Cards from "@/app/components/Cards";
import React from "react";

export default function page() {
  return (
    <>
      <section className="w-full flex justify-center items-center gap-3 flex-wrap mt-5">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </section>
    </>
  );
}

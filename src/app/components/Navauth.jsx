"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
export default function Navauth() {
  const pathname = usePathname();
  return <>{!pathname.startsWith("/admin") && <Navbar />}</>;
}

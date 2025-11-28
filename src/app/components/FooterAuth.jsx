"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Footer from "./Footer";

export default function FooterAuth() {
  const pathname = usePathname();
  return <>{!pathname.startsWith("/admin") && <Footer />}</>;
}

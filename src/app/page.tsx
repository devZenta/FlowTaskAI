"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Navbar } from "@/components/Navbar";
import { Header } from "@/components/Header";
import { Features } from "@/components/Features";
import { Partners } from "@/components/Partners";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Header />
      <div className="relative">
        <Image
          src="/test.jpg"
          width={2064}
          height={1161}
          quality={100}
          alt="Dashboard Preview"
          className="w-full max-w-5xl mx-auto rounded-xl shadow-2xl mt-24"
        />
      </div>
      <Features />
      <Partners />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
}

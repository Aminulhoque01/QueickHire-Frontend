"use client";
import logo from "@/assest/logo/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeBtn, setActiveBtn] = useState("");

  return (
    <header className="w-full bg-[#F8F8FD]  border-b">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

        {/* Left Side */}
        <div className="flex gap-5 items-center">
          <Link href="/"><Image src={logo} width={152} height={36} alt="logo" /></Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="hover:text-indigo-600 transition">
              Find Jobs
            </Link>
            <Link href="#" className="hover:text-indigo-600 transition">
              Browse Companies
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <nav className="hidden md:flex items-center space-x-6 font-medium">

          {/* Login Button */}
         <Link href="/login">
           <button
            onClick={() => setActiveBtn("login")}
            className={`px-5 py-2 rounded-md transition 
              ${
                activeBtn === "login"
                  ? "bg-[#4640DE] text-white"
                  : "text-gray-600 hover:text-[#4640DE]"
              }`}
          >
            Login
          </button>
         </Link>

          {/* Sign Up Button */}
          <Link href="/register"><button
            onClick={() => setActiveBtn("signup")}
            className={`px-5 py-2 rounded-md transition 
              ${
                activeBtn === "signup"
                  ? "bg-[#4640DE] text-white"
                  : "text-gray-600   hover:text-[#4640DE]"
              }`}
          >
            Sign Up
          </button>
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1">
            <span className="block w-5 h-0.5 bg-gray-700"></span>
            <span className="block w-5 h-0.5 bg-gray-700"></span>
            <span className="block w-5 h-0.5 bg-gray-700"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-6 py-4 space-y-4 font-medium">
            <Link href="#">Find Jobs</Link>
            <Link href="#">Browse Companies</Link>
            <button
              onClick={() => setActiveBtn("login")}
              className={`px-4 py-2 rounded-md text-left ${
                activeBtn === "login"
                  ? "bg-[#4640DE] text-white"
                  : "text-gray-600"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveBtn("signup")}
              className={`px-4 py-2 rounded-md text-left ${
                activeBtn === "signup"
                  ? "bg-[#4640DE] text-white"
                  : "bg-indigo-600 text-white"
              }`}
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
"use client";

import logo from "@/assest/logo/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
 
import { User, LogOut } from "lucide-react";
import { logout } from "@/redux/features/authSlice";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <header className="w-full bg-[#F8F8FD] border-b">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

        {/* Left */}
        <Link href="/">
          <Image src={logo} width={152} height={36} alt="logo" />
        </Link>

        {/* Right */}
        <nav className="flex items-center space-x-6 font-medium">

          {user ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#4640DE] text-white"
              >
                <User size={20} />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md border z-50">
                  <Link
                    href="/pages/myApplyJobs"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    My Apply Jobs
                  </Link>

                  <button
                    onClick={() => dispatch(logout())}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500 flex items-center gap-2"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link href="/login">
                <button className="px-5 py-2 rounded-md text-gray-600 hover:text-[#4640DE]">
                  Login
                </button>
              </Link>

              <Link href="/register">
                <button className="px-5 py-2 rounded-md bg-[#4640DE] text-white">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
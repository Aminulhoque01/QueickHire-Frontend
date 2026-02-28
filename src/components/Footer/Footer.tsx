"use client";
import logo from "@/assest/logo/Logo 2.png"
import Image from "next/image";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaDribbble } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
             <Image src={logo} width={152} height={36} alt="logo" className="text-white"/>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>

          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-4">About</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">Companies</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Terms</li>
              <li className="hover:text-white cursor-pointer">Advice</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">Help Docs</li>
              <li className="hover:text-white cursor-pointer">Guide</li>
              <li className="hover:text-white cursor-pointer">Updates</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get job notifications</h3>
            <p className="text-sm text-gray-400 mb-4">
              The latest job news, articles, sent to your inbox weekly.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 text-sm rounded-l-md bg-gray-700 text-white focus:outline-none"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 text-sm text-white rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-sm text-gray-400">
            2021 © QuickHire. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <div className="w-9 h-9 bg-gray-700 hover:bg-indigo-600 transition rounded-full flex items-center justify-center cursor-pointer">
              <FaFacebookF size={14} />
            </div>
            <div className="w-9 h-9 bg-gray-700 hover:bg-indigo-600 transition rounded-full flex items-center justify-center cursor-pointer">
              <FaTwitter size={14} />
            </div>
            <div className="w-9 h-9 bg-gray-700 hover:bg-indigo-600 transition rounded-full flex items-center justify-center cursor-pointer">
              <FaLinkedinIn size={14} />
            </div>
            <div className="w-9 h-9 bg-gray-700 hover:bg-indigo-600 transition rounded-full flex items-center justify-center cursor-pointer">
              <FaDribbble size={14} />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
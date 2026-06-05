// components/Navbar.tsx

import React from "react";
import { Search, ShoppingBag, ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full bg-[#FFFCEB] border-b border-gray-200 ">
      <div className="max-w-350 mx-auto flex items-center justify-between px-8 py-5">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" className=" object-contain" />
          <div className="text-[#0096d6]">MilkSetu</div>
        </div>

        {/* Nav Links */}
        <nav className="hidden lg:flex items-center gap-10 text-[#0096d6] font-semibold uppercase text-sm tracking-wide">
          <a href="#" className=" transition">
            Home
          </a>

          <div className="flex items-center gap-1 cursor-pointer  transition">
            <span> Products</span>
          </div>

          <a href="#" className=" transition">
            Subscription
          </a>

          <a href="#" className=" transition">
            Milkman
          </a>

          <div className="flex items-center gap-1 cursor-pointer  transition">
            <span>About Us</span>
          </div>

          <a href="#" className=" transition">
            Contact
          </a>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-6 text-[#0096d6]">
          <button className="uppercase font-medium text-sm  transition">
            Login
          </button>

          <Search size={20} className="cursor-pointer  transition" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

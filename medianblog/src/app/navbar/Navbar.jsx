"use client";
import Link from "next/link";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { PiNotePencilDuotone } from "react-icons/pi";

function Navbar() {
  const [Navitem, showNavItem] = useState(false);
  const showNavbar = () => {
    showNavItem((prevState) => !prevState);
  };
  return (
    <header className="bg-gray-100 p-6 justify-between fixed top-0 md:flex w-full z-0">
      <div className="flex justify-between">
        <h2 className="text-2l font-bold">Median Blogs</h2>
        <IoIosMenu
          size={30}
          className="md:hidden transition duration-700"
          onClick={showNavbar}
        />
      </div>
      <div
        className={`mr-8 md:space-x-6 mt-3 md:mt-0 md:flex ${
          Navitem ? "block" : "hidden"
        }`}
      >
        <div className="flex md:flex cursor-pointer">
          <PiNotePencilDuotone className="mt-1" />
          <Link className="ml-0.5" href="#">
            Write
          </Link>
        </div>
        <Link className="block md:inline-block cursor-pointer" href="#">
          Services
        </Link>
      </div>
    </header>
  );
}

export default Navbar;

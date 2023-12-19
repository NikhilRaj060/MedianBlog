"use client";
import Link from "next/link";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { PiNotePencilDuotone } from "react-icons/pi";
import ToggleButton from "../darkTheme/ToggleButton";
import { Button, Avatar } from "@nextui-org/react";

function Navbar({ loginHref }) {
  const [Navitem, showNavItem] = useState(false);
  const showNavbar = () => {
    showNavItem((prevState) => !prevState);
  };
  const isLoggedIn = true;
  return (
    <>
      <header className="bg-gray-100 dark:bg-black p-5 justify-between fixed top-0 md:flex w-full z-0 box-border h-16">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">Median Blog</h2>
          <div className="flex justify-between">
            <div className="md:hidden block mr-4">
              <ToggleButton />
            </div>

            <div>
              {isLoggedIn ? (
                <Link href={loginHref} className="block md:hidden mt-0.5 mr-4">
                    Login
                </Link>
              ) : (
                <Avatar
                  className="w-7 h-7 text-tiny mr-4 block md:hidden mt-0.5"
                  isBordered
                  color="default"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
              )}
            </div>

            <IoIosMenu
              size={30}
              className="md:hidden transition duration-700"
              onClick={showNavbar}
            />
          </div>
        </div>

        <div className="mr-8 md:space-x-6 mt-3 md:mt-0 md:flex">
          <div className="hidden md:block">
            <ToggleButton />
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

            <div>
              {isLoggedIn ? (
                <Link href={loginHref} className=" hidden md:block cursor-pointer">
                    Login
                </Link>
              ) : (
                <Avatar
                  className="w-7 h-7 text-tiny hidden md:block cursor-pointer"
                  isBordered
                  color="default"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;

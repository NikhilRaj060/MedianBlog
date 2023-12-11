"use client";
import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FiSun, FiMoon } from "react-icons/fi";

function ToggleButton() {
  const { theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
      {currentTheme === "dark" ? (
        <button
          className="bg-gray-100 p-1 rounded-full dark:bg-[#ef8253]"
          onClick={() => setTheme("light")}
        >
          {" "}
          <FiSun
            alt="logo"
            height={10}
            width={10}
            className="dark:text-white"
          />
        </button>
      ) : (
        <button
          className="bg-gray-300 p-1 rounded-full dark:bg-[#ef8253]"
          onClick={() => setTheme("dark")}
        >
          {" "}
          <FiMoon alt="logo" height={10} width={10} />
        </button>
      )}
    </div>
  );
}

export default ToggleButton;

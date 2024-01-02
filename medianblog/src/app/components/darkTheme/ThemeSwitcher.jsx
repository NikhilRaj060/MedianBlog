"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

function ToggleButton() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null
 
  return (
    <div className="mt-0 md:-mt-1">
      {currentTheme === "dark" ? (
        <button
          className="bg-gray-100 p-2 rounded-full dark:bg-[#ef8253]"
          onClick={() => setTheme("light")}
        >
          <FiSun alt="logo" height={30} width={30}className="dark:text-white" />
        </button>
      ) : (
        <button
          className="bg-gray-300 p-2 rounded-full dark:bg-[#ef8253]"
          onClick={() => setTheme("dark")}
        >
          <FiMoon alt="logo" height={10} width={10} />
        </button>
      )}
    </div>
  );
}

export default ToggleButton;

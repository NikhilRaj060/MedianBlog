"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
import { Button } from "@nextui-org/react";

function ToggleButton() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null
 
  return (
    <>
      {currentTheme === "dark" ? (
        <Button isIconOnly
          className="bg-gray-100 rounded-full dark:bg-[#ef8253]"
          onClick={() => setTheme("light")}>
          <FiSun alt="logo" height={30} width={30}className="dark:text-white" />
        </Button>
      ) : (
        <Button isIconOnly
          className="bg-gray-300 rounded-full dark:bg-[#ef8253]"
          onClick={() => setTheme("dark")}>
          <FiMoon alt="logo" height={10} width={10} />
        </Button>
      )}
    </>
  );
}

export default ToggleButton;

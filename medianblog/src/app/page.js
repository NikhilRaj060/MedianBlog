"use client";
import Main from "./pages/Main";
import Navbar from "./navbar/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "./footer/Footer";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <ThemeProvider enableSystem={false} attribute="class">
        <Navbar />
        <Main></Main>
        <Footer />
      </ThemeProvider>
    </NextUIProvider>
  );
}

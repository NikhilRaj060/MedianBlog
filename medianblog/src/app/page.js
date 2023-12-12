"use client";
import Main from "./pages/Main";
import Navbar from "./navbar/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "./footer/Footer";

export default function Home() {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>
    </ThemeProvider>
  );
}

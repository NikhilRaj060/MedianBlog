import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers/Provider";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-in"});

const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-mr"});

export const metadata = {
  title: "Median Blog",
  description: "Website for blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} font-in`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Median Blog",
  description: "Website for blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

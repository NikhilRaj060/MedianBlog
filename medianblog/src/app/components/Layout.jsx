import { ThemeProvider } from "next-themes";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import { NextUIProvider } from "@nextui-org/react";

const Layout = ({ children }) => {
  // Set the href for the login link
  const loginHref = "auth/login";
  return (
    <>
      <NextUIProvider>
        <ThemeProvider enableSystem={false} attribute="class">
          <Navbar loginHref={loginHref}/>
          <div className="container mx-auto mt-16 p-4">{children}</div>
          <Footer />
        </ThemeProvider>
      </NextUIProvider>
    </>
  );
};

export default Layout;

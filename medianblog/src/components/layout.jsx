import { ThemeProvider } from "next-themes";
import Footer from "./footer/Footer";
import { NextUIProvider } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import Header from "./navbar/Header";

const Layout = ({ children }) => {
  // Set the href for the login link
  const router = useRouter();
  const pathName = usePathname();

  // Use router to construct the correct relative path
  const loginHref = `${pathName}/auth/login`;
  // const pathName = usePathname();

  //for rendering main containt div
  // let mainMiddleDiv;
  // if(pathName.includes("/login")){
  //   mainMiddleDiv = <div className="mx-auto max-w-screen-md md:w-full border-solid border-2 border-red-700">{children}</div>;
  // }else{
  //   mainMiddleDiv = <div className="mx-auto max-w-screen-md md:w-full border-solid border-2 border-black">{children}</div>;
  // }





  return (
    <>
        <ThemeProvider enableSystem={false} attribute="class">
          <Header loginHref={loginHref}/>
          <div className="container">
             {children}
          </div>
          <Footer />
        </ThemeProvider>
    </>
  );
};

export default Layout;

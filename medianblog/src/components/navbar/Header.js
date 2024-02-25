import Link from "next/link";
import { useState } from "react";
import { PiNotePencilDuotone } from "react-icons/pi";
import ThemeSwitcher from "../darkTheme/ThemeSwitcher";
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import React from "react";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link as NextUiLink,  Button} from "@nextui-org/react";


function Header({ loginHref }) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Write",
    "Dashboard",
    "Settings",
    "Help & Feedback",
  ];
  const isLoggedIn = true;

  return (
    <>
      
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit"><Link href={"/"}>Median Blog</Link></p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit"><Link href={"/"}>Median Blog</Link></p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href={loginHref}>
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem  className="hidden align-middle lg:flex">
          <PiNotePencilDuotone className="mr-1 m-auto" />
          <Link href={true?"/blog/write":"/auth/login"}>Write</Link>
        </NavbarItem>
        <NavbarItem>
            <ThemeSwitcher/> {/** Theme switcher Dark and Light Theme*/}
        </NavbarItem>

       {true?
        <NavbarItem>
          <Button as={Link} color="warning" href="/auth/login" variant="flat">
            Login
          </Button>
        </NavbarItem>
      :
      <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="gradient"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">Log Out</DropdownItem>
          </DropdownMenu>
        </Dropdown>}

      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <NextUiLink
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              size="lg" >

              {index === 0 ?<PiNotePencilDuotone className="mr-2" />: ""}
              <Link href={"/auth/login"}>{item}</Link>
            
            </NextUiLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>


    </>
  );
}

export default Header;

"use client";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Contact, CreditCard, Home, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.png";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="border-b-2">
      <div className="w-[95%] md:w-[90%] lg:w-[70%] mx-auto flex justify-between my-4">
        <Link href={"/"}>
          <Image src={Logo} width={150} height={100} alt="" />
        </Link>
        <div className="flex gap-4">
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel className="text-[#D65A31] text-center">
                Welcome to my blog
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <Link href="/">
                  <DropdownMenuItem>
                    <Home className="mr-2 h-4 w-4" />
                    <span>Home</span>
                    <DropdownMenuShortcut>⌘H</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </Link>
                <Link href="/all-blogs">
                  <DropdownMenuItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>All Blogs</span>
                    <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup className="flex justify-between">
                <Link href="https://aritra.design/" target="_blank">
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>About</span>
                  </DropdownMenuItem>
                </Link>
                <Link href="/contact">
                  <DropdownMenuItem>
                    <Contact className="mr-2 h-4 w-4" />
                    <span>Contact</span>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

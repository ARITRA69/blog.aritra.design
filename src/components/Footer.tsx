import { Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="border-t-2 w-full">
      <div className="w-[95%] md:w-[90%] lg:w-[70%] mx-auto h-full flex items-center justify-between my-0 md:my-12">
        <h1>
          Thanks for <span className="text-[#ee552d]">coming!</span>
        </h1>
        <ul className="flex gap-4">
          <li className="hover:text-[#ee552d]">
            <Link href="https://www.instagram.com/" target="_blank">
              <Instagram />
            </Link>
          </li>
          <li className="hover:text-[#ee552d]">
            <Link href="https://twitter.com/ARITRA81999" target="_blank">
              <Twitter />
            </Link>
          </li>
          <li className="hover:text-[#ee552d]">
            <Link
              href="https://www.linkedin.com/in/aritrasarkar-tech/"
              target="_blank"
            >
              <Linkedin />
            </Link>
          </li>
        </ul>
      </div>
      <div className="border-t-2 flex justify-end text-xs">
        Copyright 2023 © Aritra Sarkar
      </div>
    </div>
  );
};

export default Footer;

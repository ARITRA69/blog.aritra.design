import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="w-[95%] md:w-[90%] lg:w-[70%] mx-auto flex flex-col items-center justify-center min-h-screen">
      <div className="text-3xl mb-6">Coming Soon</div>
      <Link href="/">
        <Button>Back to home</Button>
      </Link>
    </div>
  );
};

export default Contact;

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className=" min-h-[80vh] flex flex-col justify-center items-center">
      <h1 className="text-[80px] font-extrabold tracking-wider">404 ERROR</h1>
      <h5 className="p-8">Page Not Found</h5>
      <Link href="/">
        <Button>Back to home</Button>
      </Link>
    </div>
  );
};

export default NotFound;

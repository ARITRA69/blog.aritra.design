"use client";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { db } from "@/db/firebase-config";
import {
  getDocs,
  collection,
  DocumentData,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Blog } from "../../types";
import moment from "moment";
import { Mail, MoveUpRightIcon } from "lucide-react";

export default function Home() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  const blogsCollectionRef = collection(db, "blogs");

  useEffect(() => {
    setLoading(true);
    const getblogs = async () => {
      try {
        const data = await getDocs(blogsCollectionRef);

        const filteredData = data.docs.map(
          (doc: QueryDocumentSnapshot<DocumentData>) => ({
            ...doc.data(),
            id: doc.id,
          })
        ) as Blog[];
        setBlogs(filteredData);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    getblogs();
  }, [0]);

  return (
    <div className="min-h-screen w-[95%] md:w-[90%] lg:w-[70%] mx-auto md:pb-16">
      <div className="pt-32 flex flex-col gap-10 justify-between">
        <div className="flex justify-start items-center flex-shrink-0 text-[40px]">
          <div>Hi, I&apos;m&nbsp;</div>
          <div className="font-bold text-[#D65A31]">Aritra</div>
        </div>
        <div className="text-[20px] w-full">
          Frontend Developer & Web Designer,
          <span className="opacity-50">
            &nbsp;this is where I share my programming and design.
          </span>
        </div>
        <div className="flex gap-6 text-[20px] text-[#D65A31] font-medium">
          <Link href="https://aritra.design/" target="_blank">
            <button className="px-2 md:px-6 py-1 md:py-3 flex gap-2 justify-center items-center border-[#393E46] hover:shadow-lg border-2 rounded-lg hover:-translate-y-1 duration-300">
              <span className="text-xs md:text-sm">About Me</span>
              <MoveUpRightIcon />
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-2 md:px-6 py-1 md:py-3 flex gap-2 justify-center items-center border-[#393E46] hover:shadow-lg border-2 rounded-lg hover:-translate-y-1 duration-300">
              <span className="text-xs md:text-sm">Contact</span>
              <Mail />
            </button>
          </Link>
        </div>
      </div>
      <>
        {!loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 sm:mt-16 w-full justify-items-center gap-y-10">
            {blogs.map((data) => (
              <Card
                className="border-none w-[309px] md:w-[355px] md:h-[262px] my-9 shadow-none"
                key={data.id}
              >
                <Link href={`/blog-details/${data.id}`}>
                  <Image
                    src={data.image}
                    width={300}
                    height={300}
                    alt=""
                    className="rounded-lg w-[309px] md:w-[355px] hover:-translate-y-3 transition-all duration-300"
                  />
                </Link>
                <p className="text-sm opacity-75 mt-1">
                  {moment(data.date.toDate().toString()).format("MMM DD, YYYY")}
                </p>
                <div className="my-3">
                  <CardTitle className="mb-1">
                    <Link href={`/blog-details/${data.id}`}>
                      <h1 className="text-xl hover:underline">{data.title}</h1>
                    </Link>
                  </CardTitle>
                  <CardDescription className="flex justify-center text-xs">
                    {data.desc}
                  </CardDescription>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <Image
              src="https://media.tenor.com/7NX24XoJX0MAAAAC/loading-fast.gif"
              width={340}
              height={340}
              alt=""
            />
          </div>
        )}
      </>
    </div>
  );
}

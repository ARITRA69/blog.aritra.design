"use client";
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "@/db/firebase-config";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Blog } from "../../../../types";
import { Github, Globe, MoveLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AuthorLogo from "../../../../public/authorLogo.png";
import moment from "moment";

const BlogDetails = () => {
  const path: any = useParams();
  const router: any = useRouter();
  console.log("bruh------", path._id);

  const [blog, setBlog] = useState<Blog>();
  const [loading, setLoading] = useState<Boolean>(true);

  const blogsCollectionRef: any = collection(db, "blogs");

  useEffect(() => {
    setLoading(true);
    const getblogs = async () => {
      try {
        const singleBLogRef: any = doc(blogsCollectionRef, path._id);
        const dataSnap: any = await getDoc(singleBLogRef);
        console.log("nigaa------>", dataSnap);
        if (dataSnap.exists()) {
          setBlog(dataSnap.data());
          setLoading(false);
        } else {
          router.push("/not-found");
        }
      } catch (err) {
        console.log(err);
      }
    };

    getblogs();
  }, []);

  return (
    <div className="min-h-screen w-[95%] md:w-[90%] lg:w-[70%] mx-auto">
      <Link href="/" className="flex items-center gap-2 hover:underline my-6">
        <MoveLeft /> <h5>Home</h5>
      </Link>
      <>
        {!loading ? (
          <>
            <h1 className="text-3xl font-semibold tracking-wider mt-4">
              {blog?.title}
            </h1>
            <div className="mb-4 mt-2 flex gap-2 items-center">
              <Image
                src={AuthorLogo}
                height={17}
                width={17}
                alt="author logo"
              />
              <p className="text-md opacity-70">{blog?.author}</p>
              <p className="text-xs opacity-75 ml-4">
                {moment(blog?.date.toDate().toString()).format("MMM DD, YYYY")}
              </p>
            </div>
            <p className="text-sm sm:text-lg my-4">{blog?.desc}</p>
            <div className="flex items-center gap-6">
              <Link href={blog?.liveDemo || ""} target="_blank">
                <button className="px-2 md:px-6 py-1 md:py-3 flex gap-2 justify-center items-center border-[#393E46] hover:shadow-lg border-2 rounded-lg hover:-translate-y-1 duration-300 hover:text-[#D65A31] ">
                  <span className="text-sm sm:text-md">Live Demo</span>
                  <Globe />
                </button>
              </Link>
              <Link href={blog?.sourceCode || ""} target="_blank">
                <button className="px-2 md:px-6 py-1 md:py-3 flex gap-2 justify-center items-center border-[#393E46] hover:shadow-lg border-2 rounded-lg hover:-translate-y-1 duration-300 hover:text-[#D65A31]">
                  <span className="text-sm sm:text-md">Source Code</span>
                  <Github />
                </button>
              </Link>
            </div>
            <div className="w-full flex justify-center mt-6 rounded-lg p-4 border-2">
              <video
                src={blog?.video}
                muted
                autoPlay
                loop
                className="rounded-lg object-cover aspect-video h-auto w-full max-w-[900px]"
              ></video>
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center">
            <Image
              src="https://media.tenor.com/7NX24XoJX0MAAAAC/loading-fast.gif"
              width={340}
              height={340}
              alt="loading gif"
            />
          </div>
        )}
      </>
    </div>
  );
};

export default BlogDetails;

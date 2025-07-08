import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 md:pt-14">
      <div>
        <Image
          src={assets.my_pic}
          alt="my-profile-image"
          className="rounded-full w-32"
        />
      </div>
      <h3 className="flex items-center gap-2 text-xl md:text-3xl mb-2 text-gray-700">
        Hi! I am Vijay Pratap Singh Jadon{" "}
        <Image src={assets.hand_icon} alt="hi-icon" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-5xl lg:text-5xl text-gray-800">
        Full Stack Developer
      </h1>
      <p className="max-w-2xl mx-auto">
        Driven and detail-oriented Full Stack Developer committed to building
        scalable, user-centric web experiences. Enthusiastic about solving
        complex challenges through elegant, high-performance solutions.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <Link
          href={"#contact"}
          className="px-10 py-2 border rounded-full bg-black text-white flex items-center gap-2"
        >
          Contact Me
          <Image
            src={assets.right_arrow_bold_dark}
            alt="hi-icon"
            className="w-4"
          />
        </Link>
        <Link
          download
          href={"/Vijay Pratap Singh Jadon - Resume.pdf"}
          className="px-10 py-2 border rounded-full border-gray-300 flex items-center gap-2"
        >
          My Resume
          <Image src={assets.download_icon} alt="hi-icon" className="w-4" />
        </Link>
      </div>
    </div>
  );
};

export default Header;

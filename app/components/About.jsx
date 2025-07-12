import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full flex flex-col items-center px-[12%] py-10 scroll-mt-12"
    >
      <h4 className="text-center mb-2 text-lg">Introduction</h4>
      <p className="text-center text-5xl">About Me</p>
      <div className="flex max-w-4xl flex-col lg:flex-row items-center gap-18 my-18">
        <div className="w-64 sm:w-70 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            className="w-full rounded-4xl"
            alt="user-image"
          />
        </div>
        <div className="flex-1">
          <p className="font-light text-gray-600">
            I'm a passionate <span className="font-semibold text-black">Full Stack Developer</span> with a knack for crafting
            scalable and user-friendly web applications. I graduated in 2024
            with a Bachelor of Science from Jiwaji University, Gwalior, and
            honed my development skills through a comprehensive one-year
            full-stack program focused on the <span className="font-semibold text-black">MERN stack</span> at Coding Ninjas. My
            approach blends clean, <span className="font-semibold text-black">responsive UI design</span> with robust <span className="font-semibold text-black">backend
            logic</span>, all driven by modern development practices and a curiosity
            for solving meaningful technical challenges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

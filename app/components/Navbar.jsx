import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const Navbar = () => {
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-12rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  return (
    <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50  bg-gradient-to-r from-gray-50 to-gray-100 backdrop-blur-sm ">
      <a href="#top" className="flex items-center gap-4">
        {/* <Image src={assets.my_pic} alt="" className="w-10 rounded-full" /> */}
        <h1 className="text-3xl font-bold text-gray-700">
          Vijay<span className="text-red-600">.</span>dev
        </h1>
        {/* <Image src={assets.logo} className="w-28 cursor-pointer mr-14"/> */}
      </a>

      <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-100">
        <li>
          <Link
            href="#top"
            className="inline-block hover:text-purple-700 hover:scale-105 transition-all duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#about"
            className="inline-block hover:text-purple-700 hover:scale-105 transition-all duration-300"
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            href="#projects"
            className="inline-block hover:text-purple-700 hover:scale-105 transition-all duration-300"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="#skills"
            className="inline-block hover:text-purple-700 hover:scale-105 transition-all duration-300"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className="inline-block hover:text-purple-700 hover:scale-105  transition-all duration-300"
          >
            Contact Me
          </Link>
        </li>
      </ul>

      <div className="flex items-center lg:gap-4">
        <button>
          <Image
            src={assets.moon_icon}
            className="w-5 font-bold cursor-pointer"
            alt="moon-icon"
          />
        </button>
        <Link
          href="#contact"
          className="hidden lg:flex items-center gap-3 px-6 py-1.5 border border-gray-300 rounded-full ml-4"
        >
          Contact{" "}
          <Image src={assets.arrow_icon} className="w-3" alt="arrow_icon" />{" "}
        </Link>

        <button className="block md:hidden ml-6">
          <Image
            onClick={openMenu}
            src={assets.menu_black}
            className="w-6 cursor-pointer"
            alt="mobile-menu"
          />
        </button>
      </div>

      {/* Below is the mobile menu view */}
      <ul
        ref={sideMenuRef}
        className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-50 top-0 bottom-0 w-50 z-50 h-screen bg-gradient-to-b from-purple-100 to-pink-50 transition-all duration-500"
      >
        <div className="absolute top-6 right-6">
          <Image
            onClick={closeMenu}
            src={assets.close_black}
            className="w-5 cursor-pointer"
            alt="cross-icon"
          />
        </div>
        <li>
          <Link href="#top" onClick={closeMenu} className="">
            Home
          </Link>
        </li>
        <li>
          <Link href="#about" onClick={closeMenu} className="">
            About Me
          </Link>
        </li>
        <li>
          <Link href="#projects" onClick={closeMenu} className="">
            Projects
          </Link>
        </li>
        <li>
          <Link href="#skills" onClick={closeMenu} className="">
            Skills
          </Link>
        </li>
        <li>
          <Link href="#contact" onClick={closeMenu} className="">
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

// const skills = [
//     {icon}
// ]

const Skills = () => {
  return (
    <div id="skills" className="border">
          <p className="text-center text-5xl">Skills</p>
          <div>
              <Image src={assets.javascript} className="w-6 rounded-sm"/>
          </div>
    </div>
  );
};

export default Skills;

import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Logo from "/src/assets/logo.png"

export default function Navbar() {
  return (
    <div className=" flex items-center justify-between ">
      <div className="flex flex-shrink-0 items-center">
        <img
          src={Logo}
          alt="img"
          style={{mixBlendMode: "saturation"}}
          className=" w-44 "
        />
      </div>
      

      <div className="m-8 flex items-center justify-center gap-8 text-3xl text-white">
       <a href="https://www.linkedin.com/in/rohan-wadhwa-0446a4226/"><CiLinkedin /></a> 
        <a href="https://github.com/rohanwadhwa11"><FaGithub /></a>
        <a href="mailto:rohanwadhwa913@gmail.com"><CiMail /></a>
      </div>
    </div>
  );
}

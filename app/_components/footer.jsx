"use client";
import React, { useRef } from "react";
import {
  Github,
  Instagram,
  Twitter,
  Mail,
  Linkedin,
  MoveDown,
  ArrowBigDownDash,
  FileDown,
} from "lucide-react";
import { Mate_SC } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { useMotionValue, motion } from "framer-motion";
import { MoveUp } from "lucide-react";
import { downloadResume } from "../_utils/helper";

const mate_sc = Mate_SC({ subsets: ["latin"], weight: ["400"] });
const Footer = () => {
  const containerRef = useRef(null);
  const timerRef = useRef(null);
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
    opacity: useMotionValue(0),
  };
  const handleMouseMove = (e) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    const offsetX = e.clientX - containerRect.left - 50;
    const offsetY = e.clientY - containerRect.top - 50;

    mouse.x.set(offsetX);
    mouse.y.set(offsetY);
    mouse.opacity.set(0.2);

    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      mouse.opacity.set(0);
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="footer"
      onMouseMove={handleMouseMove}
      ref={containerRef}
      className="h-[85vh] md:h-[90vh] overflow-hidden mx-3 md:mx-7 relative flex flex-col items-center mt-[100px] p-7 md:p-10 bg-gradient-to-b from-[#0a0a0a] via-[--primary-bg] to-[--primary-bg] rounded-t-3xl border border-b-0 border-[--border-color]"
    >
      <div className="w-full md:max-w-[1140px] 2xl:max-w-[1280px]">
        <div className="flex flex-col-reverse md:flex-row justify-between gap-7">
          <div className="flex flex-col gap-7 justify-between">
            <div className="text-center md:text-start text-base md:text-lg">
              <div>
                {" "}
                Designed & Developed with 💖 by Dwarkesh Gohel (<u>@gohelboy</u>
                ){" "}
              </div>
              <div className="hidden md:block"> All rights reseved ~ 2024</div>
            </div>
            <div
              className={`${mate_sc.className} text-center md:text-start text-5xl md:text-7xl`}
            >
              {" "}
              Thank You
              <span className="text-[--accent-color] animate-ping">.</span>{" "}
            </div>
          </div>
          <div className="flex gap-10 font-bold text-lg">
            <div className="flex flex-col gap-5">
              <div className="text-xl border-b-2">Social</div>
              <div className="flex text-base md:text-xl flex-col gap-1.5 md:gap-3 text-[--text-color-2]">
                <Link
                  href={"mailto:dwarkeshgohel1@gmail.com"}
                  className="flex items-center gap-1 hover:text-[--secondary-bg] cursor-pointer transition-colors"
                >
                  <Mail className="w-[20px] md:w-auto" />
                  <span>Email</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/dwarkeshgohel/"
                  className="flex items-center gap-1 hover:text-[--secondary-bg] cursor-pointer transition-colors"
                >
                  <Linkedin className="w-[20px] md:w-auto" />
                  <span>Linkedin</span>
                </Link>
                <Link
                  href="https://twitter.com/gohelboy"
                  className="flex items-center gap-1 hover:text-[--secondary-bg] cursor-pointer transition-colors"
                >
                  <Twitter className="w-[20px] md:w-auto" />
                  <span>Twitter</span>
                </Link>
                <Link
                  href="https://github.com/gohelboy"
                  className="flex items-center gap-1 hover:text-[--secondary-bg] cursor-pointer transition-colors"
                >
                  <Github className="w-[20px] md:w-auto" />
                  <span>Github</span>
                </Link>
                <Link
                  href="https://www.instagram.com/gohelboy/"
                  className="flex items-center gap-1 hover:text-[--secondary-bg] cursor-pointer transition-colors"
                >
                  <Instagram className="w-[20px] md:w-auto" />
                  <span>Instagram</span>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="text-xl border-b-2">Explore </div>
              <div className="text-base md:text-xl flex flex-col gap-1.5 md:gap-3  text-[--text-color-2]">
                <Link
                  href={"#about"}
                  className="hover:text-[--secondary-bg] cursor-pointer transition-colors "
                >
                  About
                </Link>
                <Link
                  href={"#skills"}
                  className="hover:text-[--secondary-bg] cursor-pointer transition-colors "
                >
                  Skills
                </Link>
                <Link
                  href={"#projects"}
                  className="hover:text-[--secondary-bg] cursor-pointer transition-colors "
                >
                  Projects
                </Link>
                <Link
                  href={"#contact"}
                  className="hover:text-[--secondary-bg] cursor-pointer transition-colors "
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse gap-5 items-center md:items-start ">
              <button
                onClick={scrollToTop}
                className="rounded-2xl p-4 border border-[--border-color] h-fit active:scale-95 transition-all"
              >
                <MoveUp />
              </button>
              <button
                onClick={downloadResume}
                className="rounded-2xl p-4 flex items-center justify-center border border-[--border-color] h-fit active:scale-95 transition-all"
              >
                <FileDown />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <div className="absolute top-0 right-0 opacity-10 animate-cloudmoveleft">
          <img src={"/cloud1.svg"} alt="cloud" width={100} height={100} />
        </div>
        <div className="absolute top-[200px] left-0 animate-cloudmoveright opacity-10">
          <img src={"/cloud1.svg"} alt="cloud" width={150} height={150} />
        </div>
        <div className="absolute top-0 left-0 opacity-20">
          <img
            src={"/blob.svg"}
            alt="cloud"
            width={400}
            height={400}
            className="animate-spin1"
          />
        </div>
        <motion.div
          style={{
            x: mouse.x,
            y: mouse.y,
            opacity: mouse.opacity,
            transition: "all 0.3s linear",
          }}
          className={"absolute top-0 left-0 "}
        >
          <img src={"/cloud1.svg"} alt="cloud" width={100} height={100} />
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="scale-x-[-1]"
          opacity={0.05}
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;

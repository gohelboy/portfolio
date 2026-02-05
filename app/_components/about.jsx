"use client";
import { motion } from "framer-motion";
import { Judson, Mate_SC } from "next/font/google";
import Image from "next/image";
import { IconStar } from "./icons";
import { useEffect, useState } from "react";
const judson = Judson({ subsets: ["latin"], weight: ["400", "700"] });
const mate_sc = Mate_SC({ subsets: ["latin"], weight: ["400"] });

const About = () => {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const greetings = [
    "તમે કેમ છો?",
    "आप कैसे हैं?",
    "How are you?",
    "¿Cómo estás?",
    "こんにちは",
    "Как дела?",
    "你好吗？",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      id="about"
      className={`h-fit flex flex-col gap-3 items-center justify-center mx-[18px] py-[120px] ${judson.className}`}
    >
      <h1 className="sr-only">
        About Dwarkesh Gohel - Full Stack Developer and Designer
      </h1>
      <motion.div className="w-full md:max-w-[1140px] 2xl:max-w-[1280px] border border-[--border-color] relative rounded-3xl p-7">
        <motion.div
          key={greetings[greetingIndex]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl absolute left-[30px] top-[-30px] bg-[--primary-bg]"
        >
          {greetings[greetingIndex]}
        </motion.div>
        <div className="flex flex-col gap-7 md:flex-row justify-between">
          <div className="h-full flex justify-between">
            <div className="">
              <div className="text-lg">My name is</div>
              <div
                className={`${mate_sc.className} text-6xl md:text-9xl relative group`}
              >
                <div>Dwarkesh</div>
                <div className="flex items-center md:items-center">
                  G
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 1 }}
                  >
                    <img
                      className="overflow-hidden w-[40px] md:w-[90px] mt-1 md:mt-4 border filter grayscale group-hover:grayscale-0 transition-all rounded-full"
                      src={"/np.png"}
                      alt="me"
                      width={100}
                      height={100}
                    />
                  </motion.span>{" "}
                  hel
                </div>
                <div
                  className={
                    "absolute top-5 md:top-10 right-5 opacity-0 transition-all duration-300 delay-100 group-hover:opacity-100 group-hover:top-0 group-hover:md:top-[15px] group-hover:right-[10px]"
                  }
                >
                  <IconStar className={"size-3"} />
                </div>
                <div className="absolute top-0 md:top-[15px] right-[-20px] opacity-100 rotate-0 transition-all duration-300 group-hover:rotate-90">
                  <IconStar className="size-5 md:size-6" />
                </div>
                <div
                  className={
                    "absolute top-7 md:top-16 right-5 opacity-0 transition-all duration-300 delay-100 group-hover:opacity-100 group-hover:top-7 group-hover:md:top-11 group-hover:-right-5"
                  }
                >
                  <IconStar className={"size-3"} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end justify-between">
            <div className="text-lg max-w-[400px]">
              AKA <u>Gohelboy</u>, I am a Web Developer, Web Designer, Graphic
              Designer, Game developer
              <br />
              <br />
              Always Passionate about creating something amazing.
            </div>
            <motion.div
              initial={{ scale: 1 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer"
            >
              <img src={"/indiadots.svg"} width={56} height={56} alt="india" />
              <span className={`${mate_sc.className} text-lg`}>India</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <div className="w-full md:max-w-[1140px] 2xl:max-w-[1280px] border border-[--border-color] relative rounded-3xl p-7">
        <div className="flex flex-col md:flex-row gap-7 justify-between">
          <p className="max-w-[700px] first-letter:text-7xl">
            I work as a web developer, designer, and graphic artist, and I also
            enjoy creating games. Most of my time is spent coding, designing,
            and developing scenes. When I see something interesting, I often
            think about how I could make it myself. I then dive into the process
            of learning and improving my skills, both in terms of technology and
            how I see the world.
            <br />
            <br />
            Creating things is something I truly love. There&apos;s a special
            feeling when you create something great that others can use and
            appreciate. I have lots of ideas that I want to execute and bring to
            life using my skills, which keeps me motivated to contribute
            positively to the fields of technology and design.
            <br />
            <br />
            <span className="inline-flex items-center justify-center gap-2">
              <svg
                width="10"
                height="10"
                fill="green"
                className="animate-pulse"
              >
                <ellipse cx="5" cy="5" rx="5" ry="5"></ellipse>
              </svg>
              Available for work
            </span>
          </p>
          <div className="flex flex-col gap-5 items-end">
            <div className="flex flex-col items-end">
              <div className="text-5xl">Education</div>
              <div className="mt-5 text-lg flex flex-col items-end">
                <div>MCA ~ Master of Computer Science</div>
                <div className="flex items-center gap-1 text-base">
                  GTU
                  <svg width="6" height="6" fill="#ffffffaa">
                    <ellipse cx="3" cy="3" rx="3" ry="3"></ellipse>
                  </svg>
                  2023
                </div>
              </div>
              <div className="text-lg mt-3 flex flex-col items-end">
                <div>BCA ~ Bachelor of Computer Science</div>
                <div className="flex items-center gap-1 text-base">
                  BKNMU
                  <svg width="6" height="6" fill="#ffffffaa">
                    <ellipse cx="3" cy="3" rx="3" ry="3"></ellipse>
                  </svg>
                  2021
                </div>
              </div>
            </div>
            <motion.div
              initial={{ scale: 1 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer"
            >
              <img src={"/gujarat.svg"} width={56} height={56} alt="india" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

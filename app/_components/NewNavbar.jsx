"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronsLeft, FileDown } from "lucide-react";
import { Mate_SC } from "next/font/google";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cn, downloadResume } from "../_utils/helper";

const mate_sc = Mate_SC({ subsets: ["latin"], weight: ["400"] });

const NewNavbar = () => {
  const navRef = useRef(null);
  const menuRef = useRef(null);
  function getCurrentTime() {
    const now = new Date();
    const options = {
      timeZone: "Asia/Kolkata",
      hour12: true,
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
    };
    const indianTime = now.toLocaleString("en-US", options);
    const [time, ampm] = indianTime.split(" ");

    return {
      hours: parseInt(time.split(":")[0]),
      minutes: time.split(":")[1],
      seconds: time.split(":")[2],
      ampm: ampm.toLowerCase(),
    };
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState({
    hours: "",
    minutes: "",
    seconds: "",
    ampm: "",
  });
  const [hoverOnClose, setHoverOnClose] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !navRef.current?.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const controlMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { title: "About", link: "#about" },
    { title: "Skills", link: "#skills" },
    { title: "Project", link: "#projects" },
    { title: "Contact", link: "#contact" },
  ];

  return (
    <nav
      className={`${mate_sc.className} px-4 md:px-0 fixed top-7 left-1/2 transform -translate-x-1/2  w-full z-[10] flex items-center justify-center backdrop-blur-sm`}
    >
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ height: 0, width: 0, top: 0 }}
            animate={{
              height: isMenuOpen ? "auto" : "60px",
              width: isMenuOpen
                ? "96%"
                : navRef.current?.offsetWidth - 10 + "px",
              top: isMenuOpen ? "-14px" : 0,
            }}
            exit={{
              height: "60px",
              width: navRef.current?.offsetWidth - 10 + "px",
              top: 0,
              opacity: 1,
            }}
            className="fixed mt-[2px] w-full h-full rounded-2xl bg-[--secondary-bg] overflow-hidden"
          >
            <div className="p-5 md:p-9 flex flex-col md:flex-row gap-7 w-full justify-between text-[--text-color-3]">
              <div className="flex flex-col items-cetner justify-center mt-16 md:mt-14 ">
                {navLinks?.map((link, i) => {
                  return (
                    <Link
                      href={link?.link}
                      key={i}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <motion.div
                        whileHover={{
                          x: 7,
                          opacity: 1,
                          borderBottom: "5px solid #A4161A",
                        }}
                        className="text-[2rem] md:text-[4rem] h-[40px] md:h-[96px] w-[400px] relative cursor-pointer font-bold hover:text-[--accent-color] filter transition-color overflow-y-hidden"
                      >
                        <motion.span
                          key={i}
                          initial={{ y: "-100px", opacity: 0.5 }}
                          animate={{
                            y: isMenuOpen ? "0px" : "-100px",
                            opacity: isMenuOpen ? 1 : 0.5,
                          }}
                          transition={{
                            delay: isMenuOpen ? 0.16 * i : 0,
                            duration: 0.5,
                            x: { delay: 0 },
                          }}
                          className="absolute top-0 flex flex-col "
                        >
                          {link.title}
                          <div className="opacity-20">{link?.title}</div>
                        </motion.span>
                      </motion.div>
                    </Link>
                  );
                })}
              </div>

              <div className="flex flex-col justify-between items-end">
                <motion.div
                  initial={{ x: "100px", opacity: 0 }}
                  animate={{
                    x: isMenuOpen ? 0 : "100px",
                    opacity: isMenuOpen ? 1 : 0,
                  }}
                  transition={{ delay: isMenuOpen ? 0.7 : 0 }}
                  onMouseEnter={() => setHoverOnClose(true)}
                  onMouseLeave={() => setHoverOnClose(false)}
                  className="overflow-hidden"
                >
                  <button
                    className="overflow-hidden hidden md:flex mt-0 md:mt-10 relative flex-col items-center justify-center md:bg-[--secondary-bg] md:hover:bg-[--hover-button] text-[--button-text] p-0 md:px-5 py-2 rounded-md font-bold"
                    onClick={controlMenu}
                  >
                    <div className="relative">
                      <motion.div
                        initial={{ x: 0, opacity: 1 }}
                        animate={
                          hoverOnClose
                            ? { x: -70, opacity: 0 }
                            : { x: 0, opacity: 1 }
                        }
                        onTap={{ x: -70, opacity: 0 }}
                        className="rotate-90 md:rotate-0"
                      >
                        <ChevronsLeft
                          size={48}
                          className="rotate-90 md:rotate-0"
                        />
                      </motion.div>
                      <div className="absolute top-0 rotate-90 md:rotate-0">
                        <motion.div
                          initial={{ x: -40, opacity: 0 }}
                          animate={
                            hoverOnClose
                              ? { x: 0, opacity: 1 }
                              : { x: 70, opacity: 0 }
                          }
                        >
                          <ChevronsLeft size={48} />
                        </motion.div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <span>C</span>
                      <span>L</span>
                      <span>O</span>
                      <span>S</span>
                      <span>E</span>
                    </div>
                  </button>
                </motion.div>

                <div className="flex gap-7">
                  <motion.div
                    initial={{ y: "100px", opacity: 0 }}
                    animate={{
                      y: isMenuOpen ? 0 : "100px",
                      opacity: isMenuOpen ? 1 : 0,
                    }}
                    transition={{ delay: isMenuOpen ? 0.8 : 0 }}
                    className="flex flex-col md:items-end"
                  >
                    <div>Location</div>
                    <div className="text-xl md:text-3xl font-bold">
                      Gujarat, India
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ y: "100px", opacity: 0 }}
                    animate={{
                      y: isMenuOpen ? 0 : "100px",
                      opacity: isMenuOpen ? 1 : 0,
                    }}
                    transition={{ delay: isMenuOpen ? 1 : 0 }}
                    className="flex flex-col md:items-end "
                  >
                    <div>Time</div>
                    <div className="text-xl md:text-3xl font-bold">
                      {currentTime.hours}
                      <span className="animate-ping duration-1000">:</span>
                      {currentTime.minutes} {currentTime.ampm}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ x: "300px", y: "300px" }}
              animate={{
                x: isMenuOpen ? 0 : "300px",
                y: isMenuOpen ? 0 : "300px",
                animation: "",
              }}
              transition={{ duration: 1, type: "spring" }}
              className="absolute bottom-[-50px] right-[-50px] z-[-1] overflow-hidden animate-spin1"
            >
              <img
                src={"/globe.svg"}
                width={300}
                height={300}
                alt="globe"
                className="opacity-10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        ref={navRef}
        initial={{ opacity: 0, margin: "0px 0rem" }}
        animate={{ opacity: 1, margin: "0px 0rem" }}
        transition={{ delay: 0.3, margin: { duration: 0.5 } }}
        className={cn(
          "justify-between flex items-center w-full md:w-[777px] rounded-xl p-3 z-[2] backdrop-blur-sm bg-black/50"
        )}
      >
        <img src={"/signature.svg"} alt="signature" width={64} height={64} />
        <div className="flex items-center gap-4">
          <button
            classes={
              "relative text-[--button-text] px-5 py-2 rounded-md font-bold bg-transparent hover:bg-transparent cursor-pointer text-[--text-color-1] font-normal"
            }
            onClick={controlMenu}
          >
            Menu
          </button>
          <Link
            href="#contact"
            onClick={downloadResume}
            className="bg-[--secondary-bg] relative hover:bg-[--hover-button] text-[--button-text] p-2 md:px-5 md:py-2 rounded-md font-bold cursor-pointer flex gap-1 items-center justify-center"
          >
            <span className="hidden md:block">Resume</span>
            <FileDown />
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default NewNavbar;

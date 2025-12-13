"use client";
import { motion } from "framer-motion";
import { Disc3, MoveRight } from "lucide-react";
import { Judson } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { cn } from "../_utils/helper";

const judson = Judson({ subsets: ["latin"], weight: ["400", "700"] });
const Contact = () => {
  const [hoverOnSend, setHoverOnSend] = useState(false);
  const [loading, setLoading] = useState(false);

  const [details, setDetails] = useState({
    name: "",
    email: "",
    message: "",
    budget: "$50 - $100",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("/api/contact", {
        method: "post",
        body: JSON.stringify(details),
      });
      if (!response.ok) {
        setLoading(false);
        throw new Error(`Invalid response: ${response.status}`);
      }
      setLoading(false);
      setDetails({
        name: "",
        email: "",
        message: "",
        budget: "$50 - $100",
      });
    } catch (err) {
      console.error(err);
      alert("We can't submit the form, try again later?");
      setLoading(false);
      setDetails({
        name: "",
        email: "",
        message: "",
        budget: "$50 - $100",
      });
    }
  }

  return (
    <section
      id="contact"
      className={`h-fit flex flex-col gap-3 items-center pt-[100px] mx-[18px] ${judson.className}`}
    >
      <div className="w-full md:max-w-[1140px] 2xl:max-w-[1280px]  flex flex-col gap-14 items-center justify-center relative mt-7">
        <h2 className="text-5xl md:text-6xl 2xl:text-7xl">
          Contact<span className="text-[--accent-color] animate-ping">.</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-20 md:gap-5 w-full">
          <div className="w-full flex flex-col justify-between items-center relative">
            <div className="flex w-full flex-col gap-7">
              <div>
                <div className="text-lg">Got a project?</div>
                <div className="relative w-fit">
                  <div className="text-5xl">Get in touch</div>
                  <motion.div
                    animate={{ y: 10 }}
                    transition={{
                      ease: "easeInOut",
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      scale: { duration: 0.3 },
                    }}
                    whileHover={{ scale: 1.2 }}
                    className="absolute top-[-40px] right-[-70px]"
                  >
                    <img
                      src={"/diamond.svg"}
                      width={70}
                      height={70}
                      alt="diamond"
                    />
                  </motion.div>
                </div>
                <div className="text-lg">
                  Let&apos;s chat! I&apos;d love to collaborate on your next
                  dream project.
                </div>
              </div>
              <form onSubmit={handleSubmit} className={`flex flex-col gap-4`}>
                <div className="flex flex-col w-full">
                  <label className="text-lg" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={details.name}
                    onChange={(e) =>
                      setDetails({ ...details, name: e.target.value })
                    }
                    className="w-full h-12 p-3 mt-1 font-bold text-xl rounded-lg text-[--secondary-bg] bg-[--textfield-color]"
                    required
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-lg" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={details.email}
                    onChange={(e) =>
                      setDetails({ ...details, email: e.target.value })
                    }
                    className="w-full h-12 p-3 mt-1 rounded-lg font-bold text-xl text-[--secondary-bg] bg-[--textfield-color]"
                    required
                  />
                </div>
                <div className="flex items-center justify-center gap-3 md:text-xl">
                  <div
                    className={cn(
                      "border border-[--border-color] w-full p-2 2xl:p-3 text-center rounded-full cursor-pointer select-none",
                      details.budget == "$50 - $100"
                        ? "bg-[--textfield-color] text-[--secondary-bg] font-bold"
                        : ""
                    )}
                    onClick={() =>
                      setDetails({ ...details, budget: "$50 - $100" })
                    }
                  >
                    $50 - $100
                  </div>
                  <div
                    className={cn(
                      "border border-[--border-color] w-full p-2 2xl:p-3 text-center rounded-full cursor-pointer select-none",
                      details.budget == "$100 - $500"
                        ? "bg-[--textfield-color] text-[--secondary-bg] font-bold"
                        : ""
                    )}
                    onClick={() =>
                      setDetails({ ...details, budget: "$100 - $500" })
                    }
                  >
                    $100 - $500
                  </div>
                  <div
                    className={cn(
                      "border border-[--border-color] w-full p-2 2xl:p-3 text-center rounded-full cursor-pointer select-none",
                      details.budget == "$500 - $1000"
                        ? "bg-[--textfield-color] text-[--secondary-bg] font-bold"
                        : ""
                    )}
                    onClick={() =>
                      setDetails({ ...details, budget: "$500 - $1000" })
                    }
                  >
                    $500 - $1000
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-lg " htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={details.message}
                    onChange={(e) =>
                      setDetails({ ...details, message: e.target.value })
                    }
                    className="w-full mt-1 p-3 font-bold text-[--secondary-bg] text-xl  rounded-lg bg-[--textfield-color]"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[--secondary-bg] relative hover:bg-[--hover-button] text-[--button-text] px-5 py-2 rounded-md font-bold flex gap-3 items-center justify-center"
                  onMouseEnter={() => setHoverOnSend(true)}
                  onMouseLeave={() => setHoverOnSend(false)}
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-xl">Sending...</span>
                      <Disc3 className="animate-spin" />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-xl font-bold">Send Message</span>
                      <div className="relative">
                        <motion.div
                          initial={{ x: 0, opacity: 1 }}
                          animate={
                            hoverOnSend
                              ? { x: 35, opacity: 0 }
                              : { x: 0, opacity: 1 }
                          }
                        >
                          <MoveRight />
                        </motion.div>
                        <div className="absolute top-0">
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={
                              hoverOnSend
                                ? { x: 0, opacity: 1 }
                                : { x: -20, opacity: 0 }
                            }
                          >
                            <MoveRight />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  )}
                </button>
              </form>
            </div>
          </div>
          <div className=" w-full rounded-3xl p-3 border border-[--border-color] relative">
            <motion.div
              initial={{ scale: 1, opacity: 0 }}
              animate={{ y: -20, opacity: 1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ y: { delay: 1 }, opacity: { delay: 1 } }}
              className="absolute top-[-10px] right-[20px] "
            >
              <img src={"/pin.svg"} width={24} height={24} alt="pin" />
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="w-full h-[350px] md:h-full rounded-2xl overflow-hidden"
            >
              <iframe
                className="filter grayscale invert w-full h-full"
                src="https://maps.google.com/maps?hl=en&amp;q=veraval%20Veraval+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

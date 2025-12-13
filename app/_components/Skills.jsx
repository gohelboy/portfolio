"use client";
import React from "react";
import {
  IconAE,
  IconAI,
  IconAWS,
  IconBlender,
  IconBootstrap,
  IconConvex,
  IconCsharp,
  IconCSS,
  IconDesign,
  IconDEV,
  IconExpress,
  IconFigma,
  IconFirebase,
  IconGameDev,
  IconHTML,
  IconJS,
  IconMongo,
  IconNextJS,
  IconNODE,
  IconPR,
  IconPS,
  IconReact,
  IconRedux,
  IconSCSS,
  IconShadCN,
  IconShapes,
  IconSocket,
  IconSQL,
  IconStripe,
  IconTailwind,
  IconUnity,
  IconXD,
} from "./icons";
import { motion } from "framer-motion";
const Skills = () => {
  const webDevIcon = [
    IconJS,
    IconReact,
    IconRedux,
    IconNextJS,
    IconNODE,
    IconExpress,
    IconSCSS,
    IconSQL,
    IconMongo,
    IconConvex,
    IconFirebase,
    IconBootstrap,
    IconShadCN,
    IconTailwind,
    IconSocket,
    IconAWS,
    IconStripe,
  ];

  const webDesignIcon = [IconFigma, IconXD, IconHTML, IconCSS];
  const graphicDesign = [IconAI, IconPS, IconAE, IconPR];
  const gameDev = [IconUnity, IconCsharp, IconBlender];

  return (
    <section
      id="skills"
      className="py-[150px] mx-[18px] flex items-center justify-center"
    >
      <div className="w-full md:max-w-[1140px] 2xl:max-w-[1280px]  flex flex-col gap-7">
        <h2 className="text-5xl md:text-6xl 2xl:text-6xl text-center">
          GOOD AT
        </h2>
        <div className="border border-[--border-color] bg-[#0D0D0D] rounded-3xl p-4 flex flex-col md:flex-row gap-4 md:gap-9 h-full justify-between">
          <div className="flex justify-between gap-2 md:gap-4 border-[--border-color] bg-[--primary-bg] p-4 rounded-2xl">
            <span className="text-4xl 2xl:text-5xl ">
              Web <br />
              Development
            </span>
            <IconDEV className={"self-end opacity-10 size-20 2xl:24 "} />
          </div>
          <div
            className="place-items-center w-full grid gap-4 md:gap-9"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(50px, 1fr))",
            }}
          >
            {webDevIcon.map((Icon, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.01 * index }}
                viewport={{ once: true, amount: 1 }}
                key={index}
              >
                <Icon
                  className={"size-12 md:size-14 opacity-70 hover:opacity-100"}
                />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <div className="border border-[--border-color] bg-[#0D0D0D] rounded-3xl p-4 flex flex-col gap-5">
            <div className="flex justify-between gap-2 border-[--border-color] bg-[--primary-bg] p-4 rounded-2xl h-fit ">
              <span className="text-4xl 2xl:text-5xl">
                Web <br />
                Designing
              </span>
              <IconDesign className={"self-end opacity-10 size-24 "} />
            </div>
            <div
              className="place-items-center w-full grid gap-4 md:gap-9"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(50px, 1fr))",
              }}
            >
              {webDesignIcon.map((Icon, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.01 * index }}
                  viewport={{ once: true, amount: 1 }}
                  key={index}
                >
                  <Icon
                    className={
                      "size-12 md:size-14 opacity-70 hover:opacity-100"
                    }
                  />
                </motion.div>
              ))}
            </div>
          </div>
          <div className="border border-[--border-color] bg-[#0D0D0D] rounded-3xl p-4 flex flex-col gap-5">
            <div className="flex  justify-between gap-2 border-[--border-color] bg-[--primary-bg] p-4 rounded-2xl h-fit ">
              <span className="text-4xl 2xl:text-5xl">
                Graphic <br />
                Designing
              </span>
              <IconShapes className={"self-end opacity-10 size-24"} />
            </div>
            <div
              className="place-items-center w-full grid gap-4 md:gap-9"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(50px, 1fr))",
              }}
            >
              {graphicDesign.map((Icon, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.01 * index }}
                  viewport={{ once: true, amount: 1 }}
                  key={index}
                >
                  <Icon
                    className={
                      "size-12 md:size-14 opacity-70 hover:opacity-100"
                    }
                  />
                </motion.div>
              ))}
            </div>
          </div>
          <div className="border border-[--border-color] bg-[#0D0D0D] rounded-3xl p-4 flex flex-col gap-5">
            <div className="flex  justify-between gap-2 border-[--border-color] bg-[--primary-bg] p-4 rounded-2xl h-fit ">
              <span className="text-4xl 2xl:text-5xl">
                Game <br />
                Development
              </span>
              <IconGameDev className={"self-end opacity-10 size-24"} />
            </div>
            <div
              className=" place-items-center w-full grid gap-4 md:gap-9 "
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(50px, 1fr))",
              }}
            >
              {gameDev.map((Icon, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.01 * index }}
                  viewport={{ once: true, amount: 1 }}
                  key={index}
                >
                  <Icon
                    className={
                      "size-12 md:size-14 opacity-70 hover:opacity-100"
                    }
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

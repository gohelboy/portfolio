"use client";
import { motion } from "framer-motion";
import {
  IconBeingepedia,
  IconInside,
  IconKlimates,
  IconPN,
  IconPW,
  IconTSP,
} from "./icons";

const ICON_CLASS =
  "text-[--secondary-bg] size-32 h-[100px] md:w-[150px] 2xl:w-[200px] opacity-80 hover:opacity-100 hover:-translate-y-1 transition-all";
const ICON_CLASS_PW =
  "text-[--secondary-bg] size-32 h-[100px] md:w-[150px] 2xl:w-[150px] opacity-80 hover:opacity-100 hover:-translate-y-1 transition-all";

const WORKED_ICONS = [
  { name: "Part Note", Icon: IconPN },
  { name: "Inside", Icon: IconInside },
  { name: "Property Watch", Icon: IconPW, iconClass: ICON_CLASS_PW },
  { name: "Bingepedia", Icon: IconBeingepedia },
  { name: "Tiffin Service Propvider", Icon: IconTSP },
  {
    name: "Klimates",
    Icon: IconKlimates,
  },
];

const Worked = () => {
  return (
    <section className="py-[20px] md:py-[50px] mx-[18px] flex flex-col items-center justify-center p-4 md:gap-7">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4 p-7 px-10 border border-[--border-color] w-full md:max-w-[1140px] 2xl:max-w-[1280px] rounded-3xl bg-gradient-to-b from-[#0a0a0a] via-[--primary-bg] to-[--primary-bg] ">
        {WORKED_ICONS.map((item, i) => (
          <motion.div
            className="flex flex-col items-center justify-center"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 * i }}
            viewport={{ once: true, amount: 1 }}
            key={item.name}
          >
            <item.Icon className={item.iconClass ?? ICON_CLASS} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Worked;

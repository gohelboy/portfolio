"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "../_utils/helper";
import {
  IconBootstrap,
  IconConvex,
  IconCSS,
  IconExpress,
  IconFirebase,
  IconHTML,
  IconLinkArrow,
  IconMongo,
  IconNextJS,
  IconNODE,
  IconPartNote,
  IconReact,
  IconRedux,
  IconSCSS,
  IconShadCN,
  IconSQL,
  IconTailwind,
  IconTanstackQuery,
} from "./icons";

const Projects = () => {
  const Projects = [
    {
      logo: (
        <img src={"/klimates.svg"} width={150} height={150} alt="Klimates" />
      ),
      description:
        "Klimates gives incredible ERP tools to manage our carbon footprint and engage our stakeholders at the same time. Get complete scope 1/2/3 footprints with whatever data you have and BRSR reports. Actionable Emissions Intelligence.",
      icons: [IconTailwind, IconReact, IconTanstackQuery, IconNODE],
      image: (
        <img src={"/klimates.png"} width={700} height={700} alt="Klimates" />
      ),
      link: "https://www.klimates.earth/",
    },
    {
      logo: <IconPartNote className={"w-[150px] fill-[--secondary-bg]"} />,
      description:
        "Part Important Note is a dynamic platform designed for real-time collaboration, robust idea discussion, and rough drawing capabilities. With live editing and instant updates, teams seamlessly capture and discuss ideas while visually mapping them. Integration with project management tools enhances productivity, making it essential for streamlined teamwork and efficient idea management.",
      icons: [IconNextJS, IconTailwind, IconConvex, IconShadCN],
      image: <img src={"/pn1.png"} width={700} height={700} alt="PartNote" />,
      link: "https://partnote.vercel.app/",
    },
    {
      logo: (
        <img src={"/pw.png"} width={100} height={100} alt="Property Watch" />
      ),
      description:
        "Property Watch is a versatile platform where users and brokers list properties for periodic checks, including damage inspections. When a checker reports an issue, the platform notifies the owner or admin, ensuring prompt attention to property maintenance. Users can also add different property types and access educational courses and videos on real estate.",
      icons: [
        IconReact,
        IconRedux,
        IconHTML,
        IconSCSS,
        IconBootstrap,
        IconFirebase,
      ],
      image: (
        <img src={"/pw1.png"} width={700} height={700} alt="property watch" />
      ),
      link: "https://app.propertywatch.com/",
    },
    {
      logo: <img src={"/inside.svg"} width={100} height={100} alt="Inside" />,
      description:
        "The EMS system for company management integrates a sophisticated leave system, project management tools, task tracking capabilities, and employee activity management. It also includes robust HR department functionalities such as employee records management, payroll processing, benefits administration, and compliance tracking. This comprehensive platform streamlines processes, enhances communication, improves collaboration, and boosts productivity across departments within the organization.",
      icons: [
        IconReact,
        IconRedux,
        IconHTML,
        IconSCSS,
        IconBootstrap,
        IconNODE,
        IconExpress,
        IconSQL,
      ],
      image: <img src={"/i1.png"} width={700} height={700} alt="Inside" />,
    },
    {
      logo: (
        <img
          src={"/bingepedia.png"}
          width={150}
          height={150}
          alt="Bingepedia"
        />
      ),
      description:
        "Beingepedia is a visually appealing platform where users can effortlessly discover trending movies and series. It features a comprehensive search function for all types of shows, allowing easy exploration of diverse content. Users can create personalized accounts to manage their viewing experience by adding content to their watchlist or watched list, making it a convenient way to stay updated with the latest trends.",
      icons: [
        IconReact,
        IconRedux,
        IconHTML,
        IconCSS,
        IconMongo,
        IconExpress,
        IconNODE,
      ],
      image: <img src={"/bp2.png"} width={700} height={700} alt="Bingepedia" />,
      link: "https://bingepedia.vercel.app/",
    },
    {
      logo: <img src={"/tsp.svg"} width={150} height={150} alt="TSP" />,
      description:
        "TSP Tiffin Service Provider is a platform connecting users and meal providers. Users access daily tiffin options, manage subscriptions, and track orders, while providers upload menus, handle orders, and monitor payments. Both panels facilitate communication, feedback, and ratings. Integrated features include payment gateways, GPS tracking, and notifications for seamless operations.",
      icons: [
        IconReact,
        IconRedux,
        IconHTML,
        IconCSS,
        IconMongo,
        IconExpress,
        IconNODE,
      ],
      image: (
        <img
          src={"/tsp1.jpg"}
          width={700}
          height={700}
          alt="tiffin service provider"
        />
      ),
    },
  ];

  return (
    <section
      id="projects"
      className="mx-[18px] flex items-center justify-center py-[100px]"
    >
      <div className="w-full md:max-w-[1140px] 2xl:max-w-[1280px] flex flex-col gap-9">
        <div className="text-5xl md:text-6xl 2xl:text-7xl text-center">
          Projects
        </div>
        {Projects?.map((project, i) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: "20px" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={i}
              className={cn(
                `group border border-[--border-color] w-full rounded-3xl p-1 md:p-3 bg-gradient-to-b from-[#0f0f0f] to-[--primary-bg] flex md:flex-row gap-3 md:gap-7`,
                i % 2 === 0
                  ? "flex-col md:flex-row-reverse"
                  : "flex-col md:flex-row"
              )}
            >
              <div className="bg-[#151515] w-full rounded-2xl flex items-center justify-center text-7xl p-1 md:p-2 border-[--border-color] relative cursor-pointer">
                <div className="absolute bottom-0 left-0 opacity-0 transition-all group-hover:opacity-100 group-hover:bottom-3 group-hover:left-3 md:group-hover:bottom-6 md:group-hover:left-6">
                  <IconLinkArrow
                    className={"fill-[--secondary-bg] w-4 md:w-auto"}
                  />
                </div>
                <Link href={project?.link ?? "#projects"} target="_blank">
                  <div className="overflow-hidden rounded-xl group-hover:rounded-bl-[100px] md:group-hover:rounded-bl-[200px] transition-all duration-300 hover:scale-[0.97]">
                    {project.image}
                  </div>
                </Link>
              </div>
              <div className="w-full flex flex-col gap-4 md:gap-7 justify-between p-4">
                <div
                  className={cn("", i % 2 === 0 ? "self-start" : "md:self-end")}
                >
                  {" "}
                  {project.logo}{" "}
                </div>
                <p className="md:text-lg">{project.description}</p>
                <div
                  className="gap-4 items-end grid"
                  style={{
                    gridTemplateColumns: "repeat(auto-fill, minmax(40px,1fr))",
                  }}
                >
                  {project.icons.map((Icon, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, y: "20px" }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * j }}
                    >
                      <Icon className={"size-10"} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

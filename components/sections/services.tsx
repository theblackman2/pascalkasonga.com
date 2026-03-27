"use client";

import { motion, Variants, easeOut } from "framer-motion";
import {
  FaCode,
  FaMobileAlt,
  FaSitemap,
  FaSearch,
  FaRobot,
  FaLightbulb,
} from "react-icons/fa";

const SERVICES = [
  {
    title: "Web Development",
    description:
      "Modern, scalable web applications with clean architecture and high performance.",
    icon: FaCode,
  },
  {
    title: "Mobile Development",
    description:
      "Cross-platform mobile apps with seamless UX and optimized performance.",
    icon: FaMobileAlt,
  },
  {
    title: "System Design",
    description:
      "Robust system architecture designed for scalability, reliability, and growth.",
    icon: FaSitemap,
  },
  {
    title: "System Audit",
    description:
      "Deep analysis of your systems to identify bottlenecks, risks, and improvements.",
    icon: FaSearch,
  },
  {
    title: "Automated Workflows",
    description:
      "Automation pipelines that save time, reduce errors, and boost productivity.",
    icon: FaRobot,
  },
  {
    title: "Technical Consulting",
    description:
      "Strategic guidance on architecture, tech stack, scalability, and product direction.",
    icon: FaLightbulb,
  },
];

export default function Services() {
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <section id="service" className="w-full bg-[#F2F4F7]">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-5 py-10 md:py-20 flex flex-col gap-10"
      >
        {/* Header */}
        <motion.div variants={item} className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold">
            My <span className="text-primary">Services</span>
          </h3>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto">
            I design and build digital solutions that are scalable, efficient,
            and aligned with business goals.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {SERVICES.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -8 }}
                transition={{ ease: easeOut }}
                className="relative group bg-white rounded-3xl p-6 flex flex-col gap-4 border border-gray-100 shadow-sm hover:shadow-md transition"
              >
                {/* hover glow */}
                <div className="absolute inset-0 rounded-3xl bg-primary/5 opacity-0 group-hover:opacity-100 transition" />

                {/* icon */}
                <div className="w-fit p-3 rounded-xl bg-primary/10 text-primary relative z-10">
                  <Icon className="text-xl" />
                </div>

                {/* content */}
                <div className="flex flex-col gap-2 relative z-10">
                  <h4 className="font-semibold text-lg">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {service.description}
                  </p>
                </div>

                {/* bottom glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-10 bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
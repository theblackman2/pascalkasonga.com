"use client";

import happyMe from "@/public/happy.png";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants, easeOut } from "framer-motion";

export default function WhyHireMe() {

  // Stagger container
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Fade + slide
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
    <section className="w-full bg-[#F2F4F7]">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto w-full px-5 py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10"
      >

        {/* LEFT (Image block) */}
        <div className="w-full relative flex items-center justify-center">

          {/* Background shape */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="w-1/2 h-2/3 left-1/2 -translate-x-[55%] rounded-[50px] bg-primary/60 absolute bottom-0 z-0"
          />

          {/* Image */}
          <motion.div
            variants={item}
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="relative z-10"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: easeOut }}
            >
              <Image
                src={happyMe}
                alt="Happy me"
                className="w-[80%] mx-auto h-auto"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT (Content) */}
        <motion.div
          variants={container}
          className="w-full flex flex-col gap-5 justify-center text-center md:text-left"
        >

          <motion.h3
            variants={item}
            className="font-bold text-2xl md:text-3xl"
          >
            Why <span className="text-primary">hire me</span> ?
          </motion.h3>

          <motion.p variants={item} className="text-lg">
            Driven by full-stack code and compelling content. I build scalable software while crafting a unique brand narrative. I translate technical complexity into user engagement, ensuring your product doesn&apos;t just work flawlessly but also tells your story.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={item}
            className="w-full grid grid-cols-2 gap-4"
          >
            <div className="flex flex-col gap-1">
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="text-xl font-semibold md:text-2xl"
              >
                80+
              </motion.span>
              <span className="text-sm text-gray-500">
                Completed projects
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="text-xl font-semibold md:text-2xl"
              >
                10+
              </motion.span>
              <span className="text-sm text-gray-500">
                Clients
              </span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={item}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                target="_blank"
                href={"mailto:pascalkasonga243@gmail.com"}
                className="w-fit px-6 py-1 border rounded-full text-lg inline-block"
              >
                Hire me
              </Link>
            </motion.div>
          </motion.div>

        </motion.div>
      </motion.div>
    </section>
  );
}
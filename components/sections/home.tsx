"use client";

import fly from "@/public/fly.png";
import me from "@/public/me.png";
import Image from "next/image";
import Link from "next/link";
import { FaQuoteLeft, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, Variants, easeOut } from "framer-motion";

export default function Home() {
  const experienceYears = new Date().getFullYear() - 2021;

  // Container (stagger children)
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Item animation (fade + slide)
  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut, // ✅ properly typed
      },
    },
  };

  return (
    <section id="home" className="w-full">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="container relative mx-auto px-5 pt-5 flex flex-col gap-5"
      >

        {/* Hello badge */}
        <motion.div variants={item} className="w-fit mx-auto relative">
          <h4 className="text-sm mx-auto w-fit rounded-full px-4 py-1 border border-text">
            Hello
          </h4>

          <motion.div
            animate={{ y: [0, -6, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: easeOut }}
            className="absolute -top-4 -right-4"
          >
            <Image src={fly} alt="Fly" className="w-6 h-6" />
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h3
          variants={item}
          className="flex relative mx-auto w-fit font-bold text-3xl text-center md:text-5xl flex-col gap-px"
        >
          <span>
            I&apos;m{" "}
            <motion.span
              className="text-primary"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, ease: easeOut }}
            >
              Pascal
            </motion.span>
          </span>

          <span>Software Engineer</span>

          <motion.div
            animate={{ y: [0, 8, 0], rotate: [0, -5, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: easeOut }}
            className="absolute rotate-180 -bottom-8 -left-8"
          >
            <Image src={fly} alt="Fly" className="w-10 h-10" />
          </motion.div>
        </motion.h3>

        {/* Side content */}
        <motion.div
          variants={item}
          className="w-full container px-5 mx-auto flex items-center flex-col md:flex-row text-center md:text-left gap-4 justify-center md:justify-between md:absolute top-1/2 md:-translate-y-1/2 left-0"
        >
          {/* Quote */}
          <div className="w-fit flex flex-col gap-2">
            <FaQuoteLeft className="text-lg" />
            <p className="text-lg max-w-[320px]">
              Coding the future. Designing for impact. Elevating content.
            </p>
          </div>

          {/* Experience */}
          <div className="w-fit flex flex-col gap-2 items-center">
            <motion.span
              className="text-primary text-2xl md:text-4xl font-bold"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              {experienceYears}+
            </motion.span>

            <p className="text-sm md:text-lg max-w-[320px]">
              years of experience
            </p>

            {/* Social icons */}
            <div className="w-fit flex items-center gap-4">
              {[FaGithub, FaLinkedin].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={
                      i === 0
                        ? "https://github.com/theblackman2"
                        : "https://www.linkedin.com/in/pascal-kasonga-lushimba/"
                    }
                    target="_blank"
                  >
                    <Icon className="text-2xl text-primary" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Image section */}
        <motion.div
          variants={item}
          className="w-full pointer-events-none relative flex items-center justify-center"
        >
          {/* Background FIRST (lower layer) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: easeOut }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full md:w-1/2 h-72 rounded-t-full bg-primary/70 z-0"
          />

          {/* Image ABOVE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="relative z-10"
          >
            <Image
              src={me}
              alt="Pascal Kasonga"
              width={400}
              height={800}
              loading="eager"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
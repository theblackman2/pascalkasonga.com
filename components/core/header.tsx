"use client";

import logo from "@/public/light-logo.png";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const NAV_LEFT = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Service", id: "service" },
];

const NAV_RIGHT = [
  { label: "Resume", id: "resume" },
  { label: "Project", id: "project" },
  { label: "Contact", id: "contact" },
];

const ALL_IDS = [...NAV_LEFT, ...NAV_RIGHT].map((i) => i.id);

export default function Header() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
  });

  useEffect(() => {
    const sections = ALL_IDS.map((id) =>
      document.getElementById(id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((sec) => sec && observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  const renderLink = (item: { label: string; id: string }) => {
    const isActive = active === item.id;

    return (
      <Link
        key={item.id}
        href={`#${item.id}`}
        className="relative flex items-center justify-center px-5 py-2 text-sm font-semibold"
      >
        {isActive && (
          <motion.div
            layoutId="active-pill"
            className="absolute inset-0 bg-primary rounded-full"
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />
        )}

        <span className="relative z-10">{item.label}</span>
      </Link>
    );
  };

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-100"
      />

      <header className="w-full sticky top-0 z-50">
        <div className="container mx-auto p-4">

          {/* Desktop layout (YOUR original structure preserved) */}
          <div className="hidden md:block">
            <div className="w-full grid grid-cols-3 items-center bg-black-bg text-white p-2 rounded-full">

              {/* Left nav */}
              <div className="grid grid-cols-3 gap-2">
                {NAV_LEFT.map(renderLink)}
              </div>

              {/* Center logo */}
              <div className="flex justify-center">
                <Image src={logo} alt="Logo" className="w-20 h-auto" />
              </div>

              {/* Right nav */}
              <div className="grid grid-cols-3 gap-2">
                {NAV_RIGHT.map(renderLink)}
              </div>
            </div>
          </div>

          {/* Mobile layout */}
          <div className="md:hidden bg-black-bg text-white rounded-full px-4 py-2 flex items-center justify-between">

            <Image src={logo} alt="Logo" className="w-14" />

            <button onClick={() => setOpen(!open)} className="text-xl">
              ☰
            </button>
          </div>

          {/* Mobile dropdown */}
          <motion.div
            initial={false}
            animate={{ height: open ? "auto" : 0 }}
            className="overflow-hidden md:hidden bg-black-bg mt-2 rounded-2xl"
          >
            <div className="flex flex-col p-4 gap-2 text-white">
              {[...NAV_LEFT, ...NAV_RIGHT].map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-2 rounded-full ${active === item.id ? "bg-primary" : ""
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </header>
    </>
  );
}
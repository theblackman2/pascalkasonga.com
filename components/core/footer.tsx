"use client"

import Link from "next/link"
import { FiArrowUpRight } from "react-icons/fi"
import logo from "@/public/light-logo.png"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="w-full bg-black-bg rounded-t-xl text-white">
      <div className="w-full container mx-auto p-5 flex flex-col gap-5">
        <div className="w-full flex flex-col gap-5 md:flex-row items-start md:items-center justify-between">
          <h3 className="font-bold text-2xl md:text-3xl">
            Let&apos;s Connect there
          </h3>
          <Link target="_blank" href={'mailto:pascalkasonga243@gmail.com'} className="w-full md:w-fit rounded-full bg-primary flex items-center justify-center gap-2 text-lg px-5 py-1">
            <span>
              Hire me
            </span>
            <span>
              <FiArrowUpRight />
            </span>
          </Link>
        </div>
        <div className="w-full h-px bg-[#475467]"></div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          <div className="w-full flex flex-col gap-4">
            <Image
              src={logo}
              className="w-32 h-auto"
              alt="Logo"
            />
            <p>
              Driven by a passion for clean software and compelling narratives. I transform complex ideas into functional code and impactful visuals. From designing elegant user interfaces to engineering robust backend systems, my focus is on delivering high-quality, authentic digital solutions that leave a lasting impression.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="w-full flex flex-col gap-5">
              <h4 className="text-primary font-semibold text-lg md:text-xl">
                Navigation
              </h4>
              <div className="w-full flex flex-col gap-3">
                <Link href={'#'} className="w-fit">
                  Home
                </Link>
                <Link href={'#'} className="w-fit">
                  My Services
                </Link>
                <Link href={'#'} className="w-fit">
                  Projects
                </Link>
              </div>
            </div>
            <div className="w-full flex flex-col gap-5">
              <h4 className="text-primary font-semibold text-lg md:text-xl">
                Contact
              </h4>
              <div className="w-full flex flex-col gap-3">
                <Link href={'tel:+243852797112'} className="w-fit">
                  +243 859 797 112
                </Link>
                <Link href={'mailto:pascalkasonga243@gmail.com'} className="w-fit">
                  pascalkasonga243@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-[#475467]"></div>
        <div className="w-full flex itams-center justify-center text-center">
          <small className="text-sm">
            &copy; {new Date().getFullYear()} Pascal Kasonga. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  )
}

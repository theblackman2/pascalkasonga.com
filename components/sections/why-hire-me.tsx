"use client"

import happyMe from "@/public/happy.png"
import Image from "next/image"
import Link from "next/link"

export default function WhyHireMe() {
  return (
    <div className="w-full bg-[#F2F4F7] ">
      <div className="container mx-auto w-full px-5 py-10 md:py-20 grid grid-cols-1 md:grid-cols-2">
        <div className="w-full relative">
          <Image
            src={happyMe}
            alt="Happy me"
            className="w-[80%] mx-auto h-auto z-30 relative"
          />
          <div className="w-1/2 z-20 h-2/3 left-1/2 -translate-x-[55%] rounded-[50px] bg-primary/60 absolute bottom-0"></div>
        </div>
        <div className="w-full flex flex-col gap-5 justify-center">
          <h3 className="font-bold text-2xl md:text-3xl">
            Why <span className="text-primary">hire me</span> ?
          </h3>
          <p className="text-lg">
            Driven by full-stack code and compelling content. I build scalable software while crafting a unique brand narrative. I translate technical complexity into user engagement, ensuring your product doesn&apos;t just work flawlessly but also tells your story.
          </p>
          <div className="w-full grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-xl font-semibold md:text-2xl">
                40+
              </span>
              <span className="text-sm text-gray-500 ">
                Completed projects
              </span>
            </div>
          </div>
          <Link target="_blank" href={'mailto:pascalkasonga243@gmail.com'} className="w-fit px-6 py-1 border rounded-full text-lg">
            Hire me
          </Link>
        </div>
      </div>
    </div>
  )
}

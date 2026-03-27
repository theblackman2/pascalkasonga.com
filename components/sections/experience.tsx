"use client";

import { motion } from "framer-motion";

type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
};

const EXPERIENCES: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Kadea Software",
    period: "2023 - Present",
    description:
      "Design and build scalable full-stack applications, define system architecture, and optimize performance across SaaS products in production environments.",
  },
  {
    role: "Frontend Developer",
    company: "Congo Devs",
    period: "2021 - 2022",
    description:
      "Developed responsive and accessible UI components, improved user experience across enterprise dashboards, and integrated modern frontend architectures using React and Next.js.",
  },
  {
    role: "Infograph Designer",
    company: "Congo Devs",
    period: "2020 - 2021",
    description:
      "Created visual identities, marketing assets, and digital design materials while collaborating with development teams to align UI direction with product goals.",
  },
];

export default function WorkExperience() {
  return (
    <section className="w-full py-20 bg-white" id="experience">
      <div className="container mx-auto px-5 flex flex-col gap-14">

        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-gray-500 mt-2">
            My professional journey building products and systems.
          </p>
        </div>

        {/* Timeline wrapper */}
        <div className="relative flex flex-col gap-10">

          {/* center line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block" />

          {EXPERIENCES.map((exp, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className={`relative w-full flex flex-col md:flex-row items-center ${isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
              >
                {/* Card */}
                <div
                  className={`w-full md:w-[45%] bg-[#F2F4F7] p-6 rounded-3xl shadow-sm relative
                  ${isLeft ? "md:mr-auto" : "md:ml-auto"}`}
                >
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <span className="text-sm text-gray-500">{exp.period}</span>

                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    {exp.description}
                  </p>

                  {/* dot connector */}
                  <div
                    className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white
    ${isLeft ? "left-full -translate-x-1/2" : "right-full translate-x-1/2"}
  `}
                  />
                </div>

                {/* Mobile dot */}
                <div className="md:hidden w-3 h-3 bg-primary rounded-full mt-4" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
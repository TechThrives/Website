"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import RadialOrbitalTimeline from "../ui/radical-orbital-timeline";
import { Calendar, Clock, Code, FileText, User } from "lucide-react";

const getNextMonth = (month: number) => {
  return new Date(Date.now() + month * 30 * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
};

const timelineData = [
  {
    id: 1,
    title: "Planning",
    date: getNextMonth(0),
    content: "Project planning and requirements gathering phase.",
    category: "Planning",
    icon: Calendar,
    relatedIds: [2],
    status: "Phase 1",
    energy: 60,
  },
  {
    id: 2,
    title: "Design",
    date: getNextMonth(1),
    content: "UI/UX design and system architecture.",
    category: "Design",
    icon: FileText,
    relatedIds: [1, 3],
    status: "Phase 2",
    energy: 60,
  },
  {
    id: 3,
    title: "Development",
    date: getNextMonth(2),
    content: "Core features implementation and testing.",
    category: "Development",
    icon: Code,
    relatedIds: [2, 4],
    status: "Phase 3",
    energy: 60,
  },
  {
    id: 4,
    title: "Testing",
    date: getNextMonth(3),
    content: "User testing and bug fixes.",
    category: "Testing",
    icon: User,
    relatedIds: [3, 5],
    status: "Phase 4",
    energy: 60,
  },
  {
    id: 5,
    title: "Release",
    date: getNextMonth(4),
    content: "Final deployment and release.",
    category: "Release",
    icon: Clock,
    relatedIds: [4],
    status: "Phase 5",
    energy: 60,
  },
];

export default function Hero() {
  return (
    <div className="flex flex-col items-center text-center w-full lg:text-start lg:px-12 lg:flex-row" id="home">
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-3xl font-bold text-slate-700 md:text-4xl lg:text-6xl dark:text-slate-300">
          {"Build Future Ready Tech With Us".split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 max-w-xl py-4 text-md font-normal text-neutral-600 dark:text-neutral-400"
        >
          We design and develop high-quality web apps, mobile apps, and digital products tailored to your vision. From
          idea to launch — we bring your tech dreams to life.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
        >
          <Button
            className="transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 cursor-pointer"
            asChild
          >
            <Link href="#contact">Get Started</Link>
          </Button>
          <Button className="transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900 cursor-pointer">
            <Link href="#work">View Our Work</Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="flex w-full h-full"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          delay: 1,
        }}
      >
        <RadialOrbitalTimeline timelineData={timelineData} />
      </motion.div>
    </div>
  );
}

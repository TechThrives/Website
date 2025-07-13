"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";

export const ImageCard = () => {
  const slideRef = useRef<HTMLLIElement>(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[40vmin] h-[40vmin] 2xl:w-[30vmin] 2xl:h-[30vmin] mx-[4vmin] z-10 "
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden transition-all duration-150 ease-out"
          style={{
            transform: "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)",
          }}
        >
          <Image
            className="absolute inset-0 w-[120%] h-[120%] object-cover opacity-100 transition-opacity duration-600 ease-in-out"
            style={{
              opacity: 1,
            }}
            alt="image"
            src="/hero.png"
            height={5000}
            width={5000}
            onLoad={imageLoaded}
            loading="eager"
            decoding="sync"
          />
          <div className="absolute inset-0 transition-all duration-1000" />
        </div>
      </li>
    </div>
  );
};

export const About = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">{description}</p>
    </div>
  );
};

export const ServiceCard = ({
  title,
  description,
  icon,
  delay = 0,
}: {
  title: string;
  description: string[];
  icon: React.ReactNode;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className="group cursor-pointer transform transition-all duration-500 hover:scale-101"
    >
      <div className="text-slate-700 dark:text-slate-300 rounded-3xl shadow-2xl relative duration-700 hover:border-primary/25 overflow-hidden hover:shadow-primary/5 hover:shadow-3xl w-[350px] min-h-[450px]">
        {/* Background Layers */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-black/10 dark:from-white/5 dark:to-white/10 opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
          <div
            style={{ animationDelay: "0.5s" }}
            className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-black/10 dark:from-white/10 to-transparent blur-3xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700 animate-bounce"
          />
          <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-black/5 dark:bg-white/5 blur-xl animate-ping" />
          <div
            style={{ animationDelay: "1s" }}
            className="absolute bottom-16 right-16 w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 blur-lg animate-ping"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
        </div>

        {/* Content */}
        <div className="p-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Icon Bubble */}
            <div className="relative mb-6">
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping" />
              <div
                style={{ animationDelay: "0.5s" }}
                className="absolute inset-0 rounded-full border border-primary/10 animate-pulse"
              />
              <div className="p-6 rounded-full backdrop-blur-lg border border-primary/20 bg-gradient-to-br from-secondary/80 to-secondary/60 shadow-xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 hover:shadow-primary/20">
                <div className="transform group-hover:rotate-180 transition-transform duration-700">{icon}</div>
              </div>
            </div>

            {/* Title */}
            <div className="mb-4 transform group-hover:scale-105 transition-transform duration-300">
              <p className="text-3xl font-bold bg-gradient-to-r from-slate-700 via-slate-700 to-slate-700 dark:from-slate-300 dark:via-slate-300 dark:to-slate-300 bg-clip-text text-transparent animate-pulse">
                {title}
              </p>
            </div>

            {/* Description */}
            <div className="space-y-1 max-w-sm">
              {description.map((line, idx) => (
                <p
                  key={idx}
                  className="text-slate-600 dark:text-slate-200 text-sm leading-relaxed font-medium group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors duration-300"
                >
                  {line}
                </p>
              ))}
            </div>

            {/* Separator */}
            <div className="mt-6 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full transform group-hover:w-1/2 group-hover:h-1 transition-all duration-500 animate-pulse" />

            {/* Dots */}
            <div className="flex space-x-2 mt-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
              <div style={{ animationDelay: "0.1s" }} className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
              <div style={{ animationDelay: "0.2s" }} className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

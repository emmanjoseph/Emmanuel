"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Spotlight } from "./ui/spotlight";

export default function Hero() {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
        <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="px-4 pt-36 md:pt-28 pb-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-4xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"Build and launch fast, modern Web and mobile apps."
            .split(" ")
            .map((word, index) => (
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
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          Hello there , I'm Emmanuel Mulwa a software engineer based in Nairobi, Kenya.
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
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Explore Now
          </button>
         
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="relative z-10 mt-10 rounded-3xl"
        >
          <div className="w-full max-sm:h-[400px]  overflow-hidden rounded-3xl border border-gray-300 dark:border-gray-700">
            <video autoPlay loop muted src={'/screenshots/hero.mp4'} className="aspect-video object-cover rounded-3xl max-sm:h-full"/>
          </div>
        </motion.div>
      </div>
    </div>
  );
}



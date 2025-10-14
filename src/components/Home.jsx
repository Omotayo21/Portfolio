import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import Links from "./Links";
import img7 from "/background.jpg";
//import img9 from '../../public/icon.svg'

const Home = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="relative w-screen h-screen">
      <img
        src={img7}
        alt="Light Mode Desktop Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
      {/* Dark overlay */}
      <div className="flex flex-col items-center justify-center text-white absolute inset-0 z-10">
        <div className="flex flex-col gap-y-2 md:mb-[20rem] lg:mb-0 sm:mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="text-lg"
          >
            Hello, I'm
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1, ease: "easeOut" }}
            className="flex flex-row lg:text-6xl sm:text-2xl font-bold"
          >
            RUFAI ABDULRAHMAN
          </motion.h1>
          
          <motion.div
            className="flex flex-row gap-x-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
          >
            <div className="flex flex-row gap-x-1 lg:text-lg">
              <div className="rounded-full h-2 w-2 bg-white lg:mt-3 sm:mt-2 font-semibold"></div>
              Full-stack web developer
            </div>
            <div className="flex flex-row gap-x-1 lg:text-lg">
              <div className="rounded-full h-2 w-2 bg-white lg:mt-3 sm:mt-2 font-semibold"></div>
              Mobile-app developer
            </div>
          </motion.div>
          <motion.div
            className=""
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
          >
            <Links />
          </motion.div>
        </div>
      </div>
    </div>
  );
});

export default Home;

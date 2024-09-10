import React, {forwardRef} from "react";
import { motion } from "framer-motion";
import {
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaNode,
  FaReact,
  FaSass,
} from "react-icons/fa6";
import {
  SiExpress,
  SiFramer,
  SiJavascript,
  SiMongodb,
  SiReactquery,
  SiRedux,
  SiNextdotjs,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
  SiMongoose,
  SiVuedotjs,
 
} from "react-icons/si";

const Tools = forwardRef<HTMLDivElement> ((props, ref) => {
  return (
    <div ref={ref}>
      <h1 className="flex flex-row items-center justify-center font-bold text-3xl text-green-700 mb-8 mt-8 uppercase ">
        Tech Stack
      </h1>
      <div className="flex items-center justify-center flex-wrap gap-10 lg:px-36 desktop:gap-20 laptop:gap-10 tablet:pt-16">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-center"
        >
          <FaHtml5 color="#E44F26" size={64} className="mx-auto mb-2" />
          <p>HTML</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-center"
        >
          <FaCss3 color="#1572B6" size={64} className="mx-auto mb-2" />
          <p>CSS</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-center"
        >
          <SiJavascript color="#F5DE19" size={64} className="mx-auto mb-2" />
          <p>Javascript</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-center"
        >
          <SiTypescript color="#3178c6" size={64} className="mx-auto mb-2" />
          <p>Typescript</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-center"
        >
          <FaReact color="#00D8FF" size={64} className="mx-auto mb-2" />
          <p>React</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-center"
        >
          <SiRedux color="#764ABC" size={64} className="mx-auto mb-2" />
          <p>Redux</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-center"
        >
          <SiTailwindcss color="#38B2AC" size={64} className="mx-auto mb-2" />
          <p>Tailwind</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-center"
        >
          <FaSass color="#CD6799" size={64} className="mx-auto mb-2" />
          <p>Sass</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-center"
        >
          <SiReactquery color="#EF7834" size={64} className="mx-auto mb-2" />
          <p>React Query</p>
        </motion.div>
         <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-center"
        >
         <SiExpress
            color="#333"
           size={64}
            className="mx-auto mb-2" />
          <p>ExpressJs</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-center"
        >
          <FaNode color="#215732" size={64} className="mx-auto mb-2" />
          <p>Node.js</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-center"
        >
          <SiNextdotjs color="#333" size={64} className="mx-auto mb-2" />
          <p>Next.js</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-center"
        >
          <SiMongodb color="#589636" size={64} className="mx-auto mb-2" />
          <p>MongoDB</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-center"
        >
          <SiMongoose color="#589636" size={64} className="mx-auto mb-2" />
          <p>Mongoose</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-center"
        >
          <SiFirebase color="#F5DE19" size={64} className="mx-auto mb-2" />
          <p>Firebase</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-center"
        >
          <SiFramer color="#327780" size={64} className="mx-auto mb-2" />
          <p>Framer-Motion</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-center"
        >
          <FaGitAlt color="#DE4C36" size={64} className="mx-auto mb-2" />
          <p className="">Git</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-center"
        >
          <SiVuedotjs color="42b883" size={64} className="mx-auto mb-2" />
          <p>Vue.js</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-center"
        >
          <FaReact color="#00D8FF" size={64} className="mx-auto mb-2" />
          <p>React-native</p>
        </motion.div>
       
      </div>
    </div>
  );
});

export default Tools;

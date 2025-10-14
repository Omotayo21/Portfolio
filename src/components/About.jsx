import React, { forwardRef } from "react";
import { motion } from "framer-motion";

const About = forwardRef((props, ref) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      ref={ref}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white w-full"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-4xl mx-auto text-center overflow-x-hidden"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-gray-200 mb-12 relative inline-block"
        >
          About Me
          <motion.span
            className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="grid gap-8 md:grid-cols-2 items-center"
        >
          <div className="text-left space-y-6">
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-200 leading-relaxed"
            >
              I'm a passionate full-stack developer with expertise in modern web
              technologies. With over 3 years of professional experience, I
              specialize in building functional, efficeint, and responsive web and mobile
              applications that deliver exceptional user experiences.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-200 leading-relaxed"
            >
              My technical toolkit includes React, Next.js, TypeScript, Node.js, React-native and
              modern CSS frameworks. I'm committed to writing clean,
              maintainable and practical solutions.
            </motion.p>

          
          </div>

          <motion.div
            variants={itemVariants}
            className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl md:text-8xl font-bold text-gray-200 opacity-30">
                {"</>"}
              </span>
            </div>
          </motion.div>
        </motion.div>

       
      </motion.div>
    </div>
  );
});

export default About;

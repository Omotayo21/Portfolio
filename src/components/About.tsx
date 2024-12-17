import React, {forwardRef} from 'react'
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

const About = forwardRef<HTMLDivElement> ((props, ref) => {
  const controls = useAnimation();
  const [abInViewRef, abInView ] = useInView({ threshold: 0.5 }); // Adjust threshold as needed

  React.useEffect(() => {
    if (abInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, abInView]);

  return (
    <div ref={ref}>
    <h2 className="flex flex-row items-center justify-center font-bold text-5xl mb-4 mt-12">
        About me
      </h2>
    <motion.p
      ref={abInViewRef}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
      transition={{ duration: 0.1 }}
      className="lg:px-36 sm:px-8 lg:text-lg"
    >
      
      I'm a fullstack web developer with over 2 years of experience with a strong
      focus on creating visually appealing, responsive and scalable websites and
      web applications. I have worked on both frontend and backend projects and satisfied all my clients. Feel free to connect and share your project ideas and I
      would be delighted to collaborate with you and help bring your ideas into
      reality. I look forward to hearing from you
    </motion.p>
    </div>
  );
});

export default About

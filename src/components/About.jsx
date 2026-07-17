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
      style={{
        backgroundColor: "#05070A",
        width: "100%",
        padding: "2rem 2rem",
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        style={{
          maxWidth: "680px",
          margin: "0 auto",
          fontFamily: "'Manrope', sans-serif",
        }}
      >
        {/* Section label */}
        <motion.p variants={itemVariants} className="section-label" style={{ marginBottom: "0.75rem" }}>
          About
        </motion.p>

        {/* Section heading with animated underline */}
        <motion.h2
          variants={itemVariants}
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 700,
            fontSize: "2rem",
            color: "#f9fafb",
            letterSpacing: "-0.03em",
            marginBottom: "2.5rem",
            position: "relative",
            display: "inline-block",
          }}
        >
          About Me
          <motion.span
            style={{
              position: "absolute",
              bottom: "-4px",
              left: 0,
              height: "2px",
              background: "#2563EB",
              width: "100%",
              display: "block",
              transformOrigin: "left",
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.h2>

        {/* Content */}
        <motion.p
          variants={itemVariants}
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 400,
            fontSize: "1.15rem",
            color: "#D1D5DB",
            lineHeight: 1.85,
            margin: 0,
          }}
        >
          I'm a Full-stack Software Developer with commercial experience
          building web and mobile applications for startups and
          businesses. I enjoy turning complex business requirements into clean,
          maintainable software, with experience spanning SaaS products,
          e-commerce platforms, client solutions, production deployments, and
          technical problem solving.
        </motion.p>
      </motion.div>
    </div>
  );
});

export default About;

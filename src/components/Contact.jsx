import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { HiDocument } from "react-icons/hi2";

const Contact = forwardRef(({ cvLink }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        backgroundColor: "#05070A",
        width: "100%",
        padding: "1.5rem 2rem 1.5rem",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-40px" }}
        style={{
          maxWidth: "560px",
          margin: "0 auto",
          textAlign: "center",
          fontFamily: "'Manrope', sans-serif",
        }}
      >
        {/* Section label */}
        <p className="section-label" style={{ marginBottom: "0.5rem" }}>Get in Touch</p>

        {/* Heading */}
        <h2
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 500,
            fontSize: "1.1rem",
            color: "#D1D5DB",
            letterSpacing: "-0.01em",
            lineHeight: 1.2,
            marginBottom: "0.5rem",
          }}
        >
          Let's build something together.
        </h2>

        {/* Email */}
        <motion.a
          href="mailto:rufaiabdulrahman21@gmail.com"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            display: "inline-block",
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
            color: "#FFFFFF",
            textDecoration: "none",
            marginBottom: "1.25rem",
            letterSpacing: "-0.02em",
            borderBottom: "2px solid rgba(255, 255, 255, 0.1)",
            paddingBottom: "4px",
            transition: "color 0.2s, border-color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#2563EB";
            e.currentTarget.style.borderColor = "#2563EB";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#FFFFFF";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
          }}
        >
          rufaiabdulrahman21@gmail.com
        </motion.a>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            alignItems: "center",
          }}
        >
            <a
                        href="https://wa.me/2349076930901"
                        target="_blank" rel="noopener noreferrer"
                        title="WhatsApp"
                        style={{ color: "#4b5563", transition: "color 0.2s", display: "flex" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#D1D5DB")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#4b5563")}
                      >
                        <FaWhatsapp size={20} />
                      </a>
          {/* LinkedIn */}
          <a
            href="https://ng.linkedin.com/in/abdulrahman-rufai-202136280"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            style={{
              color: "#6b7280",
              transition: "color 0.2s",
              display: "flex",
              alignItems: "center",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
          >
            <FaLinkedin size={22} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Omotayo21"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            style={{
              color: "#6b7280",
              transition: "color 0.2s",
              display: "flex",
              alignItems: "center",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
          >
            <FaGithub size={22} />
          </a>

          {/* CV */}
          <a
            href={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            title="View CV"
            style={{
              color: "#6b7280",
              transition: "color 0.2s",
              display: "flex",
              alignItems: "center",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
          >
            <HiDocument size={22} />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
});

export default Contact;

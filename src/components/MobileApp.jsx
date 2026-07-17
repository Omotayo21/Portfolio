import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaReact } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiExpo } from "react-icons/si";

// ── Tech badge (reused) ───────────────────────────────────────────────────
const TechBadge = ({ icon: Icon, color, name }) => (
  <div className="tech-icon-wrapper" style={{ lineHeight: 0 }}>
    <Icon color={color} size={18} />
    <span className="tech-tooltip">{name}</span>
  </div>
);

// ── Mobile apps data ──────────────────────────────────────────────────────
const mobileApps = [
  {
    id: 1,
    title: "News App",
    description:
      "Cross-platform news aggregator with category filtering, regional selection and article deep-linking.",
    tech: [
      { icon: FaReact, color: "#61dafb", name: "React Native" },
      { icon: SiExpo,  color: "#e5e7eb", name: "Expo" },
    ],
    image: "/floxx.jpg",
    githubLink: "https://github.com/Omotayo21/News-Mobile-App",
  },
  {
    id: 2,
    title: "E-Commerce Mobile App",
    description:
      "Full-stack mobile shopping app with product listings, cart management and user authentication.",
    tech: [
      { icon: FaReact, color: "#61dafb", name: "React Native" },
      { icon: SiExpo,  color: "#e5e7eb", name: "Expo" },
    ],
    image: "/shopping mobile.jpg",
    githubLink: "https://github.com/Omotayo21/react-native-shopping-app",
    demoLink: null,
  },
  {
    id: 3,
    title: "Pomodoro Timer",
    description:
      "Productivity timer app with push notifications, haptic feedback and audio cues.",
    tech: [
      { icon: FaReact, color: "#61dafb", name: "React Native" },
      { icon: SiExpo,  color: "#e5e7eb", name: "Expo" },
    ],
    image: "/pomodoro-timer.jpg",
    githubLink: "https://github.com/Omotayo21/pomodoro-mobile-App",
    demoLink: "https://expo.dev/accounts/omotayo21/projects/pomodoro-timer/builds/ead29a8a-b193-408d-a31b-380bf66cd93d",
  },
  {
    id: 4,
    title: "Notes App",
    description:
      "Feature-rich notes app with create/edit/archive/delete, text customisation and local storage.",
    tech: [
      { icon: FaReact, color: "#61dafb", name: "React Native" },
      { icon: SiExpo,  color: "#e5e7eb", name: "Expo" },
    ],
    image: "/notes-mobile.jpg",
    githubLink: "https://github.com/Omotayo21/Notes-app",
    demoLink: "https://expo.dev/accounts/omotayo21/projects/notes/builds/1c37a82d-75a8-4186-aab9-e8465e35db99",
  },
];

// ── MobileApp Component ───────────────────────────────────────────────────
const MobileApp = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      style={{
        width: "100%",
        paddingTop: "2rem",
        fontFamily: "'Manrope', sans-serif",
      }}
    >
      {/* Section label */}
      <p className="section-label" style={{ marginBottom: "0.5rem" }}>Mobile</p>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 700,
          fontSize: "2rem",
          color: "#f9fafb",
          letterSpacing: "-0.03em",
          marginBottom: "1.5rem",
        }}
      >
        Mobile Applications
      </motion.h2>

      {/* Cards — horizontal on desktop, vertical stack on mobile */}
      <div className="flex flex-col lg:flex-row gap-6 justify-center items-stretch">
        {mobileApps.map((app, index) => (
          <motion.div
            key={app.id}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 + index * 0.1 }}
            viewport={{ once: true }}
            className="w-full lg:w-[23%] min-w-[230px]"
          >
            <motion.div
              className="card-dark"
              whileHover={{
                y: -4,
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              style={{ borderRadius: "10px", overflow: "hidden", height: "100%", display: "flex", flexDirection: "column" }}
            >
              {/* Screenshot */}
              <img
                src={app.image}
                alt={app.title}
                style={{
                  width: "100%",
                  height: "240px",
                  objectFit: "cover",
                  display: "block",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              />

              {/* Card body */}
              <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                      flexWrap: "wrap",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: "#FFFFFF",
                        letterSpacing: "-0.01em",
                        margin: 0,
                      }}
                    >
                      {app.title}
                    </h3>

                    {/* Tech icons */}
                    <div
                      style={{
                        display: "flex",
                        gap: "0.4rem",
                        alignItems: "center",
                        flexShrink: 0,
                      }}
                    >
                      {app.tech.map((t) => (
                        <TechBadge key={t.name} icon={t.icon} color={t.color} name={t.name} />
                      ))}
                    </div>
                  </div>

                  <p
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontWeight: 400,
                      fontSize: "0.8rem",
                      color: "#D1D5DB",
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {app.description}
                  </p>
                </div>

                {/* Action buttons */}
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    marginTop: "1.25rem",
                    paddingTop: "0.75rem",
                    borderTop: "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  <a
                    href={app.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn primary"
                    style={{ fontSize: "0.75rem", padding: "0.4rem 0.75rem" }}
                  >
                    <FaGithub size={12} />
                    GitHub
                  </a>

                  {app.demoLink && (
                    <a
                      href={app.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn ghost"
                      style={{ fontSize: "0.75rem", padding: "0.4rem 0.75rem" }}
                    >
                      <FaExternalLinkAlt size={10} />
                      Expo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default MobileApp;

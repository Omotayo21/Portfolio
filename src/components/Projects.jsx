import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { BiGlobe, BiVideo } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiExpress,
  SiVuedotjs,
  SiGithubactions,
  SiRedux,
  SiSocketdotio

} from "react-icons/si";
import { FaReact, FaNode } from "react-icons/fa6";
import MobileApp from "./MobileApp";

// ── Image paths ──────────────────────────────────────────────────────────
const img14 = "/jto.png";
const img6  = "/devlinks.png";
const img7  = "/devflow.png";
const img11 = "/kanban.png";
const img13 = "/xando.png";
const img5  = "/hangman.png";
const img12 = "/quiz.png";

// ── Animation variants (original, preserved exactly) ──────────────────────
const animationTypes = ["left", "right", "top", "bottom", "scale", "rotate"];

const fadeInVariants = {
  hiddenLeft:   { opacity: 0, x: -100 },
  hiddenRight:  { opacity: 0, x: 100 },
  hiddenBottom: { opacity: 0, y: 100 },
  hiddenTop:    { opacity: 0, y: -100 },
  hiddenScale:  { opacity: 0, scale: 0.8 },
  hiddenRotate: { opacity: 0, rotate: -15 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const getInitialVariant = (type) => {
  const map = {
    left:   "hiddenLeft",
    right:  "hiddenRight",
    bottom: "hiddenBottom",
    top:    "hiddenTop",
    scale:  "hiddenScale",
    rotate: "hiddenRotate",
  };
  return map[type] || "hiddenLeft";
};

// ── Tech icon with tooltip ────────────────────────────────────────────────
const TechBadge = ({ icon: Icon, color, name }) => (
  <div className="tech-icon-wrapper" style={{ lineHeight: 0 }}>
    <Icon color={color} size={18} />
    <span className="tech-tooltip">{name}</span>
  </div>
);

// ── Projects data ─────────────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: "JTOtheLabel",
    description:
      "JTOtheLabel website is a fashion e-commerce platform built for ease of shopping for customers, secure payment, and efficient order management for the brand.",
    tech: [
      { icon: SiNextdotjs,  color: "#e5e7eb", name: "Next.js" },
      { icon: SiTailwindcss,color: "#38B2AC", name: "Tailwind" },
      { icon: SiMongodb,    color: "#4db33d", name: "MongoDB" },
    
    ],
    liveLink: "https://www.jto-website.vercel.app/",
    borderColor: "border-yellow-500",
    image: img14,
    animation: animationTypes[Math.floor(Math.random() * animationTypes.length)],
    isVideoDemo: false,
  },
  {
    id: 2,
    title: "Devlinks",
    description:
      "Developer link-sharing platform with full CRUD, real-time profile previews and profile setup with pictures.",
    tech: [
      { icon: FaReact,   color: "#00D8FF", name: "React" },
       { icon: SiTailwindcss,color: "#38B2AC", name: "Tailwind" },
      { icon: SiExpress, color: "#9ca3af", name: "Express" },
      { icon: SiMongodb, color: "#4db33d", name: "MongoDB" },
      { icon: FaNode,    color: "#68a063", name: "Node.js" },
    ],
    liveLink: "https://rahman-devlinks.vercel.app/",
    codeLink: "https://github.com/Omotayo21/devlinks",
    borderColor: "border-red-500",
    image: img6,
    animation: animationTypes[Math.floor(Math.random() * animationTypes.length)],
    isVideoDemo: false,
  },
  {
    id: 3,
    title: "Devflow",
    description:
      "Full-stack engineering collaboration platform featuring workspaces, kanban boards, task assignment and email notifications.",
    tech: [
      { icon: FaReact,      color: "#00D8FF", name: "React" },
       { icon: SiTailwindcss,color: "#38B2AC", name: "Tailwind" },
      { icon: SiExpress, color: "#9ca3af", name: "Express" },
            { icon: FaNode,    color: "#68a063", name: "Node.js" },
      { icon: SiPostgresql, color: "#336791", name: "PostgreSQL" },
      { icon: SiRedis,      color: "#dc2626", name: "Redis" },
      { icon: SiDocker,     color: "#2496ed", name: "Docker" },
            { icon: SiGithubactions, color: "#2496ed", name: "Github Actions" },
      
    ],
    liveLink: "https://rahman-devflow.vercel.app/login",
    codeLink: "https://github.com/Omotayo21/devflow",
    borderColor: "border-purple-500",
    image: img7,
    animation: animationTypes[Math.floor(Math.random() * animationTypes.length)],
    isVideoDemo: true,
  },
  {
    id: 4,
    title: "Kanban Board",
    description:
      "Full-stack Task management application with authentication, email verification and full board/task CRUD operations, for creating, updating and managing board and tasks.",
    tech: [
      { icon: SiNextdotjs,  color: "#e5e7eb", name: "Next.js" },
       { icon: SiRedux, color: "#764ABC", name: "Redux" },
      { icon: SiMongodb,    color: "#4db33d", name: "MongoDB" },
      { icon: SiTailwindcss,color: "#38B2AC", name: "Tailwind" },
    ],
    liveLink: "https://kanban-board-vert-seven.vercel.app/",
    codeLink: "https://github.com/Omotayo21/kanban-board/",
    borderColor: "border-blue-500",
    image: img11,
    animation: animationTypes[Math.floor(Math.random() * animationTypes.length)],
    isVideoDemo: false,
  },
  {
    id: 5,
    title: "X and O",
    description:
      "Real-time multiplayer tic-tac-toe game with live call powered by WebSockets.",
    tech: [
      { icon: FaReact,   color: "#00D8FF", name: "React" },
      { icon: SiExpress, color: "#9ca3af", name: "Express" },
      { icon: FaNode,    color: "#68a063", name: "Node.js" },
          { icon: SiSocketdotio, color: "#2496ed", name: "Socket.io" },
    ],
    liveLink: "https://rahman-xando.vercel.app/",
    codeLink: "https://github.com/Omotayo21/tic-tac-toe",
    borderColor: "border-green-500",
    image: img13,
    animation: animationTypes[Math.floor(Math.random() * animationTypes.length)],
    isVideoDemo: false,
  },
  {
    id: 6,
    title: "Hangman Game",
    description:
      "The hangman game is an entertaining game to test your knowledge across various categories. Challenge yourself with word-guessing fun as you uncover hidden phrases",
    tech: [
      { icon: SiVuedotjs,   color: "#42b883", name: "Vue.js" },
      { icon: SiTailwindcss,color: "#38B2AC", name: "Tailwind" },
    ],
    liveLink: "https://rahman-hangman.vercel.app/",
    codeLink: "https://github.com/Omotayo21/rahman-hangman-vue",
    borderColor: "border-yellow-500",
    image: img5,
    animation: animationTypes[Math.floor(Math.random() * animationTypes.length)],
    isVideoDemo: false,
  },
  {
    id: 7,
    title: "Quiz App",
    description:
      "Frontend quiz application with multiple categories, multiple-choice questions and score tracking.",
    tech: [
      { icon: FaReact,      color: "#00D8FF", name: "React" },
          { icon: SiRedux, color: "#764ABC", name: "Redux" },
      { icon: SiTailwindcss,color: "#38B2AC", name: "Tailwind" },
    ],
    liveLink: "https://quiz-app-fc4v.vercel.app/",
    codeLink: "https://github.com/Omotayo21/Quiz-app",
    borderColor: "border-indigo-500",
    image: img12,
    animation: animationTypes[Math.floor(Math.random() * animationTypes.length)],
    isVideoDemo: false,
  },
];

// ── Projects Component ────────────────────────────────────────────────────
const Projects = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        backgroundColor: "#05070A",
        padding: "2.5rem 0 2rem",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <p className="section-label" style={{ marginBottom: "0.5rem" }}>Work</p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 700,
            fontSize: "2rem",
            color: "#FFFFFF",
            letterSpacing: "-0.03em",
            marginBottom: "2.0rem",
          }}
        >
          Website Projects
        </motion.h2>

        {/* ── Original alternating offset layout ── */}
       <div className="relative space-y-6 lg:space-y-0">
  {projects.map((project, index) => {
    const isEven = index % 2 === 0;

    return (
  <motion.div
  key={project.id}
  initial={getInitialVariant(project.animation)}
  whileInView="visible"
  viewport={{
    once: true,
    margin: "0px 0px -10% 0px",
  }}
  variants={fadeInVariants}
  className={`relative ${isEven ? "lg:pr-[40%]" : "lg:pl-[40%]"} ${
    index === 0 ? "" : "lg:-mt-40"
  }`}
  style={{ zIndex: index + 1, pointerEvents: "none" }}
>
  <motion.div
    whileHover={{
      scale: 1.02,
      boxShadow:
        "0 15px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 8px -5px rgba(0, 0, 0, 0.2)",
    }}
    transition={{ type: "spring", stiffness: 300, damping: 25 }}
    className={`h-full rounded-xl ${project.borderColor} border-2 p-4 sm:p-5 shadow-lg transition-all duration-300 ${isEven ? "lg:mr-auto" : "lg:ml-auto"}`}
    style={{
      maxWidth: "600px",
      backgroundColor: "#0A0D12",
      color: "#D1D5DB",
      pointerEvents: "auto",
    }}
  >
                  {/* Screenshot */}
                  <img
                    src={project.image}
                    className="lg:w-full lg:h-52 object-cover rounded-lg mb-4"
                    alt={project.title}
                  />

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.15rem",
                        color: "#FFFFFF",
                        letterSpacing: "-0.01em",
                        textTransform: "uppercase",
                        margin: 0,
                      }}
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontWeight: 400,
                        fontSize: "0.9rem",
                        color: "#D1D5DB",
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Tech icons */}
                    <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", paddingTop: "0.25rem" }}>
                      {project.tech.map((t) => (
                        <TechBadge key={t.name} icon={t.icon} color={t.color} name={t.name} />
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingTop: "0.75rem",
                      }}
                    >
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn primary"
                      >
                        {project.isVideoDemo ? (
                          <><BiVideo size={14} /> Video Demo</>
                        ) : (
                          <><BiGlobe size={14} /> Live Demo</>
                        )}
                      </a>

                      {project.codeLink && (
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link-btn ghost"
                        >
                          <FaGithub size={13} /> GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Applications */}
        <MobileApp />
      </div>
    </div>
  );
});

export default Projects;

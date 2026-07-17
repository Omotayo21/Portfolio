import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import {
  FaGitAlt,
  FaNode,
  FaReact,
  FaSass,
} from "react-icons/fa6";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiVuedotjs,
  SiDocker,
  SiRedis,
  SiPostgresql,
  SiMysql,
  SiCloudinary,
  SiSupabase,
  SiWordpress,
  SiFastapi,
  SiReactquery,
  SiFramer,
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiFirebase,
  
  SiGithubactions,
  SiSocketdotio,
  SiNestjs
} from "react-icons/si";

// ── Icon Wrapper with Tooltip ─────────────────────────────────────────────
const TechIcon = ({ icon: Icon, color, name }) => (
  <motion.div
    className="tech-icon-wrapper"
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 400, damping: 20 }}
    style={{ cursor: "default" }}
  >
    <Icon color={color} size={40} style={{ display: "block" }} />
    <span className="tech-tooltip">{name}</span>
  </motion.div>
);

// ── Tech Categories ───────────────────────────────────────────────────────
const categories = [
  {
    label: "Frontend",
    items: [
      { icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
      { icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
      { icon: FaReact, color: "#00D8FF", name: "React" },
      { icon: SiNextdotjs, color: "#e5e7eb", name: "Next.js" },
      { icon: SiVuedotjs, color: "#42b883", name: "Vue.js" },
      { icon: SiTailwindcss, color: "#38B2AC", name: "Tailwind CSS" },
      { icon: FaReact, color: "#61dafb", name: "React Native" },
      { icon: SiReactquery, color: "#FF4154", name: "React Query" },
      { icon: SiFramer, color: "#E901EA", name: "Framer Motion" },
      { icon: FaSass, color: "#CD6799", name: "Sass" },
      { icon: SiRedux, color: "#764ABC", name: "Redux" },
    ],
  },
  {
    label: "Backend",
    items: [
      { icon: FaNode, color: "#68a063", name: "Node.js" },
      { icon: SiExpress, color: "#9ca3af", name: "Express.js" },
      { icon: SiFastapi, color: "#059669", name: "FastAPI" },
      { icon: SiNestjs, color: "#FF4C4C", name: "NestJS" },
    ],
  },
  {
    label: "Databases",
    items: [
      { icon: SiMongodb, color: "#4db33d", name: "MongoDB" },
      { icon: SiPostgresql, color: "#336791", name: "PostgreSQL" },
      { icon: SiMysql, color: "#00758f", name: "MySQL" },
      { icon: SiRedis, color: "#dc2626", name: "Redis" },
    ],
  },
  {
    label: "Tools",
    items: [
      { icon: SiDocker, color: "#2496ed", name: "Docker" },
      { icon: FaGitAlt, color: "#DE4C36", name: "Git" },
       { icon: SiGithubactions, color: "#2496ed", name: "Github Actions" },
        { icon: SiSocketdotio, color: "#2496ed", name: "Socket.io" },
      { icon: SiCloudinary, color: "#3448c5", name: "Cloudinary" },
      { icon: SiSupabase, color: "#3ecf8e", name: "Supabase" },
      { icon: SiFirebase, color:"#FFCA28",name:"Firebase"},
     { icon: SiWordpress, color: "#21759b", name: "WordPress" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ── Tools Component ───────────────────────────────────────────────────────
const Tools = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      style={{
        backgroundColor: "#05070A",
        width: "100%",
        padding: "2.5rem 2rem",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto", fontFamily: "'Manrope', sans-serif" }}>
        {/* Section label */}
        <p className="section-label" style={{ marginBottom: "0.5rem" }}>Technologies</p>

        {/* Heading */}
        <h2
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 700,
            fontSize: "2rem",
            color: "#f9fafb",
            letterSpacing: "-0.03em",
            marginBottom: "2rem",
          }}
        >
          Tech Stack
        </h2>

        {/* Category groups */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}
        >
          {categories.map((cat) => (
            <motion.div key={cat.label} variants={itemVariants}>
              {/* Category label */}
              <p
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#374151",
                  marginBottom: "1rem",
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                  paddingBottom: "0.5rem",
                }}
              >
                {cat.label}
              </p>

              {/* Icons row */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1.5rem",
                  alignItems: "center",
                }}
              >
                {cat.items.map((tech) => (
                  <TechIcon
                    key={tech.name}
                    icon={tech.icon}
                    color={tech.color}
                    name={tech.name}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
});

export default Tools;

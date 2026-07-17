import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaWhatsapp, FaHashnode } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

// ── Blueprint Architecture Illustration ─────────────────────────────────────
const BlueprintIllustration = () => (
  <svg
    viewBox="0 0 480 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "100%", maxWidth: "520px", height: "auto" }}
    aria-label="Software architecture diagram"
  >
    {/* ── Subtle outer glow rings ── */}
    <ellipse cx="240" cy="210" rx="180" ry="160" stroke="rgba(37,99,235,0.05)" strokeWidth="1" />
    <ellipse cx="240" cy="210" rx="210" ry="190" stroke="rgba(37,99,235,0.03)" strokeWidth="1" />

    {/* ══════════════════════════════
        FRONTEND PANEL (top-left)
    ══════════════════════════════ */}
    <motion.g
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
    >
      {/* Main window frame */}
      <rect x="28" y="40" width="150" height="110" rx="6" stroke="#1e3a5f" strokeWidth="1.2" fill="rgba(14,20,36,0.6)" />
      {/* Window title bar */}
      <rect x="28" y="40" width="150" height="24" rx="6" fill="rgba(30,58,95,0.5)" />
      <rect x="28" y="52" width="150" height="12" fill="rgba(30,58,95,0.5)" />
      {/* Traffic lights */}
      <circle cx="44" cy="52" r="4" fill="rgba(37,99,235,0.4)" />
      <circle cx="58" cy="52" r="4" fill="rgba(37,99,235,0.25)" />
      <circle cx="72" cy="52" r="4" fill="rgba(37,99,235,0.15)" />
      {/* Code lines inside */}
      <rect x="40" y="78" width="80" height="3" rx="1.5" fill="rgba(37,99,235,0.5)" />
      <rect x="40" y="88" width="60" height="3" rx="1.5" fill="rgba(100,140,200,0.3)" />
      <rect x="40" y="98" width="90" height="3" rx="1.5" fill="rgba(37,99,235,0.35)" />
      <rect x="40" y="108" width="50" height="3" rx="1.5" fill="rgba(100,140,200,0.2)" />
      <rect x="40" y="118" width="70" height="3" rx="1.5" fill="rgba(37,99,235,0.3)" />
      {/* Label */}
      <text x="103" y="157" fontFamily="monospace" fontSize="9" fill="rgba(37,99,235,0.6)" textAnchor="middle">Frontend</text>
    </motion.g>

    {/* ══════════════════════════════
        API / BACKEND NODE (center)
    ══════════════════════════════ */}
    <motion.g
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
    >
      {/* Hexagon-ish octagon for API */}
      <rect x="188" y="160" width="104" height="86" rx="8" stroke="#2563EB" strokeWidth="1.4" fill="rgba(14,20,36,0.8)" />
      {/* Inner detail lines */}
      <line x1="188" y1="178" x2="292" y2="178" stroke="rgba(37,99,235,0.2)" strokeWidth="0.8" />
      <text x="240" y="173" fontFamily="monospace" fontSize="8" fill="rgba(37,99,235,0.5)" textAnchor="middle">API</text>
      {/* Endpoint rows */}
      <rect x="200" y="186" width="18" height="6" rx="2" fill="rgba(34,197,94,0.3)" />
      <rect x="222" y="186" width="48" height="6" rx="2" fill="rgba(37,99,235,0.15)" />
      <rect x="200" y="198" width="18" height="6" rx="2" fill="rgba(249,115,22,0.3)" />
      <rect x="222" y="198" width="40" height="6" rx="2" fill="rgba(37,99,235,0.15)" />
      <rect x="200" y="210" width="18" height="6" rx="2" fill="rgba(139,92,246,0.3)" />
      <rect x="222" y="210" width="52" height="6" rx="2" fill="rgba(37,99,235,0.15)" />
      <rect x="200" y="222" width="18" height="6" rx="2" fill="rgba(37,99,235,0.35)" />
      <rect x="222" y="222" width="44" height="6" rx="2" fill="rgba(37,99,235,0.15)" />
      {/* Label */}
      <text x="240" y="262" fontFamily="monospace" fontSize="9" fill="rgba(37,99,235,0.6)" textAnchor="middle">Backend / API</text>
    </motion.g>

    {/* ══════════════════════════════
        DATABASE (bottom-left)
    ══════════════════════════════ */}
    <motion.g
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
    >
      {/* Database cylinder */}
      <ellipse cx="88" cy="296" rx="44" ry="12" stroke="#1e3a5f" strokeWidth="1.2" fill="rgba(14,20,36,0.7)" />
      <rect x="44" y="296" width="88" height="52" fill="rgba(14,20,36,0.7)" />
      <rect x="44" y="296" width="88" height="52" stroke="#1e3a5f" strokeWidth="1.2" fill="none" />
      <ellipse cx="88" cy="348" rx="44" ry="12" stroke="#1e3a5f" strokeWidth="1.2" fill="rgba(18,28,50,0.8)" />
      {/* Stripe lines on cylinder */}
      <line x1="44" y1="314" x2="132" y2="314" stroke="rgba(30,58,95,0.6)" strokeWidth="0.8" />
      <line x1="44" y1="330" x2="132" y2="330" stroke="rgba(30,58,95,0.4)" strokeWidth="0.8" />
      {/* Label */}
      <text x="88" y="376" fontFamily="monospace" fontSize="9" fill="rgba(37,99,235,0.6)" textAnchor="middle">Database</text>
    </motion.g>

    {/* ══════════════════════════════
        CACHE / REDIS NODE (top-right)
    ══════════════════════════════ */}
    <motion.g
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
    >
      <rect x="322" y="46" width="118" height="80" rx="6" stroke="#1e3a5f" strokeWidth="1.2" fill="rgba(14,20,36,0.6)" />
      <line x1="322" y1="64" x2="440" y2="64" stroke="rgba(30,58,95,0.5)" strokeWidth="0.8" />
      <text x="381" y="59" fontFamily="monospace" fontSize="8" fill="rgba(37,99,235,0.5)" textAnchor="middle">Cache Layer</text>
      {/* Key-value pairs */}
      <rect x="334" y="74" width="24" height="5" rx="2" fill="rgba(37,99,235,0.4)" />
      <rect x="362" y="74" width="60" height="5" rx="2" fill="rgba(37,99,235,0.15)" />
      <rect x="334" y="84" width="24" height="5" rx="2" fill="rgba(37,99,235,0.3)" />
      <rect x="362" y="84" width="44" height="5" rx="2" fill="rgba(37,99,235,0.15)" />
      <rect x="334" y="94" width="24" height="5" rx="2" fill="rgba(37,99,235,0.2)" />
      <rect x="362" y="94" width="52" height="5" rx="2" fill="rgba(37,99,235,0.15)" />
      <text x="381" y="142" fontFamily="monospace" fontSize="9" fill="rgba(37,99,235,0.6)" textAnchor="middle">Redis Cache</text>
    </motion.g>

    {/* ══════════════════════════════
        AUTH SERVICE (bottom-right)
    ══════════════════════════════ */}
    <motion.g
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 1, ease: "easeOut" }}
    >
      <rect x="322" y="280" width="118" height="76" rx="6" stroke="#1e3a5f" strokeWidth="1.2" fill="rgba(14,20,36,0.6)" />
      <line x1="322" y1="298" x2="440" y2="298" stroke="rgba(30,58,95,0.5)" strokeWidth="0.8" />
      <text x="381" y="293" fontFamily="monospace" fontSize="8" fill="rgba(37,99,235,0.5)" textAnchor="middle">Auth Service</text>
      {/* Shield icon area */}
      <circle cx="345" cy="330" r="10" stroke="rgba(37,99,235,0.35)" strokeWidth="1" fill="rgba(37,99,235,0.05)" />
      <path d="M345 323 L345 337 M340 326 L350 326" stroke="rgba(37,99,235,0.4)" strokeWidth="1.2" strokeLinecap="round" />
      <rect x="360" y="320" width="60" height="5" rx="2" fill="rgba(37,99,235,0.2)" />
      <rect x="360" y="330" width="44" height="5" rx="2" fill="rgba(37,99,235,0.15)" />
      <rect x="360" y="340" width="52" height="5" rx="2" fill="rgba(37,99,235,0.1)" />
      <text x="381" y="372" fontFamily="monospace" fontSize="9" fill="rgba(37,99,235,0.6)" textAnchor="middle">JWT / Auth</text>
    </motion.g>

    {/* ══════════════════════════════
        CONNECTION LINES (animated dashes)
    ══════════════════════════════ */}

    {/* Frontend → API */}
    <motion.path
      d="M178 105 Q200 140 200 160"
      stroke="rgba(37,99,235,0.5)"
      strokeWidth="1.2"
      fill="none"
      strokeDasharray="6 4"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ delay: 1.2, duration: 1.2, ease: "easeOut" }}
    />
    {/* Animated flow on Frontend → API */}
    <path
      d="M178 105 Q200 140 200 160"
      stroke="rgba(37,99,235,0.6)"
      strokeWidth="1.2"
      fill="none"
      strokeDasharray="6 22"
      className="blueprint-dash"
    />

    {/* API → Database */}
    <motion.path
      d="M200 246 Q155 268 132 296"
      stroke="rgba(37,99,235,0.5)"
      strokeWidth="1.2"
      fill="none"
      strokeDasharray="6 4"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ delay: 1.4, duration: 1.2, ease: "easeOut" }}
    />
    <path
      d="M200 246 Q155 268 132 296"
      stroke="rgba(37,99,235,0.6)"
      strokeWidth="1.2"
      fill="none"
      strokeDasharray="6 22"
      className="blueprint-dash"
      style={{ animationDelay: "0.5s" }}
    />

    {/* API → Cache */}
    <motion.path
      d="M292 185 Q320 155 322 126"
      stroke="rgba(37,99,235,0.5)"
      strokeWidth="1.2"
      fill="none"
      strokeDasharray="6 4"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
    />
    <path
      d="M292 185 Q320 155 322 126"
      stroke="rgba(37,99,235,0.6)"
      strokeWidth="1.2"
      fill="none"
      strokeDasharray="6 22"
      className="blueprint-dash"
      style={{ animationDelay: "1s" }}
    />

    {/* API → Auth */}
    <motion.path
      d="M292 220 Q320 260 322 300"
      stroke="rgba(37,99,235,0.5)"
      strokeWidth="1.2"
      fill="none"
      strokeDasharray="6 4"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ delay: 1.6, duration: 1.2, ease: "easeOut" }}
    />
    <path
      d="M292 220 Q320 260 322 300"
      stroke="rgba(37,99,235,0.6)"
      strokeWidth="1.2"
      fill="none"
      strokeDasharray="6 22"
      className="blueprint-dash"
      style={{ animationDelay: "1.5s" }}
    />

    {/* ══════════════════════════════
        NODE DOTS at connection points
    ══════════════════════════════ */}
    <motion.circle cx="178" cy="105" r="3.5" fill="#2563EB" className="blueprint-pulse"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} />
    <motion.circle cx="200" cy="160" r="3.5" fill="#2563EB" className="blueprint-pulse"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} />
    <motion.circle cx="200" cy="246" r="3.5" fill="#2563EB" className="blueprint-pulse"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
      style={{ animationDelay: "0.3s" }} />
    <motion.circle cx="132" cy="296" r="3.5" fill="#1e3a5f"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} />
    <motion.circle cx="292" cy="185" r="3.5" fill="#2563EB" className="blueprint-pulse"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
      style={{ animationDelay: "0.6s" }} />
    <motion.circle cx="322" cy="126" r="3.5" fill="#1e3a5f"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} />
    <motion.circle cx="292" cy="220" r="3.5" fill="#2563EB" className="blueprint-pulse"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
      style={{ animationDelay: "0.9s" }} />
    <motion.circle cx="322" cy="300" r="3.5" fill="#1e3a5f"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }} />

    {/* ══════════════════════════════
        FLOATING MINI CODE SYMBOLS
    ══════════════════════════════ */}
    <motion.text
      x="168" y="36"
      fontFamily="monospace" fontSize="10" fill="rgba(37,99,235,0.3)"
      initial={{ opacity: 0 }} animate={{ opacity: [0, 0.4, 0.3] }}
      transition={{ delay: 1.8, duration: 1 }}
    >{"</"}{">"}
    </motion.text>
    <motion.text
      x="410" y="224"
      fontFamily="monospace" fontSize="9" fill="rgba(37,99,235,0.25)"
      initial={{ opacity: 0 }} animate={{ opacity: [0, 0.35, 0.25] }}
      transition={{ delay: 2, duration: 1 }}
    >{"{ }"}
    </motion.text>
    <motion.text
      x="50" y="262"
      fontFamily="monospace" fontSize="9" fill="rgba(37,99,235,0.2)"
      initial={{ opacity: 0 }} animate={{ opacity: [0, 0.3, 0.2] }}
      transition={{ delay: 2.2, duration: 1 }}
    >{"SQL"}
    </motion.text>
  </svg>
);

// ── Hero Component ───────────────────────────────────────────────────────────
const Home = forwardRef(({ cvLink, projectsRef, scrollToRef }, ref) => {
  return (
    <div
      ref={ref}
      className="relative w-screen blueprint-dots"
      style={{
        minHeight: "100vh",
        backgroundColor: "#05070A",
        display: "flex",
        alignItems: "center",
        paddingTop: "56px",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial glow behind content */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "20%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(ellipse at center, rgba(37,99,235,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(ellipse at center, rgba(37,99,235,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "4rem 2rem",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "45% 55%",
          gap: "3rem",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* ── Left Column ──────────────────── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 500,
              fontSize: "0.9rem",
              color: "#9CA3AF",
              letterSpacing: "0.02em",
              margin: 0,
            }}
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              margin: 0,
              color: "#f9fafb",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
            }}
          >
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              style={{ display: "inline-block" }}
            >
              Abdulrahman
            </motion.span>{" "}
            <motion.span
              className="name-shimmer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
              style={{ display: "inline-block" }}
            >
              Rufai
            </motion.span>
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9, ease: "easeOut" }}
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 600,
              fontSize: "1.05rem",
              color: "#D1D5DB",
              margin: 0,
              letterSpacing: "0.01em",
            }}
          >
            Full-stack Software Developer
          </motion.p>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.9, ease: "easeOut" }}
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 400,
              fontSize: "0.95rem",
              color: "#9CA3AF",
              lineHeight: 1.75,
              margin: 0,
              maxWidth: "420px",
            }}
          >
            I build software solutions for businesses using modern web
            technologies, creating reliable web applications, backend systems,
            and digital products.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.9, ease: "easeOut" }}
            style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
          >
            <button
              className="btn-primary"
              onClick={() => scrollToRef && scrollToRef(projectsRef)}
            >
              View Projects
            </button>
            <a
              href={cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ textDecoration: "none" }}
            >
              View CV ↗
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.9, ease: "easeOut" }}
            style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}
          >
            <a
              href="https://ng.linkedin.com/in/abdulrahman-rufai-202136280"
              target="_blank" rel="noopener noreferrer"
              title="LinkedIn"
              style={{ color: "#4b5563", transition: "color 0.2s", display: "flex" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#D1D5DB")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#4b5563")}
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/Omotayo21"
              target="_blank" rel="noopener noreferrer"
              title="GitHub"
              style={{ color: "#4b5563", transition: "color 0.2s", display: "flex" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#D1D5DB")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#4b5563")}
            >
              <FaGithub size={20} />
            </a>
            <a
              href="mailto:rufaiabdulrahman21@gmail.com"
              title="Email"
              style={{ color: "#4b5563", transition: "color 0.2s", display: "flex" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#D1D5DB")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#4b5563")}
            >
              <IoMail size={20} />
            </a>
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
           
          </motion.div>
        </div>

        {/* ── Right Column — Blueprint Illustration ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BlueprintIllustration />
        </motion.div>
      </div>

      {/* Responsive styles for mobile */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding: 2rem 1.25rem !important;
            gap: 2.5rem !important;
          }
          .hero-grid > div:last-child {
            display: none;
          }
        }
      `}</style>
    </div>
  );
});

export default Home;

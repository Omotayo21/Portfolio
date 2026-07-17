import React from "react";
import { X } from "phosphor-react";
import { Link } from "react-router-dom";

interface SidebarProps {
  closeSidebar: () => void;
  scrollToRef: (ref: React.RefObject<HTMLDivElement>) => void;
  activeSection: string | null;
  aboutRef: React.RefObject<HTMLDivElement>;
  toolsRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  cvLink: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  closeSidebar,
  scrollToRef,
  activeSection,
  aboutRef,
  toolsRef,
  projectsRef,
  contactRef,
  cvLink,
}) => {
  const navItems = [
    { label: "About", section: "about", ref: aboutRef },
    { label: "Tech Stack", section: "tools", ref: toolsRef },
    { label: "Projects", section: "projects", ref: projectsRef },
    { label: "Contact", section: "contact", ref: contactRef },
  ];

  return (
    <div
      className="flex flex-col fixed top-0 left-0 w-screen h-screen z-30 items-center justify-center"
      style={{
        background: "rgba(5, 7, 10, 0.97)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        fontFamily: "'Manrope', sans-serif",
      }}
    >
      {/* Close button */}
      <button
        onClick={closeSidebar}
        style={{
          position: "absolute",
          top: "1rem",
          right: "1.25rem",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          color: "#6b7280",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0.5rem",
          borderRadius: "6px",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#f9fafb")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
      >
        <X size={22} />
      </button>

      {/* Logo */}
      <div
        style={{
          position: "absolute",
          top: "1rem",
          left: "1.25rem",
          fontWeight: 800,
          fontSize: "1rem",
          color: "#f9fafb",
          letterSpacing: "-0.02em",
        }}
      >
        AR<span style={{ color: "#2563EB" }}>.</span>
      </div>

      {/* Nav items */}
      <div
        className="flex flex-col items-center"
        style={{ gap: "2rem" }}
      >
        {navItems.map((item) => (
          <button
            key={item.section}
            onClick={() => {
              scrollToRef(item.ref);
              closeSidebar();
            }}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontFamily: "'Manrope', sans-serif",
              fontWeight: activeSection === item.section ? 700 : 500,
              fontSize: "1.5rem",
              color: activeSection === item.section ? "#f9fafb" : "#6b7280",
              borderBottom:
                activeSection === item.section
                  ? "1px solid #2563EB"
                  : "1px solid transparent",
              paddingBottom: "3px",
              transition: "color 0.2s",
              letterSpacing: "-0.01em",
            }}
          >
            {item.label}
          </button>
        ))}

        {/* Web3 link */}
        <Link
          to="/web3"
          onClick={closeSidebar}
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 500,
            fontSize: "1.5rem",
            color: "#6b7280",
            textDecoration: "none",
            transition: "color 0.2s",
            letterSpacing: "-0.01em",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#f9fafb")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
        >
          Web3
        </Link>

        {/* CV link */}
        <a
          href={cvLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeSidebar}
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 600,
            fontSize: "0.875rem",
            letterSpacing: "0.04em",
            color: "#e5e7eb",
            background: "#0A0D12",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "8px",
            padding: "0.6rem 1.5rem",
            textDecoration: "none",
            marginTop: "0.5rem",
          }}
        >
          View CV ↗
        </a>
      </div>
    </div>
  );
};

export default Sidebar;

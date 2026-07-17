import { Analytics } from "@vercel/analytics/react";
import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import Contact from "./Contact";
import Tools from "./Tools";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { List } from "phosphor-react";
import Sidebar from "./Sidebar";

// ── Replace this with your Google Drive CV link ──
const CV_LINK = "https://drive.google.com/file/d/1BHxVyX8y6ocNlAFdxkV25GKpva4yCv3d/view?usp=drive_link";

const MainPortfolio = () => {
  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const toolsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState(null);
  const [dropdown, setDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const openSideBar = () => setDropdown(true);
  const closeSidebar = () => setDropdown(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 80;
      if (
        contactRef.current?.offsetTop !== undefined &&
        scrollPosition >= contactRef.current?.offsetTop
      ) {
        setActiveSection("contact");
      } else if (
        projectsRef.current?.offsetTop !== undefined &&
        scrollPosition >= projectsRef.current?.offsetTop
      ) {
        setActiveSection("projects");
      } else if (
        toolsRef.current?.offsetTop !== undefined &&
        scrollPosition >= toolsRef.current?.offsetTop
      ) {
        setActiveSection("tools");
      } else if (
        aboutRef.current?.offsetTop !== undefined &&
        scrollPosition >= aboutRef.current?.offsetTop
      ) {
        setActiveSection("about");
      } else {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", section: "about", ref: aboutRef },
    { label: "Tech Stack", section: "tools", ref: toolsRef },
    { label: "Projects", section: "projects", ref: projectsRef },
    { label: "Contact", section: "contact", ref: contactRef },
  ];

  return (
    <div
      className="w-screen overflow-x-hidden text-white"
      style={{ backgroundColor: "#05070A", fontFamily: "'Manrope', sans-serif" }}
    >
      {/* ── Mobile top bar ── */}
      <div
        className="fixed top-0 left-0 right-0 h-14 z-20 flex items-center justify-between px-5 lg:hidden nav-glass"
      >
        <span
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 700,
            fontSize: "0.95rem",
            color: "#f9fafb",
            letterSpacing: "-0.01em",
          }}
        >
          AR<span style={{ color: "#2563EB" }}>.</span>
        </span>
        <button
          onClick={openSideBar}
          style={{ background: "transparent", border: "none", cursor: "pointer" }}
        >
          <List size={22} weight="bold" className="text-white" />
        </button>
      </div>

      {/* ── Desktop Navigation ── */}
      <nav
        className="hidden lg:flex fixed left-0 right-0 top-0 z-20 nav-glass nav-animate"
        style={{ height: "56px" }}
      >
        <div
          className="flex flex-row items-center justify-between w-full"
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}
        >
          {/* Logo */}
          <span
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 800,
              fontSize: "1rem",
              color: "#f9fafb",
              letterSpacing: "-0.02em",
              cursor: "pointer",
            }}
            onClick={() => scrollToRef(homeRef)}
          >
            Abdulrahman<span style={{ color: "#2563EB" }}>.</span>
          </span>

          {/* Nav links */}
          <div className="flex flex-row items-center" style={{ gap: "2rem" }}>
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToRef(item.ref)}
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.875rem",
                  letterSpacing: "0.01em",
                  color: activeSection === item.section ? "#f9fafb" : "#6b7280",
                  borderBottom:
                    activeSection === item.section
                      ? "1px solid #2563EB"
                      : "1px solid transparent",
                  paddingBottom: "2px",
                  transition: "color 0.2s ease, border-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== item.section) e.currentTarget.style.color = "#d1d5db";
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== item.section) e.currentTarget.style.color = "#6b7280";
                }}
              >
                {item.label}
              </button>
            ))}

            {/* Web3 link */}
            <Link
              to="/web3"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 500,
                fontSize: "0.875rem",
                letterSpacing: "0.01em",
                color: "#6b7280",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#d1d5db")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
            >
              Web3
            </Link>

            {/* CV button */}
            <a
              href={CV_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 600,
                fontSize: "0.8rem",
                letterSpacing: "0.04em",
                color: "#e5e7eb",
                background: "#0A0D12",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "6px",
                padding: "0.35rem 0.9rem",
                textDecoration: "none",
                transition: "border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(37,99,235,0.5)";
                e.currentTarget.style.background = "#111827";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.background = "#0A0D12";
              }}
            >
              CV ↗
            </a>
          </div>
        </div>
      </nav>

      {/* ── Mobile Sidebar ── */}
      {dropdown && (
        <Sidebar
          closeSidebar={closeSidebar}
          scrollToRef={scrollToRef}
          activeSection={activeSection}
          aboutRef={aboutRef}
          toolsRef={toolsRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
          cvLink={CV_LINK}
        />
      )}

      <Home ref={homeRef} cvLink={CV_LINK} projectsRef={projectsRef} scrollToRef={scrollToRef} />
      <About ref={aboutRef} />
      <Tools ref={toolsRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} cvLink={CV_LINK} />
      <Footer />
      <ToastContainer
        position="bottom-right"
        toastStyle={{ background: "#0A0D12", color: "#e5e7eb", border: "1px solid rgba(255,255,255,0.08)" }}
      />
      <Analytics />
    </div>
  );
};

export default MainPortfolio;

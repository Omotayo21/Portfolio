import React, { useRef, useEffect, useState } from "react";
import Footer from "./components/footer";
import Contact from "./components/Contact";
import Tools from "./components/Tools";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (
        contactRef.current?.offsetTop !== undefined &&
        contactRef.current?.offsetHeight !== undefined &&
        scrollPosition >= contactRef.current?.offsetTop &&
        scrollPosition <
          contactRef.current?.offsetTop + contactRef.current?.offsetHeight
      ) {
        setActiveSection("contact");
      } else if (
        projectsRef.current?.offsetTop !== undefined &&
        projectsRef.current?.offsetHeight !== undefined &&
        scrollPosition >= projectsRef.current?.offsetTop &&
        scrollPosition <
          projectsRef.current?.offsetTop + projectsRef.current?.offsetHeight
      ) {
        setActiveSection("projects");
      } else if (
        toolsRef.current?.offsetTop !== undefined &&
        toolsRef.current?.offsetHeight !== undefined &&
        scrollPosition >= toolsRef.current?.offsetTop &&
        scrollPosition <
          toolsRef.current?.offsetTop + toolsRef.current?.offsetHeight
      ) {
        setActiveSection("tools");
      } else if (
        aboutRef.current?.offsetTop !== undefined &&
        aboutRef.current?.offsetHeight !== undefined &&
        scrollPosition >= aboutRef.current?.offsetTop &&
        scrollPosition <
          aboutRef.current?.offsetTop + aboutRef.current?.offsetHeight
      ) {
        setActiveSection("about");
      } else {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      
        <div
          className="flex flex-row gap-x-4 fixed w-full items-center justify-center px-2"
          style={{ backdropFilter: "blur(10px)" }}
        >
          <div className="bg-white gap-x-4 bg-opacity-40 rounded-lg lg:w-full py-4 flex flex-row items-center justify-center font-semibold font-serif">
            <p
              onClick={() => scrollToRef(homeRef)}
              className={`${
                activeSection === "home"
                  ? "text-green-700 underline"
                  : "hover:text-green-700"
              } cursor-pointer`}
            >
              Home
            </p>
            <p
              onClick={() => scrollToRef(aboutRef)}
              className={`${
                activeSection === "about"
                  ? "text-green-700 underline"
                  : "hover:text-green-700"
              } cursor-pointer`}
            >
              About
            </p>
            <p
              onClick={() => scrollToRef(toolsRef)}
              className={`${
                activeSection === "tools"
                  ? "text-green-700 underline"
                  : "hover:text-green-700"
              } cursor-pointer`}
            >
              Tools
            </p>
            <p
              onClick={() => scrollToRef(projectsRef)}
              className={`${
                activeSection === "projects"
                  ? "text-green-700 underline"
                  : "hover:text-green-700"
              } cursor-pointer`}
            >
              Portfolio
            </p>
            <p
              onClick={() => scrollToRef(contactRef)}
              className={`${
                activeSection === "contact"
                  ? "text-green-700 underline"
                  : "hover:text-green-700"
              } cursor-pointer`}
            >
              Contact
            </p>
          
        </div>
      </div>
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Tools ref={toolsRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;

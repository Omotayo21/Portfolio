import React from "react";
import { X } from "phosphor-react";

interface SidebarProps {
  closeSidebar: () => void;
  scrollToRef: (ref: React.RefObject<HTMLDivElement>) => void;
  activeSection: string | null;
 // homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  toolsRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const Sidebar: React.FC<SidebarProps> = ({
  closeSidebar,
  scrollToRef,
  activeSection,
 // homeRef,
  aboutRef,
  toolsRef,
  projectsRef,
  contactRef,
}) => {
  return (
    <div
      className="flex flex-col fixed top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-80 z-30 items-center justify-center"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <button onClick={closeSidebar} className="absolute top-4 right-4">
        <X size={24} />
      </button>
      <div className="flex flex-col items-center gap-y-4 font-semibold font-serif">
        <p
          onClick={() => {
            scrollToRef(aboutRef);
            closeSidebar();
          }}
          className={`${
            activeSection === "about"
              ? "text-blue-500 underline"
              : "hover:text-blue-500"
          } cursor-pointer`}
        >
          About
        </p>
        <p
          onClick={() => {
            scrollToRef(toolsRef);
            closeSidebar();
          }}
          className={`${
            activeSection === "tools"
              ? "text-blue-500 underline"
              : "hover:text-blue-500"
          } cursor-pointer`}
        >
          Tools
        </p>
        <p
          onClick={() => {
            scrollToRef(projectsRef);
            closeSidebar();
          }}
          className={`${
            activeSection === "projects"
              ? "text-blue-500 underline"
              : "hover:text-blue-500"
          } cursor-pointer`}
        >
          Portfolio
        </p>
        <p
          onClick={() => {
            scrollToRef(contactRef);
            closeSidebar();
          }}
          className={`${
            activeSection === "contact"
              ? "text-blue-500 underline"
              : "hover:text-blue-500"
          } cursor-pointer`}
        >
          Contact
        </p>
        <a
          href="https://drive.google.com/file/d/1wl669RWpmaX6JgZKTE1nutRiKq5_pCRc/view?usp=drive_link"
          className={`cursor-pointer bg-blue-700 p-2 border border-transparent rounded-md`}
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Sidebar;

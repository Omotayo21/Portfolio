import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { BiGlobe } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";
import MobileApp from "./MobileApp";

// Import your images
const img13 = "/shopping.png";
const img12 = "/quiz.png";
const img7 = "/feedback.png";
const img5 = "/hangman.png";
const img11 = "/kanban.png";
const img6 = "/devlinks.png";

// All possible animation types
const animationTypes = ["left", "right", "top", "bottom", "scale", "rotate"];

// Animation variants
const fadeInVariants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  hiddenBottom: { opacity: 0, y: 100 },
  hiddenTop: { opacity: 0, y: -100 },
  hiddenScale: { opacity: 0, scale: 0.8 },
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

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  const projects = [
   
    {
      id: 1,
      title: "Devlinks",
      description:
        "A developer link management platform which is a web app for managing and sharing links easily. It offers link CRUD, real-time previews, and profile setup with pictures",
      tech: "React.js, Tailwind, express.js, Node.js, Mongoose, MongoDb, Jwttoken, nodemailer",
      liveLink: "https://rahman-devlinks.vercel.app/",
      codeLink: "https://github.com/Omotayo21/devlinks",
      image: img6,
      borderColor: "border-red-500",
      animation:
        animationTypes[Math.floor(Math.random() * animationTypes.length)],
    },
    {
      id: 2,
      title: "Kanban board",
      description:
        "A full stack web application built with Next.js, where users can sign up, verify their email, change password if forgotten. It allows users to create, update, and manage boards and tasks.",
      tech: "Next.js, Redux, Tailwind, Mongoose, MongoDb, Jwttoken, nodemailer",
      liveLink: "https://kanban-board-vert-seven.vercel.app/",
      codeLink: "https://github.com/Omotayo21/kanban-board/",
      image: img11,
      borderColor: "border-blue-500",
      animation:
        animationTypes[Math.floor(Math.random() * animationTypes.length)],
    },
    {
      id: 3,
      title: "Product feedback app",
      description:
        "Full stack web application that allows users to create, edit, delete and engage with the community by commenting on feedback entries and responding to existing comments.",
      tech: "Next.js, Tailwind, Mongoose, MongoDb.",
      liveLink:
        "https://product-feedback-app-ap8f-j61bn8v45-omotayo21s-projects.vercel.app/home",
      codeLink: "https://github.com/Omotayo21/Product-feedback-app/tree/main",
      image: img7,
      borderColor: "border-purple-500",
      animation:
        animationTypes[Math.floor(Math.random() * animationTypes.length)],
    },
    {
      id: 4,
      title: "Vue E-commerce App",
      description:
        "An E-commerce app where users can sign up and be authenticated with firebase, select products, remove or add products, see total and checkout.",
      tech: "Vue, Pinia, tailwind css, Firebase",
      liveLink:
        "https://vue-shopping-qpuw32o2p-omotayo21s-projects.vercel.app/",
      codeLink: "https://github.com/Omotayo21/Vue-shopping-app/tree/main",
      image: img13,
      borderColor: "border-green-500",
      animation:
        animationTypes[Math.floor(Math.random() * animationTypes.length)],
    },
    {
      id: 5,
      title: "Hangman Game",
      description:
        "The hangman game is an entertaining game to test your knowledge across various categories. Challenge yourself with word-guessing fun as you uncover hidden phrases.",
      tech: "Vue, Pinia, tailwind css.",
      liveLink: "https://rahman-hangman.vercel.app/",
      codeLink: "https://github.com/Omotayo21/rahman-hangman-vue",
      image: img5,
      borderColor: "border-yellow-500",
      animation:
        animationTypes[Math.floor(Math.random() * animationTypes.length)],
    },
    {
      id: 6,
      title: "Quiz app",
      description:
        "The quiz application is a web appplication for selecting and taking various frontend related quizzes. It contains multiple choice questions and can let you track your scores.",
      tech: "React, Redux, Typescript, tailwind css",
      liveLink: "https://quiz-app-fc4v.vercel.app/",
      codeLink: "https://github.com/Omotayo21/Quiz-app",
      image: img12,
      borderColor: "border-indigo-500",
      animation:
        animationTypes[Math.floor(Math.random() * animationTypes.length)],
    },
    // ... rest of your projects with random animations
  ];

  const getInitialVariant = (animationType) => {
    switch (animationType) {
      case "left":
        return "hiddenLeft";
      case "right":
        return "hiddenRight";
      case "bottom":
        return "hiddenBottom";
      case "top":
        return "hiddenTop";
      case "scale":
        return "hiddenScale";
      case "rotate":
        return "hiddenRotate";
      default:
        return "hiddenLeft";
    }
  };

  return (
    <div
      ref={ref}
      className="w-full py-12 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-4xl text-white font-bold uppercase text-center mb-12"
        >
          Projects
        </motion.h2>

        <div className="relative space-y-8 lg:space-y-4">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            const overlapAmount = "25%";

            return (
              <motion.div
                key={project.id}
                initial={getInitialVariant(project.animation)}
                whileInView="visible"
                viewport={{
                  once: true,
                  margin: `-${overlapAmount} 0px -${overlapAmount} 0px`,
                }}
                variants={fadeInVariants}
                className={`relative ${isEven ? "lg:pr-[30%]" : "lg:pl-[30%]"}`}
              >
                <motion.div
                  whileHover={{
                    scale: 1.03,
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  className={`h-full rounded-xl ${
                    project.borderColor
                  } border-2 p-6 bg-black text-white shadow-lg transition-all duration-300 ${
                    isEven ? "lg:mr-auto" : "lg:ml-auto"
                  }`}
                  style={{ maxWidth: "800px" }}
                >
                  <img
                    src={project.image}
                    className="lg:w-full lg:h-80 object-cover rounded-lg mb-6"
                    alt={project.title}
                  />
                  <div className="space-y-4">
                    <h3 className="font-bold text-2xl uppercase text-gray-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300">{project.description}</p>
                    <div className="text-gray-300 font-medium">
                      <span className="font-semibold">Tech stack:</span>{" "}
                      {project.tech}
                    </div>
                    <div className="flex justify-between pt-4">
                      <a
                        href={project.liveLink}
                        className="flex items-center gap-2 text-green-500 hover:text-green-800 transition-colors hover:underline"
                      >
                        <BiGlobe size={20} />
                        <span>View Live</span>
                      </a>
                      <a
                        href={project.codeLink}
                        className="flex items-center gap-2 text-gray-300 hover:text-blue-500 transition-colors"
                      >
                        <FaGithub size={20} />
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <MobileApp />
      </div>
    </div>
  );
});

export default Projects;

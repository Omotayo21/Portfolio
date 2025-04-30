import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";


const MobileApp = () => {
  const mobileApps = [
    {
      id: 1,
      title: "News App Mobile App",
      description:
        "A mobile app built with React Native that displays news from various categories which you can select. Users can also select news from various regions/countries, view details on the news then get easily redirected to the full article if they choose to see it.",
      techStack: "React Native, Expo CLI, News API",
      image: "/floxx.jpg",
      githubLink: "https://github.com/Omotayo21/News-Mobile-App",
      //demoLink: "#",
      tag: "React Native",
    },
    {
      id: 2,
      title: "E-Commerce Mobile App",
      description:
        "A full-stack mobile e-commerce application built with React Native, express.js, mongoDB and Node.js. Includes product listings, shopping cart and user authentication.",
      techStack: "React Native,Expo CLI, mongoDB, express.js, Node.js",
      image: "/shopping mobile.jpg", // Replace with your actual image path
      githubLink: "https://github.com/Omotayo21/react-native-shopping-app",
      demoLink: "#",
      tag: "React Native",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="w-full py-16 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl text-white font-bold uppercase text-center mb-12"
        >
          Mobile Apps
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center lg:items-stretch">
          {mobileApps.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="w-full max-w-md bg-black rounded-xl border-2 border-green-600 overflow-hidden shadow-lg"
            >
              <div className="relative">
                <img
                  src={app.image}
                  className="lg:w-full lg:h-64 object-cover"
                  alt={`${app.title} screenshot`}
                />
                <div className="absolute bottom-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {app.tag}
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-gray-300 uppercase mb-4"
                >
                  {app.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-gray-200 mb-6"
                >
                  {app.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  viewport={{ once: true }}
                  className="mb-6"
                >
                  <span className="text-gray-300 font-semibold">
                    Tech stack:
                  </span>
                  <span className="text-gray-200 ml-2">{app.techStack}</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-4 border-t border-gray-900"
                >
                  <a
                    href={app.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors font-medium"
                  >
                    <FaGithub size={20} />
                    <span>View Code</span>
                  </a>

                 {/* <a
                    href={app.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <FiExternalLink size={18} />
                    <span>View Demo</span>
                  </a>*/}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default MobileApp;

import React from "react";
import { motion } from "framer-motion";
import { BiGlobe, BiArrowBack, BiCodeAlt, BiLayer, BiStats, BiTransfer } from "react-icons/bi";
import { FaGithub, FaEthereum, FaCube, FaRocket,  } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Footer from "./footer"
import Contact from "./Contact";

const  aether = "/Aetherview.png";
const marketplace = "/nftmarketplace.png";
const staking = "/staking.png";

const Web3Page = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "ERC20 Token & NFT Indexer",
      description:
        "A comprehensive dashboard for indexing and visualizing ERC20 tokens and NFTs. Features real-time data fetching, efficient parsing, and a user-friendly interface for tracking assets across the blockchain.",
      tech: ["React", "Alchemy SDK", "Ethers.js", "Tailwind CSS"],
      liveLink: "https://aether-indexer.vercel.app/",
      codeLink: "https://github.com/Omotayo21/nft-indexer",
      image: aether,
      color: "from-cyan-500 to-blue-600",
      icon: <BiLayer className="text-cyan-400" />
    },
    {
      id: 2,
      title: "NFT Marketplace",
      description:
        "A decentralized marketplace for trading Non-Fungible Tokens. Includes features for listing, buying, and auctioning NFTs, with a focus on security and seamless wallet integration.",
      tech: ["Next.js", "Solidity", "Hardhat", "IPFS"],
      liveLink: "https://rahman-nft-marketplace.vercel.app/",
      codeLink: "https://github.com/Omotayo21/NFT-Marketplace",
      image: marketplace,
      color: "from-purple-500 to-pink-600",
      icon: <FaCube className="text-purple-400" />
    },
    {
      id: 3,
      title: "Staking DApp",
      description:
        "A decentralized application allowing users to stake their tokens and earn rewards. Implements secure smart contracts for staking pools and reward distribution mechanisms.",
      tech: ["Vue.js", "web3.js", "Solidity", "Truffle"],
      liveLink: "https://rahman-staking-dapp.vercel.app/",
      codeLink: "https://github.com/Omotayo21/Staking-Dapp",
      image: staking,
      color: "from-green-500 to-emerald-600",
      icon: <FaEthereum className="text-green-400" />
    },
  ];

  const techArsenal = [
    { name: 'Solidity', icon: <BiCodeAlt /> },
    { name: 'Ethers.js', icon: <FaEthereum /> },
    { name: 'Hardhat', icon: <FaCube /> },
    { name: 'IPFS', icon: <BiLayer /> },
    { name: 'Next.js', icon: <BiGlobe /> },
    { name: 'Tailwind', icon: <BiLayer /> },
    { name: 'Wagmi', icon: <BiTransfer /> },
    { name: 'Viem', icon: <BiStats /> },
  ];



  return (
    <div className="w-screen min-h-screen bg-black font-sans text-white overflow-x-hidden relative">
      {/* Mesh Gradient Background */}
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] right-[20%] w-[30%] h-[30%] bg-indigo-800 rounded-full blur-[100px]" />
      </div>

      {/* Navigation / Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button 
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-all group px-4 py-2 rounded-full border border-white/5 hover:border-white/20 bg-white/5"
          >
            <BiArrowBack className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Portfolio</span>
          </button>
          
          <div className="flex items-center gap-3">
             <FaEthereum className="text-blue-500 text-xl animate-pulse" />
             <h1 className="text-lg font-bold tracking-tight bg-blue-400 to-purple-500 bg-clip-text text-transparent">
                WEB3_ENVIRONMENT
             </h1>
          </div>
        </div>
      </div>

      <div className="relative z-10 pt-32 pb-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 space-y-32">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tighter"
            >
              Building the Future <br />
              <span className="bg-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                on the Blockchain
              </span>
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed"
            >
                My journey into Web3 is driven by a passion for decentralization, transparency, and innovation. 
                Focusing on Solidity, smart contracts, and high-performance dApps.
            </motion.p>
        </section>

        {/* Projects Section */}
        <section className="space-y-24">
            <div className="flex items-center gap-4 mb-16">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                <h2 className="text-2xl font-bold uppercase tracking-widest text-gray-500">Selected Deployments</h2>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
            </div>

            <div className="space-y-32">
              {projects.map((project, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
                  >
                    {/* Image Side */}
                    <div className="w-full lg:w-3/5 group">
                        <div className={`relative rounded-3xl overflow-hidden p-1 bg-gradient-to-br ${project.color} shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]`}>
                             <div className="absolute inset-0 bg-black rounded-[20px] z-0 opacity-100" />
                             <img
                                src={project.image}
                                alt={project.title}
                                className="relative z-10 w-full h-auto object-cover rounded-[20px] transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                              />
                              <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                 <p className="text-white text-sm font-medium">Click "Live Demo" to explore the live environment</p>
                              </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-2/5 space-y-8">
                        <div className="flex items-center gap-4">
                            <span className={`p-3 rounded-2xl bg-gradient-to-br ${project.color} bg-opacity-10 backdrop-blur-md shadow-lg text-2xl`}>
                                {project.icon}
                            </span>
                            <span className="text-sm font-mono text-gray-500">0{project.id} / PROJECT</span>
                        </div>

                        <h3 className="text-4xl font-bold text-gray-100 tracking-tight leading-tight">{project.title}</h3>
                        <p className="text-gray-400 text-lg leading-relaxed font-light">{project.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                             {project.tech.map(t => (
                                 <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300">
                                     {t}
                                 </span>
                             ))}
                        </div>

                        <div className="flex gap-4 pt-4">
                             <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${project.color} rounded-2xl transition-all font-bold hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:scale-105 active:scale-95`}
                              >
                                <BiGlobe size={20} />
                                <span>Live Dashboard</span>
                              </a>
                              <a
                                href={project.codeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all border border-white/10 hover:border-white/20 group font-bold"
                              >
                                <FaGithub size={20} className="text-gray-400 group-hover:text-white" />
                                <span>Codebase</span>
                              </a>
                        </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
        </section>

        {/* Tech Stack & Stats */}
        <section className="grid md:grid-cols-2 gap-16 relative">
            {/* Background Accent */}
            <div className="absolute inset-0 bg-blue-500/5 blur-[100px] pointer-events-none rounded-full" />

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-10 p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 p-12 bg-blue-500/10 blur-[50px]" />
                <h3 className="text-2xl font-bold uppercase tracking-wider text-blue-400">Tech Arsenal</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {techArsenal.map((tech) => (
                        <div key={tech.name} className="flex flex-col items-center justify-center p-6 bg-black/40 border border-white/5 rounded-2xl hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group">
                            <span className="text-3xl text-gray-500 group-hover:text-blue-400 transition-colors mb-2">
                                {tech.icon}
                            </span>
                            <span className="text-xs font-mono text-gray-400 uppercase tracking-tighter group-hover:text-white">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

           
        </section>

        {/* Profile / Footer Section */}
        <section className="py-32 relative">
             <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 text-center space-y-12 max-w-4xl mx-auto"
             >
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">My Web3 Mission</h2>
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
                    <div className="relative p-12 md:p-16 bg-black rounded-3xl border border-white/10 backdrop-blur-3xl">
                        <p className="text-xl text-gray-400 leading-relaxed font-light italic">
                            "I am currently deep diving into the world of Web3, exploring Smart Contracts, DeFi protocols, and NFT standards. 
                            My journey involves hands-on experience with Solidity, Ethereum, and various Layer 2 solutions.
                            Stay tuned as I continue to build and deploy decentralized applications."
                        </p>
                        
                        <div className="mt-12 flex justify-center gap-8">
                             <div className="text-center">
                                 <p className="text-xs font-mono text-gray-600 uppercase mb-2">Current Focus</p>
                                 <p className="text-sm font-bold text-white uppercase tracking-widest">Protocol Architecture</p>
                             </div>
                             <div className="w-px h-12 bg-white/10" />
                             <div className="text-center">
                                 <p className="text-xs font-mono text-gray-600 uppercase mb-2">Availability</p>
                                 <p className="text-sm font-bold text-blue-500 uppercase tracking-widest">Open for Collabs</p>
                             </div>
                        </div>
                    </div>
                   
                </div>
             </motion.div>
        </section>
      </div>
      <Contact />
       <Footer />
    </div>
  );
};

export default Web3Page;

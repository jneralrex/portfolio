import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowUpRightFromSquare, FaShieldHalved } from "react-icons/fa6";

const projects = [
  { id: 1, title: "Getreat Healthcare", link: "https://getreat.com/" },
  { id: 2, title: "Sartor CRM", link: "https://crm.sartor.ng/" },
  { id: 3, title: "Sartor Website", link: "https://sartor.ng/" },
  { id: 4, title: "Spaceehunters", link: "https://spaceehunters.vercel.app/" },
  { id: 5, title: "Trustedtek", link: "https://trustedtek.org/" },
  { id: 6, title: "Dorascan Ai", link: "https://dorascan.ai/" },
  { id: 7, title: "Pondereth Nigeria", link: "https://ponderethnigeriaenterpriseslimited.com/" },
  { id: 8, title: "Cinco Cinema", link: "https://cincocinema.onrender.com/" },
  { id: 9, title: "Sartor Health", link: "https://sartorhealth.com/" },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F9F9FB] dark:bg-[#0B0C10] text-zinc-800 dark:text-[#F4F4F6] min-h-screen selection:bg-zinc-200 dark:selection:bg-zinc-700 selection:text-zinc-900 dark:selection:text-white font-sans antialiased overflow-x-hidden relative py-10 px-6 md:px-12 xl:px-24">



      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2025_1px,transparent_1px),linear-gradient(to_bottom,#1f2025_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 dark:opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 relative z-10">
        <div className="flex items-center gap-6">
          <motion.button
            onClick={() => navigate(-1)}
            whileHover={{ x: -4 }}
            className="p-3 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white rounded-full transition-all"
            title="Go Back"
          >
            <FaArrowLeft className="text-sm" />
          </motion.button>
          <div>
            <span className="text-[var(--g)] text-xs  tracking-widest block mb-1"> —System Architectures  </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Project Catalog</h2>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            className="flex flex-col gap-4 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
          >
            <div className="w-full rounded-xl overflow-hidden bg-zinc-900/60 border border-zinc-800 shadow-xl relative">
              <div className="h-9 bg-zinc-950/60 border-b border-zinc-800/80 px-4 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                </div>
                <div className="bg-zinc-900 text-[10px] text-zinc-500 px-4 py-0.5 rounded border border-zinc-800/60 max-w-[140px] truncate font-mono">
                  {project.link.replace("https://", "")}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-white transition"
                >
                  <FaArrowUpRightFromSquare className="text-[10px]" />
                </a>
              </div>

              <div className="relative w-full h-44 bg-zinc-950 overflow-hidden">
                <iframe
                  src={project.link}
                  title={project.title}
                  loading="lazy"
                  tabIndex={-1}
                  aria-hidden="true"
                  scrolling="no"
                  sandbox="allow-scripts allow-same-origin"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  className="w-full h-full border-none opacity-85 group-hover:opacity-100 transition duration-500 pointer-events-none select-none"
                />


                <div className="absolute inset-0 bg-transparent" />
              </div>
            </div>

            <div className="flex justify-between items-start px-1">
              <div className="max-w-[80%]">
                <h3 className="text-lg font-semibold tracking-tight group-hover:text-zinc-300 transition-colors truncate">
                  {project.title}
                </h3>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono font-medium group-hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5"
              >
                Launch <FaArrowUpRightFromSquare className="text-[10px]" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      <div>
        <div className="max-w-3xl mx-auto my-24 relative z-10 border border-zinc-800/80 bg-[#000044] dark:bg-[#0a0c14] backdrop-blur-md rounded-xl p-6 flex flex-col sm:flex-row gap-4 items-center sm:items-start text-center sm:text-left">
          <div className="p-3 bg-zinc-950/60 border border-zinc-800 text-zinc-500 rounded-lg shrink-0">
            <FaShieldHalved className="text-xl" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white tracking-tight mb-1">
              Compliance & NDA Statement
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-normal">
              The items displayed below represent projects clear of active Non-Disclosure Agreements (NDA). In adherence to legal work protections and privacy commitments, components are subject to systematic exclusion or removal from live catalog mapping upon project contractor or asset owner request.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaArrowRight } from "react-icons/fa6";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.jpg";

const projects = [
  {
    id: 1,
    link: "https://trustedtek.org",
    title: "TrustedTek",
    tags: ["React", "Tailwind", "Security"],
    desc: "A high-performance platform built with deep security optimization."
  },
  {
    id: 2,
    link: "https://sartor.ng",
    title: "Sartor CRM",
    tags: ["Node.js", "Express", "MongoDB"],
    desc: "Custom enterprise management suite optimizing team workflows."
  },
];

const LandingPage = () => {

  return (
    <div className="">

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2025_1px,transparent_1px),linear-gradient(to_bottom,#1f2025_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 dark:opacity-20 pointer-events-none" />


      <section className="relative w-full min-h-screen flex items-center px-6 md:px-12 xl:px-24 pt-20">
        <div className="absolute right-0 top-0 w-1/2 h-full block opacity-80 dark:opacity-50">
          <img
            src={heroImage}
            alt="Hero Focus"
            className="w-full h-full object-cover dark:grayscale contrast-125 mix-blend-multiply dark:mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F9F9FB] dark:from-[#0B0C10] via-transparent to-transparent" />
        </div>

        <motion.div className="max-w-3xl relative z-10 mt-20 sm:mt-0" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className=" text-[var(--g)] uppercase tracking-widest text-xs font-semibold block mb-4">
            —Available for Core Engineering Roles
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white tracking-tight leading-[1.05] mb-6">
            Building reliable, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-900 dark:from-zinc-200 dark:via-zinc-400 dark:to-zinc-600">
              production-ready
            </span> solutions.
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl font-normal leading-relaxed mb-8">
            Full-Stack Web Developer specialized in scaling clean Javascript architectures, fast query pipelines, and structured user experiences.
          </p>
          <Link to="/contact">
            <button className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 dark:bg-white text-white dark:text-black font-medium text-sm rounded-full hover:opacity-90 transition duration-300 shadow-xl shadow-zinc-950/10 dark:shadow-white/5">
              Discuss a Project
            </button>
          </Link>
        </motion.div>
      </section>

      <section className="bg-[var(--off)] py-32 px-6 md:px-12 border-t border-zinc-200 dark:border-zinc-900">
        <div className="max-w-[1440px] mx-auto ">
          <div className="mb-16">
            <span className=" text-xs uppercase tracking-widest block mb-2 text-[var(--g)]"> —SELECTED BUILDS</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Live Operations</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project) => (
              <div key={project.id} className="flex flex-col gap-4 group">
                <div className="w-full rounded-xl overflow-hidden bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-lg dark:shadow-2xl relative">
                  <div className="h-10 bg-zinc-50 dark:bg-zinc-950/60 border-b border-zinc-200 dark:border-zinc-800/80 px-4 flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                      <span className="w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                      <span className="w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                    </div>
                    <div className="bg-zinc-100 dark:bg-zinc-900 text-[11px] text-zinc-400 dark:text-zinc-500 px-6 py-0.5 rounded border border-zinc-200 dark:border-zinc-800 max-w-xs truncate font-mono">
                      {project.link.replace("https://", "")}
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition">
                      <FaArrowUpRightFromSquare className="text-xs" />
                    </a>
                  </div>

                  <div className="relative w-full h-[340px] bg-zinc-100 dark:bg-zinc-950 overflow-hidden">
                    <iframe
                      src={project.link}
                      title={project.title}
                      loading="lazy"
                      tabIndex={-1}
                      aria-hidden="true"
                      scrolling="no"
                      sandbox="allow-scripts allow-same-origin"
                      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                      className="w-full h-full border-none opacity-90 pointer-events-none select-none"
                    />
                    <div className="absolute inset-0 bg-transparent" />
                  </div>
                </div>

                <div className="pt-2 flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white tracking-tight">{project.title}</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 max-w-md">{project.desc}</p>
                    <div className="flex gap-2 mt-3">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="text-[11px] font-mono tracking-tight text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all">
                    <FaArrowUpRightFromSquare className="text-sm" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Link to="/projects" className="flex justify-center mt-12">
          <button className="mt-12 px-8 py-3.5 bg-blue-600 dark:bg-white text-white dark:text-black text-white dark:text-black font-medium text-sm rounded-full hover:opacity-90 transition duration-300 shadow-xl shadow-zinc-950/10 dark:shadow-white/5">
            View All Projects
          </button>
        </Link>
      </section>
        
      <section className="py-32 px-6 md:px-12 bg-gradient-to-br from-[var(--n)] to-[var(--n2)] dark:from-[#0a0c14] dark:to-[#11152a]">
        <div className="max-w-[1440px] mx-auto text-center">
          <span className=" text-[var(--g)] text-xs uppercase tracking-widest block mb-2"> —CAPABILITIES</span>
          <h2 className="text-white text-[clamp(26px,4vw,44px)] text-3xl md:text-4xl font-bold tracking-tight mb-4">Core Ecosystem</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12">
            {[
              { icon: <SiMongodb className="text-emerald-600 dark:text-emerald-500" />, label: "MongoDB" },
              { icon: <SiExpress className="text-zinc-800 dark:text-white" />, label: "Express" },
              { icon: <SiReact className="text-sky-600 dark:text-sky-400" />, label: "React" },
              { icon: <SiNodedotjs className="text-green-600 dark:text-green-500" />, label: "Node.js" },
            ].map((tech, idx) => (
              <div key={idx} className="bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 rounded-xl p-6 flex flex-col items-center justify-center gap-3 shadow-sm">
                <div className="text-3xl">{tech.icon}</div>
                <span className="text-xs font-medium font-mono text-zinc-600 dark:text-zinc-400 tracking-tight">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

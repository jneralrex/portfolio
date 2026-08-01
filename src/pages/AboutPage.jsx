import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 
import { FaArrowLeft, FaCircleCheck } from "react-icons/fa6";
import HtmlPics from "../assets/htmlpics.png";
import ReactPics from "../assets/reactpics.png";
import CssPics from "../assets/csspics.png";
import JavaScriptPics from "../assets/javascript.png";
import jQueryPics from "../assets/jquery.png";
import NodePics from "../assets/node.png";
import BootstrapPics from "../assets/bootstrap.png";
import next from "../assets/next.png";
import redux from "../assets/redux.png";
import git from "../assets/git.png";

const TechSkill = ({ name, image, idx }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: idx * 0.04 }}
    whileHover={{ border: "1px solid #52525b" }}
    className="text-zinc-800 dark:text-[#F4F4F6] font-medium font-sans flex items-center justify-between p-4 border border-zinc-200 dark:border-zinc-800/80 rounded-xl transition-all duration-300 bg-white dark:bg-zinc-900/30 backdrop-blur-sm shadow-sm dark:shadow-none"
  >
    <div className="flex flex-col">
      <span className="text-base tracking-tight">{name}</span>
      <span className="text-[10px] text-[var(--g)] font-mono mt-0.5  tracking-wider">
        Verified Stack
      </span>
    </div>
    <div className="bg-zinc-100 dark:bg-zinc-950 p-2 rounded-lg border border-zinc-200 dark:border-zinc-800/60 w-12 h-12 flex items-center justify-center overflow-hidden">
      <img src={image} alt={name} className="max-h-full max-w-full object-contain dark:grayscale dark:opacity-80 transition duration-300" />
    </div>
  </motion.div>
);

const AboutPage = () => {
  const navigate = useNavigate(); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F9F9FB] dark:bg-[#0B0C10] text-zinc-800 dark:text-[#F4F4F6] min-h-screen selection:bg-zinc-200 dark:selection:bg-zinc-700 selection:text-zinc-900 dark:selection:text-white font-sans antialiased overflow-x-hidden relative py-10 px-6 md:px-12 xl:px-24">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2025_1px,transparent_1px),linear-gradient(to_bottom,#1f2025_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 dark:opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto mb-16 relative z-10">
        <motion.button
          onClick={() => navigate(-1)} 
          whileHover={{ x: -4 }}
          className="p-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white rounded-full transition-all shadow-sm"
          title="Go Back"
        >
          <FaArrowLeft className="text-sm" />
        </motion.button>
      </div>

      <section className="max-w-5xl mx-auto relative z-10 mb-28">
        <span className="text-[var(--g)] text-xs uppercase tracking-widest block mb-3">
           —Bio Overview
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-10">Engineering Statement</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 text-zinc-600 dark:text-zinc-300 font-normal text-lg md:text-xl leading-relaxed space-y-6">
            <p>
              I am a passionate software developer driven by a relentless pursuit of system efficiency. My engineering focus remains steadfast on architecting high-speed, user-friendly, visually striking, and functionally innovative digital solutions.
            </p>
            <p>
              I thrive in technical environments where pushing conventional boundaries, refactoring for performance, and establishing modern software production standards are considered the norm.
            </p>
          </div>
          <div className="lg:col-span-5 border-l border-zinc-200 dark:border-zinc-800 lg:pl-8 py-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal">
            With a comprehensive commitment to code quality, I combine modern development skills with extensive runtime environment knowledge and hands-on system troubleshooting to deliver reliable builds. If you require an engineering professional focused on latency reduction, design system fidelity, and scalable infrastructure, let's connect.
          </div>
        </div>
      </section>

     <section className="max-w-5xl mx-auto relative z-10 mb-28">
        <div className="mb-10">
          <span className="text-[var(--g)] text-xs uppercase tracking-widest block mb-2">
             —Technical Ecosystem
          </span>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Engine Capabilities</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: "HTML5", image: HtmlPics },
            { name: "CSS3", image: CssPics },
            { name: "JavaScript", image: JavaScriptPics },
            { name: "jQuery", image: jQueryPics },
            { name: "Bootstrap", image: BootstrapPics },
            { name: "React.js", image: ReactPics },
            { name: "Node.js", image: NodePics },
            { name: "Next.js", image: next },
            { name: "Redux Toolkit", image: redux },
            { name: "Git Engine", image: git }
          ].map((skill, idx) => (
            <TechSkill key={idx} name={skill.name} image={skill.image} idx={idx} />
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto relative z-10">
        <div className="mb-10">
          <span className="text-[var(--g)] text-xs uppercase tracking-widest block mb-2">
             —Performance attribute
          </span>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Operational Strengths</h3>
        </div>

        <div className="flex flex-wrap gap-3">
          {[
            "Active listener & communicator",
            "Granular attention to detail",
            "Analytical problem-solving approach",
            "Critical architectural thinking",
            "Cross-functional team collaboration",
            "Disciplined delivery target achiever"
          ].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ borderColor: "#a1a1aa" }}
              className="flex items-center gap-3 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/10 backdrop-blur-md px-5 py-3 rounded-full text-sm font-medium text-zinc-600 dark:text-zinc-300 transition-colors shadow-sm dark:shadow-none"
            >
              <FaCircleCheck className="text-zinc-400 dark:text-zinc-500 text-xs shrink-0" />
              <span>{skill}</span>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default AboutPage;

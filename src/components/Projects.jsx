import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const projects = [
  {
    id: 1,
    title: "Getreat Healthcare",
    link: "https://getreat.com/",
  },
  {
    id: 2,
    title: "Sartor CRM",
    link: "https://crm.sartor.ng/",
  },
  {
    id: 3,
    title: "Sartor Website",
    link: "https://sartor.ng/",
  },
   {
    id: 4,
    title: "Spaceehunters",
    link: "https://spaceehunters.vercel.app/",
  },
  {
    id: 5,
    title: "Trustedtek",
    link: "https://trustedtek.org/",
  },
   {
    id: 6,
    title: "Cinco Cinema",
    link: "https://cincocinema.onrender.com/",
  },
];

const Projects = () => {
  const navigate = useNavigate(); 

  return (
    <div className="bg-black py-16 flex flex-col items-center">
      <motion.button
        onClick={() => navigate(-1)} 
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 15px #00FFFF",
          backgroundColor: "#1A1A1A",
        }}
        className="mb-6 px-6 py-3 border border-[#00FFFF] text-[#00FFFF] font-semibold rounded-lg transition-all duration-300 bg-[#121212] shadow-md shadow-[#00FFFF40] hover:shadow-lg"
      >
        ← 
      </motion.button>

      <motion.h2
        className="text-center text-4xl font-bold text-neon-green"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h2>

      <div className="mt-10 flex flex-wrap justify-center gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="w-72 bg-gray-900 p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <iframe
              src={project.link}
              title={project.title}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-xl text-white font-semibold mt-4">
              {project.title}
            </h3>
            <Link
              to={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3 text-neon-green font-bold hover:underline"
            >
              View Project →
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate
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




const TechSkill = ({ name, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px #00FFFF" }} // Neon glow on hover
    className="text-[#E0E0E0] font-bold font-sans mt-2 flex items-center justify-between p-3 border border-[#00FFFF] rounded-lg transition-all duration-300 bg-[#1A1A1A] shadow-lg shadow-[#00FFFF40]"
  >
    <span>{name}</span>
    <div className="border p-1 rounded-full">
      <img src={image} alt={name} className="h-[50px]" />
    </div>
  </motion.div>
);

const AboutPage = () => {
  const navigate = useNavigate(); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-b from-[#0A0A0A] to-[#121212] min-h-screen flex flex-col items-center p-4"
    >
      <motion.button
        onClick={() => navigate(-1)} 
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 15px #00FFFF",
          backgroundColor: "#1A1A1A",
        }}
        className="mb-6 px-6 py-3 border border-[#00FFFF] text-[#00FFFF] font-semibold rounded-lg transition-all duration-300 bg-[#121212] shadow-md shadow-[#00FFFF40] hover:shadow-lg"
      >
        ← Go Back
      </motion.button>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-w-[1440px] text-[#E0E0E0] font-light text-2xl"
      >
        <p>
          <span className="text-5xl font-serif text-[#00FFFF]">I</span> am a passionate software
          developer driven by a relentless pursuit of efficiency. My focus remains
          steadfast on creating high-speed, user-friendly, visually stunning, and
          innovative websites.
        </p>
        <p className="mt-4">
          <span className="text-5xl font-serif text-[#00FFFF]">I</span> thrive in environments
          where pushing boundaries and setting new standards are the norm.
        </p>
        <p className="mt-4">
          <span className="text-5xl font-serif text-[#00FFFF]">With</span> a commitment to
          excellence, I bring cutting-edge skills, extensive knowledge, and
          hands-on experience to every project. I am always seeking opportunities
          to further enhance my expertise and contribute to groundbreaking
          initiatives. If you're looking for a dedicated professional who
          prioritizes speed, usability, aesthetics, and innovation, I'm eager to
          collaborate and deliver exceptional results.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center text-3xl my-6 text-[#00FFFF] font-bold tracking-wider"
      >
        Tech Skills
      </motion.section>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl"
      >
        <TechSkill name="HTML5" image={HtmlPics} />
        <TechSkill name="CSS3" image={CssPics} />
        <TechSkill name="JavaScript" image={JavaScriptPics} />
        <TechSkill name="jQuery" image={jQueryPics} />
        <TechSkill name="Bootstrap" image={BootstrapPics} />
        <TechSkill name="React.js" image={ReactPics} />
        <TechSkill name="Node.js" image={NodePics} />
        <TechSkill name="Next.js" image={next} />
        <TechSkill name="Redux Toolkit" image={redux} />
        <TechSkill name="Git" image={git} />

      </motion.div>

      {/* Soft Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center text-3xl my-6 text-[#00FFFF] font-bold tracking-wider"
      >
        Soft Skills
      </motion.section>

      <motion.ul
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="flex flex-col gap-3 text-[#E0E0E0] text-center w-full max-w-md"
      >
        {[
          "Good listener",
          "Attention to details",
          "Problem-solving mindset",
          "Critical thinking",
          "Good team worker",
          "Disciplined achiever",
        ].map((skill, index) => (
          <motion.li
            key={index}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 15px #00FFFF",
              backgroundColor: "#1A1A1A",
            }}
            className="border border-[#00FFFF] p-3 rounded transition-all duration-300 bg-[#121212] shadow-md shadow-[#00FFFF40]"
          >
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default AboutPage;

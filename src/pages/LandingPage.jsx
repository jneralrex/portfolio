import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.jpg";

const projects = [
  { id: 1, link: "https://getreat.onrender.com/", title: "Getreat" },
  { id: 2, link: "https://sartor-crm.onrender.com/", title: "Sartor CRM" },
];

const LandingPage = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="bg-darkBg text-white min-h-screen">
      {/* Navbar */}
      <header className="fixed top-0 w-full bg-darkBg/80 backdrop-blur-lg py-4 px-8 flex flex-col md:flex-row justify-between items-center z-50 ">
        <h1 className="text-2xl font-bold text-neon">Idah Abubakar Rex</h1>
        <nav className="flex gap-6">
          <Link to="/projects" className="hover:text-neon">
            Projects
          </Link>
          <Link to="/about" className="hover:text-neon">
            About
          </Link>
          <Link to="/contact" className="hover:text-neon">
            Contact
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center mt-10">
        <img
          src={heroImage}
          alt="Hero"
          className="lg:hidden absolute w-full h-full object-cover sm:object-contain opacity-20"
        />
        <motion.div
          className="relative text-center max-w-2xl px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-neon drop-shadow-lg">
            Full-Stack Web Developer
          </h1>
          <p className="mt-4 text-gray-300">
            Crafting efficient, high-speed, and visually stunning web solutions.
          </p>
          <Link to="/contact">
            <button className="mt-6 px-6 py-2 border border-neon text-neon hover:bg-neon hover:text-darkBg transition">
              Contact Me
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Project Showcase */}
      <section className="max-w-6xl mx-auto py-20 px-6">
  <h2 className="text-4xl font-bold text-center text-neon">Projects</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
    {projects.map((project) => (
      <a
        key={project.id}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.div
          className="relative group rounded-lg overflow-hidden bg-darkCard cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <iframe
            src={project.link}
            title={project.title}
            className="w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
            <p className="text-white text-xl font-bold">{project.title}</p>
          </div>
        </motion.div>
      </a>
    ))}
  </div>

  {/* "See more" button */}
  <div className="w-full flex items-center justify-center mt-5">
    <motion.button
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 0px 15px #00FFFF",
        backgroundColor: "#1A1A1A",
      }}
      className="mb-6 px-6 py-3 border border-[#00FFFF] text-[#00FFFF] font-semibold rounded-lg transition-all duration-300 bg-[#121212] shadow-md shadow-[#00FFFF40] hover:shadow-lg"
    >
      <Link to="/projects">See more</Link>
    </motion.button>
  </div>
</section>


      {/* Tech Stack */}
      <section className="text-center py-20 bg-darkCard">
        <h2 className="text-4xl font-bold text-neon">Tech Stack</h2>
        <p className="text-gray-400 mt-2">
          Some of the technologies I work with:
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-6 text-neon text-3xl">
          <i className="devicon-mongodb-plain colored">Mongo</i>
          <i className="devicon-express-original text-white"> Express </i>
          <i className="devicon-react-original colored">React</i>
          <i className="devicon-nodejs-plain colored">Node.js</i>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 bg-darkBg">
        <p className="text-gray-500">
          &copy; 2025 My Portfolio. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 text-2xl mt-4">
        <a
  href="https://github.com/jneralrex"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-neon"
>
  <FaGithub />
</a>

<a
  href="https://www.linkedin.com/in/abubakar-idah-b081a715b"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-neon"
>
  <FaLinkedin />
</a>

        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

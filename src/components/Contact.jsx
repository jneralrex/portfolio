import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGlobeAfrica, FaPhoneAlt, FaArrowLeft } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import Snackbar from "./response/Snackbar";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const handleBackNavigate = () => navigate(-1);

  const [message, setMessage] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [snackbar, setSnackbar] = useState({ message: "", type: "" });
  const [loading, setLoading] = useState(false);

  const validateInput = (e) => {
    const { name, value } = e.target;
    setMessage((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await emailjs.send(
        "service_jstzpq3",
        "template_6ksx1j2",
        message,
        "CCRjY9nAcSfgMM0Jr"
      );

      if (response.status === 200) {
        setSnackbar({ message: "Message submitted successfully!", type: "success" });
        setMessage({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setSnackbar({ message: "Failed to submit message. Try again!", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (snackbar.message) {
      const timer = setTimeout(() => setSnackbar({ message: "", type: "" }), 5000);
      return () => clearTimeout(timer);
    }
  }, [snackbar.message]);

  return (
    <div className="absolute min-h-screen w-full bg-black flex flex-col items-center py-10">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between w-full max-w-5xl px-4"
      >
        <h1 className="text-4xl font-bold text-gray-100 md:text-5xl">
          CONTACT <span className="text-green-400">ME</span>
        </h1>
        <p className="text-gray-400 font-thin hidden md:block">
          Would you like to talk? Contact me through any of these avenues.
        </p>
        <FaArrowLeft className="text-green-400 text-2xl cursor-pointer" onClick={handleBackNavigate} />
      </motion.div>

      {/* Contact Form & Info Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mt-8 p-4"
      >
        {/* Form */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full">
          <h2 className="text-2xl font-semibold text-white mb-4">Send a Message</h2>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 rounded-md bg-gray-800 text-white focus:ring focus:ring-green-400"
              value={message.name}
              onChange={validateInput}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 rounded-md bg-gray-800 text-white focus:ring focus:ring-green-400"
              value={message.email}
              onChange={validateInput}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="p-3 rounded-md bg-gray-800 text-white focus:ring focus:ring-green-400"
              value={message.subject}
              onChange={validateInput}
              required
            />
            <textarea
              name="message"
              placeholder="Message here..."
              className="p-3 rounded-md bg-gray-800 text-white focus:ring focus:ring-green-400 h-32"
              value={message.message}
              onChange={validateInput}
              required
            />
            <button
              type="submit"
              className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition disabled:bg-gray-500"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <motion.div className="flex items-center space-x-4 bg-gray-900 p-4 rounded-lg shadow-lg">
            <FaGlobeAfrica className="text-green-400 text-3xl" />
            <div>
              <h3 className="text-white text-lg font-semibold">Location</h3>
              <p className="text-gray-400">Abuja, Nigeria</p>
            </div>
          </motion.div>

          <motion.div className="flex items-center space-x-4 bg-gray-900 p-4 rounded-lg shadow-lg">
            <FaPhoneAlt className="text-green-400 text-3xl" />
            <div>
              <h3 className="text-white text-lg font-semibold">Phone</h3>
              <p className="text-gray-400">+2348175225016</p>
              <p className="text-gray-400">+2349056574771</p>
            </div>
          </motion.div>

          <motion.div className="flex items-center space-x-4 bg-gray-900 p-4 rounded-lg shadow-lg">
            <GrMail className="text-green-400 text-3xl" />
            <div>
              <h3 className="text-white text-lg font-semibold">Email</h3>
              <p className="text-gray-400">idahabubakar49@gmail.com</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Snackbar Notification */}
      {snackbar.message && (
        <Snackbar
          message={snackbar.message}
          type={snackbar.type}
          onClose={() => setSnackbar({ message: "", type: "" })}
        />
      )}
    </div>
  );
};

export default Contact;

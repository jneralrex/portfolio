import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaGlobeAfrica, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import Snackbar from "../components/response/Snackbar";

const Contact = () => {

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
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);

  const whatsappNumbers = [
    { label: "Primary Telephony", number: "2348175225016", name: "+234 817 522 5016" },
    { label: "Secondary Telephony", number: "2349110451187", name: "+234 911 045 1187" }
  ];

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
    <div className="bg-[#F9F9FB] dark:bg-[#0B0C10] text-zinc-800 dark:text-[#F4F4F6] min-h-screen selection:bg-zinc-200 dark:selection:bg-zinc-700 selection:text-zinc-900 dark:selection:text-white font-sans antialiased overflow-x-hidden relative py-24 px-6 md:px-12 xl:px-24 flex flex-col items-center">

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2025_1px,transparent_1px),linear-gradient(to_bottom,#1f2025_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 dark:opacity-20 pointer-events-none" />

      <div className="w-full max-w-5xl flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 relative z-10">
        <div className="flex items-center gap-6">
          <motion.button
            onClick={handleBackNavigate}
            whileHover={{ x: -4 }}
            className="p-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white rounded-full transition-all shadow-sm"
            title="Go Back"
          >
            <FaArrowLeft className="text-sm" />
          </motion.button>
          <div>
            <span className="text-[var(--g)] text-xs sentence tracking-widest block mb-1">
              —Inquiry Pipeline
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">Get In Touch</h2>
          </div>
        </div>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-xs font-normal leading-relaxed hidden md:block">
          Have an optimization problem or an application architecture to build? Contact me through any line.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full max-w-5xl relative z-10">

        <div className="lg:col-span-7 bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl w-full shadow-sm dark:shadow-none">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white tracking-tight mb-2">Send a Message</h3>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] text-[var(--g)] tenderness font-mono uppercase tracking-wider pl-1">
                  Client Identification
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/80 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-500 transition text-sm font-medium"
                  value={message.name}
                  onChange={validateInput}
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] text-[var(--g)] font-mono uppercase tracking-wider pl-1">
                  Return Email Route
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/80 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-500 transition text-sm font-medium"
                  value={message.email}
                  onChange={validateInput}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] text-[var(--g)] font-mono uppercase tracking-wider pl-1">
                Project Scope / Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Brief summary of request"
                className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/80 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-500 transition text-sm font-medium"
                value={message.subject}
                onChange={validateInput}
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] text-[var(--g)] font-mono uppercase tracking-wider pl-1">
                Payload Content
              </label>
              <textarea
                name="message"
                placeholder="Describe your project, deadlines, or technical specifications..."
                className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800/80 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-500 transition text-sm font-medium h-36 resize-none"
                value={message.message}
                onChange={validateInput}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 px-6 py-3.5 bg-zinc-900 dark:bg-white text-white dark:text-black font-medium text-sm rounded-xl hover:opacity-90 transition duration-300 disabled:bg-zinc-200 dark:disabled:bg-zinc-800 disabled:text-zinc-400 dark:disabled:text-zinc-600 flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading ? "Transmitting..." : "Dispatch Message"}
            </button>
          </form>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-4">

          <div className="flex items-start gap-4 bg-white dark:bg-zinc-900/10 border border-zinc-200 dark:border-zinc-800/60 p-5 rounded-2xl shadow-sm dark:shadow-none">
            <div className="p-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 rounded-xl shrink-0">
              <FaGlobeAfrica className="text-lg" />
            </div>
            <div>
              <span className="text-[10px] text-[var(--g)] font-mono uppercase tracking-wider block mb-0.5">
                Deployment HQ
              </span>
              <h4 className="text-zinc-900 dark:text-white text-base font-semibold tracking-tight">Location</h4>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">Abuja, Nigeria</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white dark:bg-zinc-900/10 border border-zinc-200 dark:border-zinc-800/60 p-5 rounded-2xl shadow-sm dark:shadow-none">
            <div className="p-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 rounded-xl shrink-0">
              <FaPhoneAlt className="text-lg" />
            </div>
            <div>
              <span className="text-[10px] text-[var(--g)] font-mono uppercase tracking-wider block mb-0.5">
                Direct Telephony
              </span>
              <h4 className="text-zinc-900 dark:text-white text-base font-semibold tracking-tight">Phone Channels</h4>
              <div className="flex flex-col gap-1 mt-1">
                <a href="tel:+2348175225016" className="text-zinc-500 dark:text-zinc-400 text-sm hover:text-zinc-900 dark:hover:text-white transition w-fit font-mono tracking-tight">+234 817 522 5016</a>
                <a href="tel:+2349110451187" className="text-zinc-500 dark:text-zinc-400 text-sm hover:text-zinc-900 dark:hover:text-white transition w-fit font-mono tracking-tight">+234 911 045 1187</a>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white dark:bg-zinc-900/10 border border-zinc-200 dark:border-zinc-800/60 p-5 rounded-2xl shadow-sm dark:shadow-none">
            <div className="p-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 rounded-xl shrink-0">
              <GrMail className="text-lg" />
            </div>
            <div>
              <span className="text-[10px] text-[var(--g)] font-mono uppercase tracking-wider block mb-0.5">
                Electronic Inbox
              </span>
              <h4 className="text-zinc-900 dark:text-white text-base font-semibold tracking-tight">Email Route</h4>
              <a href="mailto:idahabubakar49@gmail.com" className="text-zinc-500 dark:text-zinc-400 text-sm hover:text-zinc-900 dark:hover:text-white transition block mt-1 break-all font-mono tracking-tight">
                idahabubakar49@gmail.com
              </a>
            </div>
          </div>
          

          {/* Snackbar Notification Rendering */}
          {snackbar.message && (
            <Snackbar
              message={snackbar.message}
              type={snackbar.type}
              onClose={() => setSnackbar({ message: "", type: "" })}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;

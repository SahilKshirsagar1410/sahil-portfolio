import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Linkedin, Briefcase, Award, CheckCircle2, FileText, Moon, Sun, ChevronRight, GraduationCap } from 'lucide-react';
import { QRCodeCanvas } from 'qrcode.react';

const App = () => {
  // Dark/Light Mode State
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // --- branding strategist update: set to your actual live link ---
  const linkedInUrl = "https://www.linkedin.com/in/sahil-kshirsagar-749a25218";
  const portfolioUrl = "https://sahil-portfolio-swart.vercel.app/"; // --- Patched from development ---

  // QR Code Downloader
  const downloadQR = (id, filename) => {
    const canvas = document.getElementById(id);
    const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = filename;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  // Animation settings
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${isDark ? 'bg-darkBg text-gray-100 selection:bg-brandYellow selection:text-black' : 'bg-lightBg text-gray-900 selection:bg-brandAccent selection:text-white'}`}>
      
      {/* --- NAVIGATION / TOGGLE --- */}
      <nav className="fixed top-0 w-full p-6 flex justify-end z-50 mix-blend-difference text-white">
        <button 
          onClick={() => setIsDark(!isDark)}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all"
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[95vh] flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
        {/* Subtle glowing background effect */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] pointer-events-none transition-colors duration-700 ${isDark ? 'bg-brandYellow/5' : 'bg-brandAccent/5'}`} />

        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Availability Badge */}
          <div className={`mb-8 inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold border backdrop-blur-sm ${isDark ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-green-100 border-green-200 text-green-700'}`}>
            <span className={`w-2 h-2 rounded-full animate-pulse ${isDark ? 'bg-green-400' : 'bg-green-600'}`} />
            Available Immediately | Full UK Right to Work
          </div>

          {/* Profile Image */}
          <motion.div whileHover={{ scale: 1.05 }} className="relative mb-10 group">
            <div className={`absolute inset-0 rounded-full blur-xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${isDark ? 'bg-brandYellow/30' : 'bg-brandAccent/30'}`} />
            <img src="/profile.jpg" alt="Sahil Kshirsagar" className={`relative w-40 h-40 rounded-full object-cover border-4 shadow-2xl z-10 ${isDark ? 'border-cardDark' : 'border-white'}`} />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Sahil <span className={isDark ? 'text-brandYellow' : 'text-brandAccent'}>Kshirsagar</span>
          </h1>
          <p className={`text-xl md:text-2xl mb-10 max-w-2xl font-light leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Clinical Research Professional driving data excellence. Specialising in Phase II/III oncology trials, regulatory compliance, and seamless operational delivery.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <a href="mailto:kshirsagarsahil007@gmail.com" className={`flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold shadow-lg hover:-translate-y-1 transition-transform duration-300 ${isDark ? 'bg-brandYellow text-black hover:shadow-brandYellow/20' : 'bg-brandAccent text-white hover:shadow-brandAccent/30'}`}>
              <Mail size={20} /> Contact Me
            </a>
            <a href="/Sahil_CV.pdf" download className={`flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold border hover:-translate-y-1 transition-all duration-300 ${isDark ? 'bg-cardDark border-gray-800 text-white hover:border-gray-600' : 'bg-white border-gray-200 text-gray-900 hover:border-gray-400 shadow-sm'}`}>
              <FileText size={20} /> Download CV
            </a>
          </div>
        </motion.div>
      </section>

      {/* --- QUICK HIRE & SKILLS SECTION --- */}
      <section className={`py-24 px-6 border-y ${isDark ? 'bg-cardDark/40 border-gray-800/50' : 'bg-white/50 border-gray-200'}`}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Hire Me?</h2>
            <div className={`space-y-6 text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <p>
                <strong className={isDark ? 'text-white' : 'text-gray-900'}>Clinical Expertise:</strong> Over 3 years at IQVIA managing complex oncology trial data. I consistently achieved 98% data accuracy and reduced query turnaround times by 20% across international teams.
              </p>
              <p>
                <strong className={isDark ? 'text-white' : 'text-gray-900'}>Immediate Adaptability:</strong> Based in London with unrestricted right to work until April 2029. While advancing my clinical career, my meticulous attention to detail, advanced IT skills, and empathetic communication make me an immediate asset in administrative, customer-facing, or operational roles.
              </p>
            </div>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Clinical Data Management', 
              'ICH-GCP E6(R3) & MHRA', 
              'Medidata Rave & eTMF', 
              'Python & Advanced Excel',
              'Stakeholder Communication',
              'SLA-Driven Operations'
            ].map((skill, i) => (
              <motion.div key={i} variants={fadeInUp} className={`p-5 rounded-2xl border flex items-center gap-4 transition-colors duration-300 ${isDark ? 'bg-cardDark border-gray-800 hover:border-brandYellow/50' : 'bg-white border-gray-100 shadow-sm hover:border-brandAccent/50 hover:shadow-md'}`}>
                <CheckCircle2 className={`w-6 h-6 shrink-0 ${isDark ? 'text-brandYellow' : 'text-brandAccent'}`} />
                <span className="font-medium text-sm md:text-base">{skill}</span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* --- CAREER TIMELINE --- */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex items-center gap-4 mb-16">
            <div className={`p-3 rounded-xl ${isDark ? 'bg-brandYellow/10 text-brandYellow' : 'bg-brandAccent/10 text-brandAccent'}`}>
              <Briefcase size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Professional Experience</h2>
          </motion.div>

          <div className={`space-y-12 border-l-2 ml-4 md:ml-6 pl-8 md:pl-12 relative ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
            
            {/* IQVIA Role - Clinical Specialist focused */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative group">
              <div className={`absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full border-4 ${isDark ? 'bg-brandYellow border-darkBg shadow-[0_0_15px_rgba(253,224,71,0.4)]' : 'bg-brandAccent border-lightBg shadow-[0_0_15px_rgba(37,99,235,0.4)]'}`} />
              <p className={`text-sm font-bold uppercase tracking-widest mb-2 ${isDark ? 'text-brandYellow' : 'text-brandAccent'}`}>Mar 2023 - Feb 2026</p>
              <h3 className="text-2xl font-bold mb-1">Associate Clinical Data Coordinator</h3>
              <p className={`font-medium mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>IQVIA | Global Oncology Trials</p>
              <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Managed end-to-end clinical data discrepancy resolution across 500+ patient records. Conducted rigorous QC checks, authored data clarifications, and maintained strict compliance with ICH-GCP and MHRA regulatory frameworks. Reduced query turnaround time by 20%.
              </p>
            </motion.div>

            {/* Other Roles - focused on transferable operational excellence */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative group">
              <div className={`absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full border-4 transition-colors ${isDark ? 'bg-gray-700 border-darkBg group-hover:bg-gray-500' : 'bg-gray-300 border-lightBg group-hover:bg-gray-400'}`} />
              <p className="text-sm font-bold uppercase tracking-widest mb-2 text-gray-500">Jan 2023 - Mar 2023</p>
              <h3 className="text-xl font-bold mb-1">Voice Process Executive</h3>
              <p className={`font-medium mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Cognizant Technology Solutions</p>
              <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Managed high-volume stakeholder communications in a regulated, SLA-driven environment, ensuring precision, accuracy, and empathetic issue resolution.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative group">
              <div className={`absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full border-4 transition-colors ${isDark ? 'bg-gray-700 border-darkBg group-hover:bg-gray-500' : 'bg-gray-300 border-lightBg group-hover:bg-gray-400'}`} />
              <p className="text-sm font-bold uppercase tracking-widest mb-2 text-gray-500">Mar 2022 - Feb 2023</p>
              <h3 className="text-xl font-bold mb-1">Customer Service Team Member</h3>
              <p className={`font-medium mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Retail Store Operations</p>
              <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Delivered patient-focused customer service in a fast-paced setting. Managed inventory accurately and collaborated to exceed operational targets.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- ADDED: EDUCATION SECTION --- */}
      <section id="education" className={`py-24 px-6 border-t ${isDark ? 'bg-cardDark/30 border-gray-800' : 'bg-white border-gray-100'}`}>
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex items-center gap-4 mb-16">
            <div className={`p-3 rounded-xl ${isDark ? 'bg-brandYellow/10 text-brandYellow' : 'bg-brandAccent/10 text-brandAccent'}`}>
              <GraduationCap size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Academic Foundation</h2>
          </motion.div>

          {/* Clinical focused education item */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className={`p-8 rounded-3xl border transition-colors ${isDark ? 'bg-cardDark border-gray-800 hover:border-brandYellow/40' : 'bg-white border-gray-100 shadow-sm hover:border-brandAccent/40 hover:shadow-lg'}`}>
            <p className={`text-sm font-bold uppercase tracking-widest mb-2 ${isDark ? 'text-brandYellow' : 'text-brandAccent'}`}>2020 - 2023</p>
            <h3 className="text-2xl font-bold mt-2 text-white">Bachelor of Science, (BSc)</h3>
            <p className={`font-medium mt-1 mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Savitribai Phule Pune University | India</p>
            <p className={`mt-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Specialised in Microbiology. Coursework included advanced Laboratory Techniques, Molecular Biology, and Biostatistics, providing the foundational scientific knowledge essential for interpreting complex clinical trial protocols and data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- QR / SHARE SECTION --- */}
      <section id="connect" className={`py-24 px-6 border-t ${isDark ? 'bg-darkBg border-gray-800/50' : 'bg-lightBg border-gray-200'}`}>
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Scan to save my professional profile or view this site on a mobile device.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
          
          {/* LinkedIn Card */}
          <motion.div whileHover={{ y: -8 }} className={`p-10 rounded-3xl border flex flex-col items-center flex-1 transition-shadow duration-300 ${isDark ? 'bg-cardDark border-gray-800 hover:shadow-2xl hover:shadow-[#0A66C2]/10' : 'bg-white border-gray-200 shadow-sm hover:shadow-xl hover:shadow-[#0A66C2]/10'}`}>
            <Linkedin className="w-10 h-10 text-[#0A66C2] mb-6" />
            <h3 className="text-xl font-bold mb-6">LinkedIn Profile</h3>
            <div className="bg-white p-4 rounded-2xl mb-8 shadow-sm">
              <QRCodeCanvas id="linkedin-
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Linkedin, Briefcase, Award, CheckCircle2, FileText, Moon, Sun, ChevronRight, GraduationCap } from 'lucide-react';
import { QRCodeCanvas } from 'qrcode.react';

const App = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // --- CRITICAL: Updated live link for QR scanning ---
  const linkedInUrl = "https://www.linkedin.com/in/sahil-kshirsagar-749a25218";
  const portfolioUrl = "https://sahil-portfolio-swart.vercel.app/"; 

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

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${isDark ? 'bg-darkBg text-gray-100' : 'bg-lightBg text-gray-900'}`}>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full p-6 flex justify-end z-50 mix-blend-difference text-white">
        <button onClick={() => setIsDark(!isDark)} className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all">
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden text-center">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] pointer-events-none transition-colors duration-700 ${isDark ? 'bg-brandYellow/5' : 'bg-brandAccent/5'}`} />
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="z-10">
          <div className="mb-8 inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold border bg-green-500/10 border-green-500/20 text-green-400">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Available Immediately | Full UK Right to Work
          </div>
          <img src="/profile.jpg" alt="Sahil" className="w-40 h-40 rounded-full mx-auto mb-10 border-4 border-gray-800 shadow-2xl object-cover" />
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Sahil <span className="text-brandYellow">Kshirsagar</span></h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-10 font-light mx-auto">Clinical Research Professional & MSc Biotechnologist. Delivering data integrity in Phase II/III oncology trials.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:kshirsagarsahil007@gmail.com" className="flex items-center gap-2 px-8 py-4 rounded-xl bg-brandYellow text-black font-bold hover:scale-105 transition-transform"><Mail size={20} /> Contact Me</a>
            <a href="/Sahil_CV.pdf" download className="flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-gray-700 font-bold hover:bg-white/10 transition-all"><FileText size={20} /> Download CV</a>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 flex items-center gap-4"><Briefcase className="text-brandYellow" /> Professional Experience</h2>
        <div className="space-y-12 border-l-2 border-gray-800 pl-8 ml-4">
          <div className="relative">
            <div className="absolute -left-[41px] top-1.5 w-4 h-4 bg-brandYellow rounded-full" />
            <p className="text-brandYellow text-sm font-bold uppercase tracking-widest">2023 - 2026</p>
            <h3 className="text-2xl font-bold mt-2">Associate Clinical Data Coordinator</h3>
            <p className="text-gray-400">IQVIA | Global Oncology Trials</p>
            <p className="mt-4 text-gray-500">Managed data discrepancy resolution for 500+ patient records with 98% accuracy.</p>
          </div>
        </div>
      </section>

      {/* --- ACADEMIC FOUNDATION SECTION --- */}
      <section className="py-24 px-6 bg-cardDark/30 border-y border-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 flex items-center gap-4"><GraduationCap className="text-brandYellow" /> Academic Foundation</h2>
          <div className="grid gap-8">
            <div className="p-8 rounded-3xl border border-gray-800 bg-cardDark hover:border-brandYellow/50 transition-colors">
              <p className="text-brandYellow text-sm font-bold uppercase tracking-widest">Postgraduate</p>
              <h3 className="text-2xl font-bold mt-2">Master of Science (MSc) in Biotechnology</h3>
              <p className="text-gray-400 mt-1">Savitribai Phule Pune University</p>
            </div>
            <div className="p-8 rounded-3xl border border-gray-800 bg-cardDark hover:border-brandYellow/50 transition-colors">
              <p className="text-brandYellow text-sm font-bold uppercase tracking-widest">Undergraduate</p>
              <h3 className="text-2xl font-bold mt-2">Bachelor of Science (BSc) in Microbiology</h3>
              <p className="text-gray-400 mt-1">Savitribai Phule Pune University</p>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-24 px-6 text-center border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-12">Let's Connect</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
          <div className="bg-cardDark p-10 rounded-3xl border border-gray-800 flex-1 flex flex-col items-center">
            <Linkedin className="text-[#0A66C2] mb-6" size={40} />
            <div className="bg-white p-4 rounded-2xl mb-6 shadow-sm"><QRCodeCanvas id="linkedin-qr" value={linkedInUrl} size={150} /></div>
            <button onClick={() => downloadQR('linkedin-qr', 'LinkedIn_QR.png')} className="text-gray-400 flex items-center gap-2 hover:text-white"><Download size={16}/> Save QR</button>
          </div>
          <div className="bg-cardDark p-10 rounded-3xl border border-gray-800 flex-1 flex flex-col items-center">
            <Award className="text-brandYellow mb-6" size={40} />
            <div className="bg-white p-4 rounded-2xl mb-6 shadow-sm"><QRCodeCanvas id="portfolio-qr" value={portfolioUrl} size={150} /></div>
            <button onClick={() => downloadQR('portfolio-qr', 'Portfolio_QR.png')} className="text-gray-400 flex items-center gap-2 hover:text-white"><Download size={16}/> Download Portfolio QR</button>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-gray-600 border-t border-gray-900">
        <p>Sahil Kshirsagar | Harrow, London | +44 7424 599612</p>
      </footer>
    </div>
  );
};

export default App;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Linkedin, Briefcase, Award, FileText, Moon, Sun, ChevronRight, GraduationCap, Code, Database, LineChart, Activity } from 'lucide-react';
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

  // The permanent live URL for your QR Code
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${isDark ? 'bg-[#050505] text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full p-6 flex justify-end z-50 mix-blend-difference text-white pointer-events-none">
        <button onClick={() => setIsDark(!isDark)} className="pointer-events-auto p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all shadow-lg">
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-20 overflow-hidden text-center">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none transition-colors duration-1000 ${isDark ? 'bg-brandYellow/10' : 'bg-blue-500/10'}`} />
        
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="z-10 w-full max-w-4xl">
          <motion.div whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full text-sm font-semibold border bg-green-500/10 border-green-500/30 text-green-500 shadow-[0_0_15px_rgba(34,197,94,0.2)] cursor-default">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Available Immediately | Full UK Right to Work (April 2029)
          </motion.div>
          
          <div className="relative w-40 h-40 mx-auto mb-10 group cursor-pointer">
            <div className="absolute inset-0 rounded-full bg-brandYellow/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img src="/profile.jpg" alt="Sahil Kshirsagar" className="relative w-full h-full rounded-full border-4 border-[#111] shadow-2xl object-cover" />
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Sahil <span className="text-brandYellow">Kshirsagar</span></h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-10 font-light mx-auto leading-relaxed">
            Bridging Clinical Research with Data Automation. Delivering structural integrity in oncology trials through technical precision.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:kshirsagarsahil007@gmail.com" className="flex items-center gap-2 px-8 py-4 rounded-xl bg-brandYellow text-black font-bold hover:shadow-[0_0_20px_rgba(253,224,71,0.4)] hover:-translate-y-1 transition-all"><Mail size={20} /> Contact Me</a>
            <a href="mailto:kshirsagarsahil007@gmail.com?subject=Requesting%20Professional%20CV%20-%20Sahil%20Kshirsagar&body=Hi%20Sahil,%0A%0AI%20was%20viewing%20your%20portfolio%20and%20would%20like%20to%20request%20a%20copy%20of%20your%20full%20CV.%0A%0AThank%20you!" className="flex items-center gap-2 px-8 py-4 rounded-xl bg-[#111] border border-gray-800 font-bold hover:border-gray-600 hover:-translate-y-1 transition-all text-white"><FileText size={20} /> Request CV</a>
          </div>
        </motion.div>
      </section>

      {/* Modern Bento-Box Skills Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="md:col-span-2 p-8 rounded-3xl bg-[#111] border border-gray-800 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"><Activity size={100} /></div>
            <h3 className="text-2xl font-bold mb-4 text-white relative z-10">Clinical Data Management</h3>
            <p className="text-gray-400 leading-relaxed relative z-10">Specialising in Phase II/III oncology trials. Highly proficient in ICH-GCP E6(R3) guidelines, MHRA regulatory frameworks, and executing rigorous QC checks across international teams.</p>
          </motion.div>

          <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="p-8 rounded-3xl bg-brandYellow text-black relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity"><Code size={100} /></div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">Python & AI</h3>
            <p className="font-medium relative z-10">Leveraging Python scripting and modern AI tools to accelerate workflows and process complex datasets.</p>
          </motion.div>

          <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="p-8 rounded-3xl bg-[#111] border border-gray-800 group">
            <Database className="text-brandYellow mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2 text-white">EDC Systems</h3>
            <p className="text-gray-400 text-sm">Extensive daily operational experience with Medidata Rave and eTMF platforms.</p>
          </motion.div>

          <motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="md:col-span-2 p-8 rounded-3xl bg-[#111] border border-gray-800 group">
            <LineChart className="text-brandYellow mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2 text-white">Excel Automation & SLA Operations</h3>
            <p className="text-gray-400">Advanced MS Excel skills to automate repetitive tasks and generate reporting dashboards. Proven track record of operating in highly regulated, high-volume, SLA-driven environments.</p>
          </motion.div>

        </motion.div>
      </section>

      {/* Interactive Experience Timeline */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex items-center gap-4 mb-16">
          <div className="p-3 rounded-xl bg-brandYellow/10 text-brandYellow border border-brandYellow/20"><Briefcase size={28} /></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Professional Experience</h2>
        </motion.div>

        <div className="space-y-8 border-l-2 border-gray-800 pl-6 md:pl-10 relative">
          
          {/* IQVIA */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative group p-6 rounded-2xl hover:bg-[#111] border border-transparent hover:border-gray-800 transition-all cursor-default">
            <div className="absolute -left-[31px] md:-left-[47px] top-10 w-4 h-4 rounded-full border-2 bg-brandYellow border-[#050505] shadow-[0_0_10px_rgba(253,224,71,0.5)] group-hover:scale-150 transition-transform duration-300" />
            <p className="text-brandYellow text-sm font-bold uppercase tracking-widest mb-1">Mar 2023 - Feb 2026</p>
            <h3 className="text-2xl font-bold text-white mb-1">Associate Clinical Data Coordinator</h3>
            <p className="text-gray-400 font-medium mb-3">IQVIA | Global Oncology Trials (India)</p>
            <p className="text-gray-500 leading-relaxed">Managed end-to-end clinical data discrepancy resolution across 500+ patient records. Authored data clarifications, mitigated protocol deviations, and actively reduced query turnaround times by 20% through efficient communication with clinical sites.</p>
          </motion.div>

          {/* Cognizant */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative group p-6 rounded-2xl hover:bg-[#111] border border-transparent hover:border-gray-800 transition-all cursor-default">
            <div className="absolute -left-[31px] md:-left-[47px] top-10 w-4 h-4 rounded-full border-2 bg-gray-600 border-[#050505] group-hover:bg-brandYellow transition-colors duration-300" />
            <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-1">Jan 2023 - Mar 2023</p>
            <h3 className="text-xl font-bold text-white mb-1">Voice Process Executive</h3>
            <p className="text-gray-400 font-medium mb-3">Cognizant Technology Solutions</p>
            <p className="text-gray-500 leading-relaxed">Handled high-volume stakeholder communications in a strict, target-driven environment. Developed robust problem-solving skills and maintained high customer satisfaction metrics.</p>
          </motion.div>

          {/* Retail */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative group p-6 rounded-2xl hover:bg-[#111] border border-transparent hover:border-gray-800 transition-all cursor-default">
            <div className="absolute -left-[31px] md:-left-[47px] top-10 w-4 h-4 rounded-full border-2 bg-gray-600 border-[#050505] group-hover:bg-brandYellow transition-colors duration-300" />
            <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-1">Mar 2022 - Feb 2023</p>
            <h3 className="text-xl font-bold text-white mb-1">Customer Service Team Member</h3>
            <p className="text-gray-400 font-medium mb-3">Retail Store Operations</p>
            <p className="text-gray-500 leading-relaxed">Delivered patient, focused customer service in a fast-paced retail environment. Managed inventory accurately and collaborated with team members to exceed daily operational targets.</p>
          </motion.div>

        </div>
      </section>

      {/* Expanded Academic Foundation */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-y border-gray-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brandYellow/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex items-center gap-4 mb-16">
            <div className="p-3 rounded-xl bg-brandYellow/10 text-brandYellow border border-brandYellow/20"><GraduationCap size={28} /></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Academic Foundation</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid gap-6">
            
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.02 }} className="p-8 rounded-3xl border border-gray-800 bg-[#111] hover:border-brandYellow/30 transition-all shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="text-brandYellow text-sm font-bold uppercase tracking-widest mb-1">Postgraduate Diploma</p>
                <h3 className="text-2xl font-bold text-white">Clinical Data Management</h3>
                <p className="text-gray-400 mt-1">Advanced PG Diploma in Clinical Research</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shrink-0"><Award className="text-brandYellow" size={24}/></div>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ scale: 1.02 }} className="p-8 rounded-3xl border border-gray-800 bg-[#111] hover:border-brandYellow/30 transition-all shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-1">Master's Degree</p>
                <h3 className="text-xl md:text-2xl font-bold text-white">Master of Science (MSc) in Biotechnology</h3>
              </div>
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shrink-0"><FileText className="text-gray-400" size={24}/></div>
            </motion.div>

            {/* --- CORRECTED BACHELOR'S DEGREE --- */}
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.02 }} className="p-8 rounded-3xl border border-gray-800 bg-[#111] hover:border-brandYellow/30 transition-all shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-1">Bachelor's Degree</p>
                <h3 className="text-xl md:text-2xl font-bold text-white">Bachelor of Science (BSc) in Microbiology</h3>
              </div>
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shrink-0"><Activity className="text-gray-400" size={24}/></div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Connect Section (QR Codes fixed) */}
      <section className="py-24 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-white">Ready to connect?</h2>
        <p className="text-gray-500 mb-12">Scan to save my professional profile directly to your device.</p>
        
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <motion.div whileHover={{ y: -5 }} className="bg-[#111] p-10 rounded-3xl border border-gray-800 flex-1 flex flex-col items-center shadow-xl">
            <Linkedin className="text-[#0A66C2] mb-6" size={40} />
            <h3 className="text-xl font-bold text-white mb-6">LinkedIn</h3>
            <div className="bg-white p-4 rounded-2xl mb-6 shadow-inner"><QRCodeCanvas id="linkedin-qr" value={linkedInUrl} size={150} level="H" /></div>
            <button onClick={() => downloadQR('linkedin-qr', 'LinkedIn_QR.png')} className="text-gray-400 flex items-center gap-2 hover:text-white transition-colors bg-gray-800 px-6 py-3 rounded-full"><Download size={16}/> Save to phone</button>
          </motion.div>
          
          <motion.div whileHover={{ y: -5 }} className="bg-[#111] p-10 rounded-3xl border border-gray-800 flex-1 flex flex-col items-center shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-brandYellow/5 opacity-0 hover:opacity-100 transition-opacity" />
            <Award className="text-brandYellow mb-6 relative z-10" size={40} />
            <h3 className="text-xl font-bold text-white mb-6 relative z-10">Portfolio Site</h3>
            <div className="bg-white p-4 rounded-2xl mb-6 shadow-inner relative z-10"><QRCodeCanvas id="portfolio-qr" value={portfolioUrl} size={150} level="H" /></div>
            <button onClick={() => downloadQR('portfolio-qr', 'Portfolio_QR.png')} className="text-gray-400 flex items-center gap-2 hover:text-white transition-colors bg-gray-800 px-6 py-3 rounded-full relative z-10"><Download size={16}/> Save Portfolio QR</button>
          </motion.div>
        </div>
      </section>

      <footer className="py-10 text-center text-gray-600 border-t border-gray-900 text-sm">
        <p>© 2026 Sahil Kshirsagar. Built with React & Tailwind.</p>
        <p className="mt-2">Based in Harrow, London. +44 7424 599612</p>
      </footer>
    </div>
  );
};

export default App;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Send, Cpu, User, Home } from 'lucide-react'; // Import Ikon

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const springTransition = { type: "spring", stiffness: 100, damping: 18, mass: 1 };

  const pageVariants = {
    initial: { opacity: 0, x: 50, filter: "blur(10px)" },
    animate: { 
      opacity: 1, x: 0, filter: "blur(0px)",
      transition: { ...springTransition, staggerChildren: 0.15, delayChildren: 0.2 } 
    },
    exit: { opacity: 0, x: -50, filter: "blur(10px)", transition: { duration: 0.3 } },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: springTransition }
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-slate-100 selection:bg-blue-600 selection:text-white font-sans overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/40 backdrop-blur-2xl">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold tracking-tighter cursor-pointer flex items-center gap-2"
            onClick={() => setActiveTab('home')}
          >
            <Cpu className="text-blue-500 w-6 h-6" />
            <span>HERI <span className="text-blue-500">ILHAM. A</span></span>
          </motion.div>
          
          <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10">
            {[
              { id: 'home', icon: <Home size={14} /> },
              { id: 'socials', icon: <Send size={14} /> },
              { id: 'about', icon: <User size={14} /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 rounded-xl flex items-center gap-2 ${
                  activeTab === tab.id ? "text-white" : "text-slate-500 hover:text-slate-300"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute inset-0 bg-blue-600 rounded-xl z-[-1] shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                    transition={springTransition}
                  />
                )}
                {tab.icon}
                <span className="hidden md:block">{tab.id}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full"
          >
            {/* --- HOME --- */}
            {activeTab === 'home' && (
              <div className="min-h-[75vh] grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8 text-blue-500 font-mono text-xs font-bold tracking-[0.3em]">
                    <span className="h-[2px] w-8 bg-blue-500"></span>
                    SYSTEM_OPTIMIZER_v2.6
                  </motion.div>
                  <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-black leading-none tracking-tighter mb-8 italic">
                    Pushing <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 not-italic">Hardware.</span>
                  </motion.h1>
                  <motion.p variants={itemVariants} className="text-lg text-slate-400 max-w-md leading-relaxed mb-10">
                    Android Modder & System Tinkerer. Saya mengubah perangkat standar menjadi mesin performa tinggi.
                  </motion.p>
                  <motion.button 
                    variants={itemVariants}
                    onClick={() => setActiveTab('socials')}
                    className="bg-white text-black px-10 py-4 rounded-2xl font-black hover:bg-blue-600 hover:text-white transition-all duration-500"
                  >
                    GET CONNECTED
                  </motion.button>
                </div>

                {/* PROFILE PHOTO */}
                <motion.div variants={itemVariants} className="relative flex justify-center items-center">
                  <div className="absolute inset-0 bg-blue-600/10 blur-[120px] rounded-full animate-pulse"></div>
                  <div className="relative group w-full max-w-[380px] aspect-[4/5] bg-slate-900 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 hover:border-blue-500/50">
                    <img 
                      src="/heri.jpg" 
                      alt="Heri Ilham A" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                      onError={(e) => { e.target.src = "/src/heri.jpg"; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent text-left p-10 flex flex-col justify-end">
                        <p className="font-mono text-[10px] text-blue-400 font-bold uppercase tracking-[0.4em] mb-1">Authenticated Modder</p>
                        <p className="text-3xl font-black tracking-tighter">Heri Ilham. A</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

            {/* --- SOCIALS (DENGAN LOGO ASLI) --- */}
            {activeTab === 'socials' && (
              <div className="min-h-[65vh]">
                <motion.div variants={itemVariants} className="mb-16">
                   <h2 className="text-5xl font-black tracking-tighter italic">Network Terminal</h2>
                   <p className="text-slate-500 mt-2 font-mono text-sm">Transmisi data tersedia melalui platform berikut:</p>
                </motion.div>
                
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
                  {/* TELEGRAM */}
                  <motion.a 
                    href="https://t.me/AboutKur0mi" 
                    target="_blank"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="flex items-center gap-8 p-10 bg-white/5 border border-white/10 rounded-[3rem] transition-all group overflow-hidden relative"
                  >
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Send size={120} />
                    </div>
                    <div className="w-20 h-20 bg-blue-500/10 text-blue-500 rounded-3xl flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-blue-500/40">
                      <Send size={40} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black italic">Telegram</h3>
                      <p className="text-slate-500 font-mono text-sm mt-1 group-hover:text-blue-400 transition-colors">@heri_ilham</p>
                    </div>
                  </motion.a>

                  {/* INSTAGRAM */}
                  <motion.a 
                    href="https://www.instagram.com/p4payy4/" 
                    target="_blank"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="flex items-center gap-8 p-10 bg-white/5 border border-white/10 rounded-[3rem] transition-all group overflow-hidden relative"
                  >
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity text-pink-500">
                        <Instagram size={120} />
                    </div>
                    <div className="w-20 h-20 bg-pink-500/10 text-pink-500 rounded-3xl flex items-center justify-center group-hover:bg-pink-500 group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-pink-500/40">
                      <Instagram size={40} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black italic">Instagram</h3>
                      <p className="text-slate-500 font-mono text-sm mt-1 group-hover:text-pink-400 transition-colors">@heri_ilham_a</p>
                    </div>
                  </motion.a>
                </div>
              </div>
            )}

            {/* --- ABOUT --- */}
            {activeTab === 'about' && (
              <div className="max-w-3xl min-h-[60vh] flex flex-col justify-center">
                <motion.span variants={itemVariants} className="text-blue-500 font-mono text-sm tracking-widest block mb-4">LOG_01_ABOUT_ME</motion.span>
                <motion.h2 variants={itemVariants} className="text-6xl font-black mb-10 tracking-tighter italic">Obsessed with <br /><span className="text-slate-600 not-italic">Efficiency.</span></motion.h2>
                <motion.p variants={itemVariants} className="text-2xl text-slate-400 leading-relaxed italic border-l-4 border-blue-600 pl-8 mb-10">
                  "Menembus batas sistem Android adalah seni. Mengoptimalkan kernel adalah kepuasan."
                </motion.p>
                <div className="grid grid-cols-2 gap-4">
                  <motion.div variants={itemVariants} className="p-6 bg-white/5 rounded-3xl border border-white/10">
                     <p className="text-blue-500 font-bold text-xs tracking-widest mb-2 uppercase">Core Interest</p>
                     <p className="text-slate-300">Custom ROM Development, Kernel Tuning, & Linux Environment.</p>
                  </motion.div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="py-20 text-center border-t border-white/5">
        <p className="text-[10px] font-black tracking-[0.8em] uppercase text-slate-700">Built by Heri Ilham. A // v2.6</p>
      </footer>
    </div>
  );
}

export default App;

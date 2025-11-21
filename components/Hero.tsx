import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const badgeText = "Accepting New Clients";

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-deep-teal">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Neon Blue Glow - Top Left */}
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-neon-blue opacity-[0.1] rounded-full blur-[120px] animate-pulse"></div>
        {/* Neon Purple Glow - Bottom Right */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-purple opacity-[0.08] rounded-full blur-[100px]"></div>
        {/* Center Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-deep-teal-dark rounded-full opacity-50 blur-3xl"></div>
        
        <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-deep-teal-dark to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-5 py-2.5 rounded-full mb-8 border border-neon-blue/30 hover:border-neon-blue/60 transition-colors cursor-default shadow-[0_0_15px_rgba(0,240,255,0.1)] group"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-blue"></span>
            </span>
            <span className="text-neon-blue text-sm font-medium tracking-wide uppercase flex">
              {badgeText.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.4,
                    delay: 0.5 + i * 0.05,
                    ease: "easeOut",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight mb-8 tracking-tight"
          >
            Scale Your Brand with <br/>
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-purple">
                Intelligent Growth
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-4 bg-neon-blue/20 blur-lg -z-10"></div>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We bridge the gap between data and creativity. A full-service agency obsessed with ROI, aesthetic excellence, and sustainable scaling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="group w-full md:w-auto px-8 py-4 bg-neon-blue text-deep-teal font-bold rounded-full hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:shadow-[0_0_40px_rgba(0,240,255,0.5)] flex items-center justify-center gap-2"
            >
              Book Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#results"
              className="group w-full md:w-auto px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/10 hover:border-neon-blue/40 transition-all flex items-center justify-center gap-2"
            >
              View Our Results
              <TrendingUp className="w-5 h-5 text-neon-purple group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

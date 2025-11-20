import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-deep-teal">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-neon-yellow opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-blue-500 opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-deep-teal-dark to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/10"
          >
            <span className="w-2 h-2 bg-neon-yellow rounded-full animate-pulse"></span>
            <span className="text-neon-yellow text-sm font-medium tracking-wide uppercase">Top Rated Digital Agency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6"
          >
            Your Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-yellow-200">Partner</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            A results-focused digital marketing agency delivering growth through strategy, creativity & performance.
            We turn clicks into customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="w-full md:w-auto px-8 py-4 bg-neon-yellow text-deep-teal font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(230,255,43,0.4)] flex items-center justify-center gap-2"
            >
              Book a Strategy Call
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#results"
              className="w-full md:w-auto px-8 py-4 border border-gray-500 text-white font-semibold rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              See Results
              <TrendingUp className="w-5 h-5 text-neon-yellow" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-400 uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-neon-yellow rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
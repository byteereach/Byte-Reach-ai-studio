import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Results', href: '#results' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 85; // Height of sticky header + buffer
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-deep-teal shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('#hero')}>
          <div className="bg-neon-yellow p-2 rounded-lg">
            <svg 
              className="w-6 h-6 text-deep-teal" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 2L2 22h20L12 2z" />
              <path d="M2 22L14.5 7" />
              <path d="M2 22L17 12" />
              <path d="M2 22L19.5 17" />
            </svg>
          </div>
          <span className={`font-display font-bold text-xl tracking-tight ${scrolled || isOpen ? 'text-white' : 'text-deep-teal md:text-white'}`}>
            BYTEREACH
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={`text-sm font-medium hover:text-neon-yellow transition-colors ${
                scrolled ? 'text-gray-200' : 'text-deep-teal md:text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
          <motion.button
            onClick={() => scrollToSection('#contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 15px rgba(230, 255, 43, 0.3)",
                "0 0 30px rgba(230, 255, 43, 0.7)",
                "0 0 15px rgba(230, 255, 43, 0.3)"
              ]
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              },
              scale: { duration: 0.2 }
            }}
            className="bg-neon-yellow text-deep-teal px-6 py-2.5 rounded-full font-bold text-sm hover:bg-white transition-colors"
          >
            Book a Call
          </motion.button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-8 h-8 text-neon-yellow" /> : <Menu className={`w-8 h-8 ${scrolled ? 'text-white' : 'text-deep-teal'}`} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-deep-teal z-40 lg:hidden flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-2xl font-display font-semibold text-white hover:text-neon-yellow"
              >
                {link.name}
              </button>
            ))}
            <motion.button
              onClick={() => scrollToSection('#contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 15px rgba(230, 255, 43, 0.3)",
                  "0 0 30px rgba(230, 255, 43, 0.7)",
                  "0 0 15px rgba(230, 255, 43, 0.3)"
                ]
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                scale: { duration: 0.2 }
              }}
              className="bg-neon-yellow text-deep-teal px-8 py-4 rounded-full font-bold text-lg mt-8 hover:bg-white transition-colors"
            >
              Book a Call
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
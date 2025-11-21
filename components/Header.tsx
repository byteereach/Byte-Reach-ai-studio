import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Determine if the header should be in its "Solid / Active" state
  // This happens if: Scrolled OR Hovered OR Mobile Menu is Open
  const isSolid = scrolled || isHovered || isOpen;

  return (
    <>
      <header
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isSolid 
            ? 'bg-neon-yellow py-3 shadow-lg' 
            : 'bg-transparent py-6'
        }`}
      >
        {/* Glowing Border on Scroll/Hover - Turns Deep Teal when background is Yellow for contrast */}
        <div 
          className={`absolute bottom-0 left-0 w-full h-[1px] transition-opacity duration-500 ${
            isSolid 
              ? 'bg-deep-teal/20 opacity-100' 
              : 'bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-0'
          }`} 
        />

        <div className="container mx-auto px-6 flex justify-between items-center relative">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => scrollToSection('#hero')}>
            <div className="relative">
              {/* Icon Background Blur */}
              <div className={`absolute inset-0 blur-md opacity-40 group-hover:opacity-80 transition-opacity duration-300 rounded-full ${isSolid ? 'bg-deep-teal' : 'bg-neon-blue'}`}></div>
              
              {/* Icon Box */}
              <div className={`relative border p-2 rounded-lg transition-colors ${
                isSolid 
                  ? 'bg-deep-teal border-deep-teal' 
                  : 'bg-deep-teal border-neon-blue group-hover:border-white/50'
              }`}>
                <svg 
                  className={`w-6 h-6 transition-colors ${isSolid ? 'text-neon-yellow' : 'text-neon-blue'}`}
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 22h20L12 2z" />
                  <path d="M2 22L14.5 7" />
                  <path d="M2 22L17 12" />
                  <path d="M2 22L19.5 17" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-xl tracking-tight leading-none transition-colors duration-300 ${isSolid ? 'text-deep-teal' : 'text-white'}`}>
                BYTEREACH
              </span>
              <span className={`text-[0.6rem] uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${isSolid ? 'text-deep-teal/80' : 'text-neon-blue'}`}>
                Marketing
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group overflow-hidden ${
                  isSolid 
                    ? 'text-deep-teal hover:bg-deep-teal hover:text-neon-yellow' 
                    : 'text-white/90 hover:text-neon-blue'
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {/* Hover Background Effect */}
                <span className={`absolute inset-0 scale-0 group-hover:scale-100 rounded-full transition-transform duration-300 ${!isSolid ? 'bg-white/10' : ''}`}></span>
              </button>
            ))}
            
            <div className={`w-px h-8 mx-4 transition-colors ${isSolid ? 'bg-deep-teal/20' : 'bg-white/20'}`}></div>

            <motion.button
              onClick={() => scrollToSection('#contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative overflow-hidden px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 border shadow-lg group ${
                isSolid
                  ? 'border-deep-teal text-deep-teal hover:bg-deep-teal hover:text-neon-yellow'
                  : 'border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-deep-teal shadow-[0_0_15px_rgba(0,240,255,0.2)]'
              }`}
            >
              <span className="relative z-10">Book a Call</span>
            </motion.button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden z-50 p-2 rounded-lg transition-colors ${
                isSolid ? 'hover:bg-deep-teal/10 text-deep-teal' : 'hover:bg-white/10 text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className={`w-8 h-8 ${isSolid ? 'text-deep-teal' : 'text-neon-blue'}`} />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-deep-teal/98 backdrop-blur-xl z-40 lg:hidden flex flex-col pt-32 px-6"
            >
              <div className="flex flex-col space-y-6">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => scrollToSection(link.href)}
                    className="text-3xl font-display font-bold text-white hover:text-neon-yellow text-left flex items-center justify-between group border-b border-white/5 pb-4"
                  >
                    {link.name}
                    <span className="text-neon-yellow opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </motion.button>
                ))}
                
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-neon-yellow text-deep-teal px-8 py-4 rounded-xl font-bold text-xl mt-8 hover:bg-white transition-colors shadow-[0_0_20px_rgba(230,255,43,0.4)]"
                >
                  Start Your Growth
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
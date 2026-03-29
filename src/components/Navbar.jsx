import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -40% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    navLinks.forEach((link) => {
      const element = document.getElementById(link.href.replace('#', ''));
      if (element) observer.observe(element);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
        <motion.a 
          href="#" 
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold font-poppins text-gradient tracking-tighter"
        >
          SK
        </motion.a>

        <ul className={`hidden md:flex items-center space-x-1 p-1 rounded-full border transition-all duration-300 ml-32 ${
          isScrolled ? 'bg-dark/60 backdrop-blur-xl border-white/10 shadow-2xl' : 'bg-white/[0.03] backdrop-blur-md border-white/5'
        }`}>
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.href.replace('#', '');
            const isHovered = hoveredIndex === index;
            const showPill = isHovered || (hoveredIndex === null && isActive);

            return (
              <li 
                key={link.name} 
                className="relative px-4 py-2"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <AnimatePresence>
                  {showPill && (
                    <motion.div
                      layoutId="nav-pill"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      className={`absolute inset-0 rounded-full z-0 ${
                        isHovered ? 'bg-white/10' : 'bg-white/5'
                      } border border-white/5 shadow-inner`}
                    />
                  )}
                </AnimatePresence>
                <motion.a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  whileHover={{ scale: 1.05 }}
                  className={`relative z-10 text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    isActive || isHovered ? 'text-white' : 'text-white/60'
                  } drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]`}
                >
                  {link.name}
                </motion.a>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <motion.a
            href="/Sarthak Kharche.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-5 py-2 rounded-full border text-white transition-all duration-300 text-sm font-bold cursor-pointer flex items-center gap-2 ${
              isScrolled ? 'bg-dark/60 backdrop-blur-xl border-white/10 hover:border-white/20' : 'bg-white/[0.03] backdrop-blur-md border-white/5 hover:border-white/10'
            } hover:shadow-[0_0_16px_rgba(255,255,255,0.15)]`}
          >
            <FiDownload size={14} /> Resume
          </motion.a>
          <motion.a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-full bg-gradient-neon text-white shadow-neon-blue hover:shadow-neon-purple transition-all duration-300 text-sm font-bold cursor-pointer drop-shadow-lg"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-white focus:outline-none z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-dark/80 backdrop-blur-sm z-30 min-h-screen md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Dropdown Card */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="menu-card"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-24 left-4 right-4 z-40 bg-dark border border-white/10 rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.8)] md:hidden pointer-events-auto"
          >
            <ul className="flex flex-col divide-y divide-white/5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        handleNavClick(e, link.href);
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex justify-center items-center px-6 py-5 group bg-white/0 hover:bg-white/[0.02] transition-colors"
                    >
                      <span className={`font-black uppercase tracking-widest text-sm transition-all duration-300 group-hover:scale-110 ${
                        isActive 
                          ? 'text-accent-neon' 
                          : 'text-white/80 group-hover:text-white'
                      }`}>
                        {link.name}
                      </span>
                    </a>
                  </li>
                );
              })}
              
              {/* Social Icons */}
              <li>
                <div className="flex justify-center items-center gap-8 py-5">
                  <a href="https://github.com/SarthakKharche" target="_blank" rel="noreferrer" className="text-white/50 hover:text-accent-neon hover:scale-110 transition-all"><FiGithub size={20}/></a>
                  <a href="https://www.linkedin.com/in/sarthak-kharche-78a115338/" target="_blank" rel="noreferrer" className="text-white/50 hover:text-accent-neon hover:scale-110 transition-all"><FiLinkedin size={20}/></a>
                  <a href="mailto:sarthakkharche06@gmail.com" className="text-white/50 hover:text-accent-neon hover:scale-110 transition-all"><FiMail size={20}/></a>
                </div>
              </li>

              {/* Resume + Hire Me Buttons */}
              <li className="p-4 flex flex-col gap-3">
                <a
                  href="/Sarthak Kharche.pdf"
                  download
                  className="w-full py-4 rounded-xl border border-white/30 text-white bg-white/5 hover:bg-white/10 hover:border-white/60 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <FiDownload /> Download Resume
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    handleNavClick(e, '#contact');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full py-4 rounded-xl bg-gradient-neon text-white shadow-neon-blue hover:shadow-neon-purple font-bold text-sm tracking-widest uppercase flex items-center justify-center transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

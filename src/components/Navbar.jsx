import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeSection, setActiveSection] = useState('about');

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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#" 
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold font-poppins text-gradient tracking-tighter"
        >
          SK
        </motion.a>

        <ul className={`hidden md:flex items-center space-x-1 p-1 rounded-full border transition-all duration-300 ${
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

        <motion.a
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-6 py-2 rounded-full bg-gradient-neon text-white shadow-neon-blue hover:shadow-neon-purple transition-all duration-300 text-sm font-bold cursor-pointer drop-shadow-lg"
        >
          Hire Me
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;

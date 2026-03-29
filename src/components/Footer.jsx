import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/SarthakKharche' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sarthak-kharche-78a115338/' },
    { name: 'Email', href: 'mailto:sarthakkharche06@gmail.com' },
  ];

  return (
    <footer className="py-6 border-t border-white/5 relative bg-dark/50 z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <p className="text-white/30 text-sm order-2 md:order-1">
            © {new Date().getFullYear()} <span className="text-white hover:text-accent-neon transition-colors duration-500 font-semibold cursor-default">Sarthak Kharche</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-8 order-1 md:order-2">
            {socialLinks.map((link) => (
              <motion.a 
                key={link.name}
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-xs text-white/40 hover:text-accent-neon transition-colors uppercase tracking-widest font-bold block"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <div className="order-3 md:mr-24">
            <p className="text-xs text-white/40 border border-white/5 py-1.5 px-4 rounded-full bg-white/[0.02] backdrop-blur-sm flex items-center gap-1.5">
              Built with <span className="text-[#ff3366] animate-pulse">💖</span> by <span className="text-white font-bold tracking-wide hover:text-accent-neon hover:drop-shadow-[0_0_8px_rgba(0,245,255,0.8)] transition-all duration-300 cursor-default">Sarthak Kharche</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

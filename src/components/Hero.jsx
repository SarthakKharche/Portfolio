import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Beams from './Beams';

const Hero = () => {
  const scrollToSection = (e, href) => {
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
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full glass border border-white/10 text-accent-neon text-xs font-semibold uppercase tracking-widest mb-6">
            Welcome to my portfolio
          </span>
          <h1 className="text-5xl md:text-8xl font-bold font-poppins mb-6">
            I'm <span className="text-gradient">Sarthak Kharche</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-10 font-light">
            Full Stack Developer | AI Enthusiast
          </p>
          <p className="text-lg text-white/50 max-w-xl mx-auto mb-12 italic">
            "Building scalable web apps and AI-driven solutions"
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              onClick={(e) => scrollToSection(e, '#projects')}
              className="px-8 py-4 bg-gradient-neon rounded-xl font-bold text-white shadow-neon-blue hover:shadow-neon-purple transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              View Projects <FiArrowRight />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="px-8 py-4 glass border border-white/20 rounded-xl font-bold hover:bg-white/5 transition-all duration-300 cursor-pointer"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>


    </section>
  );
};

export default Hero;

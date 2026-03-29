import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-20 group-hover:opacity-40 blur-xl transition duration-500"></div>
              <div className="relative glass-card p-2 rounded-2xl overflow-hidden aspect-square group">
                <img 
                  src="/profile.jpg" 
                  alt="Sarthak Kharche" 
                  className="w-full h-full object-cover rounded-xl transition-all duration-500 scale-110 group-hover:scale-100"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl font-bold mb-8">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="space-y-6 text-lg text-white/70 leading-relaxed font-light">
              <p>
                I am a Computer Science Engineering student with a strong foundation in web development, databases, and emerging technologies. I am passionate about solving real-world problems by building efficient and scalable software solutions.
              </p>
              <p>
                Through my internship experience, I have developed impactful web applications and collaborated effectively with cross functional teams to deliver practical, high-quality results.
              </p>
              <p className="border-l-2 border-accent-neon pl-4 italic text-white/50">
                I'm also a big fan of <span className="text-accent-neon font-semibold">vibe coding</span>—blending intuition with technical precision to build smooth and immersive digital experiences.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="glass p-4 rounded-xl border-white/5">
                  <p className="text-accent-neon font-bold text-2xl">B.Tech</p>
                  <p className="text-sm text-white/50 italic">Computer Science</p>
                </div>
                <div className="glass p-4 rounded-xl border-white/5">
                  <p className="text-accent-neon font-bold text-2xl">Pune</p>
                  <p className="text-sm text-white/50 italic">Location</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

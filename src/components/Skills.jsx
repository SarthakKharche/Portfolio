import React from 'react';
import { motion } from 'framer-motion';
import {
  FiLayout, FiCpu, FiDatabase, FiPenTool, FiShield, FiGithub, FiTerminal
} from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Full-Stack Web Development',
      icon: <FiLayout />,
      skills: ['HTML, CSS, JavaScript', 'React based web pages', 'Building Scalable Web Apps', 'Modern Frameworks'],
    },
    {
      title: 'AI & LLM Solutions',
      icon: <FiCpu />,
      skills: ['LLM Application Design', 'Prompt Engineering', 'Claude, Gemini, GPT', 'Perplexity AI'],
    },
    {
      title: 'Cloud & Database',
      icon: <FiDatabase />,
      skills: ['Firebase Development', 'Firestore & Auth', 'Google OAuth', 'SQL, Python & Java (OOPs)'],
    },
    {
      title: 'Design & Deployment',
      icon: <FiTerminal />,
      skills: ['Linux', 'Web Design (Stitch UI)', 'Git & GitHub', 'Vercel', 'Render'],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-dark-lighter/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 font-poppins">Technical <span className="text-gradient">Proficiency</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Tools and technologies I use to build scalable and modern solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl group hover:border-accent-neon/30"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl mb-6 shadow-neon-blue group-hover:shadow-neon-purple transition-all duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 font-poppins">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-white/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-neon"></div>
                    <span className="text-sm font-light">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

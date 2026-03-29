import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: 'Project Contributor',
      company: 'Tech For Need (DYPIU)',
      period: 'February 2026',
      points: [
        'Developed an Automated Certification System for bulk generation and secure distribution.',
        'Built a QR-based Digital Check-in System enabling real-time participant verification.',
        'Contributing to the official TFN website, focusing on responsive UI and scalable architecture.'
      ],
    },
    {
      role: 'Hackathon Winner (1st Prize)',
      company: 'GDGC - SysAutopsy AI Project',
      period: 'January 2026',
      points: [
        'Designed an AI-based diagnostics platform to automate system log analysis and root cause identification.',
        'Built a secure backend with user authentication and structured log processing workflows.',
        'Implemented intelligent logic to detect errors and classify system issues.',
        'Deployed the application to production, addressing performance and reliability challenges.'
      ],
    },
    {
      role: 'Full-Stack Developer',
      company: 'Nirgun Washers & Dry Cleaners',
      period: 'November 2025',
      points: [
        'Developed the official website and a service management system for a local laundry business.',
        'Built a backend-enabled system allowing dynamic pricing and service management.',
        'Created a clean, responsive UI for real-time service viewing and pricing updates.',
        'Enabled shop owners to manage offerings independently without code changes.'
      ],
    },
    {
      role: 'Summer Intern',
      company: 'Poona Panjarpol Trust',
      period: 'May 2025 - July 2025',
      points: [
        'Enhanced digital presence and operational efficiency for an animal welfare non-profit.',
        'Developed the official website and a Cattle Health Record Management System.',
        'Worked closely with the team to deliver practical, web-based solutions for on-ground challenges.',
        'Gained hands-on experience in database design and real-world app deployment.'
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-dark-lighter/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 font-poppins text-center">Professional <span className="text-gradient">Timeline</span></h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-accent-neon shadow-neon-blue border-4 border-dark z-10"></div>

                <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="glass-card p-6 rounded-2xl hover:border-accent-neon/20 transition-all duration-300">
                    <span className="text-accent-neon text-xs font-semibold tracking-widest font-poppins uppercase">{exp.period}</span>
                    <h3 className="text-xl font-bold mt-2 font-poppins">{exp.role}</h3>
                    <p className="text-white/40 text-sm mb-4 italic font-light">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.points.map((point, i) => (
                        <li key={i} className="text-white/60 text-sm font-light leading-relaxed flex gap-2">
                          <span className="text-accent-neon mt-1">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

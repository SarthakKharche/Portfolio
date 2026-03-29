import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import BorderGlow from './BorderGlow';

const Projects = () => {
  const projects = [
    {
      title: 'SysAutopsy',
      description: 'A sophisticated AI-powered diagnostics platform designed to automate system log analysis and root cause identification. This project achieved 1st Prize at the GDGC Hackathon, recognized for its innovative use of AI in streamlining complex system troubleshooting.',
      tech: ['React', 'AI', 'Node.js', 'Production'],
      link: 'https://sysautopsy.onrender.com/',
      github: 'https://github.com/SarthakKharche/SysAutopsy',
      image: '/projects/sysautopsy.png',
    },
    {
      title: 'Nirgun Washers',
      description: 'Official website and a comprehensive service management system developed for a local laundry business. It features dynamic pricing models and real-time status updates, providing a professional digital solution for modern service management.',
      tech: ['React', 'Backend-Enabled', 'Responsive UI'],
      link: 'https://nirgunwashers.in/',
      github: '#',
      image: '/projects/nirgun.png',
    },
    {
      title: 'Poona Panjarpol Trust',
      description: 'A dedicated official website and Cattle Health Record Management System for a non-profit dedicated to animal welfare. This platform modernizes trust operations by digitizing animal health records and managing organizational data effectively.',
      tech: ['Web Dev', 'Database Design', 'Social Impact'],
      link: 'https://www.poonapanjarpoltrust.org/',
      github: 'https://github.com/PanjarpolPoonaTrust/PanjarpolPoonaTrust',
      image: '/projects/panjarpol.png',
    },
    {
      title: 'Automated Certification',
      description: 'A specialized system built for bulk certificate generation and secure digital distribution. This automated solution significantly reduces manual effort for large-scale events, ensuring rapid delivery and accurate record management.',
      tech: ['Automation', 'Logic', 'Distribution'],
      link: 'https://tfn-certificate-system.vercel.app/',
      github: 'https://github.com/SarthakKharche/tfn-certificate-system',
      image: '/projects/certificate.png',
    },
    {
      title: 'QR Digital Check-in',
      description: 'A high-performance real-time participant verification system utilizing QR code technology to streamline event entry. Developed to ensure a smooth, secure, and contactless check-in process with instant data synchronization.',
      tech: ['QR Tech', 'Real-time', 'Verification'],
      link: 'https://tfn-checkin.vercel.app/',
      github: 'https://github.com/SarthakKharche/tfn-checkin',
      image: '/projects/checkin.png',
    },
    {
      title: 'TFN Official Website',
      description: 'The official platform for Tech For Need, engineered with a focus on responsive UI and a scalable frontend architecture. It serves as the primary digital hub for organization initiatives, emphasizing clean design and user engagement.',
      tech: ['Vite', 'Framer Motion', 'Frontend'],
      link: 'https://tfn-website-nine.vercel.app/',
      github: 'https://github.com/SarthakKharche/TFN-Website',
      image: '/projects/tfn.png',
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 font-poppins">Featured <span className="text-gradient">Projects</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            A selection of my best work in web development, AI applications, and system integration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <BorderGlow
                borderRadius={28}
                glowRadius={50}
                glowIntensity={0.8}
                backgroundColor="rgba(10, 10, 20, 0.5)"
                className="h-full"
              >
                <div className="p-4 flex flex-col h-full">
                  <div className="relative group overflow-hidden rounded-2xl aspect-video bg-dark mb-6 flex items-center justify-center">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:scale-110 transition-transform duration-500"></div>
                        <span className="relative z-10 text-white/5 font-bold text-3xl">{project.title.charAt(0)}</span>
                      </>
                    )}
                  </div>

                  <div className="px-2 pb-4 flex flex-col h-full">
                    <h3 className="text-2xl font-bold mb-3 font-poppins">{project.title}</h3>
                    <p className="text-white/60 mb-6 text-sm flex-grow font-light leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-accent-neon uppercase tracking-wider font-semibold">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl text-center text-sm font-semibold transition-all relative z-20 pointer-events-auto"
                      >
                        Live Demo
                      </a>
                      {project.github !== '#' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl text-xl flex items-center justify-center transition-all relative z-20 pointer-events-auto"
                        >
                          <FiGithub />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

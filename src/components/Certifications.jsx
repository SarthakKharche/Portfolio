import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink, FiFileText } from 'react-icons/fi';
import BorderGlow from './BorderGlow';

const Certifications = () => {
  const certifications = [
    {
      title: 'SQL and Relational Databases',
      issuer: 'IBM Developer Skills Network',
      date: 'Oct 2025',
      link: 'https://courses.cognitiveclass.ai/certificates/e938df43aed045e0b61d7f77f868eead', 
      pdf: '/SQL_IBM_Certificate.pdf',
    },
    {
      title: 'Java Course- Mastering the Fundamentals',
      issuer: 'Scaler',
      date: 'Sep 2025',
      link: 'https://moonshot.scaler.com/s/sl/4fPo6i3m86',
      pdf: '/Java_Scaler_Certificate.png',
    },
    {
      title: 'Programming with Python 3.X',
      issuer: 'Simplilearn',
      date: 'Nov 2024',
      link: '#',
      pdf: '/Python_Simplilearn_Certificate.pdf',
    },
    {
      title: 'AWS Educate Introduction to Generative AI',
      issuer: 'Amazon Web Services (AWS)',
      date: 'Sep 2025',
      link: 'https://www.credly.com/badges/3f8e7ae3-eba2-4da6-aaa7-89095faad923/public_url',
      pdf: '/AWS_GenAI_Certificate.png',
    },
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 font-poppins">Technical <span className="text-gradient">Certifications</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group h-full"
            >
              <BorderGlow
                borderRadius={20}
                glowRadius={40}
                glowIntensity={0.6}
                backgroundColor="rgba(255, 255, 255, 0.03)"
                className="h-full border border-white/5 hover:border-accent-neon/30 transition-all"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-neon/10 flex items-center justify-center text-2xl text-accent-neon mb-6 group-hover:scale-110 transition-transform">
                    <FiAward />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-accent-neon transition-colors line-clamp-2">{cert.title}</h3>
                  <p className="text-white/40 text-sm mb-4 font-medium uppercase tracking-wider">{cert.issuer}</p>
                  <p className="text-white/20 text-xs mb-8 mt-auto">{cert.date}</p>
                  
                  <div className="flex gap-3">
                    {cert.link !== '#' && (
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-white/50 hover:text-accent-neon hover:bg-white/10 transition-all"
                      >
                        Verify <FiExternalLink />
                      </a>
                    )}
                    {cert.pdf !== '#' && (
                      <a 
                        href={cert.pdf} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-white/50 hover:text-accent-neon hover:bg-white/10 transition-all"
                      >
                        PDF <FiFileText />
                      </a>
                    )}
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

export default Certifications;

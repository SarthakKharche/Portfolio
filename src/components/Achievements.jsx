import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiStar } from 'react-icons/fi';

const Achievements = () => {
  const awards = [
    {
      title: '1st Place Winner',
      subtitle: 'GDGC WowVerse Hackathon',
      icon: <FiAward className="text-accent-neon" />,
      description: 'Secured the top position among hundreds of participants for the SysAutopsy project.',
    },
    {
      title: 'Academic Excellence Scholarship',
      subtitle: 'Merit-based Award',
      icon: <FiStar className="text-primary-light" />,
      description: 'Received for outstanding academic performance in the year 2026.',
    },
  ];

  return (
    <section id="achievements" className="py-24 bg-dark-lighter/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 font-poppins text-center">Honors & <span className="text-gradient">Awards</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              className="glass p-8 rounded-3xl border border-white/5 flex gap-6 items-start hover:bg-white/[0.05] transition-all"
            >
              <div className="text-4xl mt-1">
                {award.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1 font-poppins">{award.title}</h3>
                <p className="text-accent-neon text-sm mb-4 font-semibold uppercase tracking-wide">{award.subtitle}</p>
                <p className="text-white/50 text-sm font-light leading-relaxed">
                  {award.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

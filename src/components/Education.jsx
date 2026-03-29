import React from 'react';
import { motion } from 'framer-motion';
import { LuGraduationCap, LuBookOpen, LuAward } from 'react-icons/lu';

const Education = () => {
  const studies = [
    {
      degree: 'B.Tech - Computer Science',
      institution: 'DY Patil International University (Pune)',
      period: '2024 - 2028',
      details: 'Focusing on Scalable Systems, AI, and Software Architecture.',
      icon: <LuGraduationCap />,
    },
    {
      degree: 'HSC - Computer Science',
      institution: 'Maharashtra State Board',
      period: '2022 - 2024',
      details: 'Core subjects: Physics, Chemistry, Mathematics, Computer Science.',
      icon: <LuBookOpen />,
    },
    {
      degree: 'ICSE - Schooling',
      institution: 'Podar International School',
      period: '2022',
      details: 'Foundation in Science and Technology.',
      icon: <LuAward />,
    },
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 font-poppins text-center">Academic <span className="text-gradient">Journey</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {studies.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl border border-white/5 relative group h-full overflow-hidden"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              
              <div className="absolute top-6 right-6 text-5xl text-white/5 group-hover:text-white/10 group-hover:scale-110 transition-all duration-500">
                {item.icon}
              </div>

              <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary-light text-[10px] font-bold uppercase tracking-widest mb-4">
                {item.period}
              </span>
              <h3 className="text-2xl font-bold mb-3 font-poppins">{item.degree}</h3>
              <p className="text-accent-neon text-sm mb-6 font-semibold">{item.institution}</p>
              <p className="text-white/50 text-sm font-light leading-relaxed">
                {item.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

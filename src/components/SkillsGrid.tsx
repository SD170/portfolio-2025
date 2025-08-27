'use client';

import { motion } from 'framer-motion';

interface SkillsGridProps {
  skills: string[];
  title: string;
  className?: string;
}

export default function SkillsGrid({ skills, title, className = "" }: SkillsGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <motion.h3 
        className="text-5xl md:text-6xl font-bold terminal-text mb-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {title}
      </motion.h3>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-bg-secondary to-bg-tertiary p-6 h-32 transform transition-all duration-500 hover:scale-105 hover:rotate-1">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Border Glow */}
              <div className="absolute inset-0 rounded-2xl border border-accent-green/20 group-hover:border-accent-green/50 transition-all duration-500" />
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                <div className="w-8 h-8 mb-3 rounded-full bg-accent-green/20 flex items-center justify-center group-hover:bg-accent-green/30 transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-accent-green group-hover:scale-150 transition-transform duration-300" />
                </div>
                <span className="text-text-primary font-medium text-sm leading-tight group-hover:text-accent-green transition-colors duration-300">
                  {skill}
                </span>
              </div>
              
              {/* Hover Effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-accent-green/0 group-hover:border-t-accent-green/30 transition-all duration-500" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

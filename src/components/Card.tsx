import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <motion.div
      className={`
        backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6
        ${hover ? 'hover:bg-white/10 hover:border-white/20 transition-all duration-300' : ''}
        ${className}
      `}
      whileHover={hover ? { y: -4, scale: 1.02 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

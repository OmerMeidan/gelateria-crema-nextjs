'use client';

import { motion } from 'framer-motion';

interface FlavorCardProps {
  title: string;
  description: string;
  delay: number;
}

export default function FlavorCard({ title, description, delay }: FlavorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: delay * 0.1, ease: "easeOut" }}
      whileHover={{ y: -10 }}
      className="text-center py-[3rem] px-[1.5rem] border border-[#EAE4DD] bg-transparent hover:border-accent hover:bg-white hover:shadow-[0_15px_35px_rgba(0,0,0,0.05)] transition-colors duration-400 cursor-pointer"
    >
      <h3 className="font-serif text-[1.6rem] mb-[15px] text-text">{title}</h3>
      <p className="text-[0.95rem] font-light text-[#6D665E]">{description}</p>
    </motion.div>
  );
}
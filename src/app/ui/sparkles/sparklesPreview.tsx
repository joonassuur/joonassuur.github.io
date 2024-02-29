'use client';
import React from 'react';
import { motion } from 'framer-motion';

import { LampContainer } from './sparkles';
import { IconChevronDown } from '@tabler/icons-react';

export function SparklesPreview() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-gray-900 relative">
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
            {`Hi, I'm Joonas`}
          </h1>
          <h2 className="p-4 md:text-2xl text-1xl lg:text-4xl text-center text-gray-500 relative z-20">
            {`I'm a full-stack developer with a passion for frontend`}
          </h2>
        </motion.div>
      </LampContainer>
      <a
        href="#portfolio-section"
        className="absolute bottom-0 text-white cursor-pointer no-underline"
      >
        <IconChevronDown size={52} stroke={1} />
      </a>
    </div>
  );
}

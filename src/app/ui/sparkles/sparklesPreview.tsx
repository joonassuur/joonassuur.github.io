'use client';
import React from 'react';
import { SparklesCore } from './sparkles';
import { IconChevronDown } from '@tabler/icons-react';

export function SparklesPreview() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-gray-900 relative">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        {`Hi, I'm Joonas`}
      </h1>
      <h2 className="p-4 md:text-2xl text-1xl lg:text-4xl text-center text-gray-500 relative z-20">
        {`I'm a full-stack developer with a passion for frontend`}
      </h2>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={400}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-gray-900 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <a
        href="#portfolio-section"
        className="absolute bottom-0 text-white cursor-pointer no-underline"
      >
        <IconChevronDown size={52} stroke={1} />
      </a>
    </div>
  );
}
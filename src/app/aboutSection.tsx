'use client';
import React from 'react';

function aboutSection() {
  return (
    <div
      id="about-section"
      className="min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-900 relative text-white"
    >
      <p className="w-9/12 md:text-2xl text-1xl lg:text-4xl text-left text-gray-500">
        I am a dedicated software developer with 7 years of industry experience.
        I am passionate about crafting clean, efficient code and delivering
        seamless user experiences. <br />
        <br />
        Seeking opportunities to leverage expertise in React, Next.js, Vue,
        Node.js and Angular, but I am also open to work with other languages
        (for example Kotlin and Java). In my free time, I work on several
        personal coding projects, since I see software development more as a
        hobby, rather than a job.
      </p>
    </div>
  );
}

export default aboutSection;

'use client';
import React from 'react';
import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';
import { PortfolioCards } from './ui/cards/portfolio-cards';

function portfolio() {
  return (
    <div id="portfolio-section" className="bg-gray-800">
      <h2 className="px-8 md:text-3xl text-2xl lg:text-5xl text-center xl:mb-0 pt-20 mb-10 text-gray-500">
        Portfolio of some of my projects
      </h2>
      <div className="min-h-screen max-w-8xl mx-auto px-8 flex items-center ">
        <PortfolioCards />
      </div>
      <div className="text-gray-500 pt-4 pb-4 px-8 bg-gray-700">
        <div className="flex">
          <a
            href="https://www.linkedin.com/in/joonas-suurvali/"
            target="_blank"
            className="mr-2"
          >
            <IconBrandLinkedin size={32} />
          </a>
          <a href="https://github.com/joonassuur" target="_blank">
            <IconBrandGithub size={32} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default portfolio;

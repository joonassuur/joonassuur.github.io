import { HoverEffect } from './card-hover-effect';

export function PortfolioCards() {
  return <HoverEffect items={projects} />;
}
export const projects = [
  {
    title: 'Mobifer',
    description: `Project done for one of our client while working for Concise Systems. 
      
      Mobifer is a fully automated bus ordering marketplace and logistics system consisting of several microfrontends. 
      
      I led the frontend efforts for the project, mainly using React, redux, Google maps API and several other technologies. On BE, we used Kotlin, Spring Boot, AWS, PostgreSQL.`,
    link: 'https://mobifer.com',
  },
  {
    title: 'My Cadastre',
    description: `Done for Estonian land registry while working for Concise Systems.

      The e-services of the Cadastre enable citizens to interact with the state in order to adjust the boundaries of a land plot and associated rights. 
      
      Among other things, the site allows Estonian landowners to access their land data, make changes to the land, by drawind new borders directly to the map.
      
      The project uses React, Redux, OpenLayers on the frontend and Java, Node.js, PostgreSQL & PostGIS on the backend.`,
    link: 'https://minu.kataster.ee/',
  },
  {
    title: 'Animal Spotter',
    description: `Done for Estonian Land Board while working for Solita OÜ.
      
      The project used machine learning algorithm for detecting and labeling animals on uploaded images.

      Using Vue.js and vanilla Javascript, I developed functionality for drawing, moving, deleting, and labeling rectangles on the images. This was also integrated with a REST API, so it would receive and send data back to the server.

      The project itself is private, so I can not provide a link to it.`,
    link: '#portfolio-section',
  },
  {
    title: 'Availability Timeline',
    description: `A mock uptime-monitor that generates 1440 minutes for every last 24 hour (with each bar representing a 20 minute chunk of time) and then randomly assigns a status (available, unavailable or partially available) to every minute. More details appear when hovering over a bar. Refreshing the page would regenerate the data.

    Done with React & Typescript`,
    link: 'https://joonassuur.github.io/availability-timeline/',
  },
  {
    title: 'Space Invaders',
    description:
      'A space invaders game. One of my first Javascript projects, done back in 2018',
    link: 'https://joonassuur.github.io/SpaceInvaders/',
  },
];

import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: 'Project One',
    image: 'path-to-image.jpg',
    deployedLink: 'http://deployed-app.com',
    githubLink: 'http://github.com/repo'
  },
 
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
};

export default Portfolio;

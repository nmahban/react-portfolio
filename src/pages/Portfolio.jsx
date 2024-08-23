import React from 'react';
import Project from '../components/Project';
import "../css/portfolio.css";

const projects = [
  {
    title: 'Weather App',
    image: 'src/images/project.png',
    deployedLink: 'https://nmahban.github.io/weatherapp/',
    githubLink: 'https://github.com/nmahban/weatherapp'
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

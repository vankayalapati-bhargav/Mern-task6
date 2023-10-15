import React from 'react';
import Project from './project';

const Portfolio = () => {
  const projects = [
    {
      title: 'project-1',
      description: 'footstep power generation system using piezo sensors',
      image: 'project1.jpg'
    },
    {
      title: 'Project 2',
      description: 'paddy crop disease detection using mobilenet',
      image: 'project2.jpg'
    },
    {
      title: 'Project 3',
      description: 'smart roads using piezo power',
      image: 'project2.jpg'
    },
    
  ];

  return (
    <div className="projects">
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
        />
      ))}
    </div>
  );
}

export default Portfolio;

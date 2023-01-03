import React from 'react';
import { useEffect,useState } from 'react';

function ProjectCard({Project}) {

const created_at = new Date(Project.created_at);
const pushed_at = new Date(Project.pushed_at);


const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};
const formattedcreated_at = created_at.toLocaleDateString('es-ES', options);
const formattedpushed_at = pushed_at.toLocaleDateString('es-ES', options);

  return (
    <div className="project">
      <h3>{Project.name}</h3>      
        <div>
          <p>language: {Project.language}</p>
          <p>Creation date: {formattedcreated_at}</p>
          <p>Change date: {formattedpushed_at}</p> 
        </div>
          
  </div> 
  );
}

export default ProjectCard;
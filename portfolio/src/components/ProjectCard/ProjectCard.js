import React from 'react';
import { useEffect,useState } from 'react';

function ProjectCard({Project}) {

  return (
    <div className="project">
    <h3>{Project.name}</h3>
    <p>Creation date: {Project.created_at}</p>
    <p>Change date: {Project.pushed_at}</p>            
  </div> 
  );
}

export default ProjectCard;
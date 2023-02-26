import React from 'react';
import styles from './ProjectCard.module.css';
import { useEffect,useState } from 'react';
import { Link } from "react-router-dom"

function ProjectCard({Project}) {

const created_at = new Date(Project.created_at);
const pushed_at = new Date(Project.pushed_at);

console.log(Project.created_at)

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
    <div className={styles.project}>
      <h3>{Project.name}</h3>      
        <div>
          <p>language: {Project.language}</p>
          <p>Repositorio:<Link to={Project.svn_url}>{Project.svn_url}</Link> </p>
          <p>Pagina: {Project.urlPage}</p>
          <p>Creation date: {formattedcreated_at}</p>
          <p>Change date: {formattedpushed_at}</p> 

        </div>
          
  </div> 
  );
}

export default ProjectCard;
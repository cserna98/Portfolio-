import React from 'react';
import styles from './ProjectCard.module.css';
import { useEffect,useState } from 'react';
import { Link } from "react-router-dom"
import ProjectDetail from '../ProjectDetails/ProjectDetail'


function ProjectCard({Project}) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  
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

console.log(Project.img)

const formattedcreated_at = created_at.toLocaleDateString('es-ES', options);
const formattedpushed_at = pushed_at.toLocaleDateString('es-ES', options);

  return (
    <div className={styles.project}>
      <h3 className={styles.name}>{Project.name}</h3>  
      <img className={styles.imgProject} src={process.env.PUBLIC_URL + Project.img} alt='Not yet'/> 
  
      <div className={styles.info}>
        <p>Language: {Project.language}</p>
        <p>Link Page: <a href={Project.urlPage} target="_blank" rel="noopener noreferrer">{Project.name}</a></p>
        <p>Description : {`${Project.description.substring(0,70)} ...`} </p> 
        <button onClick={handleOpen}>...View More</button>
      </div>

    <ProjectDetail Project={Project}
    open={open}
    handleOpen={handleOpen}
    setOpen={setOpen}
    formattedcreated_at={formattedcreated_at}
    formattedpushed_at= {formattedpushed_at}
    />        
  </div> 
  );
}

export default ProjectCard;
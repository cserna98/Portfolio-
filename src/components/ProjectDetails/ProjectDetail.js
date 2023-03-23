
import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Link } from "react-router-dom"
import styles from './Projectdetail.module.css';


const ProjectDetails = ({Project, handleOpen, setOpen,open,formattedcreated_at,formattedpushed_at}) => {
    
    const handleClose = () => setOpen(false);

    console.log(Project.img)

    return (
  
        
        <Modal open={open} onClose={handleClose} className={styles.modalContainer} >
          <Box className={styles.modal}>
            <button className={styles.exit}>X</button>
            <h3 className={styles.name}>{Project.name}</h3>  
            <img className={styles.imgProject} src={process.env.PUBLIC_URL + Project.img} alt='No apply'/> 
            <ul className={styles.info}>
                    <li className={styles.li}>
                        <h3>language: </h3>
                        <p>{Project.language}</p>
                    </li>
                    <li className={styles.li}>
                        <h3>Repositorio: </h3>
                        <p><a href={Project.svn_url}>{Project.svn_url}</a></p>
                    </li>
                    <li className={styles.li}>
                        <h3>Page: </h3>
                        <p>{Project.urlPage}</p>
                    </li>
                    <li className={styles.li}>
                        <h3>Creation date: </h3>
                        <p>{formattedcreated_at}</p>
                    </li>
                    <li className={styles.li}> 
                        <h3>Change date :</h3>
                        <p>{formattedpushed_at}</p>
                    </li>
            </ul>
              <div className={styles.description}>
                  <h3>Description: </h3>
                  <p>{Project.description}</p>
              </div>
            </Box>
        </Modal>
        
     
        )

}

export default ProjectDetails;
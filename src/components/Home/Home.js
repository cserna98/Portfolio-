import {React, useState,useEffect } from 'react';
import profilePicture from '../../assets/images/profile.jpg'
import { Link } from 'react-scroll';
import About from '../aboutMe/About';
import paragraphs from '../../assets/text/paragraphs.json'
import { GlobalContext } from '../utils/global.contex';
import styles from './Home.module.css';



function Home() {
  
  const {language} = GlobalContext()
  const [homecontent,setHomecontent] = useState(paragraphs[language].home)

  useEffect(()=>{   
    console.log(language)
    setHomecontent(paragraphs[language].home)
    console.log(paragraphs[language].home)
    }    
  ,[language])




    return (
      <div className={styles.description}>
        <h1 className={styles.title}>{homecontent.title}</h1>
        <p className={styles.descriptionText}>{homecontent.paragraph}</p>        
        <div className={styles.profilePicture}>
          <img src={profilePicture}  ></img>
        </div>   
      </div>      
    );
  }

  export default Home;
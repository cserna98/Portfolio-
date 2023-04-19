import {React,useState, useEffect} from 'react';
import { GlobalContext } from '../utils/global.contex';
import Habilities from '../habilities/Habilities';
import paragraphs from '../../assets/text/paragraphs.json'
import styles from './About.module.css';



function About() {
    
    const {language} = GlobalContext()    
    const pdfPath = (language === 'es') ?
    require('../../assets/Documents/CV-Cristian Serna(Es).pdf') :
    require('../../assets/Documents/Cristian Serna López(EN).pdf'); 

    const [aboutcontent,setaboutcontent] = useState(paragraphs[language].About)
    
    useEffect(()=>{ 
      console.log(language)      
      setaboutcontent(paragraphs[language].About)      
      }    
    ,[language])

    return (     
    <main id={styles.about}>


      <div className={styles.info}>


        <div className={styles.curriculum}>
          <h2 className={styles.title}>{language == 'es' ?("Curriculo"):("Curriculum")}</h2>
          <a href={pdfPath} download>
            <button className={styles.btn}>{language == 'es' ?("Descargar Curriculo"):(" Download Curriculum")}</button>
          </a>
          <a href={pdfPath} target="_blank" rel="noopener noreferrer">
          </a>
          <button className={styles.btn} onClick={() => window.open(pdfPath, '_blank') }>{language == 'es' ?("ver Curriculo"):("View Curriculum")}</button>
        </div>


        <div className={styles.description}>          
          <h1 className={styles.title}>{aboutcontent.title}</h1>        
          <p className={styles.descriptionText}>
          {aboutcontent.paragraph}
          </p>         
        </div>
      
      </div>

      <Habilities></Habilities>
      
    </main>
    );
  }

  export default About;
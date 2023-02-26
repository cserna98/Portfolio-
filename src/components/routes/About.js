import {React,useState, useEffect} from 'react';
import { GlobalContext } from '../utils/global.contex';
import Habilities from '../habilities/Habilities';
import { Document, Page, View } from '@react-pdf/renderer';
import paragraphs from '../../assets/text/paragraphs.json'
import styles from './About.module.css';



function About() {
    
    const {language} = GlobalContext()    
    const pdfPath = (language === 'es') ?
    require('../../assets/Documents/Cristian Serna López(es).pdf') :
    require('../../assets/Documents/Resume Cristian Serna López(EN).pdf'); 

    const [aboutcontent,setaboutcontent] = useState(paragraphs[language].About)
    
    useEffect(()=>{ 
      console.log(language)      
      setaboutcontent(paragraphs[language].About)      
      }    
    ,[language])

    return (     
    <main id={styles.about}>


      <div className={styles.info}>

        <div className={styles.description}>          
          <h1 className={styles.title}>{aboutcontent.title}</h1>        
          <p className={styles.descriptionText}>
          {aboutcontent.paragraph}
          </p>         
        </div>

        <div className={styles.curriculum}>
          <h2 className={styles.title}>{language == 'es' ?("Curriculo"):("Curriculum")}</h2>                   
          <object id={styles.pdf}
            onClick={() => window.open(pdfPath, '_blank') }            
            data={pdfPath}>
          </object>
          <button onClick={() => window.open(pdfPath, '_blank') }>..View</button>
        </div>
      
      </div>

      <Habilities></Habilities>
      
    </main>
    );
  }

  export default About;
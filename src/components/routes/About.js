import {React,useState, useEffect} from 'react';
import { GlobalContext } from '../utils/global.contex';
import Habilities from '../habilities/Habilities';
import { Document, Page, View } from '@react-pdf/renderer';
import paragraphs from '../../assets/text/paragraphs.json'



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
    <main id="about">
      <div className="Disp_flex">
        <div className="description">
          
          <h1 className="title">{aboutcontent.title}</h1>        
          <p className="descriptionText">
          {aboutcontent.paragraph}
          </p>         
        </div>

        <div className='curriculum Disp_flex colum'>
          <h2 className="title">{language == 'es' ?("Curriculo"):("Curriculum")}</h2>                   
          <object id='pdf'
            onClick={() => window.open(pdfPath, '_blank') }            
            data={pdfPath}>
          </object>
          <button onClick={() => window.open(pdfPath, '_blank') }>..View</button>
        </div>

                
      </div>

      <div className="Habilities Disp_flex">        
        <Habilities></Habilities>
        <div className='container_cards Disp_flex'>
        
        </div>
      </div>
    </main>
    );
  }

  export default About;
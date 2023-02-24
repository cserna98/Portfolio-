import {React, useState,useEffect } from 'react';
import profilePicture from '../../assets/images/profile.jpg'
import About from './About';
import paragraphs from '../../assets/text/paragraphs.json'
import { text } from '@fortawesome/fontawesome-svg-core';
import { GlobalContext } from '../utils/global.contex';


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
      <>
      <main className='Disp_flex' id='home'>
        <div className="description Disp_flex">
        <h1 className="title">{homecontent.title}</h1>
        <p className="descriptionText">{homecontent.paragraph}</p>        
      </div>
      <div className="profilePicture">
        <img src={profilePicture} ></img>
          
      </div>      
      </main>      
      </>
      
      
    );
  }

  export default Home;